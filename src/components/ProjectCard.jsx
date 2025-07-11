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
        data-bs-content="Top popover"
        style={{ cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-outline-info">View Live</button>
      </div>
    </div>
  );
}
