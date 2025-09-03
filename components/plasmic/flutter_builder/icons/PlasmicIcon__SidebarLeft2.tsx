/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SidebarLeft2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SidebarLeft2Icon(props: SidebarLeft2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M9.98 15.167h-4C2.36 15.167.813 13.62.813 10V6C.813 2.38 2.36.833 5.98.833h4C13.6.833 15.147 2.38 15.147 6v4c0 3.62-1.54 5.167-5.167 5.167m-4-13.334C2.907 1.833 1.813 2.927 1.813 6v4c0 3.073 1.094 4.167 4.167 4.167h4c3.073 0 4.167-1.094 4.167-4.167V6c0-3.073-1.094-4.167-4.167-4.167z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M5.313 15.167a.504.504 0 0 1-.5-.5V1.333c0-.273.227-.5.5-.5.274 0 .5.227.5.5v13.334a.5.5 0 0 1-.5.5m4.667-4.96a.5.5 0 0 1-.353-.147L7.92 8.353a.503.503 0 0 1 0-.706L9.627 5.94a.503.503 0 0 1 .706 0 .503.503 0 0 1 0 .707L8.987 8l1.353 1.353a.499.499 0 0 1-.36.853z"
        }
      ></path>
    </svg>
  );
}

export default SidebarLeft2Icon;
/* prettier-ignore-end */
