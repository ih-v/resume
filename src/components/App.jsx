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

function App() {
  const handleDownload = () => {
    html2canvas(document.querySelector("#capture"), {
      allowTaint: true,
      scale: 3,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Ihor_Vashenko_resume.pdf");
    });
    /*     html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
        });
        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('download.pdf');
      }); */
    /*     let doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    doc.html(document.getElementById("content"), {
      callback: function (doc) {
        doc.save("file.pdf");
      },
      filename: "resume.pdf",
      html2canvas: {
        scale: 0.7, //this was my solution, you have to adjust to your size
        width: 1000, //for some reason width does nothing
      },
    }); */
  };

  return (
    <main className="main">
      <div id="capture" className="content">
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
