import ProductPage from "@/app/components/ProductPage";
import { products } from "@/app/data/ProductsDataSk";

import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const productById = products.find((item) => item.id.toString() === params.id);

  if (!productById) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${productById.title}`,
    description: `${productById.title_description}`,
    openGraph: {
      title: `${productById.title}`,
      description: `${productById.title_description}`,
      images: [
        {
          url: `${productById.title_image}`,
          alt: `Produktová fotka - ${productById.title}`,
        },
      ],
    },
  };
};

const Page = ({ params }: { params: { id: string } }) => {
  const productById = products.find((item) => item.id.toString() === params.id);

  if (!productById) {
    return null;
  }
  return (
    <main>
      <ProductPage product={productById} />
    </main>
  );
};

export default Page;
