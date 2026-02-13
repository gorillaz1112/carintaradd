import type { Metadata } from "next"
import { ServicePageLayout } from "@/components/service-page-layout"
import { Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "Detailing Interior & Exterior | CarTint Arad",
  description:
    "Servicii profesionale de detailing auto interior si exterior in Arad. Polish, ceara, curatare tapiterie, reconditionare faruri. Rezultate ca din fabrica.",
  keywords: "detailing auto arad, polish auto, ceara auto, curatare tapiterie, reconditionare faruri",
}

export default function DetailingPage() {
  return (
    <ServicePageLayout
      icon="droplets"
      badge="Detailing Premium"
      title="Detailing Interior & Exterior"
      subtitle="Reda-i masinii tale stralucirea originala prin servicii profesionale de detailing care fac diferenta."
      image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Polishing-Scv0nwRMxGJbLGN1dRX0Pzv7JGlBMb.webp"
      imageAlt="Polishing profesional auto de CarTint Arad"
      description={`Detailing-ul auto este mult mai mult decat o simpla spalare. Este un proces complex de curatare, reconditionare si protejare a fiecarui centimetru al masinii tale, atat in interior cat si in exterior.

La CarTint Arad, folosim produse profesionale si tehnici avansate pentru a readuce masina ta la starea de showroom. Procesul nostru de detailing exterior include spalare cu spuma activa, decontaminare chimica, polish in mai multe etape pentru eliminarea zgarieturilor fine, si aplicare de ceara sau sealant ceramic pentru protectie de lunga durata.

Detailing-ul interior presupune aspirare profunda, curatare cu abur a tapiteriei, tratarea suprafetelor din piele, curatarea torpedoului si a tuturor suprafetelor din plastic, si dezinfectare completa. Rezultatul este o masina care arata si miroase ca noua.`}
      benefits={[
        {
          title: "Eliminarea zgarieturilor fine",
          description: "Polish-ul profesional in mai multe etape elimina imperfectiunile si reda stralucirea vopselei.",
        },
        {
          title: "Protectie pe termen lung",
          description: "Ceara sau sealant-ul ceramic protejeaza vopseaua impotriva factorilor externi timp de luni de zile.",
        },
        {
          title: "Interior ca nou",
          description: "Curatarea cu abur si produse profesionale reda aspectul original al tapiteriei si pielii.",
        },
        {
          title: "Dezinfectare completa",
          description: "Eliminam bacteriile, acarienii si mirosurile neplacute din interiorul vehiculului.",
        },
        {
          title: "Reconditionare faruri",
          description: "Farurile oxidate sunt reabilitate, imbunatatind vizibilitatea si aspectul general al masinii.",
        },
        {
          title: "Valoare crescuta",
          description: "Un detailing profesional creste valoarea de revanzare a vehiculului tau.",
        },
      ]}
      processSteps={[
        "Evaluare initiala - Inspectam starea masinii si stabilim nivelul de detailing necesar.",
        "Prespalare si decontaminare - Eliminam murdaria grosiera si contaminantii de pe caroserie.",
        "Polish corectiv - Aplicam polish in etape succesive pentru a elimina zgarieturile si hologramele.",
        "Protectie - Aplicam ceara carnauba, sealant sintetic sau coating ceramic, dupa preferinta.",
        "Detailing interior - Aspirare, curatare abur, tratare piele, dezinfectare.",
        "Inspectie finala - Verificam fiecare detaliu sub lumina profesionala.",
      ]}
      faqItems={[
        {
          q: "Cat dureaza un detailing complet?",
          a: "Un detailing complet interior si exterior poate dura intre 6-10 ore, in functie de starea masinii si nivelul de serviciu ales.",
        },
        {
          q: "Cat de des ar trebui sa fac detailing?",
          a: "Recomandam un detailing complet de 2-3 ori pe an, cu mentiuni suplimentare dupa iarna sau in perioadele cu mult praf.",
        },
        {
          q: "Ce diferenta este intre ceara si coating ceramic?",
          a: "Ceara ofera protectie pe termen scurt (2-3 luni) si un aspect cald. Coating-ul ceramic ofera protectie superioara timp de 1-3 ani si este mai rezistent la substante chimice.",
        },
        {
          q: "Detailing-ul elimina zgarieturile adanci?",
          a: "Detailing-ul poate elimina zgarieturile fine si medii. Zgarieturile adanci care au patruns pana la metal necesita revopsire.",
        },
      ]}
    />
  )
}
