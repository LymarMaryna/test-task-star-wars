export type Character = {
  name: string;
  avatar: string;
  gender?: string;
  mass?: string;
  height?: string;
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
