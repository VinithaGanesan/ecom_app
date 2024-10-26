import React from 'react'

export default function Policy() {
    return (
        <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
            <h1 className='text-2xl font-bold mb-4'>Privacy Policy</h1>
            <article className='mb-4'>
                <h1 className='font-semibold mb-2 text-xl'>WHAT PERSONAL INFORMATION WE COLLECT</h1>
                <p className='indent-8'>
                    <p>
                        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                    </p>
                    <p>
                        Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically collected information as Device Information.
                    </p>
                    <p className='font-semibold'>
                        We collect Device Information using the following technologies:
                    </p>
                    <ul className='list-disc list-inside'>
                        <li>
                            Cookies are data files that are placed on your device or computer and often include an anonymous unique identifier.
                        </li>
                        <li>
                            Log files track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                        </li>
                    </ul>
                </p>


            </article>
            <article className='mb-4'>
                <h1 className='font-semibold mb-2 text-xl'>HOW DO WE USE YOUR PERSONAL INFORMATION</h1>
                <p className='indent-8'>
                    <p>
                        We use the Order Information that we collect generally to fulfil any orders placed through the Site including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations                    </p>
                    <p className='font-semibold'>
                        Additionally, we use this Order Information to:
                    </p>
                    <ul className='list-disc list-inside'>
                        <li>
                            Communicate with you.
                        </li>
                        <li>
                            Screen our orders for potential risk or fraud.
                        </li>
                        <li>
                            When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
                        </li>
                    </ul>
                </p>
            </article>
        </div>
    )
}
