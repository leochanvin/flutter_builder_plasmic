/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Grid6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Grid6Icon(props: Grid6IconProps) {
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
          "M10 15.167H6C2.38 15.167.833 13.62.833 10V6C.833 2.38 2.38.833 6 .833h4c3.62 0 5.167 1.547 5.167 5.167v4c0 3.62-1.547 5.167-5.167 5.167M6 1.833C2.927 1.833 1.833 2.927 1.833 6v4c0 3.073 1.094 4.167 4.167 4.167h4c3.073 0 4.167-1.094 4.167-4.167V6c0-3.073-1.094-4.167-4.167-4.167z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6.667 15.167a.504.504 0 0 1-.5-.5V1.333c0-.273.226-.5.5-.5.273 0 .5.227.5.5v13.334c0 .273-.227.5-.5.5"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M14.667 6.167h-8a.504.504 0 0 1-.5-.5c0-.274.226-.5.5-.5h8c.273 0 .5.226.5.5 0 .273-.227.5-.5.5m0 4.666h-8a.504.504 0 0 1-.5-.5c0-.273.226-.5.5-.5h8c.273 0 .5.227.5.5 0 .274-.227.5-.5.5"
        }
      ></path>
    </svg>
  );
}

export default Grid6Icon;
/* prettier-ignore-end */
