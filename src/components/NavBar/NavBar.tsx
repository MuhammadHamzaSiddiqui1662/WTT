import { FC, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "src/assets/images/logo.png";
import styles from "./NavBar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import OutsideClickHandler from "react-outside-click-handler";
import { useRoutes } from "src/hooks/useRoutes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "src/firebase";
import { Button } from "../Button/Button";

interface IProps {
  className?: CSSRule | string;
}

export const NavBar: FC<IProps> = ({ className }) => {
  const { pathname } = useLocation();
  const [menuOpened, setMenuOpened] = useState(false);
  const { routes } = useRoutes();
  const [user] = useAuthState(auth);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container + " " + className}>
        <img className={styles.logo} src={logo} alt="logo" />
        <ul className={styles.routes}>
          {routes.map(
            (route) =>
              route.visible && (
                <li key={route.url} className={pathname === route.url ? styles.active : ""}>
                  <Link to={route.url}>{route.name}</Link>
                </li>
              )
          )}
          {user && (
            <li>
              <Button className={styles.logout} onClick={() => auth.signOut()}>
                Logout
              </Button>
            </li>
          )}
        </ul>
        <RxHamburgerMenu className={styles.menuIcon} size={24} onClick={() => setMenuOpened(true)} />
      </div>
      {menuOpened && (
        <div className={styles.burgerWrapper}>
          <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
            <div className={styles.burgerMenu}>
              <h2 className={styles.heading}>Menu</h2>
              <ul className={styles.routes}>
                {routes.map(
                  (route) =>
                    route.visible && (
                      <li key={route.url} className={pathname === route.url ? styles.active : ""}>
                        <Link to={route.url} onClick={() => setMenuOpened(false)}>
                          {route.name}
                        </Link>
                      </li>
                    )
                )}
                {user && (
                  <li style={{ width: "100%" }}>
                    <Button fullwidth={true} onClick={() => auth.signOut()}>
                      Logout
                    </Button>
                  </li>
                )}
              </ul>
            </div>
          </OutsideClickHandler>
        </div>
      )}
    </div>
  );
};
