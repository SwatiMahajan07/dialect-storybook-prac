import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { theme } from "../../utils/Theme";

interface ButtonComponentProps {
  variant: "contained" | "outlined" | "text";
  buttonContent: string | React.ReactNode;
  size?: "small" | "medium" | "large";
  color: "primary" | "secondary" | "neutral";
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonComponent = ({
  variant,
  buttonContent,
  size,
  color,
  disabled,
  rounded,
  onClick,
}: ButtonComponentProps) => {
  const CustomButton = styled(Button)({
    textTransform: "none",
    borderRadius: rounded && variant === "contained" ? "100px" : "6px",
    minWidth: typeof buttonContent !== "string" ? "fit-content" : "auto",
    color:
      variant === "contained"
        ? color === "primary"
          ? theme.colors.action.inverted
          : color === "secondary"
          ? theme.colors.action.inverted
          : theme.colors.action.inverted
        : color === "primary"
        ? theme.colors.action.primary.default
        : color === "secondary"
        ? theme.colors.action.secondary.default
        : theme.colors.action.neutral.default,
    borderColor:
      variant === "outlined"
        ? color === "primary"
          ? theme.colors.action.primary.default
          : color === "secondary"
          ? theme.colors.action.secondary.default
          : theme.colors.action.neutral.default
        : "transparent",
    backgroundColor:
      variant === "contained"
        ? color === "primary"
          ? theme.colors.action.primary.default
          : color === "secondary"
          ? theme.colors.action.secondary.default
          : theme.colors.action.neutral.default
        : "transparent",
    "&:hover": {
      color:
        variant === "contained"
          ? color === "primary"
            ? theme.colors.action.inverted
            : color === "secondary"
            ? theme.colors.action.inverted
            : theme.colors.action.inverted
          : color === "primary"
          ? theme.colors.action.primary.hover
          : color === "secondary"
          ? theme.colors.action.secondary.hover
          : theme.colors.action.neutral.hover,
      border: variant === "text" ? "1px solid" : "inherit",
      borderColor:
        variant === "outlined" || variant === "text"
          ? color === "primary"
            ? theme.colors.action.primary.hover
            : color === "secondary"
            ? theme.colors.action.secondary.hover
            : theme.colors.action.neutral.hover
          : "transparent",
      backgroundColor:
        variant === "contained"
          ? color === "primary"
            ? theme.colors.action.primary.hover
            : color === "secondary"
            ? theme.colors.action.secondary.hover
            : theme.colors.action.neutral.hover
          : "transparent",
    },
    "&:active": {
      color:
        variant === "contained"
          ? color === "primary"
            ? theme.colors.action.inverted
            : color === "secondary"
            ? theme.colors.action.inverted
            : theme.colors.action.inverted
          : color === "primary"
          ? theme.colors.action.primary.active
          : color === "secondary"
          ? theme.colors.action.secondary.active
          : theme.colors.action.neutral.active,
      border: variant === "text" ? "1px solid" : "inherit",
      borderColor:
        variant === "outlined" || variant === "text"
          ? color === "primary"
            ? theme.colors.action.primary.active
            : color === "secondary"
            ? theme.colors.action.secondary.active
            : theme.colors.action.neutral.active
          : "transparent",
      backgroundColor:
        variant === "contained"
          ? color === "primary"
            ? theme.colors.action.primary.active
            : color === "secondary"
            ? theme.colors.action.secondary.active
            : theme.colors.action.neutral.active
          : "transparent",
    },
    "&:focus": {
      outline: "none",
    },
    "&.Mui-disabled": {
      color:
        variant === "contained"
          ? color === "primary"
            ? theme.colors.action.inverted
            : color === "secondary"
            ? theme.colors.action.inverted
            : theme.colors.action.inverted
          : color === "primary"
          ? theme.colors.action.primary.disabled
          : color === "secondary"
          ? theme.colors.action.secondary.disabled
          : theme.colors.action.neutral.disabled,
      borderColor:
        variant === "outlined"
          ? color === "primary"
            ? theme.colors.action.primary.disabled
            : color === "secondary"
            ? theme.colors.action.secondary.disabled
            : theme.colors.action.neutral.disabled
          : "transparent",
      backgroundColor:
        variant === "contained"
          ? color === "primary"
            ? theme.colors.action.primary.disabled
            : color === "secondary"
            ? theme.colors.action.secondary.disabled
            : theme.colors.action.neutral.disabled
          : "transparent",
    },
  });

  return (
    <CustomButton
      variant={variant}
      size={size}
      disabled={disabled}
      disableRipple={true}
      disableTouchRipple={true}
      disableElevation={!rounded}
      sx={
        typeof buttonContent !== "string"
          ? {
              padding: size === "small" ? 0.5 : size === "medium" ? 1 : 1.5,
            }
          : undefined
      }
      onClick={onClick}
    >
      {buttonContent}
    </CustomButton>
  );
};

export default ButtonComponent;
