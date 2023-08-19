import React from "react";
import styles from "./styles.module.css";
import Carousel from "react-grid-carousel";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.slide}>
      <div className={styles["slide-content"]}>
        <Carousel
          cols={4}
          rows={1}
          gap={20}
          autoplay={1800}
          showDots
          loop
          hideArrow={false}
        >
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh1.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh2.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh3.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh4.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh5.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh6.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh7.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh8.jpg" width={300} height={200} />
          </Carousel.Item>
          {/* <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh9.jpg" width={300} height={200} />
          </Carousel.Item>
          <Carousel.Item className={styles["block-img"]}>
            <Image alt="" src="/img/hinh10.jpg" width={300} height={200} />
          </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Index;
