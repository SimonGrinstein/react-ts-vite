import { Link, NavLink, Route } from "react-router-dom";
import styles from './header.module.css'
import { useCart } from "../../context/cartContext";
import { AuthContext, initialUser, useAuth } from "../../context/authContext";
import { useContext } from "react";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import FetchDog from "../fetchDog/FetchDog";

export default function Header() {
  const { cart } = useCart();
  //const { user } = useAuth();
  const { user, setUser } = useAuth();
  const context = useContext(AuthContext);

  const calculateCartPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity,0)
  }
//console.log("user : " + user);

  const logout = () => {
    localStorage.removeItem('accessToken');

    setUser(initialUser);
  }

  return (
    <header className={styles.header}>
      {user.id ? (
      <>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"/"}>Home page</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"products"}>Products</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"cart"}>Cart</NavLink>
        {/* <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"login"}>LOGIN</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"fetch-dog"}>Fetch dog</NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to={"hero-gallery"}>Hero gallery</NavLink> */}
        {/* <Route path="fetch-dog" element={<ProtectedRoute outlet={<FetchDog />} />} /> */}
        <span style={{color: 'black'}}>Сумма в корзине: {calculateCartPrice().toFixed(2)}€</span>

        {/* <span>{user.email}</span> */}

        <span>Welcome, {user.username}!</span>
        {/* <span>{context?.user.email}!</span> */}
        
        <NavLink onClick={logout} to={"/"}>Logout</NavLink>
      </>
    ) : (
      <Link to="/login">Login</Link>
    )}

        
    </header >
  )
}
