import { textColorVariants } from "./TypographyConstants";
import type { TypographyProps } from "./TyprographyProps";

export function TypographyH3({
  className,
  color,
  inline,
  children,
}: TypographyProps) {
  const classNames = `
        ${color && textColorVariants[color]}
        ${className ?? "scroll-m-20 text-2xl font-semibold tracking-tight"}
        `;

  return inline ? (
    <span className={classNames}>{children}</span>
  ) : (
    <h3 className={classNames}>{children}</h3>
  );
}
