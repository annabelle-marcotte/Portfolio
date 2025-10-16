import Header from './components/header';
import Lanyard from './components/Lanyard/Lanyard';
import HomeContent from './components/links';

function App() {
  return (
    <>
      <Header />
      <div className="home-container">
        <HomeContent />
        <div className="interactive-wrapper">
          <Lanyard />
        </div>
      </div>
    </>
  );
}

export default App;