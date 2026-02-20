import Container from "@mui/material/Container"
import React from "react"

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {children}
    </Container>
  )
}

export default MainLayout