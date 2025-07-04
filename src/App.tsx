import { CategoriaProvider } from "./contexts/CategoriaContext";
import { Routes } from "./routes";

function App() {
  return (
    <CategoriaProvider>
      <Routes />
    </CategoriaProvider>
  );
}

export default App;