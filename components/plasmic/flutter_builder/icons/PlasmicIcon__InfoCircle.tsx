/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InfoCircleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InfoCircleIcon(props: InfoCircleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M7 13.27A6.276 6.276 0 0 1 .73 7C.73 3.54 3.54.73 7 .73S13.27 3.54 13.27 7 10.46 13.27 7 13.27M7 1.605A5.4 5.4 0 0 0 1.604 7 5.4 5.4 0 0 0 7 12.396 5.4 5.4 0 0 0 12.396 7 5.4 5.4 0 0 0 7 1.604z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M7 8.02a.44.44 0 0 1-.438-.437V4.667A.44.44 0 0 1 7 4.229a.44.44 0 0 1 .438.438v2.916A.44.44 0 0 1 7 8.021zm0 1.897a.6.6 0 0 1-.222-.047.7.7 0 0 1-.192-.122.6.6 0 0 1-.123-.193.6.6 0 0 1-.046-.222.6.6 0 0 1 .046-.221.7.7 0 0 1 .123-.193.7.7 0 0 1 .192-.122.58.58 0 0 1 .444 0q.105.044.192.122a.7.7 0 0 1 .123.193.6.6 0 0 1 .046.221.6.6 0 0 1-.046.222.6.6 0 0 1-.123.193.7.7 0 0 1-.192.122.6.6 0 0 1-.222.047"
        }
      ></path>
    </svg>
  );
}

export default InfoCircleIcon;
/* prettier-ignore-end */
