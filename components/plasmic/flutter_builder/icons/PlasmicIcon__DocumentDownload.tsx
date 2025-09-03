/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DocumentDownloadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DocumentDownloadIcon(props: DocumentDownloadIconProps) {
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
          "M6 11.833a.5.5 0 0 1-.5-.5v-4c0-.273.227-.5.5-.5s.5.227.5.5v2.794l.48-.48a.503.503 0 0 1 .707 0 .503.503 0 0 1 0 .706l-1.334 1.334a.5.5 0 0 1-.353.146"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6 11.833a.5.5 0 0 1-.353-.146l-1.334-1.334a.503.503 0 0 1 0-.706.503.503 0 0 1 .707 0l1.333 1.333a.503.503 0 0 1 0 .707c-.1.1-.226.146-.353.146"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M10 15.167H6C2.38 15.167.833 13.62.833 10V6C.833 2.38 2.38.833 6 .833h3.333c.274 0 .5.227.5.5 0 .274-.226.5-.5.5H6C2.927 1.833 1.833 2.927 1.833 6v4c0 3.073 1.094 4.167 4.167 4.167h4c3.073 0 4.167-1.094 4.167-4.167V6.667c0-.274.226-.5.5-.5.273 0 .5.226.5.5V10c0 3.62-1.547 5.167-5.167 5.167"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M14.667 7.167H12C9.72 7.167 8.833 6.28 8.833 4V1.333c0-.2.12-.386.307-.46.187-.08.4-.033.547.107l5.333 5.333a.502.502 0 0 1-.353.854M9.833 2.54V4c0 1.72.447 2.167 2.167 2.167h1.46z"
        }
      ></path>
    </svg>
  );
}

export default DocumentDownloadIcon;
/* prettier-ignore-end */
