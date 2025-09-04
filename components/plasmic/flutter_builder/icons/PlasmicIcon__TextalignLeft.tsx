/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextalignLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextalignLeftIcon(props: TextalignLeftIconProps) {
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
          "M15.75 3.938H2.25a.567.567 0 0 1-.563-.563c0-.308.255-.563.563-.563h13.5c.308 0 .563.256.563.563a.567.567 0 0 1-.563.563M9.352 7.687H2.25a.567.567 0 0 1-.563-.562c0-.308.255-.563.563-.563h7.102a.562.562 0 1 1 0 1.125m6.398 3.751H2.25a.567.567 0 0 1-.563-.563c0-.307.255-.563.563-.563h13.5c.308 0 .563.256.563.563a.567.567 0 0 1-.563.563m-6.398 3.75H2.25a.567.567 0 0 1-.563-.563c0-.307.255-.563.563-.563h7.102a.562.562 0 1 1 0 1.125z"
        }
      ></path>
    </svg>
  );
}

export default TextalignLeftIcon;
/* prettier-ignore-end */
