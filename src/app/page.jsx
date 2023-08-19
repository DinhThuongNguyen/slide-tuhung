"use client";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Tuhung from "../components/Tuhung";
import Slider from "../components/Slider";
import Chungchi from "../components/Chungchi";
import Info from "../components/Info";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.content}>
        <Banner />
        <Product />
        <Tuhung />
        <Slider />
        <Chungchi />
        <Info />
      </div>
      <Footer />
    </main>
  );
}
