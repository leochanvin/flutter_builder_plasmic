/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame139IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame139Icon(props: Frame139IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 36 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M21.668 17.5a.27.27 0 0 1 .24.138q.306.554.306 1.316 0 1.01-.543 1.816-.543.8-1.553 1.268-1.01.462-2.41.462-1.323 0-2.295-.419-.971-.424-1.534-1.175a3.2 3.2 0 0 1-.533-1.136c-.082-.325.187-.613.522-.613.3 0 .54.233.625.519q.13.43.415.768.45.524 1.17.8.73.271 1.63.272.997 0 1.764-.32.773-.327 1.215-.906.44-.579.44-1.348 0-.645-.344-1.09c-.102-.132-.017-.352.15-.352zm-3.845-8q1.215 0 2.141.438.933.43 1.477 1.187.378.518.518 1.134c.07.31-.189.577-.506.577-.286 0-.518-.22-.6-.493q-.221-.738-.876-1.224-.863-.646-2.18-.646-.92 0-1.63.313-.702.308-1.1.85a2.04 2.04 0 0 0-.395 1.237q0 .492.217.874.218.375.588.652a4 4 0 0 0 .844.475q.474.197.971.338l1.052.288h5.99a.5.5 0 1 1 0 1h-13a.5.5 0 0 1 0-1h3.94a4.4 4.4 0 0 1-.845-.602q-.843-.781-.844-1.982 0-1.01.563-1.778.563-.77 1.521-1.2.96-.438 2.154-.438"
        }
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame139Icon;
/* prettier-ignore-end */
