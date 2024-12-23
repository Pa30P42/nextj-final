import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Main title</h2>
      <h2 className={style.title}>Main title</h2>
      <h2 className={style.title}>Main title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        sed repudiandae molestiae itaque, adipisci reiciendis blanditiis
        perspiciatis ratione vitae eos!
      </p>
    </div>
  );
};

export default Navbar;
