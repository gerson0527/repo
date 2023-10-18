// Routes.jsx
import { Route, Routes as Router } from "react-router-dom";
import Indexpage from "../Page/IndexPage";



const Routes = () => {
  return (
    <Router>
      <Route path="/verify-document" element={<Indexpage/>} />
    </Router>
  );
}

export default Routes;
