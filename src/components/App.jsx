import photo from "../assets/photo.png";
import { MdDownload } from "react-icons/md";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { data } from "../data";

import Head from "./Head";
import Summary from "./Summary";
import Skills from "./Skills";
import KeyProjects from "./KeyProjects";
import WorkExperience from "./WorkExperience";
import Courses from "./Courses";
import Education from "./Education";
import Languages from "./Languages";
import { usePDF } from "react-to-pdf";

function App() {
  const { toPDF, targetRef } = usePDF({ filename: "resume.pdf" });

  const handleDownload = () => toPDF();

  return (
    <main className="main">
      <div ref={targetRef} id="capture" className="content">
        <Head
          fullName={data.fullName}
          position={data.position}
          photo={photo}
          contacts={data.contacts}
        />
        <Summary items={data.summary} />
        <Skills items={data.skills} />
        <KeyProjects items={data.keyProjects} />
        <WorkExperience items={data.workExperience} />
        <Courses items={data.courses} />
        <Education items={data.education} />
        <Languages items={data.languages} />
      </div>
      <button className="download-button" onClick={handleDownload}>
        <MdDownload size="1.5rem" />
      </button>
    </main>
  );
}

export default App;
