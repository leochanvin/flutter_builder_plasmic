/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaximizeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaximizeIcon(props: MaximizeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M1.667 8.125a.63.63 0 0 1-.625-.625V5.417a4.385 4.385 0 0 1 4.375-4.375H7.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625H5.417a3.126 3.126 0 0 0-3.125 3.125V7.5a.63.63 0 0 1-.625.625m16.666 0a.63.63 0 0 1-.625-.625V5.417c0-1.725-1.4-3.125-3.125-3.125H12.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.083a4.385 4.385 0 0 1 4.375 4.375V7.5a.63.63 0 0 1-.625.625m-3.75 10.833h-1.25a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h1.25c1.725 0 3.125-1.4 3.125-3.125v-1.25a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v1.25a4.385 4.385 0 0 1-4.375 4.375m-7.083 0H5.417a4.385 4.385 0 0 1-4.375-4.375V12.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.083c0 1.725 1.4 3.125 3.125 3.125H7.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625m7.5-6.666a.63.63 0 0 1-.625-.625v-1.042h-8.75v1.042a.63.63 0 0 1-.625.625.63.63 0 0 1-.625-.625V8.333A.63.63 0 0 1 5 7.708a.63.63 0 0 1 .625.625v1.042h8.75V8.333A.63.63 0 0 1 15 7.708a.63.63 0 0 1 .625.625v3.334a.63.63 0 0 1-.625.625"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M11.667 15.625H8.333A.63.63 0 0 1 7.708 15a.63.63 0 0 1 .625-.625h1.042v-8.75H8.333A.63.63 0 0 1 7.708 5a.63.63 0 0 1 .625-.625h3.334a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625h-1.042v8.75h1.042a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"
        }
      ></path>
    </svg>
  );
}

export default MaximizeIcon;
/* prettier-ignore-end */
