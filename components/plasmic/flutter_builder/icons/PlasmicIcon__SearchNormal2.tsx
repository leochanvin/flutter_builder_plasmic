/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchNormal2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchNormal2Icon(props: SearchNormal2IconProps) {
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
          "M5.5 10.375A4.88 4.88 0 0 1 .625 5.5 4.88 4.88 0 0 1 5.5.625 4.88 4.88 0 0 1 10.375 5.5 4.88 4.88 0 0 1 5.5 10.375m0-9A4.13 4.13 0 0 0 1.375 5.5 4.13 4.13 0 0 0 5.5 9.625 4.13 4.13 0 0 0 9.625 5.5 4.13 4.13 0 0 0 5.5 1.375m4.58 10.02a1 1 0 0 1-.115-.01c-.235-.03-.66-.19-.9-.905-.125-.375-.08-.75.125-1.035S9.74 9 10.135 9c.51 0 .91.195 1.09.54s.13.785-.155 1.21c-.355.535-.74.645-.99.645m-.3-1.15c.085.26.205.39.285.4s.23-.085.385-.31c.145-.215.155-.37.12-.44s-.175-.145-.435-.145c-.155 0-.27.05-.335.135-.06.085-.07.215-.02.36"
        }
      ></path>
    </svg>
  );
}

export default SearchNormal2Icon;
/* prettier-ignore-end */
