import { useGetAllPokemonQuery } from "./slice/apiSlice";

const Home = () => {
  const { data } = useGetAllPokemonQuery();
  console.log(data);
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Home