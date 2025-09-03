/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame67Icon(props: Frame67IconProps) {
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        d={
          "M1 1v.313c0 .517.42.937.938.937h8.124A.937.937 0 0 0 11 1.312V1M1 11v-.313a.937.937 0 0 1 .938-.937h8.124a.937.937 0 0 1 .938.938V11M3.5 6h5"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame67Icon;
/* prettier-ignore-end */
