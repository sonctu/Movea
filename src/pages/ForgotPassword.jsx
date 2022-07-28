import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import Input from "../components/form/Input";
import FormLayout from "../layouts/FormLayout";

const ForgotPassword = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {},
  });
  return (
    <FormLayout>
      <form
        onSubmit={handleSubmit()}
        className="form-wrapper"
        autoComplete="off"
      >
        <div className="text-5xl font-semibold text-center text-primary dark:text-white">
          Forgot password
        </div>
        <div className="my-6 text-center">
          <span className="text-sm text-slate-500">Back to page</span>
          <Link to={"/login"} className="ml-1 text-secondary">
            Sign in
          </Link>
        </div>
        <div className="flex flex-col gap-4 mb-8">
          <Input
            className="py-2"
            type="text"
            name="email"
            id="email"
            placeholder="Please enter the password you forgot"
            control={control}
          ></Input>
          <Input
            className="py-2"
            type={"password"}
            name="password"
            id="password"
            placeholder="A new password"
            control={control}
          ></Input>
          <Input
            className="py-2"
            type={"password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            control={control}
          ></Input>
        </div>
        <Button
          className="relative left-1/2 w-[200px] -translate-x-1/2 select-none bg-secondary text-lg font-semibold"
          type="submit"
        >
          Change
        </Button>
      </form>
    </FormLayout>
  );
};

export default ForgotPassword;
