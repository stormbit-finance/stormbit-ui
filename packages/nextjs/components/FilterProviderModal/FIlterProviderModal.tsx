import Button from "../Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import ModalContainer from "~~/components/ModalContainer/ModalContainer";

interface ModalProps {
  setIsModalOpen: () => void;
}
const FilterProviderModal: React.FC<ModalProps> = ({ setIsModalOpen }) => {
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
          <div className="cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg">Binance</div>
          <div className="cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg">OKX</div>
          <div className="cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg">Github</div>
          <div className="cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg">LinkedIn Analytics</div>
          <div className="cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg">X Analytics</div>
          <div className="cursor-pointer hover:bg-[#23233D] px-6 py-4 rounded-lg">Custom</div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-[20px]">
        <Button size="large">Select</Button>
      </div>
    </ModalContainer>
  );
};

export default FilterProviderModal;
