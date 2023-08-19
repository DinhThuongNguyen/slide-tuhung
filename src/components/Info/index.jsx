import React from "react";
import styles from "./styles.module.css";

const Index = () => {
  return (
    <div className={styles.info}>
      <div className={styles["info-block"]}>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1999211201137!2d108.17876397579198!3d16.055112139814373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142190f9ef417b5%3A0xab3357b59a2a6eec!2zQ8O0bmcgVHkgVG5oaCBUaMawxqFuZyBN4bqhaSBE4buLY2ggVuG7pSBU4bupIEjGsG5n!5e0!3m2!1svi!2sus!4v1692423126450!5m2!1svi!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="phuong giang"
            className="mb50"
          />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1999211201137!2d108.17876397579198!3d16.055112139814373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142190f9ef417b5%3A0xab3357b59a2a6eec!2zQ8O0bmcgVHkgVG5oaCBUaMawxqFuZyBN4bqhaSBE4buLY2ggVuG7pSBU4bupIEjGsG5n!5e0!3m2!1svi!2sus!4v1692423126450!5m2!1svi!2sus"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
        <div className={styles["info-block-content"]}>
          <div>
            <h2 className={styles["info-h2"]}>ĐỊA CHỈ CÔNG TY</h2>
            <h3 className={styles["info-h3"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
              <span>
                QL1A, TT. Sơn Tịnh, Sơn Tịnh, Quảng Ngãi, Việt Nam kế bên viện
                kiểm soát nhân dân huyện Sơn Tịnh
              </span>
            </h3>
            <h3 className={styles["info-h3"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
              </svg>
              <span>137 Trường Chinh, Q. Thanh Khê, TP. Đà Nẵng</span>
            </h3>
            <h3 className={styles["info-h3"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <span>0236 3721 345</span>
            </h3>
            <h3 className={styles["info-h3"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              <span>theptuhung@gmail.com</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
