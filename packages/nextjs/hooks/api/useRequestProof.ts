import { useMutation } from "@tanstack/react-query";
import { requestProof } from "~~/utils/api/reclaim";

export interface requestProofSuccessArgs {
  requestUrl: string;
}

const useRequestProof = (onSuccess: (data: requestProofSuccessArgs) => void, onError: (err: string) => void) => {
  return useMutation({
    mutationFn: requestProof,
    onSuccess: onSuccess,
    onError: onError,
  });
};

export default useRequestProof;
