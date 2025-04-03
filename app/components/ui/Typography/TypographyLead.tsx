import type { TypographyProps } from "./TyprographyProps";

export function TypographyLead({ children }: TypographyProps) {
  return <p className={"text-xl text-muted-foreground"}>{children}</p>;
}
