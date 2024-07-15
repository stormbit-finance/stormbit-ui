export function truncateDisplayAddress(address: string): string {
  const firstPart = address?.slice(0, 8);
  const lastPart = address?.slice(-8);

  return `${firstPart}...${lastPart}`;
}
