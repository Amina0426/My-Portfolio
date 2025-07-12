import { useEffect } from "react";
export default function ProjectCard(props) {
  useEffect(() => {
    //Initializing popovers
    const popOverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    popOverTriggerList.forEach((el) => {
      new window.bootstrap.Popover(el);
    });
  }, []);

  return (
    <div
      className="card mx-auto"
      style={{
        width: "15rem",
        height: "22rem",
        boxShadow: "0 4px 12px rgba(255, 255, 255, 0.05)",
      }}
    >
      <img
        src={props.image}
        className="card-img-top"
        alt="Project"
        data-bs-container="body"
        data-bs-toggle="popover"
        data-bs-trigger="hover"
        data-bs-placement="right"
        data-bs-content={props.description}
        style={{ cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title mb-5">{props.name}</h5>
        <a href={props.link} target="_blank" className="btn btn-outline-info">
          View Live
        </a>
      </div>
    </div>
  );
}
