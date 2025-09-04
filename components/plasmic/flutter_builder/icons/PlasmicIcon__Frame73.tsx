/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame73IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame73Icon(props: Frame73IconProps) {
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
        fillRule={"evenodd"}
        d={
          "M3.2 5A.6.6 0 1 0 2 5v6a.6.6 0 0 0 1.2 0zM14 5a.6.6 0 1 0-1.2 0v6a.6.6 0 0 0 1.2 0zM4.4 2.6A.6.6 0 0 1 5 2h6a.6.6 0 0 1 0 1.2H5a.6.6 0 0 1-.6-.6M5 12.8A.6.6 0 1 0 5 14h6a.6.6 0 0 0 0-1.2z"
        }
        clipRule={"evenodd"}
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame73Icon;
/* prettier-ignore-end */
