import { useMutation } from "@tanstack/react-query";
import { requestProof } from "~~/utils/api/reclaim";

const useRequestProof = (onSuccess: (data: string) => void, onError: (err: string) => void) => {
  return useMutation({
    mutationFn: requestProof,
    onSuccess: onSuccess,
    onError: onError,
  });
};

export default useRequestProof;
