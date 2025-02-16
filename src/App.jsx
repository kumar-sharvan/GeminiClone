import Main from "./Component/Main/Main";
import Navbar from "./Component/Main/Navbar";
import Sidebar from "./Component/Sidebar/Sidebar";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Sidebar />
      <Main />
    </ContextProvider>
  );
}

export default App;
