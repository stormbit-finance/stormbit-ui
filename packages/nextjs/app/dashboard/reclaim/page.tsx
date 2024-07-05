// @ts-nocheck
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { formatDistance, subDays } from "date-fns";
import { FaCheckCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useAccount, useSignMessage } from "wagmi";
import Button from "~~/components/Button/Button";
import FilterProviderModal from "~~/components/FilterProviderModal/FIlterProviderModal";
import ModalContainer from "~~/components/ModalContainer/ModalContainer";
import useRequestProof from "~~/hooks/api/useRequestProof";
import useGetSupportedProvider from "~~/hooks/api/useGetSupportedProvider";
import useGetVerification from "~~/hooks/api/useGetVerification";

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

// @ts-nocheck

const Reclaim = () => {
  const providerData = useMemo(
    () => [
      { name: "Binance", provider: "Binance", desc: "KYC", img: "/binance.svg", zkproof: 10 },
      { name: "OKX", provider: "OKX", desc: "KYC", img: "/okx.svg", zkproof: 10 },
      { name: "Github", provider: "Github", desc: "KYC", img: "/github.svg", zkproof: 0 },
      { name: "Stripe", provider: "Stripe", desc: "More than 1000 USDT in balance", img: "/stripe.svg", zkproof: 10 },
      {
        name: "LinkedIn Analytics",
        provider: "LinkedIn Analytics",
        desc: "Dashboard Analytics",
        img: "/linkedin.svg",
        zkproof: 10,
      },
      { name: "X Analytics", provider: "X Analytics", desc: "Dashboard Analytics", img: "/x.svg", zkproof: 10 },
      { name: "Custom", provider: "Custom", desc: "KYC", img: "/custom.svg", zkproof: 10 },
    ],
    [],
  );

  const providers = [
    { name: "Binance", provider: "Binance", condition: "KYC", img: "/binance.svg" },
    { name: "Stripe", provider: "Stripe", condition: "More than 1000 USDT in balance", img: "/stripe.svg" },
    { name: "Github", provider: "Github", condition: "KYC", img: "/github.svg" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [provider, setProvider] = useState("Filter");
  const [copyStatus, setCopyStatus] = useState(false);
  const [verifiedLink, setVerifiedLink] = useState("");
  const [providerList, setProviderList] = useState(providerData);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [verifiedProviders, setVerifiedProviders] = useState([]);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const account = useAccount();
  const { data: signMessageData, signMessage, signMessageAsync } = useSignMessage();
  const { data: supportedProvider } = useGetSupportedProvider();
  const { data: verifications } = useGetVerification(account?.address||"");

  useEffect(() => {
    if (provider === "All" || provider === "Filter") {
      setProviderList(providerData);
      return;
    } else {
      setProviderList(providerData.filter(item => item.provider === provider));
    }
  }, [provider, providerData]);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(verifiedLink);
    setCopyStatus(true);
  };
  const handleModalClick = event => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
      setVerificationStatus(null);
      setCopyStatus(false);
    }
  };
  const handleVerifySuccess = (data: string) => {
    setVerificationStatus("success");
    setVerifiedLink(data.requestUrl);
  };
  const handleVerifyFailed = () => {
    setVerificationStatus("failure");
  };

  const { mutate: requestProof } = useRequestProof(handleVerifySuccess, handleVerifyFailed);

  const handleVerify = async provider => {
    const signature = await signMessageAsync({ message: `Request proof for provider with id ${provider.providerId}` });
    requestProof({
      providerId: provider?.providerId,
      address: account?.address,
      signature: signature,
    });
  };

  return (
    <div className="flex justify-center items-center py-[30px] flex-col gap-10">
      <div className="flex justify-end w-full pr-20 gap-4">
        <Image src="/z-proof.svg" alt="icon" width={15} height={15}></Image>
        <span className="text-[#98E6FF]">Zk-proofs powered by Reclaim</span>
      </div>
      <div className="flex gap-8 w-full px-14">
        <div className="flex flex-col w-4/5 gap-4">
          <span className="text-xl">Verified</span>
          <div className="bg-[#2F2F2F] border border-[#444C6A] py-8 px-11 gap-5 flex flex-col">
            {!verifications? (
              <div className="text-[#A8B1C8] text-center">No data here</div>
            ) : (
               verifications.reclaimVerifications.map((item, index) => (
                  item.count>0 && 
                    (<div className="flex justify-between" key={index}>
                    <div className="flex flex-col text-sm">
                      <span>
                        {item.provider.name} - {item.provider.description}
                      </span>
                      <span className="text-[#A8B1C8]">{formatDistance(new Date(item.updatedAt), new Date(), {addSuffix:true}) }</span>
                    </div>
                    <Button onClick={() => {
                        setSelectedProvider(item.provider);
                        setIsModalOpen(true);
                      }} backgroundColor="#D0C8FF" size="small">
                      Verify Again <FiArrowUpRight></FiArrowUpRight>
                    </Button>
                  </div>)
                  
            
              ))
            )}
          </div>

          <span>Not Verified</span>
          <div className="bg-[#2F2F2F] border border-[#444C6A] py-8 px-11 gap-5 flex flex-col h-full">
            {!supportedProvider ? (
              <div className="text-[#A8B1C8] text-center">No data here</div>
            ) : (
              supportedProvider.map((item, index) => (
                <div className=" flex w-full justify-between items-center" key={index}>
                  <div className="flex items-center">
                    {/* <Image width={30} height={30} className="" src={`${item.img}`} alt="" /> */}
                    <div className="ml-4">
                      <div className="text-base">{item.name}</div>
                      <div className="text-xs text-[#858BA2]">{item.description}</div>
                    </div>
                  </div>
                  <Button
                    backgroundColor="#D0C8FF"
                    size="small"
                    onClick={() => {
                      setSelectedProvider(item);
                      setIsModalOpen(true);
                    }}
                  >
                    Verify<FiArrowUpRight></FiArrowUpRight>
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-center gap-[20px] py-[30px] bg-[#2F2F2F] border border-[#444C6A]">
          <div className="flex justify-between w-full px-8">
            <span className="text-2xl">Providers</span>
            <div>
              <button
                onClick={() => {
                  setIsFilterOpen(true);
                }}
                className="bg-[#444444] text-white px-4 py-2 border border-[#444C6A] rounded-[7px]"
              >
                {provider} Provider
              </button>
            </div>
          </div>

          <div className="w-full border-y-1 border-[#374B6D] text-white py-7 px-4  bg-[#3E3E3E]">
            <div className="flex items-center justify-between">
              <div className="flex-1">Name</div>
              <div className="">zk proof generated</div>
            </div>
          </div>
          {providerList.map((item, index) => (
            <div className="py-4 px-6 flex w-full justify-between items-center" key={index}>
              <div className="flex items-center">
                <Image width={30} height={30} className="" src={`${item.img}`} alt="" />
                <div className="ml-4">
                  <div className="text-xl">{item.name}</div>
                </div>
              </div>
              <span>{item?.zkproof || 0}</span>
            </div>
          ))}
        </div>
      </div>
      {isFilterOpen && (
        <FilterProviderModal
          provider={provider}
          setProvider={(provider: string) => setProvider(provider)}
          setIsModalOpen={() => setIsFilterOpen(false)}
        />
      )}

      {isModalOpen && (
        <ModalContainer onClick={handleModalClick}>
          <div className="bg-[#2F2F2F] w-[600px] h-[350px] flex justify-center items-center flex-col gap-4">
            {verificationStatus === null ? (
              <>
                {/* <Image src={selectedProvider?.img} alt="logo" width={60} height={60}></Image> */}
                <h2 className="text-xl text-white font-bold m-0">Verify {selectedProvider?.name}</h2>
                <p className="text-[#858BA2] m-0">Conditions: {selectedProvider?.description}</p>
                <Button backgroundColor="#D0C8FF" onClick={() => handleVerify(selectedProvider)}>
                  Request proof with signature
                </Button>
              </>
            ) : verificationStatus === "success" ? (
              <>
                {/* <FaCheckCircle size={60} color="green" /> */}
                <h2 className="text-xl text-white font-bold m-0">Verify Successfully</h2>
                <p className="text-[#858BA2] m-0 mb-4">You have completed the verification process.</p>
                <QRCodeSVG className="mb-4" value={verifiedLink} size={256} />
                <div
                  onClick={handleCopyLink}
                  className="cursor-pointer  m-0 border border-[#6C757D]  rounded-md flex justify-center items-center"
                >
                  <div className=" text-white px-4 ">{verifiedLink}</div>
                  <div className="bg-[#D0C8FF] rounded-r-md px-8 text-black py-2 self-center">
                    {copyStatus ? "Link Copied" : "Copy"}
                  </div>
                </div>
              </>
            ) : (
              <>
                <IoIosCloseCircleOutline size={60} color="red" />
                <h2 className="text-xl text-white font-bold m-0">Verify Failed</h2>
                <p className="text-[#858BA2] m-0">Please try again or choose a different verification option</p>
              </>
            )}
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default Reclaim;
