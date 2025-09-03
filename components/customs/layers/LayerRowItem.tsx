import * as React from "react";
import { PlasmicLayerItem } from "../../plasmic/flutter_builder/PlasmicLayerItem";

export interface LayerRowItemProps {
  name: string;
  originalName: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  isEditing?: boolean;
  placeholder?: string;
  onClickRow?: () => void;
  onStartEdit?: () => void;
  onCommit?: (value: string) => void;
  onCancel?: () => void;
  onAddWidget?: (preset: any) => void;
}

export default function LayerRowItem(props: LayerRowItemProps) {
  const {
    name,
    originalName,
    icon,
    isEditing,
    placeholder = "Widget Name",
    onClickRow,
    onStartEdit,
    onCommit,
    onCancel,
    onAddWidget
  } = props;

  const editableRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (isEditing && editableRef.current) {
      // Initialize content with current name and select all text (Figma-like)
      editableRef.current.textContent = name || "";
      const range = document.createRange();
      range.selectNodeContents(editableRef.current);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
      editableRef.current.focus();
    }
  }, [isEditing, name]);

  const commitFromEditable = () => {
    const value = (editableRef.current?.textContent ?? "").trim();
    const next = value.length === 0 ? originalName : value;
    onCommit?.(next);
  };

  return (
    <div style={{ width: "100%" }} onClick={onClickRow}>
      <PlasmicLayerItem
        args={{ data: { name } }}
        overrides={{
          text: {
            style: { flex: 1, width: "auto", minWidth: 0 },
            // Replace the text node with an inline editable div when editing
            render: () => (
              isEditing ? (
                <div
                  ref={editableRef}
                  contentEditable
                  suppressContentEditableWarning
                  style={{ outline: "none", minWidth: 10 }}
                  onDoubleClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      commitFromEditable();
                    } else if (e.key === "Escape") {
                      e.preventDefault();
                      onCancel?.();
                    }
                  }}
                  onBlur={() => commitFromEditable()}
                  data-placeholder={placeholder}
                />
              ) : (
                <div
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    onStartEdit?.();
                  }}
                >
                  {name?.trim().length ? name : placeholder}
                </div>
              )
            )
          }
          ,
          popUpAddWidget: {
            style: {
              marginLeft: "auto",
              position: "absolute",
              right: 12,
              top: "50%",
              transform: "translateY(-50%)"
            },
            // Pass ONLY onSelectFromDsl; PopUpAddWidget will inject our AddWidgetSelection child
            props: { onSelectFromDsl: (p: any) => onAddWidget?.(p) }
          },
          root: {
            style: { width: "100%", position: "relative" }
          }
        }}
      >
        {icon}
      </PlasmicLayerItem>
    </div>
  );
}


