/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Element4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Element4Icon(props: Element4IconProps) {
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
          "M13.18 9.167h-2.693c-1.34 0-1.987-.62-1.987-1.9V2.733c0-1.28.653-1.9 1.987-1.9h2.693c1.34 0 1.987.62 1.987 1.9v4.534c0 1.28-.654 1.9-1.987 1.9m-2.693-7.334c-.847 0-.987.227-.987.9v4.534c0 .673.14.9.987.9h2.693c.847 0 .987-.227.987-.9V2.733c0-.673-.14-.9-.987-.9zm2.693 13.334h-2.693c-1.34 0-1.987-.62-1.987-1.9v-1.2c0-1.28.653-1.9 1.987-1.9h2.693c1.34 0 1.987.62 1.987 1.9v1.2c0 1.28-.654 1.9-1.987 1.9m-2.693-4c-.847 0-.987.226-.987.9v1.2c0 .673.14.9.987.9h2.693c.847 0 .987-.227.987-.9v-1.2c0-.674-.14-.9-.987-.9zm-4.974 4H2.82c-1.34 0-1.987-.62-1.987-1.9V8.733c0-1.28.654-1.9 1.987-1.9h2.693c1.34 0 1.987.62 1.987 1.9v4.534c0 1.28-.653 1.9-1.987 1.9M2.82 7.833c-.847 0-.987.227-.987.9v4.534c0 .673.14.9.987.9h2.693c.847 0 .987-.227.987-.9V8.733c0-.673-.14-.9-.987-.9zm2.693-2H2.82c-1.34 0-1.987-.62-1.987-1.9v-1.2c0-1.28.654-1.9 1.987-1.9h2.693c1.34 0 1.987.62 1.987 1.9v1.2c0 1.28-.653 1.9-1.987 1.9m-2.693-4c-.847 0-.987.227-.987.9v1.2c0 .674.14.9.987.9h2.693c.847 0 .987-.226.987-.9v-1.2c0-.673-.14-.9-.987-.9z"
        }
      ></path>
    </svg>
  );
}

export default Element4Icon;
/* prettier-ignore-end */
