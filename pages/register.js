import Link from "next/link";
import styles from "../styles/register.module.css";
import classNames from "classnames";
import Sidebar from "@component/components/sidebar";
import Sidebar_small from "@component/components/sidebar_small";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const router = useRouter();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/api/clothes/register",
      query: { email, password, password2 },
    });
  };

  return (
    <>
      {/* BACKGROUND */}
      <div className={styles.background_circle1}></div>
      <div className={styles.background_circle2}></div>
      <div className={styles.image_right_block}></div>
      <div className={styles.background_left}>
        <div
          className={classNames(
            styles.background_left_item,
            styles.background_left_text1
          )}
        >
          ADD IT
        </div>
        <div
          className={classNames(
            styles.background_left_item,
            styles.background_left_text2
          )}
        >
          STYLE IT
        </div>
        <div
          className={classNames(
            styles.background_left_item,
            styles.background_left_text3
          )}
        >
          PLAY WITH IT
        </div>
        <div
          className={classNames(
            styles.background_left_item,
            styles.background_left_line
          )}
        ></div>
      </div>
      <div className={styles.background_up}>
        <div
          className={classNames(
            styles.background_up_item,
            styles.background_up_img
          )}
        >
          <img src="index/Logo.svg" alt="main_image"></img>
        </div>
        <div
          className={classNames(
            styles.background_up_item,
            styles.background_up_line1
          )}
        ></div>
        <div
          className={classNames(
            styles.background_up_item,
            styles.background_up_text
          )}
        >
          CHOOSE OUTFITS EFFORTLESSLY
        </div>
        <div
          className={classNames(
            styles.background_up_item,
            styles.background_up_line2
          )}
        ></div>
      </div>
      <div className={styles.background_up_line3}></div>
      <div className={styles.background_down_line}></div>
      <div className={styles.background_right_line}></div>
      {/* MAIN CONTENT */}

      <form onSubmit={handleSubmit} className={styles.flexbox_login}>
        <label
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_email
          )}
        >
          <input
            type="text"
            placeholder="E-MAIL"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_password
          )}
        >
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_password
          )}
        >
          <input
            type="password"
            placeholder="CONFIRM PASSWORD"
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
        </label>
        <button
          type="sumbit"
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_log_in
          )}
        >
          REGISTER
        </button>
        <div
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_text1
          )}
        >
          Forgot your password?
        </div>
        <div
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_text2
          )}
        >
          Join Here
        </div>
      </form>
      <div className={styles.images}>
        <div className={styles.images_middle}>
          <img
            className={styles.image_middle1}
            src="index/login_img2.png"
            alt="clothes_image2"
          ></img>

          <img
            className={styles.image_middle2}
            src="index/login_img3.png"
            alt="clothes_image3"
          ></img>

          <img
            className={styles.image_middle3}
            src="index/login_img4.png"
            alt="clothes_image4"
          ></img>
        </div>
        <div className={styles.images_right}>
          <img
            className={styles.image_right1}
            src="index/login_img5.png"
            alt="clothes_image5"
          ></img>
          <img
            className={styles.image_right2}
            src="index/login_img6.png"
            alt="clothes_image6"
          ></img>
        </div>
      </div>
      {<Sidebar page_number={0} />}
      {<Sidebar_small page_number={0} />}
    </>
  );
}

export default Home;
