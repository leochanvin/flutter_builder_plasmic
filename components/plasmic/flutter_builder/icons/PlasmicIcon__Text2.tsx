/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Text2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Text2Icon(props: Text2IconProps) {
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
          "M14.22 5.28a.504.504 0 0 1-.5-.5V3.567a.88.88 0 0 0-.88-.88H3.16a.88.88 0 0 0-.88.88v1.22c0 .273-.227.5-.5.5a.505.505 0 0 1-.5-.507V3.567c0-1.04.847-1.88 1.88-1.88h9.68c1.04 0 1.88.846 1.88 1.88v1.22c0 .273-.22.493-.5.493"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M8 14.313a.504.504 0 0 1-.5-.5V2.74c0-.273.227-.5.5-.5s.5.227.5.5v11.073a.5.5 0 0 1-.5.5"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M10.627 14.313H5.373a.504.504 0 0 1-.5-.5c0-.273.227-.5.5-.5h5.254c.273 0 .5.227.5.5 0 .274-.227.5-.5.5"
        }
      ></path>
    </svg>
  );
}

export default Text2Icon;
/* prettier-ignore-end */
