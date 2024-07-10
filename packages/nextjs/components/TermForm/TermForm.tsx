import React, { useState } from "react";

interface TermFormProps {
  createTermLoading: boolean;
  onSubmit: (hookAddress: string, comission: string) => void;
  onCancel: () => void;
}

const TermForm: React.FC<TermFormProps> = ({ onSubmit, onCancel, createTermLoading }) => {
  const [selectedHook, setSelectedHook] = useState("");
  const [comission, setComission] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedHook, comission);
  };

  return (
    <div className="flex justify-center items-center h-full py-10 px-14">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-[80%] text-white">
        <h2 className="text-white text-center text-2xl mb-4">Create Terms</h2>
        <select
          value={selectedHook}
          onChange={e => setSelectedHook(e.target.value)}
          className="p-4 px-6 border  border-gray-300 bg-transparent rounded-[2px]"
        >
          <option className="bg-[#2F2F2F]" value="" disabled>
            Select hooks
          </option>
          <option className="bg-[#2F2F2F]" value="0x564d0f8a7c8b446d1725763316849B01d1B059e3">
            Whitelist
          </option>
          <option className="bg-[#2F2F2F]" value="0x964d0f8a7c8b446d1725763316849B01d1B059e7">
            Blacklist
          </option>
          <option className="bg-[#2F2F2F]" value="0x09b9fbE502fd1bb4DccA4261D3551694DF674611">
            Anti-money laundering
          </option>
        </select>
        <input
          type="text"
          value={comission}
          onChange={e => setComission(e.target.value)}
          placeholder="Input commission (%)"
          className="p-4 px-6 border border-gray-300 bg-transparent rounded-[2px]"
        />
        <div className="flex flex-col gap-8 justify-center mt-8">
          <button
            disabled={createTermLoading}
            type="submit"
            className={`${
              createTermLoading ? "bg-[#757A8D]" : "bg-[#D0C8FF]"
            } px-4 py-4 rounded-[2px] text-sm text-black`}
          >
            Create
          </button>
          <button
            disabled={createTermLoading}
            type="button"
            onClick={onCancel}
            className={`${
              createTermLoading ? "border-[#757A8D]" : "border-[#D0C8FF]"
            } bg-transparent text-[#D0C8FF] border  px-4 py-4 rounded-[2px] text-sm`}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TermForm;
