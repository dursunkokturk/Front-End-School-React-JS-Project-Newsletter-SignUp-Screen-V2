import Background from "../img/background.png"
import BackgroundBig from "../img/background-big.png"
import Tablet from "../img/tablet.png"
import TabletBig from "../img/tablet-big.png"
import ComputerScreen from "../img/computer-screen.png"
import ComputerScreenBig from "../img/computer-screen-big.png"
import Grafic from "../img/grafic.png"
import GraficBig from "../img/grafic-big.png"
import Ellipse from "../img/ellipse.png"
import EllipseBig from "../img/ellipse-big.png"
import Number from "../img/number.png"
import NumberBig from "../img/number-big.png"
import Oval from "../img/oval.png"
import "../../App.css"
import { useState } from "react"

export default function NewsletterSignupScreen({ setSubscription }) {

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    if (!email.trim()) {
      return "E-Mail Boş Bırakılamaz";
    }

    if (!emailRegex.test(email.trim())) {
      return "Geçerli Bir E-Mail Giriniz";
    }

    return "";
  }

  // setSubscription Parametresi Uzerinden 
  // Yapilan Islemi Istenilen Yere Gonderiyoruz Yada 
  // Istenilen Yerde Yazdiriyoruz
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();

    if (validationError) {
      setError(validationError)
      return;
    }

    setError("")
    console.log("Email:", email)

    setSubscription(email)
    setEmail("");
  }

  return (
    <>
      <div className="header-and-main">
        <header>
          <img src={Number} className="number" alt="resim" />
          <img src={NumberBig} className="number-big" alt="resim" />
          <div className="white-background"></div>
          <div className="white-background-big"></div>
          <img src={Ellipse} className="ellipse" alt="resim" />
          <img src={EllipseBig} className="ellipse-big" alt="resim" />
          <img src={Grafic} className="grafic" alt="resim" />
          <img src={GraficBig} className="grafic-big" alt="resim" />
          <img src={ComputerScreen} className="computer-screen" alt="resim" />
          <img src={ComputerScreenBig} className="computer-screen-big" alt="resim" />
          <img src={Tablet} className="tablet" alt="resim" />
          <img src={TabletBig} className="tablet-big" alt="resim" />
          <img src={Background} className="background" alt="resim" />
          <img src={BackgroundBig} className="background-big" alt="resim" />
        </header>
        <main>
          <h1>Gelişmeleri takip edin!</h1>
          <h4>Aşağıdaki konularda aylık güncellemeler alan 60.000'den fazla ürün yöneticisine katılın:</h4>
          <div className="check-and-write">
            <img src={Oval} className="oval" alt="resim" />
            <p>Ürün keşfi ve gerçekten önemli olanı yaratmak</p>
          </div>
          <div className="check-and-write">
            <img src={Oval} className="oval" alt="resim" />
            <p>Güncellemelerin başarılı olduğundan emin olmak için ölçüm yapmak</p>
          </div>
          <div className="check-and-write">
            <img src={Oval} className="oval" alt="resim" />
            <p className="third">Ve daha fazlası!</p>
          </div>
          <div className="email">
            <p>E-posta adresi</p>

            <form onSubmit={handleSubmit}>
              {/* value Attribute'u Kullanarak 
            input Elementi Icindeki Data'lara Ulasiyoruz
            onChange Kullanarak input Elementi Icindeki Degisikligi Aliyoruz */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@compony.com"
                className={error ? "input-error" : ""}
              />
              {error && <span className="error-text">{error}</span>}
              <button type="submit">
                Aylık bültene abone olun
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  )
}