import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../../types/types";
import styles from "./productPage.module.css";
import { useCart } from "../../context/cartContext";
import MyButton from "../myButton/MyButton";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>({
    id: 0,
    title: 'string',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    }
  })

  const getProduct = (id: string) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  };


  useEffect(() => {
    getProduct(id as string);
  }, [id]);

  const { addToCart, cart } = useCart();

  const addToCartFromProduct = () => {
    addToCart({ id:product.id, price:product.price, title:product.title, quantity: 1 });
  };

  //console.log(product.title);

  return (
    <div className={styles.product}>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <img width={180} src={product.image} alt="" />
      <p>{product.price} €</p>
      <MyButton func={addToCartFromProduct} text="add to cart" isDanger={false} />
      <Link to={'../products'}>back to products</Link>
    </div>
  );
}