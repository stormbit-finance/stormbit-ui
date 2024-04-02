import React from "react";
import Image from "next/image";

interface MessageItemProps {
  profileImage: string;
  poolName: string;
  message: string;
  time: string;
  unreadCount: number;
}

const MessageItem: React.FC<MessageItemProps> = ({ profileImage, poolName, message, time, unreadCount }) => {
  return (
    <div className="flex justify-between p-[20px] max-w-[1220px] w-full border-b border-b-[#374B6D]">
      <div className="flex gap-[10px] items-center pb-[10px]">
        <div className="rounded-full">
          <Image src={profileImage} alt="profile" width={62} height={62} />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl">{poolName}</span>
          <span>{message}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end gap-[5px]">
        <span className="text-[#888A8D]">{time}</span>
        <span className="rounded-full bg-[#F24E1E] w-[30px] h-[30px] text-center text-[#0E0F1E] font-bold">
          {unreadCount}
        </span>
      </div>
    </div>
  );
};

export default MessageItem;
