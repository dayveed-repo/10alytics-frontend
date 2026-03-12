import localFont from "next/font/local";

export const brfirma = localFont({
  src: [
    {
      path: "../public/fonts/BRFirma-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/BRFirma-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BRFirma-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BRFirma-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/BRFirma-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-br-firma",
});

export const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
});
