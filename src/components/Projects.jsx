import ProjectCard from "./ProjectCard";
import Image from "../assets/project1.png";
import Image2 from "../assets/project2.png";
import Image3 from "../assets/project3.png";
export default function Projects() {
  return (
    <div
      className="container-fluid p-5 d-flex justify-content-center flex-column"
      style={{ height: "100%" }}
    >
      <h2 className="mb-4 pb-2 text-center">My Projects</h2>

      <div className="row g-4 justify-content-center overflow-auto flex-grow-1 scroll-hidden">
        <ProjectCard
          name="Budgy"
          description="An Expense Tracker PWA"
          image={Image}
          link={"https://amina0426.github.io/Budgy/"}
        />
        <ProjectCard
          name="Portfolio"
          description="A Responsive Portfolio Website using React"
          image={Image2}
          link={"https://my-portfolio-pi-three-85.vercel.app/"}
        />
        <ProjectCard
          name="Habitat"
          description="A Habit Buider PWA"
          image={Image3}
          link={"https://my-portfolio-pi-three-85.vercel.app/"}
        />
      </div>
    </div>
  );
}
