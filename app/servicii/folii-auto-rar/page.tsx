import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Sun } from "lucide-react"

export const metadata: Metadata = {
  title: "Folii Auto Omologate R.A.R. | CarTint Arad",
  description:
    "Aplicare profesionala de folii auto omologate R.A.R. in Arad. Protectie solara UV, reducerea caldurii, intimitate sporita. Materiale certificate, garantie inclusa.",
  keywords: "folii auto omologate RAR, folii geamuri auto arad, folii solare auto, folie fumurie omologata",
}

export default function FoliiAutoRARPage() {
  return (
    <ServicePageLayout
      icon="sun"
      badge="Omologat R.A.R."
      title="Folii Auto Omologate R.A.R."
      subtitle="Protectie solara profesionala pentru geamurile masinii tale, in deplina conformitate cu legislatia romaneasca."
      image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint2-D4An9KTwwToxKOpafovpyt5Br0b087.jpg"
      imageAlt="Volkswagen CC cu folii auto omologate RAR aplicate de CarTint Arad"
      description={`Foliile auto omologate R.A.R. sunt solutia ideala pentru soferii care doresc protectie solara, intimitate si un aspect estetic superior, fara a incalca legislatia in vigoare.

La CarTint Arad, aplicam exclusiv folii certificate care trec inspectia R.A.R., astfel incat sa poti circula in deplina legalitate. Foliile noastre blocheaza pana la 99% din razele UV daunatoare si reduc semnificativ temperatura din interior in zilele caniculare.

Oferim o gama variata de nuante si grade de inchidere, de la folii usor fumurii pana la variante mai inchise, toate in limitele legale. Fiecare aplicare este realizata cu precizie, fara bule de aer sau imperfectiuni, pentru un rezultat impecabil care va dura ani de zile.`}
      benefits={[
        {
          title: "Protectie UV 99%",
          description: "Blocheaza razele ultraviolete care deterioreaza interiorul masinii si afecteaza pielea.",
        },
        {
          title: "Reducerea caldurii",
          description: "Temperaturile din interior scad semnificativ, reducand nevoia de aer conditionat.",
        },
        {
          title: "Conformitate legala",
          description: "Toate foliile sunt omologate R.A.R., garantand trecerea inspectiei tehnice periodice.",
        },
        {
          title: "Intimitate sporita",
          description: "Geamurile fumurii ofera un grad mai mare de intimitate pentru pasageri.",
        },
        {
          title: "Protectie impotriva spargerilor",
          description: "Folia mentine sticla intacta in cazul unui impact, reducand riscul de ranire.",
        },
        {
          title: "Estetica premium",
          description: "Aspectul masinii se transforma complet, oferindu-i un look elegant si sportiv.",
        },
      ]}
      processSteps={[
        "Consultatie initiala - Discutam nevoile tale si recomandam gradul optim de fumuriu in limitele legale.",
        "Curatare profesionala - Geamurile sunt curatate meticuloasa pentru o aderenta perfecta a foliei.",
        "Debitare de precizie - Folia este taiata pe calculator dupa sabloane exacte pentru modelul tau de masina.",
        "Aplicare profesionala - Montajul se face in mediu controlat, fara praf sau bule de aer.",
        "Inspectie finala si garantie - Verificam calitatea aplicarii si iti oferim certificat de garantie.",
      ]}
      faqItems={[
        {
          q: "Ce inseamna folie omologata R.A.R.?",
          a: "O folie omologata R.A.R. este certificata de Registrul Auto Roman si respecta normele legale privind transmisia luminoasa. Aceasta garanteaza ca poti circula legal si poti trece ITP-ul fara probleme.",
        },
        {
          q: "Cat dureaza aplicarea?",
          a: "In general, aplicarea foliilor pe toate geamurile laterale si luneta dureaza intre 2-4 ore, in functie de complexitatea vehiculului.",
        },
        {
          q: "Cat rezista foliile aplicate?",
          a: "Foliile de calitate pe care le folosim au o durata de viata de 5-10 ani, in functie de conditiile de utilizare si intretinere.",
        },
        {
          q: "Pot aplica folii pe parbriz?",
          a: "Legislatia permite aplicarea unei benzi decorative pe parbriz, in partea superioara. Parbrizul trebuie sa aiba o transmisie luminoasa de minim 75%.",
        },
      ]}
    />
  )
}
