import NewsletterSignupScreen from "./assets/Components/NewsletterSignupScreen";
import NewsletterSignupScreenSuccess from "./assets/Components/NewsletterSignupScreenSuccess";
import { useState } from "react";
import "../src/App.css"

export default function App() {

  const [subscription, setSubscription] = useState(false);

  return (
    <>
      {/* Abonelik sonrası başka bir ekran göstermek için: */}
      {subscription ? <NewsletterSignupScreenSuccess /> : <NewsletterSignupScreen setSubscription={setSubscription} />}
    </>
  )
}