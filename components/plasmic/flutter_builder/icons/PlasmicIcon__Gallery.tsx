/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GalleryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GalleryIcon(props: GalleryIconProps) {
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
          "M7.5 11.375h-3c-2.715 0-3.875-1.16-3.875-3.875v-3C.625 1.785 1.785.625 4.5.625h3c2.715 0 3.875 1.16 3.875 3.875v3c0 2.715-1.16 3.875-3.875 3.875m-3-10c-2.305 0-3.125.82-3.125 3.125v3c0 2.305.82 3.125 3.125 3.125h3c2.305 0 3.125-.82 3.125-3.125v-3c0-2.305-.82-3.125-3.125-3.125z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M4.5 5.375a1.374 1.374 0 1 1-.002-2.748A1.374 1.374 0 0 1 4.5 5.375m0-2a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25M1.335 9.85a.373.373 0 0 1-.205-.685L3.595 7.51a1.49 1.49 0 0 1 1.775.095l.165.145c.25.215.675.215.92 0l2.08-1.785a1.49 1.49 0 0 1 1.9 0l.815.7c.155.135.175.37.04.53a.38.38 0 0 1-.53.04l-.815-.7a.744.744 0 0 0-.925 0L6.94 8.32a1.49 1.49 0 0 1-1.9 0l-.165-.145a.74.74 0 0 0-.865-.04L1.545 9.79a.4.4 0 0 1-.21.06"
        }
      ></path>
    </svg>
  );
}

export default GalleryIcon;
/* prettier-ignore-end */
