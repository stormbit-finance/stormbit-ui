import { useState } from "react";
import Image from "next/image";
import Button from "../Button/Button";
import toast from "react-hot-toast";
import "./CreationModal.css";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

interface PoolConfig {
  name: string;
  owner: string;
  minCreditScore: number;
  maxAmountOfStakers: number;
  minQuorum: number;
  maxPoolUsage: number;
  votingPowerCooldown: number;
  amount: number;
  agreements: boolean[];
}

interface ModalProps {
  setIsModalOpen: () => void;
}

const CreationModal: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [poolConfig, setPoolConfig] = useState<PoolConfig>({
    name: "",
    owner: "",
    minCreditScore: 0,
    maxAmountOfStakers: 0,
    minQuorum: 0,
    maxPoolUsage: 0,
    votingPowerCooldown: 0,
    amount: 0,
    agreements: [false, false, false],
  });

  const {
    writeAsync: createPool,
    isLoading: createPoolLoading,
    data,
  } = useScaffoldContractWrite({
    contractName: "StormBit",
    functionName: "createPool",
    args: [
      poolConfig.name,
      {
        minCreditScore: BigInt(poolConfig.minCreditScore),
        quorum: BigInt(1),
        votingPowerCooldown: BigInt(1),
        maxAmountOfStakers: BigInt(1),
        maxPoolUsage: BigInt(1),
      },
    ],
    value: BigInt(0),
    onBlockConfirmation: txReceipt => {
      toast.success(`Pool created successfully with hash ${txReceipt.transactionHash as string}`);
      setIsModalOpen();
    },
    blockConfirmations: 0,
  });

  const handleSubmit = () => {
    setIsModalOpen();
  };
  return (
    <div className="container-modal">
      <div className="gap-4 content-modal">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <span className="text-2xl font-bold text-[#4A5056]">Create Pool</span>
            <button
              onClick={() => {
                setIsModalOpen();
              }}
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex-1">
              <label htmlFor="campo1">Pool name</label>
              <input
                type="text"
                id="campo1"
                name="campo1"
                className="w-full p-2 border"
                value={poolConfig.name}
                onChange={e => setPoolConfig({ ...poolConfig, name: e.target.value })}
              />
            </div>
            <div className="flex-1">
              <label htmlFor="campo1">Owner</label>
              <input type="text" id="campo1" name="campo1" className="w-full p-2 border" />
            </div>
            <div className="flex gap-16">
              <div className="flex-1">
                <label htmlFor="campo1">Min Credit Score</label>
                <input type="text" id="campo1" name="campo1" className="w-full p-2 border" />
              </div>
              <div className="flex-1">
                <label htmlFor="campo2">Max Amount Of Stakers</label>
                <input type="text" id="campo2" name="campo2" className="w-full p-2 border" />
              </div>
            </div>
            <div className="flex gap-16">
              <div className="flex-1">
                <label htmlFor="campo1">Min Quorum</label>
                <input type="text" id="campo1" name="campo1" className="w-full p-2 border" />
              </div>
              <div className="flex-1">
                <label htmlFor="campo2">Max Pool Usage</label>
                <input type="text" id="campo2" name="campo2" className="w-full p-2 border" />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="campo1">Voting Power Cooldown</label>
              <input type="text" id="campo1" name="campo1" className="w-full p-2 border" />
            </div>
            <div className="flex-1">
              <label htmlFor="campo1">Amount</label>
              <input type="text" id="campo1" name="campo1" className="w-full p-2 border" />
            </div>
            <span>Agreement supported</span>
            <div className="flex gap-16">
              <div className="flex gap-4">
                <input type="checkbox"></input>
                <div className="flex items-center gap-2">
                  <span>Base agreement</span>
                  <div
                    className="info-icon-container"
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                  >
                    <Image src="/information.png" alt="information" width={18} height={18}></Image>
                    {showInfo && (
                      <div className="text-xs info-tooltip text-[#484848]">
                        <span className="text-xs font-bold">Strategy Name</span>
                        <br></br>
                        <span>Some description info here...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <input type="checkbox"></input>
                <div className="flex items-center gap-2">
                  <span>NFT agreement</span>
                  <div
                    className="info-icon-container"
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                  >
                    <Image src="/information.png" alt="information" width={18} height={18}></Image>
                    {showInfo && (
                      <div className="text-xs info-tooltip text-[#484848]">
                        <span className="text-xs font-bold">Strategy Name</span>
                        <br></br>
                        <span>Some description info here...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <input type="checkbox"></input>
                <div className="flex items-center gap-2">
                  <span>FT agreement</span>
                  <div
                    className="info-icon-container"
                    onMouseEnter={() => setShowInfo(true)}
                    onMouseLeave={() => setShowInfo(false)}
                  >
                    <Image src="/information.png" alt="information" width={18} height={18}></Image>
                    {showInfo && (
                      <div className="text-xs info-tooltip text-[#484848]">
                        <span className="text-xs font-bold">Strategy Name</span>
                        <br></br>
                        <span>Some description info here...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center">
          <Button
            onClick={createPool}
            size="large"
          >
            Create Pool
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreationModal;
