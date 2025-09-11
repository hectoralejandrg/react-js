import { useRoutes } from "react-router";
import router from "./routes/router";

function App() {
  const content = useRoutes(router);

  return <>{content}</>;
}

export default App;
