/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame71Icon(props: Frame71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"18"}
        cy={"10"}
        r={"1"}
        fill={"currentColor"}
        opacity={".3"}
      ></circle>
    </svg>
  );
}

export default Frame71Icon;
/* prettier-ignore-end */
