import React, { ReactNode } from "react";
import "./base.css";
import Adsence from "@/components/Adsense/Adsence";

type Props = {
  children: ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <title>PHOTO TIME</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="icon" href="/logo-icon.png" />
        <Adsence pId="6348771383125578"></Adsence>
      </head>
      <body>{children}</body>
    </html>
  );
}
