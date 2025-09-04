/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaxWidthHeightSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaxWidthHeightSvgIcon(props: MaxWidthHeightSvgIconProps) {
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
          "M.857 11.143H0V.857h.857zm11.143 0h-.857V.857H12zM10.892 6 8.446 8.446l-.606-.607L9.25 6.43H2.749L4.16 7.84l-.606.607L1.108 6l2.446-2.447.606.608L2.75 5.57h6.502L7.84 4.16l.606-.608z"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default MaxWidthHeightSvgIcon;
/* prettier-ignore-end */
