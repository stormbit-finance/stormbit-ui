"use client";

import Image from "next/image";

function Profile() {
  return (
    <>
      <h1 className="text-4xl text-[#4A5056] font-bold">Profile and Settings</h1>
      <div className="flex flex-col gap-2">
        <span className="text-[#4A5056] font-bold text-xl">Account number</span>
        <div className="flex gap-2">
          <span>99e4f8fb-a0e5-43d8-9c57-6c32bcd0167b</span>
          <div className="flex items-center text-center">
            <Image src="/Huge-icon.png" alt="icon" width={13} height={13}></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#4A5056] font-bold text-xl">Email</span>
        <div className="flex gap-2">
          <span>ngyixuan@gmail.com</span>
          <span className="text-xs text-[#66A6A4] border border-solid border-[#66A6A4] py-1 px-2 rounded-[4px]">
            {" "}
            Verified{" "}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-[#4A5056] font-bold text-xl">Verification</span>
        <div className="flex p-5 items-center gap-8 bg-[#EDEDFF] w-[1150px] h-[98px]">
          <Image src="/verification.png" alt="verification" width={39} height={39}></Image>
          <div className="text-[#4A5056] flex flex-col gap-1">
            <span className="font-bold">Identity Verification</span>
            <span>Unlock platform core function</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
