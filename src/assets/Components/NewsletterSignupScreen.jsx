import Background from "../img/background.png"
import Tablet from "../img/tablet.png"
import ComputerScreen from "../img/computer-screen.png"
import Grafic from "../img/grafic.png"
import Ellipse from "../img/ellipse.png"
import Number from "../img/number.png"
import "../../App"

export default function NewsletterSignupScreen() {
  return (
    <>
      <header>
        <img src={Number} className="number" alt="resim" />
        <div className="white-background"></div>
        <img src={Ellipse} className="ellipse" alt="resim" />
        <img src={Grafic} className="grafic" alt="resim" />
        <img src={ComputerScreen} className="computer-screen" alt="resim" />
        <img src={Tablet} className="tablet" alt="resim" />
        <img src={Background} className="background" alt="resim" />
      </header>
    </>
  )
}