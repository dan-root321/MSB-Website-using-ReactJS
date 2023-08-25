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
    </>
  );
}

export default App;
