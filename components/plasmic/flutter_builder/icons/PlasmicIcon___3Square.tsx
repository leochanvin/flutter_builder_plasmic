/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _3SquareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _3SquareIcon(props: _3SquareIconProps) {
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
          "M4.685 11.375H2.31c-1.15 0-1.685-.535-1.685-1.685V7.315c0-1.155.535-1.69 1.685-1.69H3.5c.205 0 .375.17.375.375v1.185c0 .73.21.94.935.94H6c.205 0 .375.17.375.375v1.19c0 1.15-.535 1.685-1.69 1.685m-2.375-5c-.725 0-.935.21-.935.94V9.69c0 .725.21.935.935.935h2.375c.73 0 .94-.21.94-.935v-.815H4.81c-1.15 0-1.685-.535-1.685-1.69v-.81z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M7.185 8.875H4.81c-1.15 0-1.685-.535-1.685-1.69V4.81c0-1.15.535-1.685 1.685-1.685H6c.205 0 .375.17.375.375v1.185c0 .73.21.94.935.94H8.5c.205 0 .375.17.375.375v1.185c0 1.155-.535 1.69-1.69 1.69m-2.375-5c-.725 0-.935.21-.935.935v2.375c0 .73.21.94.935.94h2.375c.73 0 .94-.21.94-.94v-.81H7.31c-1.15 0-1.685-.535-1.685-1.69v-.81z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M9.685 6.375H7.31c-1.15 0-1.685-.535-1.685-1.69V2.31c0-1.15.535-1.685 1.685-1.685h2.375c1.155 0 1.69.535 1.69 1.685v2.375c0 1.155-.535 1.69-1.69 1.69m-2.375-5c-.725 0-.935.21-.935.935v2.375c0 .73.21.94.935.94h2.375c.73 0 .94-.21.94-.94V2.31c0-.725-.21-.935-.94-.935z"
        }
      ></path>
    </svg>
  );
}

export default _3SquareIcon;
/* prettier-ignore-end */
