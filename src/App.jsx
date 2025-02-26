import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProgressContextProvider>
          <CartContextProvider>
            <Header />
            <Meals />
            <Cart />
          </CartContextProvider>
        </UserProgressContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
