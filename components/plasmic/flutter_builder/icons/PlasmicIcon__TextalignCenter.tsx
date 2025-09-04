/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextalignCenterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextalignCenterIcon(props: TextalignCenterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15.75 3.938H2.25a.567.567 0 0 1-.563-.563c0-.308.255-.563.563-.563h13.5c.308 0 .563.256.563.563a.567.567 0 0 1-.563.563m-3.195 3.75h-7.11a.567.567 0 0 1-.563-.563c0-.308.256-.563.563-.563h7.102c.308 0 .563.255.563.563a.56.56 0 0 1-.555.563m3.195 3.75H2.25a.567.567 0 0 1-.563-.563c0-.307.255-.563.563-.563h13.5c.308 0 .563.256.563.563a.567.567 0 0 1-.563.563m-3.195 3.75h-7.11a.567.567 0 0 1-.563-.563c0-.307.256-.563.563-.563h7.102c.308 0 .563.256.563.563a.56.56 0 0 1-.555.563"
        }
      ></path>
    </svg>
  );
}

export default TextalignCenterIcon;
/* prettier-ignore-end */
