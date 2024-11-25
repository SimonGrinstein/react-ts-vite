import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default function Layout() {
  return (
    <>
      <Header />

      <main>
        {/* за место компонента Outlet будут приходить переключаемые компоненты из маршрутизации */}
        <Outlet />

      </main>
      <Footer />
    </>
  );
}