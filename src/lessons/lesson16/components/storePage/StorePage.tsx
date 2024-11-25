import { useParams } from "react-router-dom";

import style from "./StorePage.module.css";
import { useEffect, useState } from "react";
import MyButton from "../../../../components/myButton/MyButton";

interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: number;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface IReviews {
  rating: 2;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

export default function StorePage() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();

  const getProduct = (id: string) => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    getProduct(id as string);
  }, [id]);
  return (
    <div className={style.container}>
      {product ? (
        <>
          <h1>{product.title}</h1>
          <h2>Brand: {product.brand}</h2>
          <div className={style.imageContainer}>
            {product.images.map((img: string, index) => (
              <img
                key={index}
                className={style.preview}
                src={img}
                alt="preview img"
              />
            ))}
          </div>

          <span className={style.price}>{product.price}</span>
          <div className={style.description}>{product.description}</div>
          <MyButton text="Buy" />
        </>
      ) : (
        "іі"
      )}
    </div>
  );
}
