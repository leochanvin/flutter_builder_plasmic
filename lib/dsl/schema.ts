// lib/dsl/schema.ts
import { z } from "zod";
import type {
  AnyNode, NodeText, NodeRow, NodeColumn, NodeContainer, NodeScaffold
} from "./types";

const colorRef = z.object({
  role: z.string().nullable().optional(),
  hex: z.string().nullable().optional(),
  unset: z.boolean().optional(),
});

const visibility = z.object({
  visible: z.boolean(),
  responsive: z.object({
    phone: z.boolean(),
    tablet: z.boolean(),
    desktop: z.boolean(),
  }).optional(),
  opacity: z.number(),
  animatedOpacity: z.boolean(),
});

const layout = z.object({
  expansion: z.enum(["none", "expanded", "flexible"]),
  flex: z.number(),
  padding: z.object({ l: z.number(), t: z.number(), r: z.number(), b: z.number() }),
  alignment: z.object({
    slot: z.enum(["tl","tc","tr","cl","center","cr","bl","bc","br","start","end","center"]).default("center"),
    x: z.number(),
    y: z.number(),
  }),
});

export const TextSchema = z.object({
  uid: z.string(),
  type: z.literal("Text"),
  props: z.object({
    text: z.string(),
    visibility,
    layout,
    textProps: z.object({
      themeTextStyle: z.string().nullable(),
      fontFamily: z.string(),
      fontWeight: z.enum(["w100","w200","w300","w400","w500","w600","w700","w800","w900"]),
      fontSize: z.number(),
      textColor: colorRef.nullable(),
      lineHeight: z.number().nullable(),
      letterSpacing: z.number().nullable(),
      textAlign: z.enum(["start","center","end","justify"]),
      maxLines: z.number().nullable(),
      autoSize: z.boolean(),
      selectable: z.boolean(),
      shadows: z.array(z.object({ blur: z.number(), dx: z.number(), dy: z.number(), color: z.string() })),
      gradient: z.any().nullable(),
      animateChanges: z.boolean(),
    }),
  }),
}) satisfies z.ZodType<NodeText>;

const spacingCommon = {
  scrollable: z.boolean(),
  itemsSpacing: z.number(),
  applySpacingToStartEnd: z.boolean(),
  startSpacing: z.number(),
  endSpacing: z.number(),
};

export const RowSchema = z.object({
  uid: z.string(),
  type: z.literal("Row"),
  props: z.object({
    visibility,
    layout,
    rowProps: z.object({
      mainAxisSize: z.enum(["min","max"]),
      mainAxisAlignment: z.enum(["start","center","end","spaceBetween","spaceAround","spaceEvenly"]),
      crossAxisAlignment: z.enum(["start","center","end","stretch","baseline"]),
      ...spacingCommon,
    }),
  }),
  children: z.array(z.any()),
}) satisfies z.ZodType<NodeRow>;

export const ColumnSchema = z.object({
  uid: z.string(),
  type: z.literal("Column"),
  props: z.object({
    visibility,
    layout,
    columnProps: z.object({
      mainAxisSize: z.enum(["min","max"]),
      mainAxisAlignment: z.enum(["start","center","end","spaceBetween","spaceAround","spaceEvenly"]),
      crossAxisAlignment: z.enum(["start","center","end","stretch","baseline"]),
      ...spacingCommon,
    }),
  }),
  children: z.array(z.any()),
}) satisfies z.ZodType<NodeColumn>;

export const ContainerSchema = z.object({
  uid: z.string(),
  type: z.literal("Container"),
  props: z.object({
    visibility,
    layout,
    containerProps: z.object({
      size: z.object({ width: z.object({ value: z.union([z.number(), z.literal("inf")]), unit: z.literal("px") }),
                       height: z.object({ value: z.union([z.number(), z.literal("inf")]), unit: z.literal("px") }) }),
      minSize: z.object({ w: z.object({ value: z.number(), unit: z.literal("px") }),
                          h: z.object({ value: z.number(), unit: z.literal("px") }) }),
      maxSize: z.object({ w: z.object({ value: z.union([z.number(), z.literal("inf")]), unit: z.literal("px") }),
                          h: z.object({ value: z.union([z.number(), z.literal("inf")]), unit: z.literal("px") }) }),
      fill: colorRef.nullable(),
      borderColor: colorRef.optional(),
      borderRadius: z.object({ linked: z.boolean(), tl: z.number(), tr: z.number(), br: z.number(), bl: z.number() }),
      borderWidth: z.number(),
      elevation: z.number(),
      clipContent: z.boolean(),
      boxShadow: z.object({
        enabled: z.boolean(),
        presets: z.array(z.any()),
        custom: z.array(z.object({ blur: z.number(), spread: z.number(), dx: z.number(), dy: z.number(), color: z.string() })),
      }),
      gradient: z.any().nullable(),
      backgroundImage: z.any().nullable(),
      childAlignment: z.object({ slot: z.enum(["tl","tc","tr","cl","center","cr","bl","bc","br","start","end","center"]), x: z.number(), y: z.number() }),
      implicitAnimated: z.boolean(),
      safeArea: z.boolean(),
    }),
  }),
  child: z.any().nullable(),
}) satisfies z.ZodType<NodeContainer>;

export const ScaffoldSchema = z.object({
  uid: z.string(),
  type: z.literal("Scaffold"),
  props: z.object({
    visibility: z.object({ opacity: z.number(), animatedOpacity: z.boolean() }),
    scaffoldProps: z.object({
      backgroundColor: colorRef.nullable(),
      safeArea: z.boolean(),
      hideKeyboardOnTap: z.boolean(),
      disableAndroidBackButton: z.boolean(),
      disableResizeToAvoidBottomInset: z.boolean(),
    }),
    navBarProps: z.object({ showOnNavBar: z.boolean(), alwaysShowOnPage: z.boolean() }),
  }),
  children: z.object({
    appBar: z.any().nullable(),
    body: z.any(),
    floatingActionButton: z.any().nullable(),
    bottomNavigationBar: z.any().nullable(),
    drawer: z.any().nullable(),
  }),
}) satisfies z.ZodType<NodeScaffold>;

export const AnyNodeSchema = z.discriminatedUnion("type", [
  TextSchema, RowSchema, ColumnSchema, ContainerSchema, ScaffoldSchema,
]) as unknown as z.ZodType<AnyNode>;