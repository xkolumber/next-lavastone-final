import React from "react";
import IntroductionNext from "./components/IntroductionNext";
import CardCollection from "./components/CardCollection";
import UniqueElement from "./components/UniqueElement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lavastone | Váš partner pre interiérový dizajn",
  description:
    "Vytvoríme dizajn a prevedenie, ktoré sofistikovaným spôsobom doplní váš interiér či exteriér.",
  openGraph: {
    title: "Lavastone | Váš partner pre interiérový dizajn",
    description:
      "Vytvoríme dizajn a prevedenie, ktoré sofistikovaným spôsobom doplní váš interiér či exteriér.",
    images: [
      {
        url: "https://storage.googleapis.com/lavastone/uvod/uvod_foto.jpg",
        alt: "Titulná fotka lávy v Lavastone",
      },
    ],
  },
};

const page = () => {
  return (
    <main>
      <IntroductionNext />
      <CardCollection />
      <div className="product_silver">
        <UniqueElement />
      </div>
    </main>
  );
};

export default page;
