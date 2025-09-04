/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FolderOpenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FolderOpenIcon(props: FolderOpenIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.717 17.063H4.284c-2.55 0-2.686-1.403-2.798-2.535l-.3-3.758a2.84 2.84 0 0 1 .607-2.04 2.8 2.8 0 0 1 2.19-1.043h10.035c.833 0 1.62.368 2.153 1.006l.127.172c.405.555.585 1.23.518 1.912l-.3 3.743c-.113 1.14-.248 2.543-2.798 2.543zm-9.735-8.25a1.67 1.67 0 0 0-1.297.614l-.053.053c-.24.307-.367.742-.322 1.192l.3 3.758c.105 1.095.15 1.508 1.672 1.508h9.435c1.53 0 1.568-.413 1.673-1.516l.3-3.757a1.64 1.64 0 0 0-.375-1.23l-.075-.09a1.67 1.67 0 0 0-1.23-.533H3.983z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M15.375 9.165a.567.567 0 0 1-.563-.563V7.26c0-2.235-.39-2.625-2.624-2.625h-1.913c-.848 0-1.14-.3-1.463-.727l-.967-1.283c-.33-.435-.405-.54-1.08-.54h-.952c-2.235 0-2.625.39-2.625 2.625v3.862a.567.567 0 0 1-.563.563.567.567 0 0 1-.563-.563V4.71c0-2.873.878-3.75 3.75-3.75h.96c1.155 0 1.515.375 1.98.99l.96 1.275c.203.27.218.285.57.285h1.913c2.873 0 3.75.878 3.75 3.75v1.342a.58.58 0 0 1-.57.563m-4.447 4.148H7.072a.567.567 0 0 1-.562-.563c0-.307.255-.563.563-.563h3.854a.562.562 0 1 1 0 1.125z"
        }
      ></path>
    </svg>
  );
}

export default FolderOpenIcon;
/* prettier-ignore-end */
