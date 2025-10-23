import Header from './components/header';
import Lanyard from './components/Lanyard/Lanyard';
import HomeContent from './components/home';
import AboutContent from './components/about';
import SkillsContent from './components/skills';
import ProjetContent from './components/projet';
import ExperienceContent from './components/exeperience';
import ContactsContent from './components/contacts';

import ClickSpark from './assets/clicAnimation';
import MetaBalls from './assets/ball';

function App() {
  return (
    <ClickSpark
      sparkColor="black"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Header />

      <section id="home" className="home-container">
        <MetaBalls
          color="#7ea38f"
          cursorBallColor="#7ea38f"
          cursorBallSize={0}
          ballCount={30}
          animationSize={15.5}
          enableMouseInteraction={false}
          enableTransparency={true}
          hoverSmoothness={0.2}
          clumpFactor={0.4}
          speed={0.2}
        />
        <HomeContent />
        <div className="interactive-wrapper">
          <Lanyard />
        </div>
      </section>

      <section id="about">
        <AboutContent />
      </section>
      <section id="skills">
        <SkillsContent />
      </section>
      <section id="projet">
        <ProjetContent />
      </section>
      <section id="experience">
        <ExperienceContent />
      </section>

      <section id="contacts">
        <ContactsContent />
      </section>
    </ClickSpark>
  );
}

export default App;
