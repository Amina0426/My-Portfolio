import { useRef } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3nbv0hq",
        "template_301btuj",
        form.current,
        "6wQPdjYHACLQ42Hvz"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error);
        }
      );
  }

  return (
    <div
      className="container p-5 overflow-auto d-flex justify-content-center align-items-center flex-column h-100"
      style={{ height: "100vh" }}
    >
      <h2 className="text-center mb-5">Get In Touch</h2>

      <div className="row overflow-auto">
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <h5>Let's Connect!</h5>
          <p>
            Have a question, idea, or opportunity? I’d love to hear from you.
            Fill out the form or reach me through any of these platforms.
          </p>

          <ul className="list-unstyled">
            <li className="mb-3">
              <i className="bi bi-envelope-at me-3"></i>
              Email:{" "}
              <a href="mailto:amina@example.com" className="text-info">
                <strong>aminaf2607@gmail.com</strong>
              </a>
            </li>
            <li className="mb-3">
              <i className="bi bi-linkedin me-3"></i>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/aminafatima26"
                target="_blank"
                className="text-info"
              >
                <strong>/in/aminafatima26</strong>
              </a>
            </li>
            <li className="mb-3">
              <i className="bi bi-github me-3 "></i>
              GitHub:{" "}
              <a
                href="https://github.com/Amina0426"
                target="_blank"
                className="text-info"
              >
                <strong>@Amina0426</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-md-7 ps-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                name="message"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
