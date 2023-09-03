import { useState } from "react"
import { Button } from "../../components/Button/button"
import Input from "../../components/Input"


export const Form = ({
    isSignInPage = ''
}) => {
    const [data, setData] = useState({
        ...(isSignInPage && { fullname: '' }),
        email: '',
        password: ''
    })

    console.log(data, ">>>>");
    return (
        <div className="bg-white w-[400px] h-[500px] shadow-lg border rounded-lg flex flex-col justify-center items-center">
            <div className="text-4xl font-extrabold text-black">Welcome {isSignInPage && 'Back'}</div>
            <div className="text-xl font-light text-black mb-6">{isSignInPage ? 'Sign in to get explored' : 'Sign up now to get started'}</div>
            <form onSubmit={() => console.log("HEllo")}>
                {
                    isSignInPage ? '' :
                        <Input placeholder="Enter Your Full Name" label="Full Name" type="text" className="mb-6" value={data.fullname} onChange={(e) => { setData({ ...data, fullname: e.target.value }) }} />
                }
                <Input placeholder="Enter Your Email Address" label="Email" type="email" className="mb-6" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                <Input placeholder="Enter Your Password" label="Password" type="password" value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                <Button name={isSignInPage ? 'Sign In' : 'Sign Up'} classname="rounded-md py-2 mt-6 w-1/2" type='submit' />
            </form>
            <div className="mt-2">{isSignInPage ? "Did'nt have an account ? " : "Already have an account ? "}<span className="text-primary underline"><button>{isSignInPage ? ' Sign up' : ' Sign in'}</button></span></div>
        </div>
    )
}