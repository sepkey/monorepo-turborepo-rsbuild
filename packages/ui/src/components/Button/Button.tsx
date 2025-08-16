import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";
import React from "react";

export interface ButtonProps extends AntdButtonProps {
  variant?: "primary" | "secondary" | "danger" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  const getButtonType = () => {
    switch (variant) {
      case "primary":
        return "primary";
      case "secondary":
        return "default";
      case "danger":
        return "primary";
      case "ghost":
        return "ghost";
      default:
        return "primary";
    }
  };

  const buttonProps = {
    ...props,
    type: getButtonType() as AntdButtonProps["type"],
    danger: variant === "danger",
  };

  return <AntdButton {...buttonProps}>{children}</AntdButton>;
};
