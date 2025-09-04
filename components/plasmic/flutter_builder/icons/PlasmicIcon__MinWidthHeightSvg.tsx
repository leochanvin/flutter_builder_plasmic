/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MinWidthHeightSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MinWidthHeightSvgIcon(props: MinWidthHeightSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M8 11H7V0h1zM5.707 5.5 2.854 8.354l-.708-.708L3.793 6H0V5h3.793L2.146 3.354l.708-.708zm7.147-2.146L11.207 5H15v1h-3.793l1.646 1.646-.707.708L9.294 5.5l2.854-2.854z"
        }
      ></path>
    </svg>
  );
}

export default MinWidthHeightSvgIcon;
/* prettier-ignore-end */
