import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {

  const [balance, setBalance] = useState(99.99);

  return (
    <div className="App">
      <Header balance={balance} />
      <Content setBalance={setBalance} balance={balance}/>
      <Footer />
    </div>
  );
}

export default App;
