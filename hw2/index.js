function App() {
  return (
    <>
      <h1>Topics covered</h1>
      <div>
        The following is a list of all the topics we cover in the MDN learning
        area.
      </div>
      <div>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">
          Getting started with the web
        </a>
        <p>
          Provides a practical introduction to web development for complete
          beginners.
        </p>
      </div>
      <div>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML">
          HTML — Structuring the web
        </a>
        <p>
          HTML is the language that we use to structure the different parts of
          our content and define what their meaning or purpose is. This topic
          teaches HTML in detail.
        </p>
      </div>
      <div>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          CSS — Styling the web
        </a>
        <p>
          CSS is the language that we use to control our web content's style and
          layout, as well as adding behavior like animation. This topic provides
          comprehensive coverage of CSS.
        </p>
      </div>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
