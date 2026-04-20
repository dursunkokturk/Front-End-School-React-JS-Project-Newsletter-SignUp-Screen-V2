import OvalBig from "../img/oval-big.png"
import CheckBig from "../img/check-big.png"
import "../../App.css"

export default function NewsletterSignupScreenSuccess({ email,onDismiss }) {
  return (
    <>
      <div className="success-container">
        <div className="success-card">
          <div className="icon">
            <img src={OvalBig} alt="resim" />
            <img src={CheckBig} alt="resim" />
          </div>
          <h1>Abone olduğunuz için teşekkürler!</h1>
          <h4><strong>{email}</strong> adresine bir onay e-postası gönderildi. Lütfen e-postayı açın ve içindeki düğmeye tıklayarak aboneliğinizi onaylayın.</h4>
          <button onClick={onDismiss}>Mesajı kapat</button>
        </div>
      </div>
    </>
  )
}