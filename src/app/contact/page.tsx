export default function ContactPage() {
  return (
    <div style={{
      background: "#F6FBF7",
      minHeight: "100vh",
    }}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">
            Contact Us
          </h1>

          <p className="lead text-muted">
            We'd love to hear from you.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="card shadow border-0 p-4 h-100">

              <h3 className="mb-4">
                Contact Information
              </h3>

              <p>
                📍 <strong>Address</strong><br />
                Kannur, Kerala, India
              </p>

              <p>
                📞 <strong>Phone</strong><br />
                +91 98765 43210
              </p>

              <p>
                📧 <strong>Email</strong><br />
                support@estore.com
              </p>

              <p>
                🕒 <strong>Working Hours</strong><br />
                Monday - Saturday<br />
                9:00 AM - 6:00 PM
              </p>

            </div>
          </div>

          <div className="col-lg-7">
            <div className="card shadow border-0 p-4">
              <h3 className="mb-4">
                Send us a Message
              </h3>

              <form>
                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"/>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"/>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"/>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Write your message...">
                  </textarea>
                </div>

                <button className="btn btn-primary">
                  Send Message
                </button>

              </form>
            </div>
          </div>
        </div>

        <div className="mt-5">

          <div className="card border-0 shadow-sm p-4 text-center">

            <h3>Need Immediate Assistance?</h3>

            <p className="text-muted">
              Our support team is available 24/7 to answer your questions.
            </p>

            <h4 className="text-primary">
              support@estore.com
            </h4>

          </div>
        </div>
      </div>
    </div>
  );
}