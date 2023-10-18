import { TextField, PrimaryButton } from "@fluentui/react";
function App() {
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ padding: "10px" }}>
        <div id="div-loader"></div>
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-md2 ms-lg2 ms-u-hiddenSm"></div>
            <div className="ms-Grid-col ms-u-sm8">
              <div className="ms-Grid">
                <div className="ms-Grid-row">
                  <div
                    className="ms-Grid-col ms-u-sm12"
                    style={{ marginTop: "15px", textAlign: "center" }}
                  >
                    <h1 className="ms-font-xl ">Verificación de documentos</h1>
                  </div>
                </div>
                <div
                  className="ms-Grid-row"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div className="ms-Grid-col">
                    <TextField
                      placeholder=""
                      maxLength={8}
                      ariaLabel=""
                      defaultValue=""
                    />
                  </div>
                  <div className="ms-Grid-col">
                    <TextField
                      placeholder=""
                      maxLength={8}
                      ariaLabel=""
                      defaultValue=""
                    />
                  </div>
                  <div className="ms-Grid-col">
                    <TextField
                      placeholder=""
                      maxLength={8}
                      ariaLabel=""
                      defaultValue=""
                    />
                  </div>
                  <div className="ms-Grid-col">
                    <TextField
                      placeholder=""
                      maxLength={8}
                      ariaLabel=""
                      defaultValue=""
                    />
                  </div>
                  <div className="ms-Grid-col">
                    <TextField
                      placeholder=""
                      maxLength={8}
                      ariaLabel=""
                      defaultValue=""
                    />
                  </div>
                </div>
                {/* ... (Otros inputs) */}
                <div className="ms-Grid-row">
                  <div
                    className="ms-Grid-col ms-u-sm12"
                    style={{ marginTop: "15px", textAlign: "center" }}
                  >
                    <div id="g-ioip">
                      <div style={{ width: "304px", height: "78px" }}>
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-qkeilwxdld6y"
                            frameBorder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdvmDkmAAAAAOoLnT3AvcPjgJPALb_bmkLE3bD9&amp;co=aHR0cHM6Ly93YXNlZGVlbGVjdHJvbmljYXByby5henVyZXdlYnNpdGVzLm5ldDo0NDM.&amp;hl=es&amp;v=vm_YDiq1BiI3a8zfbIPZjtF2&amp;size=normal&amp;cb=xgyny9r5i18l"
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          className="g-recaptcha-response"
                          style={{
                            width: "250px",
                            height: "40px",
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: "0px",
                            resize: "none",
                            display: "none",
                          }}
                        ></textarea>
                      </div>
                      <iframe style={{ display: "none" }}></iframe>
                    </div>
                  </div>
                </div>
                <div className="ms-Grid-row">
                  <div
                    className="ms-Grid-col ms-u-sm12"
                    style={{ marginTop: "15px", textAlign: "center" }}
                  >
                    <small style={{ color: "red" }}></small>
                    <button
                      type="button"
                      className="ms-Button ms-Button--primary root-110"
                      data-is-focusable="true"
                    >
                      <span
                        className="ms-Button-flexContainer flexContainer-111"
                        data-automationid="splitbuttonprimary"
                      >
                        <span className="ms-Button-textContainer textContainer-112">
                          <span className="" id="id__25">
                            <PrimaryButton text="Verificar" />
                          </span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="ms-Grid-row">
                  <div
                    className="ms-Grid-col ms-u-sm12"
                    style={{ marginTop: "15px", textAlign: "center" }}
                  >
                    <iframe
                      id="pdf"
                      style={{ width: "100%", height: "600px" }}
                    ></iframe>
                  </div>
                </div>
                <div className="ms-Grid-row">
                  <div
                    className="ms-Grid-col ms-u-sm12"
                    style={{ marginTop: "15px", textAlign: "center" }}
                  >
                    <a
                      href="#/home"
                      className="ms-Button ms-Button--default root-118"
                      data-is-focusable="true"
                    >
                      <span
                        className="ms-Button-flexContainer flexContainer-111"
                        data-automationid="splitbuttonprimary"
                      >
                        <span className="ms-Button-textContainer textContainer-112">
                          <span
                            className="ms-Button-label label-114"
                            id="id__77"
                          >
                            Volver a inicio
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="ms-Grid-col ms-u-sm12"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  <p
                    className="mt-5 mb-3 text-muted"
                    style={{ fontSize: "10px" }}
                  >
                    Tramitex WebClient
                    <br />
                    COPYRIGHT © 2023 IOIP SAS - 1.0.105
                  </p>
                </div>
              </div>
            </div>
            <div className="ms-Grid-col ms-md2 ms-lg2 ms-u-hiddenSm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
