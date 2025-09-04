/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame75IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame75Icon(props: Frame75IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M.5 0a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0m15 0a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5m-4.06 10h-1.016l-.805-2.266H6.385L5.58 10H4.564l2.938-8h1zM6.69 6.875h2.624l-1.28-3.61H7.97l-1.282 3.61z"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame75Icon;
/* prettier-ignore-end */
