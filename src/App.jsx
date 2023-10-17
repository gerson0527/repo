import './styles/bootstrap.css';
function App() {

  return (
    <div style={{ padding: '10px' }}>
    <div id="div-loader"></div>
    <div className="ms-Grid" data-role="">
      <div className="ms-Grid-row" data-role="">
        <div className="ms-Grid-col ms-md2 ms-lg2 ms-u-hiddenSm"></div>
        <div className="ms-Grid-col ms-u-sm8">
          <div className="ms-Grid">
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-sm12" style={{ marginTop: '15px', textAlign: 'center' }}>
                <h1 className="ms-font-xl ms-fontWeight-semibold">Verificaci?n de documentos</h1>
              </div>
            </div>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-u-sm2">
                  <div className="ms-TextField root-99">
                    <div className="ms-TextField-wrapper">
                      <div className="ms-TextField-fieldGroup fieldGroup-100">
                        <input
                          type="text"
                          id="TextField0"
                          placeholder=""
                          maxLength="8"
                          className="ms-TextField-field field-101"
                          aria-label=""
                          aria-invalid="false"
                          value="1901511f"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-Grid-col ms-u-sm1">
                  <div className="ms-TextField root-99">
                    <div className="ms-TextField-wrapper">
                      <div className="ms-TextField-fieldGroup fieldGroup-100">
                        <input
                          type="text"
                          id="TextField5"
                          placeholder=""
                          maxLength="4"
                          className="ms-TextField-field field-101"
                          aria-label=""
                          aria-invalid="false"
                          value="1fe6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-Grid-col ms-u-sm1">
                  <div className="ms-TextField root-99">
                    <div className="ms-TextField-wrapper">
                      <div className="ms-TextField-fieldGroup fieldGroup-100">
                        <input
                          type="text"
                          id="TextField10"
                          placeholder=""
                          maxLength="4"
                          className="ms-TextField-field field-101"
                          aria-label=""
                          aria-invalid="false"
                          value="4b95"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-Grid-col ms-u-sm1">
                  <div className="ms-TextField root-99">
                    <div className="ms-TextField-wrapper">
                      <div className="ms-TextField-fieldGroup fieldGroup-100">
                        <input
                          type="text"
                          id="TextField15"
                          placeholder=""
                          maxLength="4"
                          className="ms-TextField-field field-101"
                          aria-label=""
                          aria-invalid="false"
                          value="882e"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ms-Grid-col ms-u-sm7">
                  <div className="ms-TextField root-99">
                    <div className="ms-TextField-wrapper">
                      <div className="ms-TextField-fieldGroup fieldGroup-100">
                        <input
                          type="text"
                          id="TextField20"
                          placeholder=""
                          maxLength="12"
                          className="ms-TextField-field field-101"
                          aria-label=""
                          aria-invalid="false"
                          value="e16324dbe3bc"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-sm12" style={{ marginTop: '15px', textAlign: 'center' }}>
                <div id="g-ioip">
                  <div style={{ width: '304px', height: '78px' }}>
                    <div>
                      <iframe
                        title="reCAPTCHA"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-z2x2elzdnbn7"
                        frameBorder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6LdvmDkmAAAAAOoLnT3AvcPjgJPALb_bmkLE3bD9&amp;co=aHR0cHM6Ly93YXNlZGVlbGVjdHJvbmljYXByby5henVyZXdlYnNpdGVzLm5ldDo0NDM.&amp;hl=es&amp;v=MydHw_zggsxIJuhSbyOmPv5R&amp;size=normal&amp;cb=c2ceyzft0twy"
                      ></iframe>
                    </div>
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: '250px',
                        height: '40px',
                        border: '1px solid rgb(193, 193, 193)',
                        margin: '10px 25px',
                        padding: '0px',
                        resize: 'none',
                        display: 'none',
                      }}
                    ></textarea>
                  </div>
                  <iframe style={{ display: 'none' }}></iframe>
                </div>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-sm12" style={{ marginTop: '15px', textAlign: 'center' }}>
                <small style={{ color: 'red' }}></small>
                <button type="button" className="ms-Button ms-Button--primary root-110" data-is-focusable="true">
                  <span className="ms-Button-flexContainer flexContainer-111" data-automationid="splitbuttonprimary">
                    <span className="ms-Button-textContainer textContainer-112">
                      <span className="ms-Button-label label-114" id="id__25" style={{color:'#fff'}}>Verificar</span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-sm12" style={{ marginTop: '15px', textAlign: 'center' }}>
                <iframe id="pdf" style={{ width: '100%', height: '600px' }}></iframe>
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-u-sm12" style={{ marginTop: '15px', textAlign: 'center' }}>
                <a href="#/home" className="ms-Button ms-Button--default root-118" data-is-focusable="true">
                  <span className="ms-Button-flexContainer flexContainer-111" data-automationid="splitbuttonprimary">
                    <span className="ms-Button-textContainer textContainer-112">
                      <span className="ms-Button-label label-114" id="id__28">Volver a inicio</span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="ms-Grid-col ms-u-sm12" style={{ textAlign: 'center', marginTop: '10px' }}>
              <p className="mt-5 mb-3 text-muted" style={{ fontSize: '10px' }}>
                Tramitex WebClient<br />COPYRIGHT ? 2023 IOIP SAS - 1.0.105
              </p>
            </div>
          </div>
        </div>
        <div className="ms-Grid-col ms-md2 ms-lg2 ms-u-hiddenSm"></div>
      </div>
    </div>
  </div>
  )
}

export default App
