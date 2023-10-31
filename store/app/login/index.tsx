"use client";

import React, { useState } from "react";
import * as yup from "yup";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const { email, password } = inputs;

  const { emailError, passwordError } = errors;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .matches(
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
        {
          message: "이메일 형식에 맞게 입력해주세요.",
          excludeEmptyString: true,
        }
      ),
    password: yup
      .string()
      .min(8, "비밀번호는 최소 8자리입니다!")
      .max(16, "비밀번호는 최대 16자리입니다!")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}[^\s]*$/,
        "비밀번호는 알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함한 8자리 이상 입력해주세요"
      )
      .required("비밀번호를 입력해주세요"),
  });

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(inputs);
    schema
      .validate(inputs)
      .then(() => {
        console.log("검사 성공!");
        setErrors({ emailError: "", passwordError: "" });
      })
      .catch((error) => {
        if (error.message.includes("이메일")) {
          setErrors({
            ...errors,
            emailError: error.message,
            passwordError: "",
          });
        } else if (error.message.includes("비밀번호")) {
          setErrors({
            ...errors,
            emailError: "",
            passwordError: error.message,
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center w-[400px] h-[150px] bg-red-300">
      <form className=" w-[300px] h-[100px] flex flex-col gap-2">
        <div className="w-full flex justify-between gap-1">
          이메일
          <input
            className={
              "w-[230px] outline-0 px-2 focus:border-1 focus:border-solid border focus:border-neutral-900" +
              (emailError && "border-solid border-3 border-red-600")
            }
            type="text"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="w-full flex justify-between gap-1">
          비밀번호
          <input
            className={
              "w-[230px] outline-0 px-2 focus:border-1 focus:border-solid border focus:border-neutral-900" +
              (passwordError && "border-solid border-3 border-red-600")
            }
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={onChange}
          />
        </div>
        <button
          className="w-full h-[50px] rounded-xl bg-slate-600 hover:opacity-80"
          onClick={onSubmit}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
