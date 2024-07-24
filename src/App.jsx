import { BrowserRouter } from "react-router-dom"
import "./assets/css/style.css"
import RoutesApp from "./RoutesApp"
import Header from "./components/Header/Header";
import Layout from "./pages/Layout";
import { SearchProvider } from "./contexts/SearchContext";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
    <BrowserRouter>
          <Header />
          <Layout>
            <SearchProvider>
              <ToastContainer autoClose={3000} />
              <RoutesApp />
            </SearchProvider>
          </Layout>
    </BrowserRouter>
    </>
  );
}

export default App
