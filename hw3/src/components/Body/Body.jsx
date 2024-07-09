import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="imgContainer">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-07/family-quotes-2x1-bn-220712-8a4afd.jpg"
          alt="img"
        />
      </div>
      <div className="contentContainer">
        <h1>Think Health. Think Massage.</h1>
        <p>
          we are open 9am to 6pm; Monday through Sunday. If you would like to
          schedule an appointment
        </p>
        <p>with us, please call us at 987-654-3201 today!</p>
        <div className="contentButtons">
          <button>LEARN MORE ABOUT US</button>
          <button>CONTACT US TODAY</button>
        </div>
      </div>
      <div className="extraContent">
        <p style={{ color: "rgb(153, 31, 72)" }}>
          Are you looking for a professional, registered massage therapist?
          Sample Massage Therapy has 4 registered massage therapists who can
          provide clinical massage.
        </p>
        <p>
          We are committed to your long term health and well-being. Our
          multi-disciplinary clinic provides a balanced approach to a healthy
          lifestyle. Enhance your health and improve your performance with our
          treatments.
        </p>
        <p>
          We welcome you to come explore all the benefits youll enjoy as one of
          our valued guests. Our professional staff is committed to offering the
          best massage therapy in Mainland.
        </p>
        <div className="ruler"></div>
        <h1>Family Wellness Massage Therapy</h1>
        <p style={{ textAlign: "center", marginBottom: `${10}px` }}>
          9876 Main Street, Suite 123, Mainland, ML12345
        </p>
        <p style={{ textAlign: "center", marginBottom: `${+60}px` }}>
          Phone: 98765*****
        </p>
      </div>
    </div>
  );
}
export default Body;
