import React from "react";
import styles from "./styles.module.css";
import Carousel from "react-grid-carousel";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles["chung-chi"]}>
      <h1 className={styles["chung-chi-text"]}>CHỨNG CHỈ CHẤT LƯỢNG</h1>
      <Carousel
        cols={4}
        rows={1}
        gap={10}
        // autoplay={1050}
        showDots
        loop
        // hideArrow={true}
      >
        <Carousel.Item className={styles["block-img"]}>
          <Image alt="" src="/img/cc1.jpg" width={200} height={150} />
        </Carousel.Item>
        <Carousel.Item className={styles["block-img"]}>
          <Image alt="" src="/img/cc2.jpg" width={200} height={150} />
        </Carousel.Item>
        <Carousel.Item className={styles["block-img"]}>
          <Image alt="" src="/img/cc3.jpg" width={200} height={150} />
        </Carousel.Item>
        <Carousel.Item className={styles["block-img"]}>
          <Image alt="" src="/img/cc4.jpg" width={200} height={150} />
        </Carousel.Item>
        <Carousel.Item className={styles["block-img"]}>
          <Image alt="" src="/img/cc5.jpg" width={200} height={150} />
        </Carousel.Item>
        {/* <Carousel.Item className={styles["block-img"]}>
          <Image alt="" src="/img/cc6.jpg" width={200} height={150} />
        </Carousel.Item>
        <Carousel.Item className={styles["block-img"]}>
          <Image alt="" src="/img/cc7.jpg" width={200} height={150} />
        </Carousel.Item>
        <Carousel.Item className={styles["block-img"]}>
          <Image alt="" src="/img/cc8.jpg" width={200} height={150} />
        </Carousel.Item> */}
        {/* <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/cc9.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/cc10.jpg" width={300} height={200} />
          </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Index;
