/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MobileSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MobileSvgIcon(props: MobileSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M16.25 24.646h-6.5c-4.777 0-6.229-1.452-6.229-6.23V7.584c0-4.777 1.452-6.229 6.23-6.229h6.5c4.777 0 6.228 1.452 6.228 6.23v10.833c0 4.777-1.451 6.229-6.229 6.229M9.75 2.979c-3.878 0-4.604.737-4.604 4.604v10.834c0 3.867.726 4.604 4.604 4.604h6.5c3.878 0 4.604-.737 4.604-4.604V7.583c0-3.867-.726-4.604-4.604-4.604z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M15.167 6.77h-4.333a.82.82 0 0 1-.813-.812c0-.444.368-.812.813-.812h4.333c.444 0 .812.368.812.812a.82.82 0 0 1-.812.813M13 21.515a2.492 2.492 0 1 1 0-4.984 2.492 2.492 0 0 1 0 4.984m0-3.37a.87.87 0 0 0-.867.867c0 .477.39.867.867.867a.87.87 0 0 0 .867-.867.87.87 0 0 0-.867-.866"
        }
      ></path>
    </svg>
  );
}

export default MobileSvgIcon;
/* prettier-ignore-end */
