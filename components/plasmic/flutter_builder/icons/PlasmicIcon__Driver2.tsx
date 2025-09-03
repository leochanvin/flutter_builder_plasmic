/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Driver2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Driver2Icon(props: Driver2IconProps) {
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
          "M14.49 8.063H3.517A2.577 2.577 0 0 1 .945 5.49V3.518A2.577 2.577 0 0 1 3.517.945H14.49a2.577 2.577 0 0 1 2.572 2.573V5.49a2.577 2.577 0 0 1-2.572 2.573m-10.98-6c-.803 0-1.448.652-1.448 1.447v1.973c0 .802.653 1.447 1.448 1.447h10.972c.803 0 1.448-.652 1.448-1.447V3.51c0-.802-.653-1.447-1.448-1.447zm10.98 15H3.517A2.577 2.577 0 0 1 .945 14.49v-1.973a2.577 2.577 0 0 1 2.572-2.572H14.49a2.577 2.577 0 0 1 2.572 2.572v1.973a2.577 2.577 0 0 1-2.572 2.572zm-10.98-6c-.803 0-1.448.652-1.448 1.447v1.973c0 .802.653 1.447 1.448 1.447h10.972c.803 0 1.448-.652 1.448-1.447V12.51c0-.803-.653-1.447-1.448-1.447z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M4.5 5.813a.567.567 0 0 1-.563-.563v-1.5c0-.308.256-.563.563-.563.308 0 .563.256.563.563v1.5a.567.567 0 0 1-.563.563m3 0a.567.567 0 0 1-.563-.563v-1.5c0-.308.255-.563.563-.563s.563.256.563.563v1.5a.567.567 0 0 1-.563.563m-3 9a.567.567 0 0 1-.563-.563v-1.5c0-.307.256-.563.563-.563.308 0 .563.256.563.563v1.5a.567.567 0 0 1-.563.563m3 0a.567.567 0 0 1-.563-.563v-1.5c0-.307.255-.563.563-.563s.563.256.563.563v1.5a.567.567 0 0 1-.563.563m6-9.75h-3a.567.567 0 0 1-.563-.563c0-.308.256-.563.563-.563h3c.307 0 .563.256.563.563a.567.567 0 0 1-.563.563m0 9h-3a.567.567 0 0 1-.563-.563c0-.307.256-.563.563-.563h3c.307 0 .563.256.563.563a.567.567 0 0 1-.563.563"
        }
      ></path>
    </svg>
  );
}

export default Driver2Icon;
/* prettier-ignore-end */
