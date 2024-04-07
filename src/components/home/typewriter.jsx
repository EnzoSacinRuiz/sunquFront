import "./typewriter.styles.css"

function TypewritterComponent({ phrases, phraseIndex }) {
    return (
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-4">
            <div className="typewritter">
              <div className="typewritter-text">{phrases[phraseIndex]}</div>
            </div>
          </div>
          <div className="col-auto">
            <div style={{ width: '1px', backgroundColor: '#FF0000', height: '100%' }}></div>
          </div>
          <div className="col-md-6 col-lg-7">
            <p className="lead pt-3">Crear caminos comunicacionales para abordar los complejos desafíos que enfrentan las organizaciones de hoy.</p>
          </div>
        </div>
      </div>
    );
  }
  

export default TypewritterComponent;
