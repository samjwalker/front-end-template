import { textColorVariants, textSizeVariants } from "./TypographyConstants";
import type { TextSizeVariantsKeys, TypographyProps } from "./TyprographyProps";

interface PTypographyProps extends TypographyProps {
  size?: TextSizeVariantsKeys;
}

export function TypographyP({
  className,
  color,
  inline,
  size,
  children,
}: PTypographyProps) {
  const classNames = `
    ${size && textSizeVariants[size]}
    ${color && textColorVariants[color]}
    ${className ?? "leading-7 [&:not(:first-child)]:mt-6"}
    `;

  return inline ? (
    <span className={classNames}>{children}</span>
  ) : (
    <p className={classNames}>{children}</p>
  );
}
