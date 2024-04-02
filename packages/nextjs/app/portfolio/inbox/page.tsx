import React from "react";
import MessageItem from "~~/components/MessageItem/MessageItem";
import { messagesInbox } from "~~/data/data";

const InboxView: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-[30px]">
      <div className="max-w-[1380px] w-full bg-[#0E0F1E] rounded-xl flex flex-col  items-center gap-[20px] pt-[30px] min-h-[800px]">
        <div className="px-[100px] w-full text-2xl">
          <span>Chats</span>
        </div>
        <div className="w-full flex flex-col items-center">
          {messagesInbox.map(message => (
            <MessageItem
              key={message.id}
              profileImage={message.profileImage}
              poolName={message.poolName}
              message={message.message}
              time={message.time}
              unreadCount={message.unreadCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InboxView;
