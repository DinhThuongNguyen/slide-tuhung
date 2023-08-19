import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.product}>
      <div className={styles["product-content"]}>
        <h1 className={styles["product-title-header"]}>SẢN PHẨM</h1>
        <div className={styles["product-types"]}>
          <div className={styles["product-types-item"]}>
            <div className={styles["product-item-img"]}>
              <Image src="/img/thepcuon.jpg" alt="" layout="fill" fill />
            </div>
            <h2 className={styles["product-title-type"]}>Thép cuộn</h2>
          </div>
          <div className={styles["product-types-item"]}>
            <div className={styles["product-item-img"]}>
              <Image src="/img/thanhvan.jpg" alt="" layout="fill" fill />
            </div>
            <h2 className={styles["product-title-type"]}>Thanh vằn</h2>
          </div>
          <div className={styles["product-types-item"]}>
            <div className={styles["product-item-img"]}>
              <Image src="/img/phoithep.jpg" alt="" layout="fill" fill />
            </div>
            <h2 className={styles["product-title-type"]}>Phôi thép</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
