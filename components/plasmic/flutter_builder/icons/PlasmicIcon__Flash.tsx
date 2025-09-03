/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlashIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlashIcon(props: FlashIconProps) {
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
          "M7.492 17.063c-.15 0-.27-.03-.36-.068-.3-.113-.81-.48-.81-1.643v-4.837H4.567c-1.005 0-1.365-.473-1.492-.75-.128-.285-.24-.863.42-1.62l5.677-6.45c.765-.87 1.388-.81 1.688-.698s.81.48.81 1.643v4.838h1.755c1.005 0 1.365.472 1.492.75.128.284.24.862-.42 1.62l-5.677 6.45c-.533.607-.998.765-1.328.765m2.955-15.008c-.022.03-.18.105-.427.39l-5.677 6.45c-.21.24-.24.39-.24.42.014.008.15.083.465.083h2.317c.308 0 .563.255.563.562v5.4c0 .375.067.54.097.585.022-.03.18-.105.428-.39l5.677-6.45c.21-.24.24-.39.24-.42-.015-.008-.15-.083-.465-.083h-2.318a.567.567 0 0 1-.562-.562v-5.4c.008-.375-.068-.533-.098-.585"
        }
      ></path>
    </svg>
  );
}

export default FlashIcon;
/* prettier-ignore-end */
