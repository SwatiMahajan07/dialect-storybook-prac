import { Alert } from '@mui/material'
import React from 'react'
import ErrorIcon from '@mui/icons-material/Error';

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
          backgroundColor: '#FEEFEF',
          color: '#DA1414',
          '& .MuiAlert-icon': {
            color: '#DA1414'
          }
        },
        '&.MuiAlert-standardWarning': {
          backgroundColor: '#FFF4EC',
          color: '#B95000',
          '& .MuiAlert-icon': {
            color: '#B95000'
          }
        },
        '&.MuiAlert-standardInfo': {
          backgroundColor: '#EEF2FA',
          color: '#2E5AAC',
          '& .MuiAlert-icon': {
            color: '#2E5AAC'
          }
        },
        '&.MuiAlert-standardSuccess': {
          backgroundColor: '#EDF9F0',
          color: '#287D3C',
          '& .MuiAlert-icon': {
            color: '#287D3C'
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