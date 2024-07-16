/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { formSchema } from "./schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import toast from 'react-hot-toast';

const SignUp = () => {
  const [inpType, setInpType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });


  const onsubmit = async (data: any) => {
    // console.log(data);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/user/auth/register-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email:data.email,
          password:data.password
        }),
      });

      if (!res.ok) {
        console.log("Error registering user");
        return;
      }

      const result = await res.json();

      toast.success(result?.message)

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTogglePass = () => {
    setInpType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <AuthLayout title="Create Account">
      
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-full flex-1 flex flex-col gap-[20px] px-4"
      >
        <div className="w-full flex flex-col gap-[5px]">
          <label
            htmlFor="email"
            className="text-primary-100 text-sm md:text-base"
          >
            Email:
          </label>
          <span className="text-xs text-[gray]/60 capitalize">
            please provide a valid email address
          </span>
          <input
            id="email"
            type="email"
            autoComplete="off"
            className="outline-none px-2 w-full bg-[transparent] h-[60px] border border-[gray]/20 placeholder:text-[gray]/60"
            placeholder="johndoe@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-[red]/80">
              {errors.email.message as string}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-[5px]">
          <label
            htmlFor="password"
            className="text-primary-100 text-sm md:text-base"
          >
            Password:
          </label>
          <span className="text-xs text-[gray]/60 capitalize">
            please provide a strong password
          </span>
          <div className="w-full flex flex-row border border-[gray]/20">
            <input
              id="password"
              type={inpType}
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px]  placeholder:text-[gray]/60"
              placeholder="*****"
              {...register("password")}
            />
            <div className="h-full flex items-center justify-center px-4">
              {inpType == "password" ? (
                <FaEyeSlash onClick={handleTogglePass} />
              ) : (
                <FaEye
                  onClick={() => {
                    setInpType("password");
                  }}
                />
              )}
            </div>
          </div>
          {errors.password && (
            <p className="text-xs text-[red]/80">
              {errors.password.message as string}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col gap-[5px]">
          <label
            htmlFor="password"
            className="text-primary-100 text-sm md:text-base"
          >
            confirm password:
          </label>

          <div className="w-full flex flex-row border border-[gray]/20">
            <input
              id="confirmPassword"
              type={inpType}
              autoComplete="off"
              className="outline-none px-2 w-full bg-[transparent] h-[60px]  placeholder:text-[gray]/60"
              placeholder="*****"
              {...register("confirmPassword")}
            />
            <div className="h-full flex items-center justify-center px-4">
              {inpType == "password" ? (
                <FaEyeSlash onClick={handleTogglePass} />
              ) : (
                <FaEye
                  onClick={() => {
                    setInpType("password");
                  }}
                />
              )}
            </div>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs text-[red]/80">
              {errors.confirmPassword.message as string}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="transition-all ease-in-out w-full h-[60px] md:h-[60px] p-4 bg-secondary items-center justify-center cursor-pointer rounded-lg flex hover:bg-[#ff9500] mt-[10px]"
        >
          <span className="font-semibold capitalize">Register</span>
        </button>
        <div>
          <p className="text-sm">
            Have an account?
            <Link
              to={"/sign-in"}
              className="ml-[5px] text-[#ff9500] underline text-sm"
            >
              SignIn
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
