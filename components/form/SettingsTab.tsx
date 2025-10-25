"use client"

import { Card, CardContent} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Copy, Settings } from "lucide-react"


export default function SettingsPage({ formId }: { formId: string }) {

    const shareUrl = `${window.location.origin}/form/${formId}`;

    const copyShareLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Lien de partage copié dans le presse-papiers !");
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="flex items-center text-lg font-medium text-foreground mb-4"><Settings className="mr-2"/> Paramètres du formulaire</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                ID du formulaire
              </label>
              <Input value={formId} readOnly className="bg-muted" />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Lien de partage
              </label>
              <div className="flex space-x-2">
                <Input value={"shareUrl"} readOnly className="bg-muted flex-1" />
                <Button onClick={copyShareLink}>
                  <Copy />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Message de remerciement
            </label>
            <Textarea
              defaultValue={"thankYouMessage"}
              // onChange={(e) => setThankYouMessage(e.target.value)}
              // onBlur={() => handleFormUpdate("thankYouMessage", thankYouMessage)}
              // placeholder="Message shown after form submission"
              rows={3}
            />
          </div>
        </div>
      </CardContent>
    </Card>)
}
