/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlutterLogoSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlutterLogoSvgIcon(props: FlutterLogoSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#fff"}
        stroke={"#FF511E"}
        d={
          "m20.993 11.572-5.96 5.96.353.354 5.607 5.614h-5.959l-5.97-5.97 5.97-5.958zM20.977.512 6.499 14.993 3.507 12 15.008.513z"
        }
      ></path>
    </svg>
  );
}

export default FlutterLogoSvgIcon;
/* prettier-ignore-end */
