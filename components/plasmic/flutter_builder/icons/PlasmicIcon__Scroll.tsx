/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScrollIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScrollIcon(props: ScrollIconProps) {
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
          "M11.25 17.063h-4.5c-4.072 0-5.813-1.74-5.813-5.813v-4.5C.938 2.678 2.678.937 6.75.937h4.5c4.072 0 5.813 1.74 5.813 5.813v4.5c0 4.072-1.74 5.813-5.813 5.813m-4.5-15c-3.458 0-4.688 1.23-4.688 4.687v4.5c0 3.457 1.23 4.688 4.688 4.688h4.5c3.457 0 4.688-1.23 4.688-4.688v-4.5c0-3.458-1.23-4.688-4.688-4.688z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M7.2 11.835a.56.56 0 0 1-.397-.165L4.934 9.803a1.127 1.127 0 0 1 0-1.598l1.868-1.867a.566.566 0 0 1 .795 0 .566.566 0 0 1 0 .795L5.73 9l1.867 1.875a.566.566 0 0 1 0 .795.6.6 0 0 1-.397.165m3.6 0a.56.56 0 0 1-.398-.165.566.566 0 0 1 0-.795L12.27 9l-1.867-1.875a.566.566 0 0 1 0-.795.566.566 0 0 1 .794 0l1.868 1.867a1.127 1.127 0 0 1 0 1.598l-1.867 1.867a.55.55 0 0 1-.398.173"
        }
      ></path>
    </svg>
  );
}

export default ScrollIcon;
/* prettier-ignore-end */
