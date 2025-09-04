/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame204SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame204SvgIcon(props: Frame204SvgIconProps) {
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
          "M6.728 8.836 9.32 13H7.784L5.9 9.976 4.136 13H2.612l2.592-4.164L2.6 4.66h1.536l1.896 3.048L7.808 4.66h1.524z"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame204SvgIcon;
/* prettier-ignore-end */
