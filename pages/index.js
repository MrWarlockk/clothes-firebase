import Link from "next/link";
import styles from "../styles/index.module.css";
import classNames from "classnames";
import Sidebar from "@component/components/sidebar";
import Sidebar_small from "@component/components/sidebar_small";
import { useEffect } from "react";
import initFirebase from "@component/firebase/initfirebase";
import { writeUserData } from "@component/firebase/firebasedb";
import { readUserData } from "@component/firebase/firebasedb";
import Register from "./api/clothes/register";

function Home() {
  //initFirebase();
  //writeUserData(2, "m3ciej", "m3iej@gmail.com", null);
  // readUserData(1);
  Register({ username: "m3ciej" });
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
      <div className={styles.flexbox_main}>
        <div className={styles.flexbox_main_img}>
          <img src="index/your_personal_wardrobe.svg" alt="main_image"></img>
        </div>
        <div className={styles.flexbox_main_text}>
          <p>
            Add your own images to your own personal cupboard!
            <br></br>
            Design your own outfits and save them later!
            <br></br>
            Never feel the need to think about what to wear ever again!
          </p>
        </div>
      </div>
      <div className={styles.flexbox_login}>
        <div
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_email
          )}
        >
          E-MAIL
        </div>
        <div
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_password
          )}
        >
          PASSWORD
        </div>
        <div
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_log_in
          )}
        >
          LOG IN
        </div>
        <div
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_text1
          )}
        >
          Forgot your password?
        </div>
        <Link
          className={classNames(
            styles.flexbox_login_item,
            styles.flexbox_login_text2
          )}
          href={"/register"}
        >
          Join Here
        </Link>
      </div>
      <div className={styles.images}>
        <img
          className={styles.image_left}
          src="index/login_img1.png"
          alt="clothes_image1"
        ></img>
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
