import { Link, NavLink } from "react-router-dom";
import styles from './header.module.css'
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";

export default function Header() {
  const { cart } = useCart();
  const { user } = useAuth();
  //const { user, setUser } = useAuth();

  const calculateCartPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity,0)
  }

  return (
    <header className={styles.header}>
      {user.accessToken ? (
      <>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"/"}>Home page</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"products"}>Products</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"cart"}>Cart</NavLink>
        {/* <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"login"}>LOGIN</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"fetch-dog"}>Fetch dog</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"hero-gallery"}>Hero gallery</NavLink> */}
        
        <span style={{color: 'black'}}>Сумма в корзине: {calculateCartPrice().toFixed(2)}€</span>

        {/* <span>{user.email}</span> */}

        <span>Welcome, {user.username}!</span>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </>
    ) : (
      <Link to="/login">Login</Link>
    )}

        
    </header >
  )
}
