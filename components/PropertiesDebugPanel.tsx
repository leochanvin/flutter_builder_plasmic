import * as React from "react";

export interface PropertiesDebugPanelProps {
  node?: any;
}

export default function PropertiesDebugPanel({ node }: PropertiesDebugPanelProps) {
  if (!node) {
    return (
      <div style={{ 
        padding: 16, 
        color: "#666", 
        fontStyle: "italic",
        textAlign: "center"
      }}>
        Aucun widget sélectionné
      </div>
    );
  }

  const renderValue = (value: any, depth: number = 0): React.ReactNode => {
    if (value === null || value === undefined) {
      return <span style={{ color: "#999" }}>null</span>;
    }
    
    if (typeof value === "string") {
      return <span style={{ color: "#0066cc" }}>"{value}"</span>;
    }
    
    if (typeof value === "number") {
      return <span style={{ color: "#cc6600" }}>{value}</span>;
    }
    
    if (typeof value === "boolean") {
      return <span style={{ color: "#cc0066" }}>{value.toString()}</span>;
    }
    
    if (Array.isArray(value)) {
      return (
        <div style={{ marginLeft: depth * 20 }}>
          [
          {value.map((item, index) => (
            <div key={index} style={{ marginLeft: 20 }}>
              {renderValue(item, depth + 1)}
              {index < value.length - 1 && ","}
            </div>
          ))}
          ]
        </div>
      );
    }
    
    if (typeof value === "object") {
      return (
        <div style={{ marginLeft: depth * 20 }}>
          {Object.entries(value).map(([key, val], index) => (
            <div key={key} style={{ marginBottom: 4 }}>
              <span style={{ color: "#333", fontWeight: "bold" }}>{key}:</span>{" "}
              {renderValue(val, depth + 1)}
            </div>
          ))}
        </div>
      );
    }
    
    return <span>{String(value)}</span>;
  };

  return (
    <div style={{ 
      padding: 16, 
      fontFamily: "monospace", 
      fontSize: 12,
      backgroundColor: "#f8f9fa",
      border: "1px solid #e9ecef",
      borderRadius: 8,
      maxHeight: "400px",
      overflow: "auto"
    }}>
      <div style={{ 
        marginBottom: 12, 
        paddingBottom: 8, 
        borderBottom: "1px solid #dee2e6",
        fontWeight: "bold",
        color: "#495057"
      }}>
        {node.name} ({node.type})
      </div>
      
      <div style={{ color: "#495057" }}>
        <strong>UID:</strong> {node.uid}
      </div>
      
      {node.props && (
        <div style={{ marginTop: 12 }}>
          <div style={{ 
            marginBottom: 8, 
            fontWeight: "bold", 
            color: "#495057",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: 4
          }}>
            Propriétés:
          </div>
          {renderValue(node.props)}
        </div>
      )}
      
      {node.children && node.children.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <div style={{ 
            marginBottom: 8, 
            fontWeight: "bold", 
            color: "#495057",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: 4
          }}>
            Enfants ({node.children.length}):
          </div>
          {node.children.map((child: any, index: number) => (
            <div key={child.uid || index} style={{ 
              marginBottom: 4, 
              padding: 4, 
              backgroundColor: "#fff",
              border: "1px solid #dee2e6",
              borderRadius: 4
            }}>
              {child.name} ({child.type})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
