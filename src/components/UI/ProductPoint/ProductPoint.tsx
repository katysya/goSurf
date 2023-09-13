import React, { useState } from 'react';
import './ProductPoint.scss';

interface IProductPoint {
  id: Number;
  position: Object;
  desc: String;
}

export default function ProductPoint({
  id,
  position,
  desc,
}: IProductPoint) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={
        active ? 'productPoint productPoint--active' : 'productPoint'
      }
      style={position}
    >
      <button
        className="productPoint__circle"
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className="productPoint__icon"></div>
      </button>
      <div className="productPoint__info">
        <div className="productPoint__desc">{desc}</div>
      </div>
    </div>
  );
}
