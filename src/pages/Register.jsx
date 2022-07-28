import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/form/Input";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import FormLayout from "../layouts/FormLayout";

const Register = () => {
  const handleSignIn = (provider) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(`Error: ${err.code}`);
      });
  };
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    },
  });
  const handleNewUser = (values) => {
    console.log(values);
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormLayout>
      <form
        onSubmit={handleSubmit(handleNewUser)}
        className="form-wrapper mx-auto w-full max-w-[500px]"
        autoComplete="off"
      >
        <div className="text-5xl font-semibold text-center text-primary dark:text-white sm:text-3xl">
          Create new account
        </div>
        <div className="my-6 text-center sm:my-4">
          <span className="text-sm text-slate-500">Already a member?</span>
          <Link to={"/login"} className="ml-1 text-secondary">
            Log in
          </Link>
        </div>
        <div
          className="flex items-center justify-center gap-2 px-4 py-3 border rounded-lg cursor-pointer select-none border-secondary text-primary dark:text-white"
          onClick={() => handleSignIn(new GoogleAuthProvider())}
        >
          <img srcSet="/Google.png 2x" alt="icon" />
          <span className="font-medium">Register with Google</span>
        </div>
        <div className="mt-4 mb-8 text-sm text-center text-slate-500">
          Or register with email
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex justify-between gap-2">
            <Input
              type="text"
              label="First name"
              name="firstName"
              id="firstName"
              control={control}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </Input>
            <Input
              type="text"
              label="Last name"
              name="lastName"
              id="lastName"
              control={control}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
            </Input>
          </div>
          <Input
            type="text"
            label="Username"
            name="username"
            id="username"
            control={control}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </Input>
          <Input
            type="text"
            label="Email"
            name="email"
            id="email"
            control={control}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </Input>
          <Input
            type={showPassword ? "text" : "password"}
            label="Password"
            name="password"
            id="password"
            control={control}
          >
            {showPassword ? (
              <svg
                onClick={() => setShowPassword(false)}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setShowPassword(true)}
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            )}
          </Input>
        </div>

        <Button
          className="relative left-1/2 w-[200px] -translate-x-1/2 select-none bg-secondary text-lg font-semibold"
          type="submit"
        >
          Create account
        </Button>
      </form>
    </FormLayout>
  );
};

export default Register;
