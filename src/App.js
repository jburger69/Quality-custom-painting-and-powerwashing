import './App.css';

//Components
import Header from './components/Header';
import OpeningContent from './components/OpeningContent';
import ClientGallery from './components/ClientGallery';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <Header />
      <OpeningContent />
      <ClientGallery />
      <AboutUs />
    </div>
  );
}

export default App;
