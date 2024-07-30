import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sqinavtop from "./components/Sqinavtop";
import Sqidashboard from "./components/Sqidashboard";
import Sqistudenthome from "./components/Sqistudenthome";
import Sqimyprofile from "./components/Sqimyprofile";
import Sqiuploaddocument from "./components/Sqiuploaddocument";
import Sqichangepassword from "./components/Sqichangepassword";
import Sqicoursereg from "./components/Sqicoursereg";
import Sqiresources from "./components/Sqiresources";
import Sqiregistration_history from "./components/Sqiregistration_history";
import Sqiresult from "./components/Sqiresult";
import Sqipaytuition from "./components/Sqipaytuition";
import Sqipaymenthis from "./components/Sqipaymenthis";
import Sqitransactionhis from "./components/Sqitransactionhis";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/sqi" element={<Sqistudenthome />}>
          {/* <Route index element={<Sqidashboard />} /> */}
          <Route path="" element={<Sqidashboard />} />
          <Route path="profile" element={<Sqimyprofile />} />
          <Route path="changepassword" element={<Sqichangepassword />} />
          <Route path="uploaddoc" element={<Sqiuploaddocument />} />

          <Route path="coursereg" element={<Sqicoursereg />} />
          <Route path="resources" element={<Sqiresources />} />
          <Route path="registration_history" element={<Sqiregistration_history />} />
          <Route path="result" element={<Sqiresult />} />
          <Route path="paytuition" element={<Sqipaytuition />} />
          <Route path="paymenthis" element={<Sqipaymenthis />} />
          <Route path="transactionhis" element={<Sqitransactionhis />} />
          {/* Add other routes inside this nested structure if needed */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
