import { Select, SelectItem } from "@nextui-org/react";

interface PaymentScheduleProps {
  label?: string;
}

const PaymentSchedule: React.FC<PaymentScheduleProps> = ({ label = "Payment Schedule" }) => (
  <div className="flex flex-col flex-1 gap-4 mt-5">
    <label htmlFor="campo3">{label}</label>
    <div className="flex items-center justify-between rounded-[14px] w-full p-2 bg-transparent border">
      <input
        type="text"
        id="campo1"
        name="campo1"
        className="bg-transparent border-none p-2 focus:outline-none w-full"
      />
      <Select
        defaultSelectedKeys={["month"]}
        style={{ marginLeft: "8px", maxWidth: "100px" }}
        className="focus:outline-none border-none"
        color={"primary"}
      >
        <SelectItem key="01" value="01">
          January
        </SelectItem>
        <SelectItem key="02" value="02">
          February
        </SelectItem>
        <SelectItem key="03" value="03">
          March
        </SelectItem>
      </Select>
    </div>
  </div>
);

export default PaymentSchedule;
