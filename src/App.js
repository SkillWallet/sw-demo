import './App.css';
import { defineCustomElements } from "@skill-wallet/auth/loader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <skillwallet-auth partner-key='d0aa09caba3ee6e60eb4b2724e9909df5328c599'></skillwallet-auth>
      </header>
    </div>
  );
}
defineCustomElements(window);
export default App;
