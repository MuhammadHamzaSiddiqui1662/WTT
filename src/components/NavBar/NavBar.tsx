import { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "src/assets/images/logo.png";
import logo2 from "src/assets/images/logo_azur.png";
import styles from "./NavBar.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import OutsideClickHandler from "react-outside-click-handler";
import { useRoutes } from "src/hooks/useRoutes";
import { Button } from "../Button/Button";
import { useFirebase } from "src/hooks/useFirebase";

interface IProps {
  className?: CSSRule | string;
}

export const NavBar: FC<IProps> = ({ className }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { routes } = useRoutes();
  const { auth, user } = useFirebase();
  return (
    <div className={styles.wrapper}>
      <div className={styles.container + " " + className}>
        <div className={styles.logos}>
          <img className={styles.logo1} src={logo} alt="wtt_logo" />
          <img className={styles.logo2} src={logo2} alt="azur_logo" />
        </div>
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
              <Button
                className={styles.logout}
                onClick={() => {
                  auth.signOut();
                  setMenuOpened(false);
                  navigate("/login");
                }}
              >
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
                    <Button
                      fullwidth={true}
                      onClick={() => {
                        auth.signOut();
                        setMenuOpened(false);
                        navigate("/login");
                      }}
                    >
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
