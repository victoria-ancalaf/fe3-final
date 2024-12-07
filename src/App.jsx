import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Layout from "./Layout/Layout";
import Contact from "./Routes/Contact";
import { useDentistStates } from "./Components/utils/Context";

function App() {
  const { state } = useDentistStates();

  return (
    <div className={state.theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
