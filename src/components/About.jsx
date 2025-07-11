import React from "react";

export default function About() {
  return (
    <div className="container p-5 overflow-auto h-100 d-flex justify-content-center align-items-center flex-column">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-7 mb-4 mb-lg-0 pe-lg-5">
          <h2 className="mb-3">About Me</h2>
          <p>
            Hi! I'm Amina Fatima, a passionate and detail-oriented developer
            with a strong foundation in C, C++, and front-end web development. I
            enjoy building clean, user-friendly interfaces.
          </p>
          <p>
            I'm currently expanding my skills in data structures and algorithms.
            Curious, self-driven, and always eager to learn, I enjoy turning
            ideas into real,usable applications- ones that solve everyday
            problems.
          </p>
          <ul className="list-unstyled">
            <li>Always Exploring</li>
            <li>Interested in PWA development</li>
          </ul>
        </div>

        <div className="col-12 col-lg-5 ps-5">
          <h4 className="mb-3">Education</h4>
          <ul className="timeline list-unstyled ps-3 border-start border-2 border-info">
            <li className="mb-4 position-relative">
              <div className="fw-bold">BE in Computer Science</div>
              <div className="text-muted">
                Osmania University,UCEOU, 2024 – Present
              </div>
              <div className="text-muted small">GPA : 9.73 </div>
              <div>Relevant courses: Web Dev, Data Structures, UI/UX</div>
            </li>
            <li className="mb-4 position-relative">
              <div className="fw-bold">Intermediate-MPC</div>
              <div className="text-muted">MS Junior College, 2022 – 2024</div>
              <div className="text-muted small">Percentage : 98.4%</div>
            </li>
            <li className="mb-4 position-relative">
              <div className="fw-bold">Class 10</div>
              <div className="text-muted">Slate-The School, 2022</div>
              <div className="text-muted small">GPA : 10.0</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
