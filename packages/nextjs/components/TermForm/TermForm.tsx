import React, { useState } from "react";
import Button from "../Button/Button";

interface TermFormProps {
  onSubmit: (option: string, term: string) => void;
  onCancel: () => void;
}

const TermForm: React.FC<TermFormProps> = ({ onSubmit, onCancel }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [additionalInput, setAdditionalInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedOption, additionalInput);
  };

  return (
    <div className="flex justify-center items-center h-full mx-24">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-4 w-full">
        <h2 className="text-center text-2xl mb-4">Create Terms</h2>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="p-4 px-6 border border-gray-300 bg-transparent rounded-[2px]"
        >
          <option value="" disabled>
            Select hooks
          </option>
          <option value="Whitelist">Whitelist</option>
          <option value="Blacklist">Blacklist</option>
          <option value="Anti-money laundering">Anti-money laundering</option>
        </select>
        <input
          type="text"
          value={additionalInput}
          onChange={(e) => setAdditionalInput(e.target.value)}
          placeholder="Input commission"
          className="p-4 px-6 border border-gray-300 bg-transparent rounded-[2px]"
        />
        <div className="flex flex-col gap-4 justify-center">
          <Button backgroundColor="#D0C8FF" size="large">
            Create
          </Button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-transparent text-[#D0C8FF] border border-[#D0C8FF] px-4 py-2 rounded-lg text-xs"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TermForm;
