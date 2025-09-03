/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RowHorizontal2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RowHorizontal2Icon(props: RowHorizontal2IconProps) {
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
          "M5.513 15.167H2.82c-1.34 0-1.987-.62-1.987-1.9V2.733c0-1.28.654-1.9 1.987-1.9h2.693c1.34 0 1.987.62 1.987 1.9v10.534c0 1.28-.653 1.9-1.987 1.9M2.82 1.833c-.847 0-.987.227-.987.9v10.534c0 .673.14.9.987.9h2.693c.847 0 .987-.227.987-.9V2.733c0-.673-.14-.9-.987-.9zm10.36 13.334h-2.693c-1.34 0-1.987-.62-1.987-1.9V2.733c0-1.28.653-1.9 1.987-1.9h2.693c1.34 0 1.987.62 1.987 1.9v10.534c0 1.28-.654 1.9-1.987 1.9M10.487 1.833c-.847 0-.987.227-.987.9v10.534c0 .673.14.9.987.9h2.693c.847 0 .987-.227.987-.9V2.733c0-.673-.14-.9-.987-.9z"
        }
      ></path>
    </svg>
  );
}

export default RowHorizontal2Icon;
/* prettier-ignore-end */
