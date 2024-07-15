export interface supportedProvider {
  id: number | string;
  createdAt: string;
  updatedAt: string;
  providerId: string;
  name: string;
  description: string;
}
export interface reclaimVerifications {
  count: number;
  provider: {
    description: string;
    name: string;
  };
  updatedAt: string;
  verified: boolean;
}
export interface verifications {
  address: string;
  id: number;
  reclaimVerifications: reclaimVerifications[];
}
