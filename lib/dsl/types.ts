// lib/dsl/types.ts
export type Responsive = { phone: boolean; tablet: boolean; desktop: boolean };
export type Slot =
  | "tl" | "tc" | "tr"
  | "cl" | "center" | "cr"
  | "bl" | "bc" | "br";

export type ColorRef = { role?: string | null; hex?: string | null; unset?: boolean };

export type Visibility = {
  conditional?: boolean;
  responsive?: Responsive;
  opacity: number;
  animatedOpacity: boolean;
};

export type Layout = {
  expansion: "none" | "expanded" | "flexible";
  flex: number;
  padding: { l: number; t: number; r: number; b: number };
  alignment: { slot: Slot | "start" | "center" | "end"; x: number; y: number };
};

export type BaseNode<TType extends string = string, TProps = unknown> = {
  uid: string;
  type: TType;
  props: TProps;
};

export type RowProps = {
  visibility: Visibility;
  layout: Layout;
  rowProps: {
    mainAxisSize: "min" | "max";
    mainAxisAlignment:
      | "start" | "center" | "end"
      | "spaceBetween" | "spaceAround" | "spaceEvenly";
    crossAxisAlignment: "start" | "center" | "end" | "stretch" | "baseline";
    scrollable: boolean;
    itemsSpacing: number;
    applySpacingToStartEnd: boolean;
    startSpacing: number;
    endSpacing: number;
  };
};
export type ColumnProps = Omit<RowProps, "rowProps"> & {
  columnProps: {
    mainAxisSize: "min" | "max";
    mainAxisAlignment:
      | "start" | "center" | "end"
      | "spaceBetween" | "spaceAround" | "spaceEvenly";
    crossAxisAlignment: "start" | "center" | "end" | "stretch" | "baseline";
    scrollable: boolean;
    itemsSpacing: number;
    applySpacingToStartEnd: boolean;
    startSpacing: number;
    endSpacing: number;
  };
};
export type ContainerProps = {
  visibility: Visibility;
  layout: Layout;
  containerProps: {
    size: { width: { value: number | "inf"; unit: "px" }; height: { value: number | "inf"; unit: "px" } };
    minSize: { w: { value: number; unit: "px" }; h: { value: number; unit: "px" } };
    maxSize: { w: { value: number | "inf"; unit: "px" }; h: { value: number | "inf"; unit: "px" } };
    fill: ColorRef | null;
    borderColor?: ColorRef;
    borderRadius: { linked: boolean; tl: number; tr: number; br: number; bl: number };
    borderWidth: number;
    elevation: number;
    clipContent: boolean;
    boxShadow: {
      enabled: boolean;
      presets: unknown[];
      custom: Array<{ blur: number; spread: number; dx: number; dy: number; color: string }>;
    };
    gradient: unknown | null;
    backgroundImage: unknown | null;
    childAlignment: { slot: Slot | "start" | "center" | "end"; x: number; y: number };
    implicitAnimated: boolean;
    safeArea: boolean;
  };
};

export type TextProps = {
  text: string;
  visibility: Visibility;
  layout: Layout;
  textProps: {
    themeTextStyle: string | null;
    fontFamily: string;
    fontWeight: `w${100|200|300|400|500|600|700|800|900}`;
    fontSize: number;
    textColor: ColorRef | null;
    lineHeight: number | null;
    letterSpacing: number | null;
    textAlign: "start" | "center" | "end" | "justify";
    maxLines: number | null;
    autoSize: boolean;
    selectable: boolean;
    shadows: Array<{ blur: number; dx: number; dy: number; color: string }>;
    gradient: unknown | null;
    animateChanges: boolean;
  };
};

export type ScaffoldProps = {
  visibility: { opacity: number; animatedOpacity: boolean }; // Scaff simple
  scaffoldProps: {
    backgroundColor: ColorRef | null;
    safeArea: boolean;
    hideKeyboardOnTap: boolean;
    disableAndroidBackButton: boolean;
    disableResizeToAvoidBottomInset: boolean;
  };
  navBarProps: { showOnNavBar: boolean; alwaysShowOnPage: boolean };
};

export type NodeRow = BaseNode<"Row", RowProps> & { children: BaseNode[] };
export type NodeColumn = BaseNode<"Column", ColumnProps> & { children: BaseNode[] };
export type NodeContainer = BaseNode<"Container", ContainerProps> & { child: BaseNode | null };
export type NodeText = BaseNode<"Text", TextProps>;
export type NodeScaffold = BaseNode<"Scaffold", ScaffoldProps> & {
  children: {
    appBar: BaseNode | null;
    body: NodeRow | NodeColumn | NodeContainer | NodeText; // simplif
    floatingActionButton: BaseNode | null;
    bottomNavigationBar: BaseNode | null;
    drawer: BaseNode | null;
  };
};

export type AnyNode = NodeScaffold | NodeColumn | NodeRow | NodeContainer | NodeText;