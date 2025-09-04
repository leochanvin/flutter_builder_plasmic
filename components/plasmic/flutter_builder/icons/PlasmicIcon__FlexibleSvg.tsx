/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlexibleSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlexibleSvgIcon(props: FlexibleSvgIconProps) {
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

      <path
        fill={"currentColor"}
        d={
          "M3.5 9.9c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.54 3.5 7.66 3.5 9.9 3.5h1c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v13.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109h-1c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3.5 17.46 3.5 16.34 3.5 14.1zm13.997 5.35-2.84-2.818a.755.755 0 0 1-.003-1.06l2.818-2.84a.755.755 0 0 1 1.06-.004c.291.29.293.77.004 1.061l-2.29 2.307 2.308 2.29c.29.288.292.769.003 1.06a.755.755 0 0 1-1.06.004"
        }
      ></path>
    </svg>
  );
}

export default FlexibleSvgIcon;
/* prettier-ignore-end */
