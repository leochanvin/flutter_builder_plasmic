/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame64IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame64Icon(props: Frame64IconProps) {
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
        fillRule={"evenodd"}
        d={
          "M6.462.462a.462.462 0 1 1-.924 0 .462.462 0 0 1 .924 0m2.769 0a.462.462 0 1 1-.923 0 .462.462 0 0 1 .923 0m-6 3.461a.692.692 0 1 0 0-1.384.692.692 0 0 0 0 1.384m3.461-.692a.692.692 0 1 1-1.384 0 .692.692 0 0 1 1.384 0m2.077.692a.692.692 0 1 0 0-1.385.692.692 0 0 0 0 1.385M.923 6A.462.462 0 1 1 0 6a.462.462 0 0 1 .923 0M.462 9.23a.462.462 0 1 0 0-.922.462.462 0 0 0 0 .923zm.461 2.309a.461.461 0 1 1-.923 0 .461.461 0 0 1 .923 0M3.231 12a.461.461 0 1 0 0-.923.461.461 0 0 0 0 .923M.923 3.23a.462.462 0 1 1-.923 0 .462.462 0 0 1 .923 0M.462.924a.462.462 0 1 0 0-.923.462.462 0 0 0 0 .923m3.23-.461a.462.462 0 1 1-.923 0 .462.462 0 0 1 .923 0m-.461 6.23a.692.692 0 1 0 0-1.384.692.692 0 0 0 0 1.384M6.923 6a.923.923 0 1 1-1.846 0 .923.923 0 0 1 1.846 0m1.846.692a.692.692 0 1 0 0-1.384.692.692 0 0 0 0 1.384M12 6a.461.461 0 1 1-.923 0A.461.461 0 0 1 12 6m-.461 3.23a.461.461 0 1 0 0-.922.461.461 0 0 0 0 .923zM12 11.54a.461.461 0 1 1-.922 0 .461.461 0 0 1 .922 0m-.461-7.847a.461.461 0 1 0 0-.922.461.461 0 0 0 0 .922M12 .462a.461.461 0 1 1-.923 0 .461.461 0 0 1 .923 0m-8.77 9a.692.692 0 1 0 0-1.385.692.692 0 0 0 0 1.385m3.462-.693a.692.692 0 1 1-1.384 0 .692.692 0 0 1 1.384 0m2.077.693a.692.692 0 1 0 0-1.385.692.692 0 0 0 0 1.385m-2.307 2.077a.461.461 0 1 1-.923 0 .461.461 0 0 1 .923 0M8.769 12a.461.461 0 1 0 0-.923.461.461 0 0 0 0 .923"
        }
        clipRule={"evenodd"}
        opacity={".5"}
      ></path>
    </svg>
  );
}

export default Frame64Icon;
/* prettier-ignore-end */
