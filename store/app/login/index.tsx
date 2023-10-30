import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-[400px] h-[150px] bg-red-300">
      <div className=" w-[300px] h-[100px] flex flex-col gap-2">
        <div className="w-full flex justify-between gap-1">
          이메일
          <input className="w-[230px] outline-0 px-2" type="text" />
        </div>
        <div className="w-full flex justify-between gap-1">
          비밀번호
          <input className="w-[230px] outline-0 px-2" type="password" />
        </div>
        <button className="w-full h-[50px] rounded-xl bg-slate-600">
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
