/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HashtagIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HashtagIcon(props: HashtagIconProps) {
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
          "M4 10.875h-.04a.376.376 0 0 1-.33-.415l1-9a.38.38 0 0 1 .415-.33c.205.025.355.21.33.415l-1 9a.38.38 0 0 1-.375.33m3 0h-.04a.376.376 0 0 1-.33-.415l1-9a.376.376 0 0 1 .745.085l-1 9a.38.38 0 0 1-.375.33"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M10.75 4.875h-9a.38.38 0 0 1-.375-.375c0-.205.17-.375.375-.375h9c.205 0 .375.17.375.375s-.17.375-.375.375m-.5 3h-9A.38.38 0 0 1 .875 7.5c0-.205.17-.375.375-.375h9c.205 0 .375.17.375.375s-.17.375-.375.375"
        }
      ></path>
    </svg>
  );
}

export default HashtagIcon;
/* prettier-ignore-end */
