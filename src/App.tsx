import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Pages from "./containers/Pages/Pages";
import AdminForm from "./containers/AdminForm/AdminForm";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/pages/:pageId" element={<Pages/>}/>
          <Route path="/pages/admin" element={<AdminForm/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
