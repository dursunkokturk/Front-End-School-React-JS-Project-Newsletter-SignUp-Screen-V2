import Oval from "../img/oval.png"
import "../../App"

export default function NewsletterSignupScreenWrite() {
  return (
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
        <button>Aylık bültene abone olun</button>
      </div>
    </main>
  )
}