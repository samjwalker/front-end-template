import type { TypographyProps } from "./TyprographyProps";

export function TypographyMuted({ children }: TypographyProps) {
  return <p className={"text-sm text-muted-foreground"}>{children}</p>;
}
