/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame70IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame70Icon(props: Frame70IconProps) {
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
          "M.6 10.8a.6.6 0 1 0 0 1.2h10.8a.6.6 0 0 0 0-1.2zM0 .6A.6.6 0 0 1 .6 0h10.8a.6.6 0 0 1 0 1.2H.6A.6.6 0 0 1 0 .6m7.2 4.2H4.8v2.4h2.4zM4.8 3.6a1.2 1.2 0 0 0-1.2 1.2v2.4a1.2 1.2 0 0 0 1.2 1.2h2.4a1.2 1.2 0 0 0 1.2-1.2V4.8a1.2 1.2 0 0 0-1.2-1.2z"
        }
        clipRule={"evenodd"}
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame70Icon;
/* prettier-ignore-end */
