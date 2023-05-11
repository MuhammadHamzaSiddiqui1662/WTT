import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "src/assets/images/logo.png";
import styles from "./NavBar.module.scss";
import { ROUTES } from "src/config/routesConfig";
import { RxHamburgerMenu } from "react-icons/rx";
import OutsideClickHandler from "react-outside-click-handler";

interface IProps {
  className?: CSSRule | string;
}

export const NavBar: FC<IProps> = ({ className }) => {
  const { pathname } = useLocation();
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container + " " + className}>
        <img className={styles.logo} src={logo} alt="logo" />
        <ul className={styles.routes}>
          {ROUTES.map((route) => (
            <li key={route.url} className={pathname === route.url ? styles.active : ""}>
              <Link to={route.url}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <RxHamburgerMenu className={styles.menuIcon} size={24} onClick={() => setMenuOpened(true)} />
      </div>
      {menuOpened && (
        <div className={styles.burgerWrapper}>
          <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
            <div className={styles.burgerMenu}>
              <h2 className={styles.heading}>Menu</h2>
              <ul className={styles.routes}>
                {ROUTES.map((route) => (
                  <li key={route.url} className={pathname === route.url ? styles.active : ""}>
                    <Link to={route.url} onClick={() => setMenuOpened(false)}>
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </OutsideClickHandler>
        </div>
      )}
    </div>
  );
};
