import React from "react";
import { Link } from "react-router-dom";
import LoginSlider from "../../components/sliders/LoginSlider";

export default function Login() {
  return (
    <div className="flex-col container m-auto flex items-center  bg-whiteWithPrimaryBgGradientHr md:bg-whiteWithPrimaryBgGradient md:flex-row md:h-[80vh]">
      <div className="w-[100%] flex justify-center items-center pb-4 md:w-[50%] ">
        <div className="px-4  mb-4 md:w-3/4 lg:2/4 ">
          <div className="flex items-center justify-center pb-5 md:pb-10">
            {/* <div className="w-11">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4964/4964370.png"
                alt="App-Logo"
                className="w-full h-full"
              />
            </div> */}
            <h4 className="pl-1 text-xl text-center font-extrabold text-black md:text-3xl">
              •⊹٭𝚀𝚞𝚒𝚌𝚔𝚍𝚒𝚗𝚎٭⊹•
            </h4>
          </div>

          <h3 className="text-2xl font-semibold mb-2 text-Primary">
            Welcome to Quickdine 🚀
          </h3>
          <p className="text-sm pb-4 text-Primary">
            Delicious Delights Await! Log In & Dive In.
          </p>
          <form action="">
            <label htmlFor="email" className="text-sm text-Primary">
              Email
            </label>
            <input
              className="px-3 py-2 mt-2 mb-2 text-sm w-full border border-1 border-Secondary rounded-md focus:outline-Primary text-Primary"
              type="text"
              placeholder="email"
              autoComplete="username"
            />
            <br />
            <label htmlFor="password" className="text-sm text-Primary">
              Password
            </label>
            <input
              className="px-3 py-2 mt-2 mb-2 text-sm w-full text-Primary border border-1 border-Secondary rounded-md focus:outline-Primary"
              type="password"
              placeholder="password"
              autoComplete="current-password"
            />
            <div className="flex justify-between items-center mb-4">
              <div className="flex justify-start items-center">
                <input className="mr-1 accent-Primary " type="checkbox" />
                <label className="text-sm text-Primary" htmlFor="Remember me">
                  Remember me
                </label>
              </div>

              <div>
                <Link className="text-sm text-Primary" to={"/dashboard"}>
                  Forgot passoword?
                </Link>
                {/* <a href="/" className="text-sm text-Primary">
                  Forgot passoword?
                </a> */}
              </div>
            </div>

            <Link to={"/dashboard"}>
              {" "}
              <button className="bg-Primary font-medium text-sm text-Light rounded-md uppercase w-20 h-9 mr-3 w-full transition duration-700 ease-in-out hover:bg-Primary">
                Sign In
              </button>
            </Link>
          </form>

          {/* <button className="black-button font-medium transition duration-700 ease-in-out uppercase w-20 h-9 mr-3">
            sign up
          </button> */}
          <p className="text-center pt-2  text-sm text-Primary md:pt-6">
            Not a member?{" "}
            <Link
              to={"/auth/signup"}
              className="text-Primary pl-1 font-semibold cursor-pointer text-sm"
            >
              Signup now
            </Link>
          </p>
        </div>
      </div>
      <div className="w-[100%] pt-5 flex justify-center items-center md:w-[50%] md:pt-0">
        <LoginSlider />
      </div>
    </div>
  );
}

// style={{ background: "linear-gradient(90deg, #fff 50%, #454859 50%)" }}
