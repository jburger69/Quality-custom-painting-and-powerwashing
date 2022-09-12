import './App.css';

//Components
import Header from './components/Header';
import OpeningContent from './components/OpeningContent';
import ClientGallery from './components/ClientGallery';

function App() {
  return (
    <div className="App">
      <Header />
      <OpeningContent />
      <ClientGallery />
    </div>
  );
}

export default App;
