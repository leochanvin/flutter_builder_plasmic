/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Send2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Send2Icon(props: Send2IconProps) {
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
          "M9.48 14.42c-.787 0-1.9-.553-2.78-3.2l-.48-1.44-1.44-.48c-2.64-.88-3.193-1.993-3.193-2.78 0-.78.553-1.9 3.193-2.787l5.66-1.886c1.413-.474 2.593-.334 3.32.386s.867 1.907.393 3.32l-1.886 5.66c-.887 2.654-2 3.207-2.787 3.207M5.093 4.687C3.24 5.307 2.58 6.04 2.58 6.52s.66 1.213 2.513 1.827l1.68.56a.49.49 0 0 1 .314.313l.56 1.68C8.26 12.753 9 13.413 9.48 13.413s1.213-.66 1.833-2.513L13.2 5.24c.34-1.027.28-1.867-.153-2.3s-1.274-.487-2.294-.147z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6.74 9.6a.5.5 0 0 1-.353-.147.503.503 0 0 1 0-.706l2.386-2.394a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .707L7.093 9.453a.48.48 0 0 1-.353.147"
        }
      ></path>
    </svg>
  );
}

export default Send2Icon;
/* prettier-ignore-end */
