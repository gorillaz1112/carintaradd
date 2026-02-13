import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Palette } from "lucide-react"

export const metadata: Metadata = {
  title: "Colantari Auto Profesionale | CarTint Arad",
  description:
    "Colantari auto profesionale in Arad. Wrap integral, accente decorative, schimbari de culoare. Folii de calitate premium, aplicare fara bule.",
  keywords: "colantari auto arad, wrap auto, schimbare culoare masina, folie auto colantare, vinyl wrap",
}

export default function ColantariPage() {
  return (
    <ServicePageLayout
      icon="palette"
      badge="Colantari"
      title="Colantari Auto Profesionale"
      subtitle="Transforma complet aspectul masinii tale cu folii de colantare premium, fara a afecta vopseaua originala."
      image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint1-nw0F46YyEtHwBWwL109vlSaqVQYK5q.jpg"
      imageAlt="BMW cu colantare profesionala realizata de CarTint Arad"
      description={`Colantarea auto este metoda ideala de a schimba complet aspectul vehiculului tau fara a recurge la vopsire. Folia de vinil de calitate superioara se aplica direct peste vopseaua originala, protejand-o si oferind un look complet nou.

La CarTint Arad, lucram cu cele mai recunoscute branduri de folii de colantare, disponibile intr-o paleta impresionanta de culori si finisaje: mat, lucios, satinat, carbon, brushed metal si multe altele. Fie ca doresti o schimbare subtila sau o transformare radicala, avem solutia perfecta.

Procesul de colantare necesita precizie absoluta si experienta. Fiecare panel al masinii este tratat individual, cu atentie la detalii precum marginile, curburile si zonele dificile. Rezultatul este o finisare impecabila, care arata ca o vopsea de fabrica.`}
      benefits={[
        {
          title: "Protectia vopselei originale",
          description: "Folia protejeaza vopseaua de zgarieturi, UV si factori externi, pastrand valoarea masinii.",
        },
        {
          title: "Varietate de culori si finisaje",
          description: "De la mat la lucios, carbon, satinat sau cromat - posibilitatile sunt nelimitate.",
        },
        {
          title: "Reversibil",
          description: "Folia poate fi inlaturata oricand, redand vopseaua originala intacta.",
        },
        {
          title: "Cost-eficient vs. vopsire",
          description: "Colantarea este semnificativ mai ieftina decat o vopsire integrala de calitate.",
        },
        {
          title: "Durata de viata lunga",
          description: "Foliile premium rezista 5-7 ani cu intretinere corespunzatoare.",
        },
        {
          title: "Personalizare unica",
          description: "Poti combina culori, adauga accente sau crea designuri unice pentru masina ta.",
        },
      ]}
      processSteps={[
        "Consultatie si alegerea foliei - Discutam optiunile de culoare si finisaj, adaptate preferintelor tale.",
        "Pregatire caroserie - Masina este spalata, decontaminata si pregatita meticuloasa.",
        "Demontare elemente - Daca este necesar, demontam manere, oglinzi si alte elemente pentru un rezultat curat.",
        "Aplicare folia - Fiecare panou este acoperit cu precizie, fara bule sau riduri.",
        "Finisare si detalii - Marginile sunt sigilate, iar elementele demontate sunt remontate.",
        "Inspectie si predare - Verificam calitatea fiecarui centimetru inainte de predare.",
      ]}
      faqItems={[
        {
          q: "Cat dureaza o colantare integrala?",
          a: "O colantare integrala dureaza in medie 3-5 zile lucratoare, in functie de complexitatea vehiculului.",
        },
        {
          q: "Colantarea afecteaza vopseaua originala?",
          a: "Nu, din contra. Folia protejeaza vopseaua originala. La indepartare, vopseaua de dedesubt va fi in starea in care era la momentul aplicarii.",
        },
        {
          q: "Pot cola doar anumite parti ale masinii?",
          a: "Da, putem cola partial - plafon, capota, oglinzi, praguri sau orice alta zona doresti.",
        },
        {
          q: "Cum se intretine o masina colantata?",
          a: "Spalarea se face manual, fara presiune excesiva. Evita spalatoriile automate cu perii abrazive. Foloseste produse neutre.",
        },
      ]}
    />
  )
}
