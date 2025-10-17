import Header from './components/header';
import Lanyard from './components/Lanyard/Lanyard';
import HomeContent from './components/home';
import AboutContent from './components/about';
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
      <AboutContent />
    </>
  );
}

export default App;