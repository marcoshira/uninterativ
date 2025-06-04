import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { styled, useTheme } from "@mui/material/styles";

type StyledTextFieldProps = TextFieldProps & {
  white?: boolean;
  theme?: any;
};

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== "white",
})<StyledTextFieldProps>(({ theme, white = true }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-disabled": {
      "& fieldset": {
        borderColor: white
          ? theme.palette.primary.main
          : theme.palette.background.paper,
        color: theme.palette.primary.main,
      },
    },
    borderRadius: 8,
    backgroundColor: white
      ? theme.palette.background.paper
      : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "& input": {
      padding: "14px 14px",
      height: "20px",
    },
    "& fieldset": {
      borderColor: white
        ? theme.palette.primary.main
        : theme.palette.background.paper,
    },
    "&:hover fieldset": {
      borderColor: white
        ? theme.palette.primary.main
        : theme.palette.background.paper,
    },
    "&.Mui-focused fieldset": {
      borderColor: white
        ? theme.palette.primary.main
        : theme.palette.background.paper,
      borderWidth: 2,
    },
  },
}));

interface CustomTextFieldProps {
  id?: string;
  label?: string;
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
  value: string;
  onChange: (text: string) => void;
  sx?: object;
  type?: string;
  placeholder?: string;
  white?: boolean;
  disabled?: boolean;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  id,
  label,
  variant = "outlined",
  fullWidth = true,
  value,
  onChange,
  sx,
  type = "text",
  placeholder,
  white = true,
  disabled = false,
}) => {
  const theme = useTheme();
  return (
    <StyledTextField
      disabled={disabled}
      id={id}
      label={label}
      variant={variant}
      color={white ? "primary" : "secondary"}
      fullWidth={fullWidth}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      type={type}
      placeholder={placeholder}
      white={white}
      InputProps={{
        sx: {
          color: white
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText,
        },
      }}
      sx={{
        ...(sx || {}),
        color: white
          ? theme.palette.primary.main
          : theme.palette.primary.contrastText,
      }}
    />
  );
};

export default CustomTextField;
