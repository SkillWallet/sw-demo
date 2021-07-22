import './App.css';
import { defineCustomElements } from "@skill-wallet/auth/loader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <skillwallet-auth partnerId='123'></skillwallet-auth>
      </header>
    </div>
  );
}
defineCustomElements(window);
export default App;
