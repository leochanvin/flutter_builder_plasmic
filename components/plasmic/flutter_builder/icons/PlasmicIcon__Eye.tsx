/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EyeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EyeIcon(props: EyeIconProps) {
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
          "M8 10.887a2.888 2.888 0 0 1 0-5.774 2.888 2.888 0 0 1 0 5.774m0-4.774A1.89 1.89 0 0 0 6.113 8 1.89 1.89 0 0 0 8 9.887 1.89 1.89 0 0 0 9.887 8 1.89 1.89 0 0 0 8 6.113"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M8 14.013c-2.507 0-4.873-1.466-6.5-4.013-.707-1.1-.707-2.893 0-4 1.633-2.547 4-4.013 6.5-4.013S12.867 3.453 14.493 6c.707 1.1.707 2.893 0 4C12.867 12.547 10.5 14.013 8 14.013M8 2.987c-2.153 0-4.213 1.293-5.653 3.553-.5.78-.5 2.14 0 2.92 1.44 2.26 3.5 3.553 5.653 3.553s4.213-1.293 5.653-3.553c.5-.78.5-2.14 0-2.92-1.44-2.26-3.5-3.553-5.653-3.553"
        }
      ></path>
    </svg>
  );
}

export default EyeIcon;
/* prettier-ignore-end */
