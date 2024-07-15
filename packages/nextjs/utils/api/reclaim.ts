import api from ".";
import { requestProofSuccessArgs } from "~~/hooks/api/useRequestProof";
import { supportedProvider } from "~~/utils/api/types";
import { verifications } from "~~/utils/api/types";

async function getSupportedProvider(): Promise<supportedProvider[]> {
  const response = await api.get("reclaim/supported-providers");
  return response.data;
}

async function getVerifications(address: string): Promise<verifications> {
  const response = await api.get(`reclaim/verifications/${address}`);
  return response.data;
}

async function requestProof(data: {
  providerId: string;
  address: string;
  signature: string;
}): Promise<requestProofSuccessArgs> {
  const response = await api.post(`reclaim/request-proofs/${data.providerId}`, {
    address: data.address,
    signature: data.signature,
  });
  return response.data;
}
export { getSupportedProvider, getVerifications, requestProof };
