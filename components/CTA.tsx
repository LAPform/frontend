import AddForm from "./AddForm"

export default function CTA() {
  return (
    <div className="pt-40 centerClass">
      <h1 className="text-center font-semibold text-4xl">Gestion des formulaires</h1>
      <h2 className="text-center pt-2 text-lg text-neutral-600">Créer, modifier et gérer des formulaires</h2>
      <AddForm/>
    </div>
  )
}
