export default function Home() {
  return (
    <div className="container p-5 d-flex justify-content-center align-items-center flex-column">
      <p className="text-center text-capitalize fs-4 fw-medium">Hi, I am</p>
      <p className="text-center text-capitalize fs-2 fw-bold">Amina Fatima.</p>
      <p className="text-center text-capitalize fs-4 fw-medium">
        A dev, engineer, and a creative mind.
      </p>
      <p>"Bringing ideas to life through code & creativity."</p>
      <button
        type="button"
        className="btn btn-outline-info"
        style={{ width: "fit-content" }}
      >
        Download Resume
      </button>
    </div>
  );
}
