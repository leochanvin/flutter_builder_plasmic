/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame74IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame74Icon(props: Frame74IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.5 13a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1zm-3.06-2H9.424l-.805-2.266H5.385L4.58 11H3.564l2.938-8h1zM5.69 7.875h2.624l-1.28-3.61H6.97l-1.282 3.61zM13.5 0a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1z"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame74Icon;
/* prettier-ignore-end */
