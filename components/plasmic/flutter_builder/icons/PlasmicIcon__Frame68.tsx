/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame68IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame68Icon(props: Frame68IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"18"}
        cy={"8"}
        r={"1"}
        fill={"currentColor"}
        opacity={".3"}
      ></circle>
    </svg>
  );
}

export default Frame68Icon;
/* prettier-ignore-end */
