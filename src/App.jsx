import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Create from "../src/Components/Crud/create";
import Read from "../src/Components/Crud/read";
import Delete from "./Components/Crud/delete-update";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <p className="fs-1 fw-bold text-warning">REACT CRUD OPERATION</p>
          <nav>
            <ul
              className=" d-flex justify-content-between fs-3"
              style={{ listStyleType: "none" ,gap:"50px"}}
            >
              <li>
                <Link
                  to="/Create"
                  style={{
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  Post Data
                </Link>
              </li>
              <li>
                <Link
                  to="/Read"
                  style={{
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  Get Data
                </Link>
              </li>
              <li>
                <Link
                  to="/Delete"
                  style={{
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  Delete / Update data
                </Link>
              </li>
              
            </ul>
          </nav>

          <Routes>
            <Route path="/Create" element={<Create />} />
            <Route path="/Read" element={<Read />} />
            <Route path="/Delete" element={<Delete />} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;