import { toSvg } from "jdenticon";

export async function getRandomAvatar(email: string): Promise<string> {
  const size = 200;
  const hash = email.trim().toLowerCase();
  const svg = toSvg(hash, size);

  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}
