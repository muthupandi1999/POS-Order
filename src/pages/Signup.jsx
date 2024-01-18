import React from "react";
import { Link } from "react-router-dom";
import LoginSlider from "../components/sliders/LoginSlider";

function Signup() {
  return (
    <div
      className="container m-auto flex  items-center my-20 h-[80vh]"
      style={{ background: "linear-gradient(90deg, #fff 50%, #454859 50%)" }}
    >
      <div className="w-2/4 flex justify-center items-center">
        <div className="w-1/2">
          <div className="flex items-center justify-center pb-10">
            {/* <div className="w-11">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4964/4964370.png"
                alt="App-Logo"
                className="w-full h-full"
              />
            </div> */}
            <h4 className="pl-1 text-3xl text-center font-extrabold text-black text-Primary">
              •⊹٭𝚀𝚞𝚒𝚌𝚔𝚍𝚒𝚗𝚎٭⊹•
            </h4>
          </div>

          {/* <h3 className="text-2xl font-semibold mb-6 text-black">
            🚀Let's get started
          </h3>
          <p className="text-sm pb-4">
            Delicious Delights Await! Log In & Dive In.
          </p> */}
          <form action="">
            <label htmlFor="name" className="text-sm text-Primary">
              Name
            </label>
            <input
              className="text-Primary px-3 py-2 mt-2 mb-2 text-sm w-full border border-1 border-Secondary rounded-md focus:outline-none"
              type="text"
              placeholder="name"
              autoComplete="username"
            />
            <br />
            <label htmlFor="email" className="text-sm text-Primary">
              Email
            </label>
            <input
              className="text-Primary px-3 py-2 mt-2 text-sm mb-2 w-full border border-1 border-Secondary rounded-md focus:outline-none"
              type="text"
              placeholder="email"
              autoComplete="useremail"
            />
            <br />
            <label htmlFor="password" className="text-sm text-Primary">
              Password
            </label>
            <input
              className="text-Primary px-3 py-2 text-sm mt-2 mb-2 w-full border border-1 border-Secondary rounded-md focus:outline-none "
              type="password"
              placeholder="password"
              autoComplete="new-password"
            />
            <br />
            <label htmlFor="cpassword" className="text-sm text-Primary">
              Password
            </label>
            <input
              className="text-Primary px-3 py-2 text-sm mt-2 mb-6 w-full border border-1 border-Secondary rounded-md focus:outline-none "
              type="password"
              placeholder="confirm password"
              autoComplete="new-password"
            />
            {/* <div className="flex justify-between items-center mb-4">
            <div className="flex justify-start items-center">
              <input className="mr-1 accent-[#000] " type="checkbox" />
              <label className="text-sm" htmlFor="Remember me">
                Remember me
              </label>
            </div>

            <div>
              <a href="/" className="text-sm">
                Forget passoword?
              </a>
            </div>
          </div> */}

            <Link to={"/auth/login"}>
              {" "}
              <button className="bg-Primary black-button text-sm font-medium rounded-md uppercase w-20  h-9 mr-3 w-full transition duration-700 ease-in-out hover:bg-Primary">
                Sign Up
              </button>
            </Link>
          </form>

          {/* <button className="black-button font-medium transition duration-700 ease-in-out uppercase w-20 h-9 mr-3">
            sign up
          </button> */}
          <p className="text-center pt-6 text-sm text-Primary">
            Already a member?{" "}
            <Link
              to={"/auth/login"}
              className="text-[black] pl-1 text-sm font-semibold cursor-pointer text-Primary"
            >
              Login now
            </Link>
          </p>
        </div>
      </div>
      <div className="w-2/4 flex justify-center items-center">
        {/* <div className="w-2/4">
          <img
            className="w-full h-full"
            src="https://khadyo.softtechdemo.com/assets/img/sign-in.png"
            alt="signIn"
          />
        </div> */}
        <LoginSlider />
      </div>
    </div>
  );
}

export default Signup;
