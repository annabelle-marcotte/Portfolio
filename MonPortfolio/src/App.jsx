import Header from './components/header';
import Lanyard from './components/Lanyard/Lanyard';
import HomeContent from './components/home';
import AboutContent from './components/about';
import ClickSpark from './assets/clicAnimation';
import MetaBalls from './assets/ball';

function App() {
  return (
    <ClickSpark
      sparkColor='black'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Header />
      
      <div className="home-container">
        <MetaBalls
          color="#7ea38f"
          cursorBallColor="#7ea38f"
          cursorBallSize={0}
          ballCount={30}
          animationSize={15.5}
          enableMouseInteraction={false}
          enableTransparency={true}
          hoverSmoothness={0.2}
          clumpFactor={0.40}
          speed={0.2}
        />
        
        <HomeContent />
        <div className="interactive-wrapper">
          <Lanyard />
        </div>
      </div>
      <AboutContent />
    </ClickSpark>
  );
}

export default App;