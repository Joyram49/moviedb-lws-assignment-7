import { Sora } from "next/font/google";

export const sora_font = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const sora = sora_font.variable;
