import React, { useState } from "react";
import axios from "axios";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { logoLight } from "../assets/images";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const [loginSuccessMsg, setLoginSuccessMsg] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("email", response.email);

      setLoginSuccessMsg(`welcome ${email}`);

      navigate("/admin-dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
          <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
            <Link to="/">
              <img src={logoLight} alt="logoImg" className="w-28" />
            </Link>
            <div className="flex flex-col gap-1 -mt-1">
              <h1 className="font-titleFont text-xl font-medium">
                Log In to Get More Access
              </h1>
              <p className="text-base">When you sign in, you're Mitra!</p>
            </div>
            <div className="w-[300px] flex items-start gap-3">
              <span className="text-green-500 mt-1">
                <BsCheckCircleFill />
              </span>
              <p className="text-base text-gray-300">
                <span className="text-white font-semibold font-titleFont">
                  Get started as BITEBACK's Mitra
                </span>
                <br />
                BiteBack only work with Mitras who have gone through a strict
                selection process and have high quality standards.
              </p>
            </div>
            <div className="w-[300px] flex items-start gap-3">
              <span className="text-green-500 mt-1">
                <BsCheckCircleFill />
              </span>
              <p className="text-base text-gray-300">
                <span className="text-white font-semibold font-titleFont">
                  Access all BITEBACK's Mitra serv.
                </span>
                <br />
                The quality of food sold through Biteback is entirely the
                responsibility of our partners.
              </p>
            </div>
            <div className="w-[300px] flex items-start gap-3">
              <span className="text-green-500 mt-1">
                <BsCheckCircleFill />
              </span>
              <p className="text-base text-gray-300">
                <span className="text-white font-semibold font-titleFont">
                  Trusted by online Shoppers
                </span>
                <br />
                With the tagline
                <span className="mx-1 font-bold">
                  "Save World, Save Money, and Safe Food"
                </span>
                Biteback provides a solution to the problem of food waste.
              </p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <Link to="/">
                <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                  © BITEBACK.co
                </p>
              </Link>
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                Terms
              </p>
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                Privacy
              </p>
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                Security
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lgl:w-1/2 h-full">
          {loginSuccessMsg ? (
            <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
              <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                {loginSuccessMsg}
              </p>
            </div>
          ) : (
            <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
              <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl ">
                  LOGIN
                </h1>
                <p className="mb-4 text-gray-500">as ADMINISTRATOR</p>
                <div className="flex flex-col gap-3">
                  {/* Email */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Work Email
                    </p>
                    <input
                      onChange={handleEmail}
                      value={email}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="email"
                      placeholder="john@workemail.com"
                    />
                    {errEmail && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errEmail}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Password
                    </p>
                    <input
                      onChange={handlePassword}
                      value={password}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="password"
                      placeholder="Create password"
                    />
                    {errPassword && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errPassword}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                  >
                    Log In
                  </button>
                  {/* <p className="text-sm text-center font-titleFont font-medium">
                    Don't have an Account?
                    <Link to="/admin-register">
                      <span className="hover:text-blue-600 duration-300">
                        Register
                      </span>
                    </Link>
                  </p> */}
                  <p className="text-sm text-center font-titleFont font-medium">
                    Sign In As
                    <Link to="/signin">
                      <span className="ml-1 hover:text-blue-600 duration-300">
                        User
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
