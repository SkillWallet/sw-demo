import './App.css';
import { defineCustomElements } from "@skill-wallet/auth/loader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <skillwallet-auth partner-key="d0aa09caba3ee6e60eb4b2724e9909df5328c599"></skillwallet-auth> */}
        {/* <skillwallet-auth partner-key="b23ab97b164c9dd850d02380c1a20f3f659d0c4d"></skillwallet-auth> */}
        <skillwallet-auth partner-key="6a918cdf9ae3d32131c779c22ae30290a2e729c3"></skillwallet-auth>
      </header>
    </div>
  );
}
defineCustomElements(window);
export default App;
