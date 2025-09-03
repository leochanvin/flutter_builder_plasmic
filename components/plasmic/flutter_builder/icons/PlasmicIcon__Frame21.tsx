/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame21Icon(props: Frame21IconProps) {
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
          "M5.717 8.283a.4.4 0 0 0 .566 0l2.545-2.546a.4.4 0 0 0-.565-.565L6 7.434 3.737 5.172a.4.4 0 0 0-.565.565zM6 8h-.4.8z"
        }
      ></path>
    </svg>
  );
}

export default Frame21Icon;
/* prettier-ignore-end */
