/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame200SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame200SvgIcon(props: Frame200SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M10.8 11.4a.6.6 0 0 0 1.2 0V.6a.6.6 0 1 0-1.2 0zM.6 12a.6.6 0 0 1-.6-.6V.6a.6.6 0 0 1 1.2 0v10.8a.6.6 0 0 1-.6.6m4.2-7.2v2.4h2.4V4.8zM3.6 7.2a1.2 1.2 0 0 0 1.2 1.2h2.4a1.2 1.2 0 0 0 1.2-1.2V4.8a1.2 1.2 0 0 0-1.2-1.2H4.8a1.2 1.2 0 0 0-1.2 1.2z"
        }
        clipRule={"evenodd"}
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame200SvgIcon;
/* prettier-ignore-end */
