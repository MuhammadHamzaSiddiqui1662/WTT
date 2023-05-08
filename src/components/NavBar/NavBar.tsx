import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "src/assets/images/logo.png";
import styles from "./NavBar.module.scss";
import { ROUTES } from "src/config/routesConfig";

interface IProps {
  className?: CSSRule | string;
}

export const NavBar: FC<IProps> = ({ className }) => {
  const { pathname } = useLocation();
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
      </div>
    </div>
  );
};
