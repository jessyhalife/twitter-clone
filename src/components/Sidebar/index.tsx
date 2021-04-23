import React from "react";
import styles from "./styles.module.scss";
import {
  FaBell,
  FaBookmark,
  FaEllipsisH,
  FaEnvelope,
  FaHome,
  FaListUl,
  FaPencilAlt,
  FaSearch,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <a href="">
        <FaTwitter size={24} color="#00acee" />
      </a>
      <ul>
        <li>
          <a href="">
            <FaHome size={24} color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <FaSearch size={24} color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <FaBell size={24} color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <FaEnvelope size={24} color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <FaBookmark size={24} color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <FaListUl size={24} color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <FaUser size={24} color="black" />
          </a>
        </li>
        <li>
          <a href="">
            <FaEllipsisH size={24} color="black" />
          </a>
        </li>
        <li>
          <button className={styles.btn__compose}>
            <FaPencilAlt size={16} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
