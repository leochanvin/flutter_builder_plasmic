import * as React from "react";

// Reuse your existing Plasmic icons
import Frame21Icon from "../../plasmic/flutter_builder/icons/PlasmicIcon__Frame21";
import RowVerticalIcon from "../../plasmic/flutter_builder/icons/PlasmicIcon__RowVertical";
import RowHorizontalIcon from "../../plasmic/flutter_builder/icons/PlasmicIcon__RowHorizontal";
import PlasmicTextIcon from "../../plasmic/flutter_builder/icons/PlasmicIcon__Text";
import ContainerIcon from "../../plasmic/flutter_builder/icons/PlasmicIcon__Element4";
import ScaffoldIcon from "../../plasmic/flutter_builder/icons/PlasmicIcon__Frame64";

export type WidgetType =
  | "Scaffold"
  | "Column"
  | "Row"
  | "Container"
  | "Text"
  | string;

export function typeToIcon(t: WidgetType): React.ReactNode {
  switch (t) {
    case "Scaffold":
      return <ScaffoldIcon role="img" style={{ width: 12, height: 12 }} />;
    case "Column":
      return <RowVerticalIcon role="img" style={{ width: 12, height: 12 }} />;
    case "Row":
      return <RowHorizontalIcon role="img" style={{ width: 12, height: 12 }} />;
    case "Container":
      return <ContainerIcon role="img" style={{ width: 12, height: 12 }} />;
    case "Text":
      return <PlasmicTextIcon role="img" style={{ width: 12, height: 12 }} />;
    default:
      return <Frame21Icon role="img" style={{ width: 12, height: 12 }} />;
  }
}