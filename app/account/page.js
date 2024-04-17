'use client'

import { FcGoogle } from "react-icons/fc";

export default function Account() {
  const signUpForm = () => {
    document.getElementById("signin").style.display = "none";
    document.getElementById("signup").style.display = "block";
    document.getElementById("switchToSignIn").style.display = "block";
    document.getElementById("switchToSignUp").style.display = "none";
  }
  
  const signInForm = () => {
    document.getElementById("signin").style.display = "block";
    document.getElementById("signup").style.display = "none";
    document.getElementById("switchToSignUp").style.display = "block";
    document.getElementById("switchToSignIn").style.display = "none";
  }

  const inputStyle = "w-full bg-zinc-900 mt-5 p-1 rounded shadow-[0_0_10px_rgba(251,191,36,1)] border-2 border-amber-400";

  return (
    <div className="h-[calc(100vh-67px)] flex justify-center items-center text-center bg-gradient">
      <div id="account" className="w-fit sm:h-[475px] h-fit bg-zinc-900 flex items-center rounded-xl sm:px-16 sm:py-0 p-5 gap-9 shadow-[0_0_20px_rgba(251,191,36,1)] border-2 border-amber-400 border-2 border-amber-400">
        <div className="w-[240px] sm:scale-100 scale-90">
          { /* Sign Up Form */ }
          <form id="signup">
            <h1 className="font-bold text-2xl">SIGN UP</h1>
            <input type="email" id="signup-username" placeholder="Username" required autoComplete="email" className={inputStyle} />
            <input type="password" id="new-password" placeholder="Password" required className={inputStyle} />
            <input type="password" id="reenter-password" placeholder="Re-enter Password" required className={inputStyle} />
            <button type="submit" className="w-fit mt-5 px-4 py-1 bttn-style">SIGN UP</button>
          </form>

          { /* Sign In Form */ }
          <form id="signin" className="hidden">
            <h1 className="font-bold text-2xl">LOGIN</h1>
            <input type="email" id="signin-username" placeholder="Username" required autoComplete="email" className={inputStyle}/>
            <input type="password" id="signin-password" placeholder="Password" required className={inputStyle}/>
            <button type="submit" className="w-fit mt-5 px-4 py-1 bttn-style">SIGN IN</button>
            <p className="mt-3 underline underline-offset-2 cursor-pointer">Forgot Password?</p>
          </form>

          <div>
            <hr className="mt-7 border-t-2 border-amber-400" />
            <p className="w-fit bg-[#18181b] px-2 mx-auto mt-[-16px]">or</p>
          </div>

          { /* Google Sign In */ }
          <button className="w-full flex justify-center items-center mt-5 py-2 gap-2 bg-neutral-300 rounded hover:bg-neutral-300 shadow-[(0_0_15px_#fbbf24)] border-2 border-black outline outline-2 outline-white">
            <FcGoogle />
            <span className="text-sm text-black font-bold">Sign In with Google</span> 
          </button>

          { /* Switch to Sign In Form */ }
          <p id="switchToSignIn" className="mt-5">Already have an account?
            <span className="underline font-bold cursor-pointer ml-2" onClick={signInForm}>LOGIN</span>
          </p>

          { /* Switch to Sign Up Form */ }
          <p id="switchToSignUp" className="hidden mt-5">Don't have an account?
            <span className="underline font-bold cursor-pointer ml-2" onClick={signUpForm}>SIGN UP</span>
          </p>
        </div>
      </div>
    </div>
  );
}