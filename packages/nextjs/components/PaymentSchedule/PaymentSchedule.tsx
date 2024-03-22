import { Select, SelectItem } from "@nextui-org/react";

interface PaymentScheduleProps {
  label?: string;
}

const PaymentSchedule: React.FC<PaymentScheduleProps> = ({ label = "Payment Schedule" }) => (
  <div className="flex flex-col flex-1 gap-4 mt-5 ">
    <label htmlFor="campo3">{label}</label>
    <div className="flex items-center justify-between border w-full p-2 border-[#374B6D] rounded-[14px] bg-transparent">
      <input
        type="text"
        id="campo1"
        name="campo1"
        className="bg-transparent border-none p-2 focus:outline-none w-full"
      />
      <Select
        radius="md"
        defaultSelectedKeys={["month"]}
        className="focus:outline-none border-none max-w-[100px] w-full"
        color={"primary"}
        size={"md"}
        classNames={{
          // base: "base",
          // description: "description",
          // label: "label text-white",
          // value: "value text-white",
          // mainWrapper: "mainWrapper",
          // trigger: "trigger bg-transparent py-8 text-white",
          // innerWrapper: "inner text-white",
          // listbox: "flex border-red-700",
          // popoverContent: "bg-[#17172B] border border-[#374B6D]",
          base: "base",
          description: "text-white",
          errorMessage: "errorMesage",
          label: "label text-white",
          value: "value text-white",
          mainWrapper: "mainWrapper",
          trigger: "trigger bg-transparent py-8 text-white",
          innerWrapper: "inner text-white",
          selectorIcon: "slectorIcon",
          spinner: "spinner",
          listboxWrapper: "listboxWrapper",
          listbox: "flex text-white",
          popoverContent: "bg-[#17172B] border border-[#374B6D]",
        }}
      >
        <SelectItem
          key="01"
          value="01"
          classNames={{
            base: ["data-[selectable=true]:focus:bg-[#25253E] text-white"],
          }}
        >
          January
        </SelectItem>
        <SelectItem
          key="02"
          value="02"
          classNames={{
            base: ["data-[selectable=true]:focus:bg-[#25253E] text-white"],
          }}
        >
          February
        </SelectItem>
        <SelectItem
          key="03"
          value="03"
          classNames={{
            base: ["data-[selectable=true]:focus:bg-[#25253E] text-white"],
          }}
        >
          March
        </SelectItem>
      </Select>
    </div>
  </div>
);

export default PaymentSchedule;
