import {Navbar, ConnectButton} from './Wallet'
import './App.css';
import { useState } from 'react';

function App() {
  const [address, setAddress] = useState('');
  const [blockNumber, setBlockNumber] = useState(1);

  return (
    <div>
      <Navbar address={address} blockNumber={blockNumber}/>
      <ConnectButton setAddress={setAddress}/>
    </div>
  );
}

export default App;
