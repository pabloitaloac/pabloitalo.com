import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ResumeNew from '../Resume/ResumeNew';

// Named export with display name for better debugging and linting
export default function Landing() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <ResumeNew />
    </>
  );
}
