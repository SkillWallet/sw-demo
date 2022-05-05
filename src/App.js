import './App.css';
import { InitSwAuth } from '@skill-wallet/auth';
import {useEffect} from 'react';

function App() {

  useEffect(() => {
      InitSwAuth();
  }, []);

  return (
    <div>
        <sw-auth partner-key="564b2ff84eea2cf4a789aa9fa7d6e668178bee51" use-dev="true"></sw-auth>
    </div>
  );
}

export default App;