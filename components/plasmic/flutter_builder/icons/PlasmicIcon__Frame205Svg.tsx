/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame205SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame205SvgIcon(props: Frame205SvgIconProps) {
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
          "M9.08 4.66 6.32 9.976V13H4.952V9.976L2.18 4.66h1.524l1.932 4.092L7.568 4.66z"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame205SvgIcon;
/* prettier-ignore-end */
