/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame203SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame203SvgIcon(props: Frame203SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M9.56 4.66V13H8.192V9.352H4.268V13H2.9V4.66h1.368v3.576h3.924V4.66z"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame203SvgIcon;
/* prettier-ignore-end */
