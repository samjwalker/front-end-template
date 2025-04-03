import { textColorVariants } from "./TypographyConstants";
import type { TypographyProps } from "./TyprographyProps";

export function TypographyH4({
  className,
  color,
  inline,
  children,
}: TypographyProps) {
  const classNames = `
          ${color && textColorVariants[color]}
          ${className ?? "scroll-m-20 text-xl font-semibold tracking-tight"}
          `;

  return inline ? (
    <span className={classNames}>{children}</span>
  ) : (
    <h4 className={classNames}>{children}</h4>
  );
}
