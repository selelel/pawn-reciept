import React, { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps {
  rounded?: boolean;
  outline?: boolean;
  underline?: boolean;
  primary?: boolean;
  reverse?: boolean;
  children?: ReactNode | String;
  className?: String | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  className,
  ...rest
}) => {
  const variationCount = [primary].filter((e) => e).length;
  if (variationCount !== 1) {
    console.warn("Two primary option must be used (primary or reverse)");
  }

  const classes = classNames(
    `${className} flex w-fit items-center justify-center duration-75 ease-linear active:scale-[.97] min-w-fit`,
    {
      "hover:text-green_ text-white ": primary,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
