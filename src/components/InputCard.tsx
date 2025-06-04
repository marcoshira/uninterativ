"use client";

import { Card, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface InputCardProps {
  children?: React.ReactNode;
  title?: string;
  white?: boolean;
  sx?: React.CSSProperties;
}

export function InputCard({
  children,
  title,
  white = true,
  sx,
}: InputCardProps) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        border: {
          md: `4px solid ${theme.palette.primary.main}`,
        },
        borderRadius: {
          xs: 0, // phones
          sm: 0,
          md: 5,
        },
        backgroundColor: white
          ? theme.palette.primary.contrastText
          : theme.palette.primary.main,
        padding: "40px 32px",
        minWidth: "50%",
        maxWidth: {
          md: "60%",
        },
        width: {
          xs: "100%", // phones
          sm: "100%", // tablets
          md: "50%", // desktops and up
        },
        minHeight: "50%",
        ...sx,
      }}
      elevation={0}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        spacing={2}
      >
        <Typography
          variant="h4"
          color={
            white
              ? theme.palette.primary.main
              : theme.palette.primary.contrastText
          }
        >
          {title}
        </Typography>
        {children && children}
      </Stack>
    </Card>
  );
}
