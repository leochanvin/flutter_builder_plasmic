/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SidebarLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SidebarLeftIcon(props: SidebarLeftIconProps) {
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
          "M11.227 17.063h-4.5c-4.072 0-5.812-1.74-5.812-5.813v-4.5c0-4.072 1.74-5.813 5.813-5.813h4.5c4.072 0 5.812 1.74 5.812 5.813v4.5c0 4.072-1.732 5.813-5.813 5.813m-4.5-15c-3.457 0-4.687 1.23-4.687 4.687v4.5c0 3.457 1.23 4.688 4.688 4.688h4.5c3.457 0 4.687-1.23 4.687-4.688v-4.5c0-3.458-1.23-4.688-4.688-4.688z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M5.978 17.063a.567.567 0 0 1-.563-.563v-15c0-.308.255-.563.563-.563s.562.255.562.563v15a.56.56 0 0 1-.563.563zm5.249-5.581a.56.56 0 0 1-.397-.164l-1.92-1.92a.566.566 0 0 1 0-.796l1.92-1.92a.566.566 0 0 1 .795 0 .566.566 0 0 1 0 .795L10.11 9l1.523 1.523a.56.56 0 0 1-.405.96z"
        }
      ></path>
    </svg>
  );
}

export default SidebarLeftIcon;
/* prettier-ignore-end */
