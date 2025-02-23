import { Alert } from '@mui/material'
import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import { theme } from '../../utils/Theme';

interface AlertComponentProps {
  severity?: 'error' | 'warning' | 'info' | 'success'
  message: string
}

const AlertComponent: React.FC<AlertComponentProps> = ({ severity, message }) => {
  return (
    <Alert 
      severity={severity}
      sx={{
        '&.MuiAlert-standardError': {
          backgroundColor: theme.colors.state.background.error,
          color: theme.colors.state.error,
          '& .MuiAlert-icon': {
            color: theme.colors.state.error
          }
        },
        '&.MuiAlert-standardWarning': {
          backgroundColor: theme.colors.state.background.warning,
          color: theme.colors.state.warning,
          '& .MuiAlert-icon': {
            color: theme.colors.state.warning
          }
        },
        '&.MuiAlert-standardInfo': {
          backgroundColor: theme.colors.state.background.info,
          color: theme.colors.state.info,
          '& .MuiAlert-icon': {
            color: theme.colors.state.info
          }
        },
        '&.MuiAlert-standardSuccess': {
          backgroundColor: theme.colors.state.background.success,
          color: theme.colors.state.success,
          '& .MuiAlert-icon': {
            color: theme.colors.state.success
          }
        }
      }}
      icon={<ErrorIcon />}
      onClose={() => {}}
    >
      {message}
    </Alert>
  )
}

export default AlertComponent