/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MonitorSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MonitorSvgIcon(props: MonitorSvgIconProps) {
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
          "M19.023 19.468H6.977c-4.312 0-5.623-1.311-5.623-5.623V6.977c0-4.312 1.31-5.623 5.623-5.623h12.035c4.312 0 5.623 1.311 5.623 5.623v6.857c.01 4.323-1.3 5.634-5.612 5.634M6.977 2.979c-3.402 0-3.998.596-3.998 3.998v6.857c0 3.402.596 3.998 3.997 3.998h12.036c3.402 0 3.998-.596 3.998-3.998V6.977c0-3.402-.596-3.998-3.998-3.998z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M13 24.646a.82.82 0 0 1-.812-.813v-5.178c0-.444.368-.812.812-.812s.813.368.813.812v5.178a.82.82 0 0 1-.813.813m10.833-9.75H2.167a.82.82 0 0 1-.813-.813c0-.444.368-.812.813-.812h21.666c.444 0 .813.368.813.812a.82.82 0 0 1-.813.813"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M17.875 24.646h-9.75a.82.82 0 0 1-.812-.813c0-.444.368-.812.812-.812h9.75c.444 0 .813.368.813.812a.82.82 0 0 1-.813.813"
        }
      ></path>
    </svg>
  );
}

export default MonitorSvgIcon;
/* prettier-ignore-end */
