import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/angrycreative-brands.svg";
import styles from "./styles.module.scss";

const NavBar = () => {
  const [isOpened, setOpen] = useState(false);

  return (
    <nav className={styles.navbarWrapper}>
      <Logo className={styles.logo} />
      <ul className={styles.navItems}>
        <li className={styles.navItemWrapper}>
          <span className={styles.dashboard}>{/* <DashboardIcon /> */}</span>
          <label>Dashboard</label>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
