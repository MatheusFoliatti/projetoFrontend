import React from "react";

import style from "./CardPerson.module.css"

//Fourth Method

export function CardPerson( { cover, avatar, name, office } ) {
  return ( 
    <>
      <div className={style.card}>
        <img
          src={cover}
          alt="Cover"
        />
        <img
          className={style.avatar}
          src={avatar}
          alt="Avatar"
        />
        <p className={style.p1}>{name}</p>
        <p className={style.p2}>{office}</p>
        <div className={style.stack}>
          <span>#JavaScript</span>
          <span>#React</span>
          <span>#ReactNative</span>
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#HUAWEI</span>
        </div>
      </div>
    </>
  );
}