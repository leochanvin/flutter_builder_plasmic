/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame22Icon(props: Frame22IconProps) {
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
          "M5.646 8.354a.5.5 0 0 0 .708 0l3.182-3.182a.5.5 0 1 0-.708-.707L6 7.293 3.172 4.465a.5.5 0 1 0-.708.707zM6 8h-.5 1z"
        }
      ></path>
    </svg>
  );
}

export default Frame22Icon;
/* prettier-ignore-end */
