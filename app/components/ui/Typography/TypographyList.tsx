import { textColorVariants } from "./TypographyConstants";
import type { TypographyProps } from "./TyprographyProps";

export function TypographyList({
  className,
  inline,
  color,
  children,
}: TypographyProps) {
  const classNames = `
            ${color && textColorVariants[color]}
            ${className ?? "my-6 ml-6 list-disc [&>li]:mt-2"}
            `;

  return inline ? (
    <span className={classNames}>{children}</span>
  ) : (
    <ul className={classNames}>{children}</ul>
  );
}
