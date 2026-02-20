import { useGetAllPokemonQuery } from "./slice/apiSlice";
import FormComponent from "./components/FormComponent";
import { TableColumn, TableComponent } from "./components/TableComponent";
import { Result } from "./types/types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MainLayout from "./components/MainLayout";

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
    render: (row) => (
      <>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            size="small"
            onClick={() => console.log(row.name)}
          >
            Editar
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => console.log(row.name)}
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
  console.log(data);
  return (
    <MainLayout>
      <FormComponent />
      <TableComponent<Result> data={data?.results || []} columns={columns} />
    </MainLayout>
  );
};

export default Home;
