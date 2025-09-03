/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TextIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TextIcon(props: TextIconProps) {
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
          "M10.665 3.96a.38.38 0 0 1-.375-.375v-.91a.66.66 0 0 0-.66-.66H2.37a.66.66 0 0 0-.66.66v.915c0 .205-.17.375-.375.375a.38.38 0 0 1-.375-.38v-.91c0-.78.635-1.41 1.41-1.41h7.26c.78 0 1.41.635 1.41 1.41v.915a.37.37 0 0 1-.375.37"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6 10.735a.38.38 0 0 1-.375-.375V2.055c0-.205.17-.375.375-.375s.375.17.375.375v8.305c0 .21-.17.375-.375.375"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M7.97 10.735H4.03a.38.38 0 0 1-.375-.375c0-.205.17-.375.375-.375h3.94c.205 0 .375.17.375.375s-.17.375-.375.375"
        }
      ></path>
    </svg>
  );
}

export default TextIcon;
/* prettier-ignore-end */
