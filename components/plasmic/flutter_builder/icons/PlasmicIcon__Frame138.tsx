/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame138IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame138Icon(props: Frame138IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M24.25 21.792a.583.583 0 0 1 0 1.166H11.416a.583.583 0 0 1 0-1.166zm-2.333-12.75a.5.5 0 0 1 .5.5v5.25a4.584 4.584 0 0 1-9.167 0v-5.25a.5.5 0 0 1 1 0v5.25a3.583 3.583 0 0 0 7.167 0v-5.25a.5.5 0 0 1 .5-.5"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame138Icon;
/* prettier-ignore-end */
