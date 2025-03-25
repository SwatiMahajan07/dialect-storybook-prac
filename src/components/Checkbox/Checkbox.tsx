import { Checkbox } from "@mui/material";
import React from "react";
import { theme } from "../../utils/Theme";

interface CheckboxComponentProps {
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onClickHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckboxComponent = ({
  checked = false,
  disabled = false,
  indeterminate = false,
  onClickHandler,
}: CheckboxComponentProps) => {
  return (
    <Checkbox
      checked={checked}
      disabled={disabled}
      indeterminate={indeterminate}
      onClick={() => onClickHandler(!checked)}
      sx={{
        color: theme.colors.action.primary.default,
        "&.Mui-checked": {
          color: theme.colors.action.primary.default,
        },
        "&.MuiCheckbox-indeterminate": {
          color: theme.colors.action.primary.default,
        },
        "&.Mui-disabled": {
          color: theme.colors.action.primary.disabled,
        },
        ":hover": {
          backgroundColor: theme.colors.action.primary.hover10,
          color: theme.colors.action.primary.hover,
        },
        ":active": {
          backgroundColor: theme.colors.action.primary.active20,
          color: theme.colors.action.primary.active,
        },
      }}
    />
  );
};

export default CheckboxComponent;
