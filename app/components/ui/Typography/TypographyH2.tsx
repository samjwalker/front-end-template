import { textColorVariants } from "./TypographyConstants";
import type { TypographyProps } from "./TyprographyProps";

export function TypographyH2({
  className,
  color,
  inline,
  children,
}: TypographyProps) {
  const classNames = `
      ${color && textColorVariants[color]}
      ${
        className ??
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
      }
      `;

  return inline ? (
    <span className={classNames}>{children}</span>
  ) : (
    <h2 className={classNames}>{children}</h2>
  );
}
