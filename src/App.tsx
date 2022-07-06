import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Container } from './component/Container';
import { Index } from './pages/Index';
import { Block } from './pages/Block';
import { Header } from './component/Header';
import { Transaction } from './pages/Transaction';
import { Ts } from './pages/Ts';
import { Bl } from './pages/Bl';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/block" element={<Block />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/bl/:hash" element={<Bl />} />
            <Route path="/ts/:hash" element={<Ts />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
