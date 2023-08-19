import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  return (
    <div className={styles.tuhung}>
      <div className={styles["tuhung-content"]}>
        <div className={styles["tuhung-block"]}>
          <div className={styles["block-title"]}>
            <Link href="#" className={styles["block-title-link"]}>
              TIN TỨC - SỰ KIỆN
            </Link>
          </div>
          <div className={styles["tuhung-block-img"]}>
            <Image src="/img/tintuc.jpg" alt="" layout="fill" />
          </div>
          <div className={styles["tuhung-block-content"]}>
            <h1 className={styles["title-h1"]}>
              BỘ NHẬN DIỆN THƯƠNG HIỆU CÔNG TY CỔ PHẦN TỨ HƯNG
            </h1>
            <div className={styles["tuhung-block-hr"]} />
            <h2 className={styles["title-h2"]}>TIN TỨC & SỰ KIỆN CÔNG TY</h2>
            <ul>
              <li className={styles["title-h3"]}>
                ĐOÀN VIÊN LÊ TRUNG HIẾU VINH DỰ ĐẠT GIẢI THƯỞNG NGUYỄN ĐỨC CẢNH
                LẦN THỨ IV NĂM 2023
              </li>
              <li className={styles["title-h3"]}>
                LỄ KHAI MẠC GIẢI BÓNG ĐÁ MINI ASEAN STEEL LẦN THỨ 6 TRANH CÚP
                NIỀM TIN THÉP
              </li>
              <li className={styles["title-h3"]}>
                CÔNG TY CỔ PHẦN THÉP ASEAN TỔ CHỨC ĐẠI HỘI CÔNG ĐOÀN CƠ SỞ LẦN
                THỨ 3 NHIỆM KỲ 2023-2028
              </li>
              <li className={styles["title-h3"]}>
                KHAI XUÂN ĐẦU NĂM QUÝ MÃO 2023
              </li>
              <li className={styles["title-h3"]}>LỊCH NGHỈ TẾT QUÝ MÃO 2023</li>
            </ul>
            <div className="d-flex justify-content-end">
              <div className="d-flex align-items-center justify-content-center">
                <p className={styles.more}>XEM THÊM</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["tuhung-block"]}>
          <div className={styles["block-title"]}>
            <Link href="#" className={styles["block-title-link"]}>
              VỀ TỨ HƯNG
            </Link>
          </div>
          <div className={styles["tuhung-block-img"]}>
            <Image src="/img/ve tu hung.png" alt="" layout="fill" />
          </div>
          <div className={styles["tuhung-block-content"]}>
            <h1 className={styles["title-h1"]}>HOẠT ĐỘNG CỦA TỨ HƯNG</h1>
            <div className={styles["tuhung-block-hr"]} />
            <h2 className={styles["title-h2"]}>VỀ TỨ HƯNG</h2>
            <ul>
              <li className={styles["title-h3"]}>HOẠT ĐỘNG 1</li>
              <li className={styles["title-h3"]}>HOẠT ĐỘNG 2</li>
              <li className={styles["title-h3"]}>HOẠT ĐỘNG 3</li>
              <li className={styles["title-h3"]}>HOẠT ĐỘNG 4</li>
            </ul>
            <div className="d-flex justify-content-end">
              <div className="d-flex align-items-center justify-content-center">
                <p className={styles.more}>XEM THÊM</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
