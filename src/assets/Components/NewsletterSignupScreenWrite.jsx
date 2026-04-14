import Oval from "../img/oval.png"
import "../../App"

export default function NewsletterSignupScreenWrite() {
  return (
    <main>
      <h1>Gelişmeleri takip edin!</h1>
      <h4>Aşağıdaki konularda aylık güncellemeler alan 60.000'den fazla ürün yöneticisine katılın:</h4>
      <img src={Oval} className="oval" alt="resim" />
    </main>
  )
}