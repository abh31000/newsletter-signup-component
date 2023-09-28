export default function NewsletterSignup() {
    return(
        <div className="min-[855px]:flex grid  h-full  min-[855px]:h-fit min-[855px]:w-fit w-full mx-auto bg-white min-[855px]:rounded-3xl rounded-none min-[855px]:drop-shadow-2xl">
            <img className="mb-9 mx-auto w-full min-[855px]:hidden min-[433px]:h-80 max-[432px]:" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1695918565/illustration-sign-up-mobile_yc0mpy.svg"/>
            <div className="grid grid-cols-1  pb-10 min-[855px]:pb-0 min-[433px]:px-0 max-[432px]:px-4 content-center w-96 gap-12 min-[855px]:mx-10 mx-auto font-[Roboto] text-[#242742] ">
                <div className="space-y-5">
                <h1 className="font-bold max-[432px]:text-5xl min-[433px]:text-6xl">Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className="space-y-1.5">
                    <li className="flex space-x-2">
                        <img src="https://res.cloudinary.com/dbiudcrba/image/upload/v1695918565/icon-list_trxwbf.svg" alt="" />
                        <p>Product discovery and building what matters</p>
                    </li>
                    <li className="flex space-x-2">
                        <img src="https://res.cloudinary.com/dbiudcrba/image/upload/v1695918565/icon-list_trxwbf.svg" alt="" />
                        <p>Measuring to ensure updates are a success</p>
                    </li>
                    <li className="flex space-x-2">
                        <img src="https://res.cloudinary.com/dbiudcrba/image/upload/v1695918565/icon-list_trxwbf.svg" alt="" />
                        <p>And much more!</p>
                    </li>
                </ul>
                </div>
                <div className="space-y-5">
                    <div className="grid space-y-1">
                        <label className="text-sm font-bold" htmlFor="email">Email address</label>
                        <input className="py-3 px-5 peer border-2 rounded-md focus:border-[#242742] transition-colors duration-200 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-100" type="email" name="email" placeholder="email@company.com" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                        <label className="hidden text-sm font-bold transition-all duration-200 absolute ml-64 bottom-[180px]  text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Valid email required</label>
                    </div>
                    <button className="font-bold text-white bg-[#242742] w-full py-3 rounded-md">Subscribe to monthly newsletter</button>
                </div>
            </div>
            <img className="m-5 h-[500px] max-[854px]:hidden" src="https://res.cloudinary.com/dbiudcrba/image/upload/v1695918565/illustration-sign-up-desktop_nah81w.svg"/>

        </div>
    )
}