import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Pages from "./containers/Pages/Pages";

function App() {
  return (
    <>
      App
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/pages/:pageId" element={<Pages/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
