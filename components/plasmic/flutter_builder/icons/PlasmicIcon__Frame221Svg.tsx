/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame221SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame221SvgIcon(props: Frame221SvgIconProps) {
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
        x={"4"}
        y={"24.167"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        rx={"2.25"}
        transform={"rotate(-90 4 24.167)"}
      ></rect>

      <rect
        width={"1.083"}
        height={"4.333"}
        x={"10.834"}
        y={"22.75"}
        fill={"currentColor"}
        rx={".542"}
        transform={"rotate(-90 10.834 22.75)"}
      ></rect>
    </svg>
  );
}

export default Frame221SvgIcon;
/* prettier-ignore-end */
