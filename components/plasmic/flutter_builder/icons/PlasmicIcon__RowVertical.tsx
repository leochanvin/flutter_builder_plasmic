/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RowVerticalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RowVerticalIcon(props: RowVerticalIconProps) {
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
          "M9.95 11.375h-7.9c-.96 0-1.425-.49-1.425-1.49v-2.02c0-1.005.465-1.49 1.425-1.49h7.9c.96 0 1.425.49 1.425 1.49v2.02c0 1-.465 1.49-1.425 1.49m-7.9-4.25c-.505 0-.675.105-.675.74v2.02c0 .635.17.74.675.74h7.9c.505 0 .675-.105.675-.74v-2.02c0-.635-.17-.74-.675-.74zm7.9-1.5h-7.9c-.96 0-1.425-.49-1.425-1.49v-2.02c0-1.005.465-1.49 1.425-1.49h7.9c.96 0 1.425.49 1.425 1.49v2.02c0 1-.465 1.49-1.425 1.49m-7.9-4.25c-.505 0-.675.105-.675.74v2.02c0 .635.17.74.675.74h7.9c.505 0 .675-.105.675-.74v-2.02c0-.635-.17-.74-.675-.74z"
        }
      ></path>
    </svg>
  );
}

export default RowVerticalIcon;
/* prettier-ignore-end */
