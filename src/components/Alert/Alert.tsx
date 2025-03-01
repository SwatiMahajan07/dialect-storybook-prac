import { Alert } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "./styles.scss";
interface AlertComponentProps {
  severity?: "error" | "warning" | "info" | "success";
  message: string;
}

const AlertComponent: React.FC<AlertComponentProps> = ({
  severity,
  message,
}) => {
  return (
    <Alert
      severity={severity}
      className={`alert`}
      icon={<ErrorIcon />}
      onClose={() => {}}
    >
      {message}
    </Alert>
  );
};

export default AlertComponent;
