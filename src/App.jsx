import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomeView } from './Views/HomeView';

function App() {
  return (
    <>
      <Header />
      <HomeView />
      <Footer />
    </>
  );
}

export default App;
