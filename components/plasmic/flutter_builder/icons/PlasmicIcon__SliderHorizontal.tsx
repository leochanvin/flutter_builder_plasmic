/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SliderHorizontalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SliderHorizontalIcon(props: SliderHorizontalIconProps) {
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
          "M8.667 15.167H7.333c-2.2 0-3.526-.44-3.773-2.674-.04-.3-.06-.66-.06-1.16V4.667c0-.5.02-.86.067-1.18C3.807 1.273 5.133.833 7.333.833h1.334c2.2 0 3.526.44 3.773 2.674.04.3.06.66.06 1.16v6.666c0 .5-.02.86-.067 1.18-.24 2.214-1.566 2.654-3.766 2.654M7.333 1.833c-2.206 0-2.626.447-2.773 1.78-.04.287-.06.6-.06 1.054v6.666c0 .454.02.767.053 1.034.147 1.353.574 1.8 2.78 1.8h1.334c2.206 0 2.626-.447 2.773-1.78.04-.28.06-.6.06-1.054V4.667c0-.447-.02-.767-.053-1.034-.147-1.353-.574-1.8-2.78-1.8z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M3.78 12.947h-.227c-2.06 0-2.72-.66-2.72-2.727V5.78c0-2.067.66-2.727 2.72-2.727h.227c.113 0 .207 0 .313.007a.47.47 0 0 1 .354.187.5.5 0 0 1 .106.386A8 8 0 0 0 4.5 4.667v6.666c0 .454.02.767.053 1.034a.5.5 0 0 1-.46.573c-.106.007-.2.007-.313.007m-.267-8.894c-1.46.007-1.68.24-1.68 1.727v4.44c0 1.487.22 1.72 1.68 1.727-.006-.18-.013-.38-.013-.614V4.667c0-.234.007-.434.013-.614m8.934 8.894h-.227c-.113 0-.207 0-.313-.007a.47.47 0 0 1-.354-.187.5.5 0 0 1-.106-.386c.04-.267.053-.587.053-1.034V4.667c0-.447-.02-.767-.053-1.034a.5.5 0 0 1 .46-.573c.106-.007.2-.007.313-.007h.227c2.06 0 2.72.66 2.72 2.727v4.44c0 2.067-.66 2.727-2.72 2.727m.04-8.894c.006.18.013.38.013.614v6.666c0 .234-.007.434-.013.614 1.46-.007 1.68-.24 1.68-1.727V5.78c0-1.487-.22-1.72-1.68-1.727"
        }
      ></path>
    </svg>
  );
}

export default SliderHorizontalIcon;
/* prettier-ignore-end */
