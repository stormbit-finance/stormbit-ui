import "./modalPay.css";
import toast from "react-hot-toast";
import { formatEther, parseEther } from "viem";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import Button from "~~/components/Button/Button";
import { useScaffoldContract, useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

interface ModalProps {
  setModalPay: () => void;
  pool: string;
}

function ModalPay({ setModalPay, pool }: ModalProps) {
  const account = useAccount();

  const { data: LendingContract } = useScaffoldContract({
    contractName: "StormBitLending",
  });

  const { data: SimpleAgreementContract } = useScaffoldContract({
    contractName: "SimpleAgreement",
  });

  const { data: agreementAddress } = useContractRead({
    address: pool,
    abi: LendingContract && LendingContract.abi,
    functionName: "userAgreement",
    args: account && account.address ? [account.address] : [""],
  });

  const { data: balance } = useScaffoldContractRead({
    contractName: "MockToken",
    functionName: "balanceOf",
    args: [account.address],
  });

  const { writeAsync: payBack } = useContractWrite({
    address: agreementAddress && agreementAddress,
    abi: SimpleAgreementContract && SimpleAgreementContract.abi,
    functionName: "payBack",
    onSuccess: txReceipt => {
      toast.success(`Successfully paid back @ ${txReceipt.hash as string}`);
      setModalPay();
    },
  });

  const { data: isLoanFinished } = useContractRead({
    address: agreementAddress && agreementAddress,
    abi: SimpleAgreementContract && SimpleAgreementContract.abi,
    functionName: "isLoanFinished",
  });

  const { data: nextPaymentData } = useContractRead({
    address: agreementAddress && agreementAddress,
    abi: SimpleAgreementContract && SimpleAgreementContract.abi,
    functionName: "nextPayment",
  });

  const { writeAsync: approveTokens } = useScaffoldContractWrite({
    contractName: "MockToken",
    functionName: "approve",
    args: [agreementAddress ? agreementAddress : "", balance ? balance : 0n],
    value: BigInt(0),
    onBlockConfirmation: (txReceipt: any) => {
      toast.success(`Tokens approved successfully with hash ${txReceipt.transactionHash as string}`);
      payBack();
    },
    blockConfirmations: 0,
  });

  const { writeAsync: withdraw } = useContractWrite({
    address: agreementAddress && agreementAddress,
    abi: SimpleAgreementContract && SimpleAgreementContract.abi,
    functionName: "withdraw",
    onSuccess: txReceipt => {
      toast.success(`Successfully withdrawn assets @ ${txReceipt.hash as string}`);
      setModalPay();
    },
  });

  return (
    <div className="container-modalPay">
      <div className="content-modalPay">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">Payment</h3>
          <span onClick={() => setModalPay()} className="cursor-pointer text-[#4A5056]">
            X
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 my-9">
          <span className="text-[#4A5056]">Next payment</span>
          <span className="text-3xl font-bold text-[#4A5056]">
            {nextPaymentData && nextPaymentData[0] && !isLoanFinished
              ? parseFloat(formatEther(nextPaymentData[0])).toFixed(2)
              : 0}{" "}
            ZBU
          </span>
        </div>
        {!isLoanFinished ? (
          nextPaymentData && nextPaymentData[0] == BigInt(0) ? (
            <Button size="large" onClick={() => withdraw()}>
              Withdraw
            </Button>
          ) : (
            <Button size="large" onClick={() => approveTokens()}>
              Pay
            </Button>
          )
        ) : (
          <Button size="large">Loan is Finished</Button>
        )}
      </div>
    </div>
  );
}

export default ModalPay;
