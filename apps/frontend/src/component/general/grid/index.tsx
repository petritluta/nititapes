import React from "react";
import style from "./grid.module.css";

const Grid = ({
  no,
  children,
  gap = 10,
}: {
  no: number;
  children: any;
  gap?: number;
}) => {
  return (
    <div
      className={`${style.grid} ${style[`grid-${no}`]}`}
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
};

export default Grid;
