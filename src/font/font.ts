import {
  Inter,
  Lusitana,
  Raleway,
  Poppins,
  Lato,
  Montserrat,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lusitana",
});
export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const getFontClass = (font: string) => {
  switch (font) {
    case "inter":
      return inter.className;
    case "lusitana":
      return lusitana.className;
    case "raleway":
      return raleway.className;
    case "poppins":
      return poppins.className;
    case "lato":
      return lato.className;
    case "montserrat":
      return montserrat.className;
  }
};
