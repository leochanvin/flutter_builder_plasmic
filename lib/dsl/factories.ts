// lib/dsl/factories.ts
import { nanoid } from "nanoid"; // npm i nanoid
import { AnyNode } from "./types";
import { AnyNodeSchema } from "./schema";

export const uid = () => nanoid(8);

export function clone<T extends AnyNode>(node: T, overrides?: Partial<T>): T {
  const out = structuredClone(node);
  // nouveau uid par défaut
  (out as AnyNode).uid = uid();
  Object.assign(out, overrides);
  // sécurité validation (peut être retirée en prod)
  const parsed = AnyNodeSchema.safeParse(out);
  if (!parsed.success) {
    console.error(parsed.error);
    throw new Error("Invalid node after clone/override");
  }
  return parsed.data as T;
}