import ProjectCard from "./ProjectCard";
import Image from "../assets/project1.png";
import Image2 from "../assets/project2.png";
import Image3 from "../assets/project3.png";
import { useEffect, useState } from "react";
export default function Projects() {
  const images = {
    Budgy: Image,
    "My-Portfolio": Image2,
    web_calc: Image3,
  };
  const [repos, setRepos] = useState([]);
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const repoUrls = ["budgy", "my-portfolio", "web_calc"];

    Promise.all(
      repoUrls.map((repoName) =>
        fetch(`https://api.github.com/repos/amina0426/${repoName}`, {
          headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github+json",
          },
        }).then((r) => r.json())
      )
    )
      .then((data) => setRepos(data))
      .catch((err) => console.error("Error fetching repos:", err));
  }, [token]);

  return (
    <div
      className="container-fluid p-5 d-flex justify-content-center flex-column"
      style={{ height: "100%" }}
    >
      <h2 className="mb-4 pb-2 text-center">My Projects</h2>

      <div className="row g-4 justify-content-center overflow-auto flex-grow-1 scroll-hidden">
        {repos.map((repo) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description || "No description available"}
            image={images[repo.name]}
            link={repo.homepage}
            repoLink={repo.html_url}
          />
        ))}
      </div>
    </div>
  );
}
