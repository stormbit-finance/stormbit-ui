import CustomCheckbox from "~~/components/CustomCheckbox/CustomCheckbox";

interface AgreementCheckboxProps {
  label: string;
  value: string;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
}

const AgreementCheckbox: React.FC<AgreementCheckboxProps> = ({ label, value, isSelected, isDisabled, onClick }) => (
  <label className="flex items-center cursor-pointer">
    <input
      type="checkbox"
      value={value}
      checked={isSelected}
      disabled={isDisabled}
      onChange={() => {}}
      onClick={onClick}
      className="form-checkbox h-5 w-5 text-[#374B6D] border-[#374B6D] rounded-[2px] focus:outline-none"
    />
    <span className="ml-2 text-[#374B6D]">{label}</span>
  </label>
);

export default AgreementCheckbox;
