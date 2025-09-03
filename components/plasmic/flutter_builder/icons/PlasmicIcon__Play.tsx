/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlayIcon(props: PlayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M6.558 17.733a3.65 3.65 0 0 1-1.833-.475c-1.3-.75-2.017-2.275-2.017-4.283V7.033c0-2.016.717-3.533 2.017-4.283s2.975-.608 4.725.4l5.142 2.967c1.741 1.008 2.708 2.391 2.708 3.891s-.958 2.884-2.708 3.892L9.45 16.867c-1.008.575-1.992.866-2.892.866m0-14.216c-.45 0-.85.1-1.208.308-.9.517-1.392 1.658-1.392 3.208v5.934c0 1.55.492 2.683 1.392 3.208s2.133.375 3.475-.4l5.142-2.967c1.341-.775 2.083-1.766 2.083-2.808s-.742-2.033-2.083-2.808L8.825 4.225c-.817-.467-1.583-.708-2.267-.708"
        }
      ></path>
    </svg>
  );
}

export default PlayIcon;
/* prettier-ignore-end */
