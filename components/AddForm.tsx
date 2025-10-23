import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Plus } from "lucide-react"

export default function AddForm() {
  return (
    <div className="flex justify-center mt-10">
    <Card className="transition-shadow max-w-md w-full">
      <CardHeader>
        <CardTitle className="flex items-center text-lg space-x-2 justify-center">
          <Plus className="w-5 h-5" />
          <span>Créer un formulaire</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-center">
          Créer un nouveau formulaire de A à Z
        </p>
        <Button
          className="w-full bg-violet-600 hover:bg-violet-500 cursor-pointer "
        >
          Créer un formulaire
        </Button>
      </CardContent>
    </Card>

    </div>
  )
}
