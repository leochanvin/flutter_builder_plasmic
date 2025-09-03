/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Plus1512SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Plus1512SvgrepoComSvgIcon(
  props: Plus1512SvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 -.5 21 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={"M21 9v2h-9.45v9h-2.1v-9H0V9h9.45V0h2.1v9z"}
      ></path>
    </svg>
  );
}

export default Plus1512SvgrepoComSvgIcon;
/* prettier-ignore-end */
