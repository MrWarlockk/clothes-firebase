import Sidebar from "@component/components/sidebar";
import Sidebar_small from "@component/components/sidebar_small";
import styles from "../styles/clothes.module.css";
import classNames from "classnames";
import { useState } from "react";
import Modal from "../components/modal_add_clothing";

function Clothes() {
  const inverted_style = {
    filter: "invert(100%)",
  };

  const [selectedItem, setSelectedItem] = useState("item1");

  const handleItemClick = (item) => {
    console.log("Clicked item:", item);
    setSelectedItem(item);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isBlurred, setIsBlurred] = useState(false);
  function handleBlurClick() {
    setIsBlurred(true);
  }

  function handleUnblurClick() {
    setIsBlurred(false);
  }
  function FlexboxColors(props) {
    return (
      <div
        className={classNames(styles.flexbox_add_single_color, props.color)}
      ></div>
    );
  }
  return (
    <>
      <div className={isBlurred ? "blurred" : ""}>
        <div className={styles.background_white}></div>
        <div className="background_line1"></div>
        <div className="background_line2"></div>
        <div className="background_line3"></div>
        <div className={styles.scrollbar_shadow_firefox}></div>
        <div className={styles.background_icon}>
          <img src={"clothes/logo_green.svg"} alt="icon"></img>
        </div>
        <div className={styles.background_circle1}></div>
        <div className={styles.background_circle2}></div>
        <div className={styles.outfit_creator}>
          <div className={styles.outfit_creator_images}>
            <div className={styles.outfit_creator_images_container}>
              <img src={"clothes/hoodie.png"} alt="hoodie"></img>
            </div>
            <div className={styles.outfit_creator_images_container}>
              <img src={"clothes/shirt.png"} alt="shirt"></img>
            </div>
            <div className={styles.outfit_creator_images_container}>
              <img src={"clothes/pants.png"} alt="pants"></img>
            </div>
            <div className={styles.outfit_creator_images_container}>
              <img src={"clothes/shoes.png"} alt="shoes"></img>
            </div>
          </div>
          <div className={styles.outfit_creator_bottom}>
            <div className={styles.outfit_creator_save}>SAVE OUTFIT</div>
            <div className={styles.outfit_creator_generate}>
              <div className={styles.outfit_creator_generate_text}>
                GENERATE
              </div>
              <div className={styles.outfit_creator_generate_arrow_bg}>
                <span className={styles.outfit_creator_generate_arrow}>
                  &#9650;
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clothes_menu}>
          <div className={styles.clothes_menu_list}>
            <div className={styles.clothes_menu_list_filters}>
              <div className={styles.clothes_menu_list_filters_filter}>
                FILTER
                <span> &#9660;</span>
              </div>
              <div className={styles.clothes_menu_list_filters_color}>
                <div
                  className={styles.clothes_menu_list_filters_color_colors}
                ></div>
              </div>
              <div className={styles.clothes_menu_list_filters_cold}>
                <img
                  src={"clothes/snowflake-regular.svg"}
                  alt="snowflake"
                ></img>
              </div>
              <div className={styles.clothes_menu_list_filters_rainy}>
                <img src={"clothes/canadian-maple-leaf.svg"} alt="rainy"></img>
              </div>
              <div className={styles.clothes_menu_list_filters_sad}>
                <img src={"clothes/face-meh-regular.svg"} alt="sad"></img>
              </div>
              <div className={styles.clothes_menu_list_filters_happy}>
                <img src={"clothes/face-smile-regular.svg"} alt="happy"></img>
              </div>
            </div>
            <div className={styles.clothes_menu_list_images}>
              <div className={styles.clothes_menu_list_images_container}>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/hoodie.png"} alt="hoodie"></img>
                </div>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/shirt.png"} alt="shirt"></img>
                </div>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/pants.png"} alt="pants"></img>
                </div>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/shoes.png"} alt="shoes"></img>
                </div>
                <div className={styles.clothes_menu_list_img_container}>
                  <img src={"clothes/shoes.png"} alt="shoes"></img>
                </div>
                <div
                  role="button"
                  onClick={() => {
                    openModal();
                    handleBlurClick();
                  }}
                  className={classNames(
                    styles.clothes_menu_list_img_container,
                    styles.clothes_menu_list_add
                  )}
                >
                  <div>
                    <img src={"clothes/Union 1.svg"} alt="plus"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clothes_menu_type}>
            <div
              className={classNames(
                styles.clothes_menu_type_all,
                `sidebar-item ${selectedItem === "item1" ? "selected" : ""}`
              )}
              onClick={() => handleItemClick("item1")}
            >
              <div className={styles.sidebar_container}>
                <div className={styles.clothes_menu_type_all_flex}>
                  <img src={"clothes/hoodie1.svg"} alt="coat"></img>
                  <img src={"clothes/shirt1.svg"} alt="shirt"></img>
                  <img
                    style={inverted_style}
                    src={"clothes/jeans1.svg"}
                    alt="pants"
                  ></img>
                  <img src={"clothes/shoes1.svg"} alt="shoes"></img>
                </div>
              </div>
            </div>
            <div
              className={classNames(
                styles.clothes_menu_type_hoodie,
                `sidebar-item ${selectedItem === "item2" ? "selected" : ""}`
              )}
              onClick={() => handleItemClick("item2")}
            >
              <div className={styles.sidebar_container}>
                <img src={"clothes/hoodie1.svg"} alt="coat"></img>
              </div>
            </div>
            <div
              className={classNames(
                styles.clothes_menu_type_shirt,
                `sidebar-item ${selectedItem === "item3" ? "selected" : ""}`
              )}
              onClick={() => handleItemClick("item3")}
            >
              <div className={styles.sidebar_container}>
                <img src={"clothes/shirt1.svg"} alt="shirt"></img>
              </div>
            </div>
            <div
              className={classNames(
                styles.clothes_menu_type_pants,
                `sidebar-item ${selectedItem === "item4" ? "selected" : ""}`
              )}
              onClick={() => handleItemClick("item4")}
            >
              <div className={styles.sidebar_container}>
                <img src={"clothes/jeans1.svg"} alt="pants"></img>
              </div>
            </div>
            <div
              className={classNames(
                styles.clothes_menu_type_shoes,
                `sidebar-item ${selectedItem === "item5" ? "selected" : ""}`
              )}
              onClick={() => handleItemClick("item5")}
            >
              <div className={styles.sidebar_container}>
                <img src={"clothes/shoes1.svg"} alt="shoes"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="add_clothes_modal">
            <div className="flexbox_add_clothes_modal_1">
              <div className="flexbox_add_clothes_image">
                <img src={"cupboard/photo_img.svg"} alt="photo"></img>
              </div>
              <div className="flexbox_add_clothes_not_image">
                <div className="flexbox_add_clothes_modal_2">
                  <div className="flexbox_add_clothes_above_add_new"></div>
                  <div className="flexbox_add_clothes_add_new">
                    <p>ADD NEW</p>
                  </div>
                  <div className="flexbox_add_clothes_category">
                    <p>
                      CATEGORY
                      <span className="flexbox_add_clothes_expand">
                        &#9661;
                      </span>
                    </p>
                  </div>
                  <div className="flexbox_add_clothes_color_area">
                    <div className="flexbox_add_clothes_color_text">
                      <p>COLOR</p>
                    </div>
                    <div className="flexbox_add_clothes_modal_colors">
                      <FlexboxColors color="flexbox_add_black" />
                      <FlexboxColors color="flexbox_add_white" />
                      <FlexboxColors color="flexbox_add_red" />
                      <FlexboxColors color="flexbox_add_orange" />
                      <FlexboxColors color="flexbox_add_yellow" />
                      <FlexboxColors color="flexbox_add_green" />
                      <FlexboxColors color="flexbox_add_aqua" />
                      <FlexboxColors color="flexbox_add_blue" />
                      <FlexboxColors color="flexbox_add_purple" />
                      <FlexboxColors color="flexbox_add_pink" />
                      <FlexboxColors color="flexbox_add_brown" />
                      <FlexboxColors color="flexbox_add_beige" />
                    </div>
                  </div>
                  <div className="flexbox_add_clothes_modal_3">
                    <div className="flexbox_add_clothes_discard">
                      <p>DISCARD</p>
                    </div>
                    <div className="flexbox_add_clothes_save">
                      <p>SAVE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => {
                closeModal();
                handleUnblurClick();
              }}
              className="flexbox_add_clothes_close"
            >
              <img src="cupboard/x_icon.svg" alt="expand_icon"></img>
            </div>
          </div>
        </Modal>
      </div>
      {/*SIDEBAR*/}
      <Sidebar page_number={1} />
      <Sidebar_small page_number={1} />
    </>
  );
}

export default Clothes;
