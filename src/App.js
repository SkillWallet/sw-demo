import "./App.css";
import { InitSwAuth } from "@skill-wallet/auth";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    InitSwAuth();
  }, []);

  return (
    <div>
      <sw-auth partner-key="877e55ee9cdcb52f0c170258eafaf64581eab9b3" use-dev='true'></sw-auth>
    </div>
  );
}
export default App;
