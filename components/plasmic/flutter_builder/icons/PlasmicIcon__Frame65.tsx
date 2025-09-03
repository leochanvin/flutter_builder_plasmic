/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame65IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame65Icon(props: Frame65IconProps) {
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
        d={
          "M1.882 11A.89.89 0 0 1 1 10.118V7.176C1 3.776 3.776 1 7.176 1h2.942c.482 0 .882.4.882.882 0 .483-.4.883-.882.883H7.176a4.413 4.413 0 0 0-4.411 4.411v2.942c0 .482-.4.882-.883.882"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame65Icon;
/* prettier-ignore-end */
