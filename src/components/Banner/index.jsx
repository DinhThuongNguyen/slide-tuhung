import React from "react";
import styles from "./styles.module.css";
import { Carousel } from "react-bootstrap";
import Slide1 from "@/public/img/tu-hung.png";
import Slide2 from "@/public/img/slider_02.jpg";
import Slide3 from "@/public/img/slider_03.jpg";
import Slide4 from "@/public/img/slider_04.jpg";
import Slide5 from "@/public/img/slider_05.jpg";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.banner}>
      <Carousel interval={1000} className={styles.carousel}>
        <Carousel.Item className={styles["carousel-item"]}>
          <Image src={Slide1} layout="fill" sizes="100vw" alt="" />
        </Carousel.Item>
        <Carousel.Item className={styles["carousel-item"]}>
          <Image src={Slide2} layout="fill" fill sizes="100vw" alt="" />
        </Carousel.Item>
        <Carousel.Item className={styles["carousel-item"]}>
          <Image src={Slide3} layout="fill" fill sizes="100vw" alt="" />
        </Carousel.Item>
        <Carousel.Item className={styles["carousel-item"]}>
          <Image src={Slide4} layout="fill" fill sizes="100vw" alt="" />
        </Carousel.Item>
        <Carousel.Item className={styles["carousel-item"]}>
          <Image src={Slide5} layout="fill" fill sizes="100vw" alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Index;
