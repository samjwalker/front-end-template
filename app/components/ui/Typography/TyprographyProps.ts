import type { ReactNode } from "react";
import { textColorVariants, textSizeVariants } from "./TypographyConstants";

export type TextColorVariantsKeys = keyof typeof textColorVariants;

export type TextSizeVariantsKeys = keyof typeof textSizeVariants;

export interface TypographyProps {
  className?: string;
  color?: TextColorVariantsKeys;
  inline?: boolean;
  children: ReactNode;
}
