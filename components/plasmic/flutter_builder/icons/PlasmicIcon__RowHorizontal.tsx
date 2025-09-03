/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RowHorizontalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RowHorizontalIcon(props: RowHorizontalIconProps) {
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
          "M4.135 11.375h-2.02c-1.005 0-1.49-.465-1.49-1.425v-7.9c0-.96.49-1.425 1.49-1.425h2.02c1.005 0 1.49.465 1.49 1.425v7.9c0 .96-.49 1.425-1.49 1.425m-2.02-10c-.635 0-.74.17-.74.675v7.9c0 .505.105.675.74.675h2.02c.635 0 .74-.17.74-.675v-7.9c0-.505-.105-.675-.74-.675zm7.77 10h-2.02c-1.005 0-1.49-.465-1.49-1.425v-7.9c0-.96.49-1.425 1.49-1.425h2.02c1.005 0 1.49.465 1.49 1.425v7.9c0 .96-.49 1.425-1.49 1.425m-2.02-10c-.635 0-.74.17-.74.675v7.9c0 .505.105.675.74.675h2.02c.635 0 .74-.17.74-.675v-7.9c0-.505-.105-.675-.74-.675z"
        }
      ></path>
    </svg>
  );
}

export default RowHorizontalIcon;
/* prettier-ignore-end */
