/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Gallery2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Gallery2Icon(props: Gallery2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M10 15.167H6C2.38 15.167.833 13.62.833 10V6C.833 2.38 2.38.833 6 .833h4c3.62 0 5.167 1.547 5.167 5.167v4c0 3.62-1.547 5.167-5.167 5.167M6 1.833C2.927 1.833 1.833 2.927 1.833 6v4c0 3.073 1.094 4.167 4.167 4.167h4c3.073 0 4.167-1.094 4.167-4.167V6c0-3.073-1.094-4.167-4.167-4.167z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6 7.167A1.832 1.832 0 1 1 6 3.5a1.832 1.832 0 1 1 0 3.667M6 4.5a.834.834 0 1 0 0 1.667A.834.834 0 0 0 6 4.5m-4.22 8.633a.498.498 0 0 1-.273-.913l3.286-2.207a1.99 1.99 0 0 1 2.367.127l.22.193c.333.287.9.287 1.227 0l2.773-2.38c.707-.606 1.82-.606 2.533 0L15 8.887c.207.18.233.493.053.706a.504.504 0 0 1-.706.054l-1.087-.934c-.333-.286-.9-.286-1.233 0l-2.774 2.38c-.706.607-1.82.607-2.533 0L6.5 10.9a.99.99 0 0 0-1.153-.053L2.06 13.053a.54.54 0 0 1-.28.08"
        }
      ></path>
    </svg>
  );
}

export default Gallery2Icon;
/* prettier-ignore-end */
