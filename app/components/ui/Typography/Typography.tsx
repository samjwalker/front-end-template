import { Children, type ReactElement, type ReactNode } from "react";
import { TypographyH1 } from "./TypographyH1";
import { TypographyH2 } from "./TypographyH2";
import { TypographyH3 } from "./TypographyH3";
import { TypographyH4 } from "./TypographyH4";
import { TypographyP } from "./TypographyP";
import { TypographyList } from "./TypographyList";
import { TypographyBlockquote } from "./TypographyBlockquote";
import { TypographyLead } from "./TypographyLead";
import { TypographyMuted } from "./TypographyMuted";
import type {
  TextColorVariantsKeys,
  TextSizeVariantsKeys,
} from "./TyprographyProps";

interface TypographyProps {
  base?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "ui"
    | "blockquote"
    | "lead"
    | "muted";
  inline?: boolean;
  className?: string;
  color?: TextColorVariantsKeys;
  size?: TextSizeVariantsKeys;
  children: ReactNode;
}

export const Typography = ({
  base,
  inline,
  className,
  color,
  size,
  children,
}: TypographyProps) => {
  switch (base) {
    case "h1":
      return (
        <TypographyH1 inline={inline} className={className} color={color}>
          {children}
        </TypographyH1>
      );
    case "h2":
      return (
        <TypographyH2 inline={inline} className={className} color={color}>
          {children}
        </TypographyH2>
      );
    case "h3":
      return (
        <TypographyH3 inline={inline} className={className} color={color}>
          {children}
        </TypographyH3>
      );
    case "h4":
      return (
        <TypographyH4 inline={inline} className={className} color={color}>
          {children}
        </TypographyH4>
      );
    case "p":
      return (
        <TypographyP
          inline={inline}
          className={className}
          color={color}
          size={size}
        >
          {children}
        </TypographyP>
      );
    case "ui":
      return (
        <TypographyList inline={inline} className={className} color={color}>
          {children}
        </TypographyList>
      );
    case "blockquote":
      return (
        <TypographyBlockquote
          inline={inline}
          className={className}
          color={color}
        >
          {children}
        </TypographyBlockquote>
      );
    case "lead":
      return <TypographyLead>{children}</TypographyLead>;
    case "muted":
      return <TypographyMuted>{children}</TypographyMuted>;
    default:
      return (
        <TypographyP
          inline={inline}
          className={className}
          color={color}
          size={size}
        >
          {children}
        </TypographyP>
      );
  }
};
