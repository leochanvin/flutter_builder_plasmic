/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RulerPenIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RulerPenIcon(props: RulerPenIconProps) {
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
          "M13.852 17.063h-3c-1.815 0-2.812-.998-2.812-2.813V3.75c0-1.815.998-2.813 2.813-2.813h3c1.815 0 2.812.998 2.812 2.813v10.5c0 1.815-1.005 2.813-2.813 2.813m-3-15c-1.184 0-1.687.502-1.687 1.687v10.5c0 1.185.503 1.688 1.688 1.688h3c1.184 0 1.687-.503 1.687-1.688V3.75c0-1.185-.502-1.688-1.688-1.688z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M12.352 5.063h-3.75A.567.567 0 0 1 8.04 4.5c0-.308.255-.563.563-.563h3.75c.307 0 .562.256.562.563a.567.567 0 0 1-.563.563m-.75 9h-3a.567.567 0 0 1-.562-.563c0-.307.255-.563.563-.563h3c.307 0 .562.256.562.563a.567.567 0 0 1-.563.563m.75-3q-.01 0 0 0l-3.757-.038a.557.557 0 0 1-.555-.57.56.56 0 0 1 .563-.555h.007l3.75.037c.308 0 .563.256.555.57a.565.565 0 0 1-.563.556m-1.5-3h-2.25A.567.567 0 0 1 8.04 7.5c0-.308.255-.563.563-.563h2.25c.307 0 .562.255.562.563a.567.567 0 0 1-.563.563M4.117 17.04c-.682 0-1.327-.42-1.77-1.155l-.615-1.02a3.2 3.2 0 0 1-.397-1.425V3.713A2.78 2.78 0 0 1 4.11.937a2.78 2.78 0 0 1 2.775 2.776v9.72a3.2 3.2 0 0 1-.397 1.425l-.616 1.02c-.427.742-1.072 1.162-1.755 1.162m0-14.977c-.907 0-1.65.742-1.65 1.65v9.72c0 .232.113.645.233.847l.615 1.02c.232.39.525.607.802.607.278 0 .57-.225.803-.607l.615-1.02c.12-.202.232-.615.232-.848v-9.72c0-.907-.742-1.65-1.65-1.65z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M6.33 5.813H1.897a.567.567 0 0 1-.562-.563c0-.308.255-.563.563-.563H6.33c.308 0 .563.255.563.563a.567.567 0 0 1-.563.563"
        }
      ></path>
    </svg>
  );
}

export default RulerPenIcon;
/* prettier-ignore-end */
