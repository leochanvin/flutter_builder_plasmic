/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DocumentCodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DocumentCodeIcon(props: DocumentCodeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M13.333 18.958H6.667c-3.042 0-4.792-1.75-4.792-4.791V5.833c0-3.041 1.75-4.791 4.792-4.791h6.666c3.042 0 4.792 1.75 4.792 4.791v8.334c0 3.041-1.75 4.791-4.792 4.791M6.667 2.292c-2.384 0-3.542 1.158-3.542 3.541v8.334c0 2.383 1.158 3.541 3.542 3.541h6.666c2.384 0 3.542-1.158 3.542-3.541V5.833c0-2.383-1.158-3.541-3.542-3.541z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M15.417 7.708H13.75a2.29 2.29 0 0 1-2.292-2.291V3.75a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v1.667c0 .575.467 1.041 1.042 1.041h1.667a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625m-7.084 7.084a.62.62 0 0 1-.441-.184l-1.667-1.666a.63.63 0 0 1 0-.884l1.667-1.666a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883L7.55 12.5l1.225 1.225a.63.63 0 0 1 0 .883.62.62 0 0 1-.442.184m3.334 0a.62.62 0 0 1-.442-.184.63.63 0 0 1 0-.883L12.45 12.5l-1.225-1.225a.63.63 0 0 1 0-.883.63.63 0 0 1 .883 0l1.667 1.666a.63.63 0 0 1 0 .884l-1.667 1.666a.62.62 0 0 1-.441.184"
        }
      ></path>
    </svg>
  );
}

export default DocumentCodeIcon;
/* prettier-ignore-end */
