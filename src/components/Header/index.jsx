import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import styles from "./styles.module.css";
import Image from "next/image";

const Index = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles["header-content"]}>
        <div className={styles["header-content-logo"]}>
          <Image
            src="/img/logo_1.png"
            width={240}
            height={120}
            alt=""
            objectFit="cover"
          />
        </div>
        <div className={styles.nav}>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/" className={styles["nav-link"]}>
                Trang chủ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styles["nav-link"]}>Giới thiệu</Nav.Link>
            </Nav.Item>
            <NavDropdown
              title={<span className={styles["nav-link"]}>Sản phẩm</span>}
              className={styles["nav-dropdown"]}
              show={show}
              onMouseMove={() => setShow(true)}
              onMouseOut={() => setShow(false)}
              placement="bottom-start"
            >
              <NavDropdown.Item className={styles["nav-link-dropdown"]}>
                Thép cuộn
              </NavDropdown.Item>
              <NavDropdown.Item className={styles["nav-link-dropdown"]}>
                Thanh vằn
              </NavDropdown.Item>
              <NavDropdown.Item className={styles["nav-link-dropdown"]}>
                Phôi thép
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link className={styles["nav-link"]}>Tuyển dụng</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={styles["nav-link"]}>Liên hệ</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Index;
