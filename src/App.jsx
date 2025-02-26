import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <CartContextProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Meals />
        </QueryClientProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
