import React, { useState } from "react";
import { useFormik } from "formik";
import { RegistervalidationSchema } from "../../Schema";
interface FormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    subscription: string;
  }
const genderOptions = [
    { label: "Select Gender", value: "" },
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  const initialValues:FormData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    subscription: ""
  };

const Form: React.FC = () => {
    const [data,storeData]=useState<FormData>()

    const formik = useFormik({
        initialValues,
        validationSchema:RegistervalidationSchema,
        onSubmit: (values) => {
          console.log(values,"NewForkmik");
          storeData(values)
          // Handle form submission here
        },
      });
  return (
    <>
      <div className="bg-slate-100 w-[40%] m-auto rounded-md shadow  mt-10 py-2">
        <h1 className="text-2xl text-center">Formik Forms Validation</h1>
        <form className="w-[70%] m-auto" onSubmit={formik.handleSubmit}>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
          </div>
          {
            formik.errors.username && formik.touched.username?(
                <p className="text-red-700">{formik.errors.username}</p>
            ):null
          
          }

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {
            formik.errors.email && formik.touched.email?(
                <p className="text-red-700">{formik.errors.email}</p>
            ):null
          
          }
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-bold mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.gender}
            >
              {/* Map over options array to create option elements */}
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {
            formik.errors.gender && formik.touched.gender?(
                <p className="text-red-700">{formik.errors.gender}</p>
            ):null
          
          }


          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Subscription
            </label>
            <div>
              <input
                type="radio"
                id="free"
                name="subscription"
                value="free"
                className="mr-2 accent-red-700 "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.subscription === "free"}
              />
              <label htmlFor="free" className="mr-4">
                Free
              </label>
              <input
                type="radio"
                id="premium"
                name="subscription"
                value="premium"
                className="mr-2 accent-red-700 "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.subscription === "premium"}
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          {
            formik.errors.password && formik.touched.password?(
                <p className="text-red-700">{formik.errors.password}</p>
            ):null
          
          }


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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your confirm_Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>
          {
            formik.errors.confirmPassword && formik.touched.confirmPassword?(
                <p className="text-red-700">{formik.errors.confirmPassword}</p>
            ):null
          
          }


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

export default Form;
