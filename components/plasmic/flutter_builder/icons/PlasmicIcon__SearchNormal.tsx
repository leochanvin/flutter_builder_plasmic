/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchNormalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchNormalIcon(props: SearchNormalIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M6.417 12.104A5.69 5.69 0 0 1 .729 6.417 5.69 5.69 0 0 1 6.417.729a5.69 5.69 0 0 1 5.687 5.688 5.69 5.69 0 0 1-5.687 5.687m0-10.5a4.817 4.817 0 0 0-4.813 4.813 4.817 4.817 0 0 0 4.813 4.812 4.817 4.817 0 0 0 4.812-4.812 4.817 4.817 0 0 0-4.812-4.813m5.343 11.69a1 1 0 0 1-.134-.011c-.274-.035-.77-.222-1.05-1.056-.146-.438-.094-.875.146-1.208.239-.332.641-.519 1.102-.519.595 0 1.062.227 1.272.63.21.402.152.916-.181 1.412-.414.624-.863.752-1.155.752m-.35-1.341c.1.303.24.455.332.466.094.012.269-.099.45-.362.169-.25.18-.431.14-.513-.041-.082-.205-.169-.508-.169-.18 0-.315.058-.39.158-.07.099-.082.25-.024.42"
        }
      ></path>
    </svg>
  );
}

export default SearchNormalIcon;
/* prettier-ignore-end */
