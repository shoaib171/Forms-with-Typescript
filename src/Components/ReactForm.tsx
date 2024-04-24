import React, { useState } from "react";
import { useForm } from "react-hook-form";
interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  subscription: string;
}

const ReactForm: React.FC = () => {
  const [FormData, setFormData] = useState<FormData>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const password = watch("password");

  const onSubmit = (data: FormData) => {
    console.log(data, "FormsData");
    setFormData(data);
    reset();
  };
  const genderOptions = [
    { label: "Select Gender", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  

  return (
    <>
   
     

      <div className="bg-slate-100 w-[40%] m-auto rounded-md shadow  mt-10 py-2">
        <h1 className="text-2xl text-center">React Hook Forms</h1>
        <form className="w-[70%] m-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "User is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
            {<p className="text-red-700 mt-1"> {errors.username?.message}</p>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email Is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This is not a valid email",
                },
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email"
            />
            {<p className="text-red-700 mt-1"> {errors.email?.message}</p>}
          </div>
          
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-bold mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              {...register("gender", { required: "Gender is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {/* Map over options array to create option elements */}
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            

            {<p className="text-red-700 mt-1">{errors.gender?.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Subscription
            </label>
            <div>
              <input
                type="radio"
                id="free"
                value="free"
                {...register("subscription")}
                className="mr-2 accent-red-700 "
              />
              <label htmlFor="free" className="mr-4">
                Free
              </label>
              <input
                type="radio"
                id="premium"
                value="premium"
                {...register("subscription")}
                className="mr-2 accent-red-700 "
              />
              <label htmlFor="premium">Premium</label>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="Password"
              className="block text-gray-700 font-bold mb-2"
            >
              Passowrd
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Password"
            />
            {<p className="text-red-700 mt-1"> {errors.password?.message}</p>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Confirm_Password"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm_Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password,
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your confirm_Password"
            />

            {errors.confirmPassword &&
              errors.confirmPassword.type === "required" && (
                <span className="text-red-500">
                  Confirm Password is required
                </span>
              )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === "validate" && (
                <span className="text-red-500">Passwords do not match</span>
              )}
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReactForm;
