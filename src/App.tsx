import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { decrement, increment } from "./modules/slice/counterSlice";
import { useGetAllPokemonQuery } from "./modules/slice/apiSlice";
import { useRoutes } from "react-router";
import router from "./routes/router";

function App() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const { data } = useGetAllPokemonQuery();

  const content = useRoutes(router);

  return <>{content}</>;
}

export default App;
