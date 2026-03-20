import RoleContext from './context/RoleContext';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectsDev from './components/ProjectsDev';
import WorkStyle from './components/WorkStyle';
import Contact from './components/Contact';
import SpigenNavbar from './components/SpigenPM/SpigenNavbar';
import SpigenProject from './components/SpigenPM/SpigenProject';

function getRole() {
  const path = window.location.pathname;
  if (path.startsWith('/spigenpm')) return 'spigenpm';
  if (path.startsWith('/planner')) return 'planner';
  if (path.startsWith('/developer')) return 'developer';
  return null; // landing
}

function App() {
  const role = getRole();

  if (!role) {
    return <Landing />;
  }

  if (role === 'spigenpm') {
    return (
      <>
        <SpigenNavbar />
        <SpigenProject />
      </>
    );
  }

  return (
    <RoleContext.Provider value={role}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        {role === 'planner' && <WorkStyle />}
        {role === 'planner' ? <Projects /> : <ProjectsDev />}
        <Contact />
      </main>
    </RoleContext.Provider>
  );
}

export default App;
