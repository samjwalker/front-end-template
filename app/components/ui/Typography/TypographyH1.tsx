import { textColorVariants } from "./TypographyConstants";
import type { TypographyProps } from "./TyprographyProps";

export function TypographyH1({
  className,
  color,
  inline,
  children,
}: TypographyProps) {
  const classNames = `
    ${color && textColorVariants[color]}
    ${
      className ??
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
    }
    `;

  return inline ? (
    <span className={classNames}>{children}</span>
  ) : (
    <h1 className={classNames}>{children}</h1>
  );
}
