/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Setting4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Setting4Icon(props: Setting4IconProps) {
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
          "M12.833 4.23h-3.5a.44.44 0 0 1-.437-.438.44.44 0 0 1 .437-.438h3.5a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437zm-9.333 0H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438H3.5a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M5.833 6.27a2.485 2.485 0 0 1-2.479-2.478 2.485 2.485 0 0 1 2.48-2.48 2.485 2.485 0 0 1 2.479 2.48 2.485 2.485 0 0 1-2.48 2.479zm0-4.082a1.603 1.603 0 1 0 0 3.208 1.603 1.603 0 1 0 0-3.208m7 8.458H10.5a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h2.333a.44.44 0 0 1 .438.437.44.44 0 0 1-.438.438m-8.166 0h-3.5a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h3.5a.44.44 0 0 1 .437.437.44.44 0 0 1-.437.438"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M8.167 12.688a2.485 2.485 0 0 1-2.48-2.48 2.485 2.485 0 0 1 2.48-2.479 2.485 2.485 0 0 1 2.479 2.48 2.485 2.485 0 0 1-2.48 2.479zm0-4.084a1.603 1.603 0 1 0 0 3.209 1.603 1.603 0 1 0 0-3.209"
        }
      ></path>
    </svg>
  );
}

export default Setting4Icon;
/* prettier-ignore-end */
