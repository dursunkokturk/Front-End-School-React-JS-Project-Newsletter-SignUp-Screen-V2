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
import "../../App"

export default function NewsletterSignupScreen({ setSubscription }) {
  return (
    <>
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
          <input type="email" name="" id="" />
          <button onClick={() => setSubscription(true)}>
            Aylık bültene abone olun
          </button>
        </div>
      </main>
    </>
  )
}