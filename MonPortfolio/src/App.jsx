import Header from './components/header';
import Lanyard from './components/Lanyard/Lanyard';
import HomeContent from './components/home';
import AboutContent from './components/about';
import ClickSpark from './assets/clicAnimation';

function App() {
  return (
    <><ClickSpark
      sparkColor='black'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >

      <Header />
      <div className="home-container">
        <HomeContent />
        <div className="interactive-wrapper">
          <Lanyard />
        </div>
      </div>
      <AboutContent />
    </ClickSpark>
    </>
  );
}

export default App;