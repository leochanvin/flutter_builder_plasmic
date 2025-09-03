/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Element3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Element3Icon(props: Element3IconProps) {
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
          "M13.18 7.5h-2.693C9.147 7.5 8.5 6.907 8.5 5.68V2.653c0-1.226.653-1.82 1.987-1.82h2.693c1.34 0 1.987.594 1.987 1.82v3.02c0 1.234-.654 1.827-1.987 1.827m-2.693-5.667c-.894 0-.987.254-.987.82v3.02c0 .574.093.82.987.82h2.693c.893 0 .987-.253.987-.82v-3.02c0-.573-.094-.82-.987-.82zm2.693 13.334h-2.693c-1.34 0-1.987-.654-1.987-1.987v-2.693c0-1.34.653-1.987 1.987-1.987h2.693c1.34 0 1.987.653 1.987 1.987v2.693c0 1.333-.654 1.987-1.987 1.987M10.487 9.5c-.787 0-.987.2-.987.987v2.693c0 .787.2.987.987.987h2.693c.787 0 .987-.2.987-.987v-2.693c0-.787-.2-.987-.987-.987zm-4.974-2H2.82C1.48 7.5.833 6.907.833 5.68V2.653c0-1.226.654-1.82 1.987-1.82h2.693c1.34 0 1.987.594 1.987 1.82v3.02C7.5 6.907 6.847 7.5 5.513 7.5M2.82 1.833c-.893 0-.987.254-.987.82v3.02c0 .574.094.82.987.82h2.693c.894 0 .987-.253.987-.82v-3.02c0-.573-.093-.82-.987-.82zm2.693 13.334H2.82c-1.34 0-1.987-.654-1.987-1.987v-2.693c0-1.34.654-1.987 1.987-1.987h2.693c1.34 0 1.987.653 1.987 1.987v2.693c0 1.333-.653 1.987-1.987 1.987M2.82 9.5c-.787 0-.987.2-.987.987v2.693c0 .787.2.987.987.987h2.693c.787 0 .987-.2.987-.987v-2.693c0-.787-.2-.987-.987-.987z"
        }
      ></path>
    </svg>
  );
}

export default Element3Icon;
/* prettier-ignore-end */
