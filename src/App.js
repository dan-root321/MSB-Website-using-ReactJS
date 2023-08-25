import "./style.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="logo">
              <a href="#">
                <img
                  src="https://static.wixstatic.com/media/2ea1d5_14d60f6daf3f434e90954586d162a17b~mv2.png/v1/crop/x_0,y_173,w_1827,h_298/fill/w_223,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MSB%20FINAL%20LOGO%20WHITE.png"
                  alt=""
                />
              </a>
            </div>

            <div className="nav__item">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div className="top__hero">
              <p>
                <span>Attention:</span> Employees, Students, Business Owners
              </p>
              <h1>
                <span> We Have Uncovered A</span>
                <br />
                <span>'New Best Online Business'</span>
              </h1>
              <h2>That Almost Nobody Knows About..</h2>
              <p>
                That has the ability to earn your first P100,000 In less than 30
                days without money, skills, and experience
              </p>
            </div>
            <div className="mid__vid">
              <img
                src="https://static.wixstatic.com/media/2ea1d5_c3eb4a7839a24ed6b6b7857e3d8e862e~mv2.png/v1/fill/w_399,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2ea1d5_c3eb4a7839a24ed6b6b7857e3d8e862e~mv2.png"
                alt=""
              />
              <img
                src="https://static.wixstatic.com/media/2ea1d5_b74ffee136e845d7af431eb9c7cdc286f001.jpg/v1/fill/w_1005,h_562,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/2ea1d5_b74ffee136e845d7af431eb9c7cdc286f001.jpg"
                alt=""
              />
              <img
                src="https://static.wixstatic.com/media/2ea1d5_4628a3e38fb34802bccbb7a5b0f1ffde~mv2.png/v1/fill/w_357,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2ea1d5_4628a3e38fb34802bccbb7a5b0f1ffde~mv2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
