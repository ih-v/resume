import "./App.css";
import photo from "../assets/photo.jpg";
import { data } from "../data";

import Head from "./Head";
import Contacts from "./Contacts";
import Summary from "./Summary";
import Skills from "./Skills";
import KeyProjects from "./KeyProjects";
import WorkExperience from "./WorkExperience";
import Courses from "./Courses";
import Education from "./Education";
import Languages from "./Languages";

function App() {
  return (
    <>
      <Head fullName={data.fullName} position={data.position} photo={photo} />
      <Contacts data={data.contacts} />
      <Summary items={data.summary} />
      <Skills items={data.skills} />
      <KeyProjects items={data.keyProjects} />
      <WorkExperience items={data.workExperience} />
      <Courses items={data.courses} />
      <Education items={data.education} />
      <Languages items={data.languages} />
    </>
  );
}

export default App;

/* import reactLogo from "./assets/react.svg";
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */
