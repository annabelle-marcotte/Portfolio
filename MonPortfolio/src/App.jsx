import Header from './components/header';
import Lanyard from './components/Lanyard/Lanyard';
function App() {
  return (
    <>
    <div>
      <Header  />
      <Lanyard/>
    </div>
      <main>
        <div class="home-content">
          <a href="https://www.linkedin.com/in/annabelle-marcotte/" target="_blank"><img src="/links/linkedin.png" alt="linkedin" className="background-image" /> </a>
          <a href="https://github.com/annabelle-marcotte/" target="_blank"><img src="//links/github.png" alt="github" className="background-image" /> </a>
          <a href="/links/cv.pdf" target='_blank'>Regarder mon cv!  </a>
        </div>
      </main>
    </>
  );
}

export default App;
