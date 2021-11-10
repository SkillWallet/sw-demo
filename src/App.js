import './App.css';
import React from 'react';
import { defineCustomElements } from "@skill-wallet/auth/loader";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <skillwallet-auth partner-key="e045db0b7868a054e0e75b2013b0fc59f1fbe035"></skillwallet-auth>

      </header>

    </div>
  );
}
defineCustomElements(window);
export default App;
