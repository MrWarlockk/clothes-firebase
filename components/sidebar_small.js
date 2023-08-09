import Link from "next/link";
import styles from "./styles/sidebar_small.module.css";
import classNames from "classnames";

export default function Sidebar_small(props) {
  return (
    <div className={styles.sidebar}>
      <Link className={styles.sidebar_link} href={"/clothes"}>
        <div
          className={classNames(styles.sidebar_clothes, {
            [styles.sidebar_clothes_on]: props.page_number === 1,
          })}
        >
          <img src={"sidebar/wieszak.svg"} alt="menu"></img>
        </div>
      </Link>
      <Link className={styles.sidebar_link} href={"/cupboard"}>
        <div
          className={classNames(styles.sidebar_cupboard, {
            [styles.sidebar_cupboard_on]: props.page_number === 2,
          })}
        >
          <img src={"sidebar/szafa.svg"} alt="menu"></img>
        </div>
      </Link>
      <Link className={styles.sidebar_link} href={"/account"}>
        <div
          className={classNames(styles.sidebar_account, {
            [styles.sidebar_account_on]: props.page_number === 3,
          })}
        >
          <img src={"sidebar/moje konto.svg"} alt="menu"></img>
        </div>
      </Link>
      <Link className={styles.sidebar_link} href={"/"}>
        <div className={styles.sidebar_logout}>
          <img src={"sidebar/wyloguj.svg"} alt="menu"></img>
        </div>
      </Link>
    </div>
  );
}
