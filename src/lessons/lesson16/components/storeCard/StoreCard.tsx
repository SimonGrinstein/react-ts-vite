import style from "./storeCard.module.css";
import { Link } from "react-router-dom";

interface IReviews {
  rating: 2;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

interface IStoreCardProps {
  id: number;
  title: string;
  description: string;
  reviews: IReviews[];
  images: string[];
  price: number;
  discountPercentage?: number;
  thumbnail: string;
}

export default function StoreCard({
  id,
  title,
  description,
  reviews,
  images,
  price,
  discountPercentage,
  thumbnail,
}: IStoreCardProps) {
  return (
    <div className={style.cardContainer}>
      <img className={style.img} src={thumbnail} alt="product-img" />
      <p>{title}</p>
      <span className={style.price}>{price}</span>{" "}
      {/* ! поиграться со скидкой*/}
      <Link className={style.btn} to={String(id)}>
        Go to product
      </Link>
    </div>
  );
}
