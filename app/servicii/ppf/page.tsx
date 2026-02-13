import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Folii Protectie PPF (Paint Protection Film) | CarTint Arad",
  description:
    "Folii de protectie PPF (Paint Protection Film) in Arad. Protectie invizibila impotriva zgarieturilor, pietrelor si factorilor externi. Self-healing technology.",
  keywords: "PPF arad, paint protection film, folie protectie vopsea, folie anti-zgarieturi, protectie caroserie",
}

export default function PPFPage() {
  return (
    <ServicePageLayout
      icon="shield"
      badge="Protectie PPF"
      title="Folii Protectie PPF"
      subtitle="Protectie invizibila de ultima generatie pentru vopseaua masinii tale. Tehnologie self-healing care vindeca zgarieturile de la sine."
      image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint3-m86PW9TsSbe12anXzmDi6oWn5lC5hu.jpg"
      imageAlt="Aplicare folie PPF protectie pe masina la CarTint Arad"
      description={`PPF (Paint Protection Film) este o folie transparenta, extrem de rezistenta, care se aplica direct pe vopseaua masinii pentru a o proteja impotriva zgarieturilor, impacturilor cu pietre, insecte, rasina copacilor si alti factori agresivi.

La CarTint Arad, folosim folii PPF de ultima generatie cu tehnologie self-healing - zgarieturile superficiale dispar de la sine sub influenta caldurii solare sau a apei calde. Folia este practic invizibila, pastrand stralucirea si culoarea originala a vopselei.

Putem aplica PPF pe intreaga caroserie sau doar pe zonele expuse: capota, aripi fata, bara fata, praguri si oglinzi. Este investitia ideala pentru masinile noi sau recent vopsite, care merita cea mai buna protectie disponibila pe piata.`}
      benefits={[
        {
          title: "Protectie impotriva pietrelor",
          description: "Folia PPF absoarbe impactul pietrelor si al resturilor de pe drum, prevenind ciobirea vopselei.",
        },
        {
          title: "Tehnologie Self-Healing",
          description: "Zgarieturile superficiale dispar de la sine sub influenta caldurii, pastrand folia impecabila.",
        },
        {
          title: "Invizibila pe caroserie",
          description: "Folia este complet transparenta si nu modifica culoarea sau aspectul vopselei originale.",
        },
        {
          title: "Rezistenta la substante chimice",
          description: "Protejeaza impotriva rasinii, excrementelor de pasari, insectelor si produselor chimice.",
        },
        {
          title: "Durabilitate exceptionala",
          description: "Foliile PPF premium au o durata de viata de 7-10 ani cu intretinere minima.",
        },
        {
          title: "Pastreaza valoarea masinii",
          description: "Vopseaua originala ramane intacta sub folie, crescand valoarea de revanzare.",
        },
      ]}
      processSteps={[
        "Consultatie - Identificam zonele critice si discutam nivelul de protectie dorit.",
        "Spalare si decontaminare - Suprafata este curatata perfect pentru aderenta optima.",
        "Corectie vopsea (daca e necesar) - Eliminam imperfectiunile inainte de aplicarea foliei.",
        "Debitare digitala - Folia este taiata pe plotter dupa sabloane exacte pentru modelul tau.",
        "Aplicare cu precizie - Montajul se face in camera curata, cu iluminare speciala.",
        "Inspectie sub lumina LED - Verificam fiecare centimetru pentru un rezultat perfect.",
      ]}
      faqItems={[
        {
          q: "Cat de vizibila este folia PPF?",
          a: "Folia PPF de calitate este practic invizibila. Doar la inspectie foarte atenta se pot observa marginile in anumite unghiuri de lumina.",
        },
        {
          q: "Merita sa aplic PPF doar pe anumite zone?",
          a: "Da, aplicarea partiala pe capota, aripi fata si bara fata este cea mai populara optiune si ofera un raport excelent calitate-pret.",
        },
        {
          q: "Pot aplica PPF peste vopseaua existenta cu zgarieturi?",
          a: "Recomandam corectia vopselei inainte de aplicarea PPF, pentru ca folia va 'incapsula' starea actuala a suprafetei.",
        },
        {
          q: "Cum se intretine folia PPF?",
          a: "Intretinerea este simpla - spalare normala cu produse neutre. Evita produsele abrazive. Pentru un plus de protectie, se poate aplica ceara sau sealant ceramic pe folie.",
        },
      ]}
    />
  )
}
