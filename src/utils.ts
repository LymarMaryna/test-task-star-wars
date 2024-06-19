export type Character = {
  name: string;
  avatar: string;
  gender?: string;
  weight?: string;
  height?: string;
};

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
