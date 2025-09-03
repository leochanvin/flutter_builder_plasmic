/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Maximize4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Maximize4Icon(props: Maximize4IconProps) {
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
          "M12.25 5.688a.44.44 0 0 1-.438-.438V2.187H8.75a.44.44 0 0 1-.438-.437.44.44 0 0 1 .438-.438h3.5a.44.44 0 0 1 .438.438v3.5a.44.44 0 0 1-.438.438m-7 7h-3.5a.44.44 0 0 1-.438-.438v-3.5a.44.44 0 0 1 .438-.438.44.44 0 0 1 .438.438v3.063H5.25a.44.44 0 0 1 .438.437.44.44 0 0 1-.438.438"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M7.875 6.563a.43.43 0 0 1-.31-.129.44.44 0 0 1 0-.618l4.376-4.375a.44.44 0 0 1 .618 0c.17.169.17.449 0 .618L8.184 6.434a.43.43 0 0 1-.309.128zM1.75 12.688a.43.43 0 0 1-.31-.129.44.44 0 0 1 0-.618l4.376-4.375a.44.44 0 0 1 .618 0c.17.169.17.449 0 .618L2.06 12.56a.43.43 0 0 1-.309.129z"
        }
      ></path>
    </svg>
  );
}

export default Maximize4Icon;
/* prettier-ignore-end */
