import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { login, signup } from "../../api"
import toast from 'react-hot-toast';

export const fetchSignUpUser = createAsyncThunk(
    'fetchSignUpUser',
    async (form, { rejectWithValue }) => {
        try {
            const response = await signup(form)
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data)
        }
    }
)

export const fetchLoginUser = createAsyncThunk(
    'fetchLoginUser',
    async (form, {rejectWithValue}) => {
        try {
            const response = await login(form)
            return response.data;
        } catch (error) {
            if (!error.message) {
                throw error;
            }
            return rejectWithValue(error.response.data)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        isLoading: false,
        data: null,
        token: null,
        error: false,
    },
    reducers: {
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        logout: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSignUpUser.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchSignUpUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            if (action.payload.succes) {    
                toast.success(action.payload.message || 'Account created Successful')
            } else {
                toast.error(action.payload.message)
            }

        });
        builder.addCase(fetchSignUpUser.rejected, (state, action) => {
            state.error = action.error.message;
            toast.error(`Signup failed:${action.error.message}`)
        })
        builder.addCase(fetchLoginUser.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
            window.localStorage.setItem('token', action.payload.token);
            state.isLoading = false;
            state.data = action.payload;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            console.log(action.payload);
            if (action.payload.success) {
                toast.success(action.payload.message || 'Login Successful')            
            } else {
                toast.error(action.payload.message)
            }

        })
        builder.addCase(fetchLoginUser.rejected, (state, action) => {
            state.error = action.error.message;
            toast.error(`Login failed:${action.error.message}`)
        })
    }
})

export const { logout, setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;