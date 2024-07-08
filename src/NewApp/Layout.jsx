import { BrowserRouter, Route, Routes } from "react-router-dom";
import GV from "./GV";
import Navbar from "./navbar";
import Footer from "./footer";
const api = "171a4d7d5913495688242743e98e39cc";

export default function LayOut() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/GV-NEWS/" element={<Navbar />}>
            <Route
              exact
              path="/GV-NEWS/"
              element={<GV api={api} values="general" />}
            />
            <Route
              exact
              path="/GV-NEWS/entertainment"
              element={<GV api={api} values="entertainment" />}
            />
            <Route
              exact
              path="/GV-NEWS/home"
              element={<GV key="everything" api={api} values="general" />}
            />
            <Route
              exact
              path="/GV-NEWS/politics"
              element={<GV key="politics" api={api} values="politics" />}
            />
            <Route
              exact
              path="/GV-NEWS/business"
              element={<GV key="business" api={api} values="business" />}
            />
            <Route
              exact
              path="/GV-NEWS/technology"
              element={<GV key="technology" api={api} values="technology" />}
            />
            <Route
              exact
              path="/GV-NEWS/science"
              element={<GV key="science" api={api} values="science" />}
            />
            <Route
              exact
              path="/GV-NEWS/health"
              element={<GV key="health" api={api} values="health" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
