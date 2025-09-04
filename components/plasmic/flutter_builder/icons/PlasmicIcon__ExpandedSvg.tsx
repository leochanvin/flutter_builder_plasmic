/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandedSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandedSvgIcon(props: ExpandedSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <rect
        width={"20.5"}
        height={"20.5"}
        x={"1.75"}
        y={"1.75"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        rx={"5.25"}
      ></rect>

      <rect
        width={"17"}
        height={"17"}
        x={"3.5"}
        y={"3.5"}
        fill={"currentColor"}
        rx={"4"}
      ></rect>
    </svg>
  );
}

export default ExpandedSvgIcon;
/* prettier-ignore-end */
