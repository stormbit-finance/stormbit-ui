import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import ModalContainer from "~~/components/ModalContainer/ModalContainer";

interface ModalProps {
  setIsModalOpen: () => void;
  setProvider: (provider: string) => void;
  provider: string;
}
const FilterProviderModal: React.FC<ModalProps> = ({ setIsModalOpen, provider, setProvider }) => {
  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen();
    }
  };

  return (
    <ModalContainer onClick={handleCloseModal}>
      <div className="flex flex-col gap-8 pb-[20px]">
        <div className="border-b border-[#374B6D] ">
          <div className="flex justify-between items-center w-full pb-[20px]">
            <p className="text-2xl font-medium text-[#ffffff] m-0 ">Filter Provider</p>
            <button
              onClick={() => {
                setIsModalOpen();
              }}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <div className="p-4 w-[900px] space-y-4 text-xl">
          <div
            onClick={() => setProvider("Binance")}
            className={`cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg ${
              provider === "Binance" ? "bg-[#23233D]" : ""
            }`}
          >
            Binance
          </div>
          <div
            onClick={() => setProvider("OKX")}
            className={`cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg ${
              provider === "OKX" ? "bg-[#23233D]" : ""
            }`}
          >
            OKX
          </div>
          <div
            onClick={() => setProvider("Github")}
            className={`cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg ${
              provider === "Github" ? "bg-[#23233D]" : ""
            }`}
          >
            Github
          </div>
          <div
            onClick={() => setProvider("LinkedIn Analytics")}
            className={`cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg ${
              provider === "LinkedIn Analytics" ? "bg-[#23233D]" : ""
            }`}
          >
            LinkedIn Analytics
          </div>
          <div
            onClick={() => setProvider("X Analytics")}
            className={`cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg ${
              provider === "X Analytics" ? "bg-[#23233D]" : ""
            }`}
          >
            X Analytics
          </div>
          <div
            onClick={() => setProvider("Custom")}
            className={`cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg ${
              provider === "Custom" ? "bg-[#23233D]" : ""
            }`}
          >
            Custom
          </div>
          <div
            onClick={() => setProvider("All")}
            className={`cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg ${
              provider === "All" ? "bg-[#23233D]" : ""
            }`}
          >
            All
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-[20px]">
        <Button
          onClick={() => {
            setProvider(provider);
            setIsModalOpen();
          }}
          size="large"
        >
          Select
        </Button>
      </div>
    </ModalContainer>
  );
};

export default FilterProviderModal;
