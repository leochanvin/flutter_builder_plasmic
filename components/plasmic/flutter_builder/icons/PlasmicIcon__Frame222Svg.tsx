/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame222SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame222SvgIcon(props: Frame222SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"22.333"}
        height={"18"}
        x={"1.833"}
        y={"4"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        rx={"2.25"}
      ></rect>

      <rect
        width={"1.083"}
        height={"4.333"}
        x={"3.25"}
        y={"10.833"}
        fill={"currentColor"}
        rx={".542"}
      ></rect>
    </svg>
  );
}

export default Frame222SvgIcon;
/* prettier-ignore-end */
