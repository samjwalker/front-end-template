import { textColorVariants } from "./TypographyConstants";
import type { TypographyProps } from "./TyprographyProps";

export function TypographyBlockquote({
  className,
  color,
  inline,
  children,
}: TypographyProps) {
  const classNames = `
            ${color && textColorVariants[color]}
            ${className ?? "mt-6 border-l-2 pl-6 italic"}
            `;

  return inline ? (
    <span className={classNames}>{children}</span>
  ) : (
    <blockquote className={classNames}>{children}</blockquote>
  );
}
