/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CropIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CropIcon(props: CropIconProps) {
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
          "M9.5 9.875H4.95c-2.165 0-2.825-.66-2.825-2.825V2.5c0-.205.17-.375.375-.375h4.55c2.165 0 2.825.66 2.825 2.825V9.5c0 .205-.17.375-.375.375m-6.625-7V7.05c0 1.745.33 2.075 2.075 2.075h4.175V4.95c0-1.745-.33-2.075-2.075-2.075z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M2.5 2.875a.38.38 0 0 1-.375-.375V1c0-.205.17-.375.375-.375s.375.17.375.375v1.5c0 .205-.17.375-.375.375"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M2.5 2.875H1A.38.38 0 0 1 .625 2.5c0-.205.17-.375.375-.375h1.5c.205 0 .375.17.375.375s-.17.375-.375.375m7 8.5A.38.38 0 0 1 9.125 11V9.5c0-.205.17-.375.375-.375s.375.17.375.375V11c0 .205-.17.375-.375.375"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M11 9.875H9.5a.38.38 0 0 1-.375-.375c0-.205.17-.375.375-.375H11c.205 0 .375.17.375.375s-.17.375-.375.375"
        }
      ></path>
    </svg>
  );
}

export default CropIcon;
/* prettier-ignore-end */
