import React from "react";
import profile from "../assets/images/avatar-jessica.jpeg";
function Header() {
  return (
    <div className="flex items-center justify-center gap-1 flex-col">
      <img
        className="rounded-full mb-4 w-[100px]"
        src={profile}
        alt="profile"
      />
      <h1 className="text-2xl font-bold">Jessica Randall</h1>
      <p className="text-green-100 font-[500] text-xs">
        London, United Kingdom
      </p>
      <q className="font-thin mt-5">Front-end developer and avid reader.</q>
    </div>
  );
}

export default Header;
