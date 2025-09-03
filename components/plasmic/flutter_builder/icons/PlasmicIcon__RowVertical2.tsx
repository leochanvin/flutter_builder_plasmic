/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RowVertical2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RowVertical2Icon(props: RowVertical2IconProps) {
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
          "M13.267 15.167H2.733c-1.28 0-1.9-.654-1.9-1.987v-2.693c0-1.34.62-1.987 1.9-1.987h10.534c1.28 0 1.9.653 1.9 1.987v2.693c0 1.333-.62 1.987-1.9 1.987M2.733 9.5c-.673 0-.9.14-.9.987v2.693c0 .847.227.987.9.987h10.534c.673 0 .9-.14.9-.987v-2.693c0-.847-.227-.987-.9-.987zm10.534-2H2.733c-1.28 0-1.9-.653-1.9-1.987V2.82c0-1.34.62-1.987 1.9-1.987h10.534c1.28 0 1.9.654 1.9 1.987v2.693c0 1.334-.62 1.987-1.9 1.987M2.733 1.833c-.673 0-.9.14-.9.987v2.693c0 .847.227.987.9.987h10.534c.673 0 .9-.14.9-.987V2.82c0-.847-.227-.987-.9-.987z"
        }
      ></path>
    </svg>
  );
}

export default RowVertical2Icon;
/* prettier-ignore-end */
