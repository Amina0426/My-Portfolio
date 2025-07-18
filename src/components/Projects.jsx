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
          link={"https://my-portfolio-amina-fatimas-projects.vercel.app/"}
        />
        <ProjectCard
          name="Habitat"
          description="A Habit Buider PWA"
          image={Image3}
          link={"https://my-portfolio-amina-fatimas-projects.vercel.app/"}
        />
      </div>
    </div>
  );
}

// export default function Projects() {
//   return (
//     <div className="container py-5">
//       <h2 className="mb-4 text-center">My Projects</h2>

//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
//         {/* Project Card */}
//         <div className="col">
//           <div className="card h-100 shadow-sm">
//             <img
//               src={Image}
//               className="card-img-top"
//               alt="Project 1"
//               style={{ height: "200px", objectFit: "cover" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">Budgy</h5>
//               <p className="card-text">
//                 A modern PWA expense tracker built using Vanilla JS, HTML, CSS.
//               </p>
//             </div>
//             <div className="card-footer d-flex justify-content-between">
//               <a href="#" className="btn btn-sm btn-outline-primary">
//                 Live
//               </a>
//               <a href="#" className="btn btn-sm btn-outline-secondary">
//                 Code
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="card h-100 shadow-sm">
//             <img
//               src={Image}
//               className="card-img-top"
//               alt="Project 1"
//               style={{ height: "200px", objectFit: "cover" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">Budgy</h5>
//               <p className="card-text">
//                 A modern PWA expense tracker built using Vanilla JS, HTML, CSS.
//               </p>
//             </div>
//             <div className="card-footer d-flex justify-content-between">
//               <a href="#" className="btn btn-sm btn-outline-primary">
//                 Live
//               </a>
//               <a href="#" className="btn btn-sm btn-outline-secondary">
//                 Code
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="card h-100 shadow-sm">
//             <img
//               src={Image}
//               className="card-img-top"
//               alt="Project 1"
//               style={{ height: "200px", objectFit: "cover" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">Budgy</h5>
//               <p className="card-text">
//                 A modern PWA expense tracker built using Vanilla JS, HTML, CSS.
//               </p>
//             </div>
//             <div className="card-footer d-flex justify-content-between">
//               <a href="#" className="btn btn-sm btn-outline-primary">
//                 Live
//               </a>
//               <a href="#" className="btn btn-sm btn-outline-secondary">
//                 Code
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Duplicate and modify for other projects */}
//         <div className="col">
//           <div className="card h-100 shadow-sm">
//             <img
//               src="/project2.png"
//               className="card-img-top"
//               alt="Project 2"
//               style={{ height: "200px", objectFit: "cover" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">Expense Tracker</h5>
//               <p className="card-text">
//                 React-based financial tracker with filters and responsive
//                 charts.
//               </p>
//             </div>
//             <div className="card-footer d-flex justify-content-between">
//               <a href="#" className="btn btn-sm btn-outline-primary">
//                 Live
//               </a>
//               <a href="#" className="btn btn-sm btn-outline-secondary">
//                 Code
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Repeat cards similarly... */}
//       </div>
//     </div>
//   );
// }
