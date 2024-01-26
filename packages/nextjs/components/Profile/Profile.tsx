"use client";

import Image from "next/image";

function Profile() {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-[#4A5056] font-bold text-xl">Account number</span>
        <div className="flex gap-2">
          <span>99e4f8fb-a0e5-43d8-9c57-6c32bcd0167b</span>
          <Image src="/Huge-icon.png" alt="icon" width={13} height={13}></Image>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[#4A5056] font-bold text-xl">Email</span>
        <div>
          <span>ngyixuan@gmail.com</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-[#4A5056] font-bold text-xl">Verification</span>
        <div></div>
      </div>
    </>
  );
}

export default Profile;
