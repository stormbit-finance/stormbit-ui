import api from ".";
import { supportedProvider } from "~~/types/Provider";

async function getSupportedProvider(): Promise<supportedProvider> {
  const response = await api.get("reclaim/supported-providers");
  return response.data;
}

async function getVerifications(address: string): Promise<supportedProvider> {
  const response = await api.get(`reclaim/verifications/${address}`);
  return response.data;
}

async function requestProof(data: { providerId: string; address: string; signature: string }): Promise<string> {
  const response = await api.post(`reclaim/request-proofs/${data.providerId}`, {
    address: data.address,
    signature: data.signature,
  });
  return response.data;
}
export { getSupportedProvider, requestProof };
