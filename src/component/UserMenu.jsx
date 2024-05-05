import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, Navigate } from "react-router-dom";

export default function UserMenu() {
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  // console.log({user})

  const handleLogout = () => {
    auth.signOut();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "&:hover": { cursor: "pointer" },
        }}
        onClick={handleClick}
      >
        <Avatar alt="avatar" src={photoURL} sx={{ width: 40, height: 40 }} />
        <Box>
          <Typography variant="h2" color={"hotpink"}>
            Hi:
          </Typography>
          <Typography variant="h4" color={"hotpink"}>
            {" "}
            {displayName}
          </Typography>
        </Box>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          <Link
            to="/heart"
            style={{ textDecoration: "none", color: "hotpink" }}
          >
            Heart for my honey
          </Link>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}
