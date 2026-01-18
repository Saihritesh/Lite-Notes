import { sign } from "crypto"

export default function SignUpPage() { 
    return (
        
        <div className ="items-center justify-center h-screen">
            <div className ="flex flex-col gap-5 max-w-md mx-auto mt-10 justify-center h-screen">
                   <label >Enter your email</label>
                    <input type="email" placeholder = "Enter your email"/> 
                    <label>Enter a valid Username</label>
                    <input type="text" placeholder = "Enter a valid Username"/>
                    <label>Enter a Password</label>
                    <input type="password" placeholder="..."/>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="..."/>
                    <input className = "bg-blue-500 text-white" type="submit" value="SignUp"/>
            </div>
        </div>
    )
}
