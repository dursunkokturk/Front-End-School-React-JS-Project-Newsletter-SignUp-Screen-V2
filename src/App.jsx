import NewsletterSignupScreen from "./assets/Components/NewsletterSignupScreen";
import NewsletterSignupScreenSuccess from "./assets/Components/NewsletterSignupScreenSuccess";
import { useState } from "react";
import "../src/App.css"

export default function App() {

  const [subscribedEmail, setSubscribedEmail] = useState(false);

  return (
    <>
      {/* Abonelik Icin Girilen E-Mail Bilgisini Aliyoruz
        Sonra Baska Bir Ekran Gosteriyoruz */}
      {subscribedEmail ? <NewsletterSignupScreenSuccess email={subscribedEmail} /> : <NewsletterSignupScreen setSubscription={setSubscribedEmail} />}
    </>
  )
}