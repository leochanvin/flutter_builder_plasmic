/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame66Icon(props: Frame66IconProps) {
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
        fillRule={"evenodd"}
        d={
          "M1.2 3A.6.6 0 1 0 0 3v6a.6.6 0 1 0 1.2 0zM12 3a.6.6 0 1 0-1.2 0v6A.6.6 0 1 0 12 9zM2.4.6A.6.6 0 0 1 3 0h6a.6.6 0 1 1 0 1.2H3a.6.6 0 0 1-.6-.6M3 10.8A.6.6 0 1 0 3 12h6a.6.6 0 1 0 0-1.2z"
        }
        clipRule={"evenodd"}
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame66Icon;
/* prettier-ignore-end */
