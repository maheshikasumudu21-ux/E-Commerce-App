import './App.css'
import Header from './assets/componets/Organisms/Header'
import Footer from './assets/componets/Organisms/Footer'
import Home from './Pages/Home';
function App() {
  return (
    <div className="app-container">
      <Header />
      <main className='content'>
        <Home/>
      </main>
      <Footer />
    </div>
  );
};

export default App;

