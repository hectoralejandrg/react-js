import { Container } from "@mui/material";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
