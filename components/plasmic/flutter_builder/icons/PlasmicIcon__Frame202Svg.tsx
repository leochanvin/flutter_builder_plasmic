/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame202SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame202SvgIcon(props: Frame202SvgIconProps) {
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
          "M11.76 4.66 9.288 13H7.74L5.988 6.688 4.128 13l-1.536.012L.228 4.66H1.68l1.728 6.792L5.28 4.66h1.536l1.74 6.756 1.74-6.756z"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame202SvgIcon;
/* prettier-ignore-end */
