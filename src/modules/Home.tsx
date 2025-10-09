import { useGetAllPokemonQuery } from "./slice/apiSlice";
import FormComponent from "./components/FormComponent";
import { TableColumn, TableComponent } from "./components/TableComponent";
import { Result } from "./types/types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MainLayout from "./components/MainLayout";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link, Navigate } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";

const columns: TableColumn<Result>[] = [
  {
    key: "name",
    title: "Name",
    align: "center",
    render: (name) => <>{name}</>,
  },
  {
    key: "url",
    title: "FIRSTNAME",
    align: "left",
    render: (_, { url }) => <>{url}</>,
  },
  {
    type: "actions",
    key: "actions",
    title: "ACTIONS",
    align: "left",
    render: () => (
      <>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            size="small"
            onClick={() => {}}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => {}}
          >
            Eliminar
          </Button>
        </Stack>
      </>
    ),
  },
];

const Home = () => {
  const { data } = useGetAllPokemonQuery();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  
  // If authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <MainLayout>
      <Box sx={{ mb: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom>
              Welcome to the App
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Please log in to access the user management dashboard.
            </Typography>
            <Button
              component={Link}
              to="/login"
              variant="contained"
              size="large"
            >
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </Box>
      
      <FormComponent />
      <TableComponent<Result> data={data?.results || []} columns={columns} />
    </MainLayout>
  );
};

export default Home;
