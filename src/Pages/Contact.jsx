function Contact() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Contact
      </h1>
      <div className="contact-box">
        <form>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Message</label>
            <textarea
              rows="5"
              className="form-control"
            ></textarea>
          </div>
          <button className="btn btn-warning">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;