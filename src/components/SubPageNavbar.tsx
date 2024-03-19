// SubPageNavbar.js
import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SubPageNavbar = ({
  title,
  backUrl,
}: {
  title: string;
  backUrl: string;
}) => (
  <AppBar position="static" color="default" elevation={1} className="bg-white">
    <Toolbar>
      <Link href={backUrl} passHref>
        <IconButton edge="start" color="inherit" aria-label="back" size="large">
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <Typography variant="h6" className="text-gray-800 mx-4">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default SubPageNavbar;
