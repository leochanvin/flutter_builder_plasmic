import * as React from "react";
import WidgetItem from "../../WidgetItem";
import { RowEmpty } from "../../../lib/dsl/presets/row";
import { ColumnEmpty } from "../../../lib/dsl/presets/column";
import { ContainerEmpty } from "../../../lib/dsl/presets/container";
import { TextCalendrier } from "../../../lib/dsl/presets/text";

export interface AddWidgetSelectionPanelProps {
  onChoose: (widget: any) => void;
}

const presets = [
  TextCalendrier,
  RowEmpty,
  ColumnEmpty,
  ContainerEmpty
];

export default function AddWidgetSelectionPanel({ onChoose }: AddWidgetSelectionPanelProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 8 }}>
      {presets.map((preset) => (
        <div key={preset.uid} onClick={() => onChoose(preset)} style={{ cursor: "pointer" }}>
          <WidgetItem name={preset} />
        </div>
      ))}
    </div>
  );
}


