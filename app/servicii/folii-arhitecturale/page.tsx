import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Folii Arhitecturale pentru Cladiri | CarTint Arad",
  description:
    "Folii arhitecturale profesionale pentru cladiri si spatii comerciale in Arad. Protectie solara, reducerea caldurii, intimitate, siguranta si estetica.",
  keywords: "folii arhitecturale arad, folii geamuri cladiri, protectie solara cladiri, folie oglinda cladiri",
}

export default function FoliiArhitecturalePage() {
  return (
    <ServicePageLayout
      icon="building2"
      badge="Arhitecturale"
      title="Folii Arhitecturale"
      subtitle="Solutii profesionale de folii pentru cladiri, birouri si spatii comerciale. Eficienta energetica, siguranta si estetica."
      image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carint2-D4An9KTwwToxKOpafovpyt5Br0b087.jpg"
      imageAlt="Folii arhitecturale profesionale aplicate de CarTint Arad"
      description={`Foliile arhitecturale sunt solutii profesionale de protectie si estetica pentru geamurile cladirilor, birourilor, spatiilor comerciale si rezidentiale. Acestea ofera multiple beneficii, de la reducerea costurilor cu energia pana la cresterea securitatii.

La CarTint Arad, oferim o gama completa de folii arhitecturale: folii solare care reduc caldura si razele UV, folii de securitate care intaresc geamul impotriva spargerilor, folii decorative care ofera intimitate, si folii tip oglinda pentru un aspect modern.

Fie ca ai un birou care se incalzeste prea mult vara, un spatiu comercial care necesita intimitate, sau o cladire care are nevoie de un upgrade estetic, avem solutia potrivita. Instalarea se face rapid, fara deranjarea activitatii zilnice.`}
      benefits={[
        {
          title: "Reducerea costurilor cu energia",
          description: "Foliile solare pot reduce costurile de climatizare cu pana la 30%, blocand caldura excesiva.",
        },
        {
          title: "Protectie UV pentru interior",
          description: "Blocheaza pana la 99% din razele UV care decoloreaza mobilierul, draperiile si pardoseala.",
        },
        {
          title: "Securitate sporita",
          description: "Foliile de securitate mentin sticla intacta in caz de spargere, prevenind accidentele si efractia.",
        },
        {
          title: "Intimitate fara pierdere de lumina",
          description: "Foliile decorative sau oglinda ofera intimitate pastrand luminozitatea naturala.",
        },
        {
          title: "Aspect estetic modern",
          description: "Transforma aspectul cladirii, oferindu-i un look profesional si contemporan.",
        },
        {
          title: "Instalare rapida",
          description: "Aplicarea se face in timpul programului normal, fara necesitatea evacuarii spatiului.",
        },
      ]}
      processSteps={[
        "Evaluare la fata locului - Vizitam locatia pentru masuratori si evaluarea nevoilor.",
        "Recomandare solutie - Propunem tipul de folie potrivit in functie de orientarea geamurilor si necesitatile tale.",
        "Oferta personalizata - Primesti o oferta detaliata cu costuri si termene de executie.",
        "Pregatire suprafete - Geamurile sunt curatate profesional inainte de aplicare.",
        "Aplicare profesionala - Montajul se face cu echipament profesional, fara bule sau defecte.",
        "Verificare finala - Inspectam fiecare geam si iti oferim garantie pentru lucrare.",
      ]}
      faqItems={[
        {
          q: "Foliile arhitecturale sunt potrivite si pentru locuinte?",
          a: "Da, sunt excelente pentru locuinte, mai ales pentru camerele expuse la soare. Reduc caldura, protejeaza mobilierul si ofera intimitate.",
        },
        {
          q: "Cat de mult reduc caldura din interior?",
          a: "In functie de tipul de folie, reducerea caldurii poate fi de 30-70%, ceea ce se traduce in economii semnificative la climatizare.",
        },
        {
          q: "Se pot aplica pe geamuri termopan?",
          a: "Da, exista folii special concepute pentru geamuri termopan. Este important sa alegem tipul corect pentru a evita stresul termic.",
        },
        {
          q: "Cat dureaza instalarea?",
          a: "Pentru un spatiu de birouri mediu, instalarea dureaza de obicei 1-2 zile. Pentru locuinte, de obicei cateva ore.",
        },
      ]}
    />
  )
}
