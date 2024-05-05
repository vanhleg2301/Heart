import React from "react";
import UserMenu from "../component/UserMenu";
import { Box } from "@mui/material";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <UserMenu />
    </Container>
  );
}
