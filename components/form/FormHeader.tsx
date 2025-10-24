import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formsQuery} from "../FormList";

export default function FormHeader({ formId } : { formId : string }) {

  const title = formsQuery.data?.find(form => form.id === formId)?.title || "Titre du formulaire";
  const description = formsQuery.data?.find(form => form.id === formId)?.description || "Description";

  return (
    <div>
      <Card className="min-h-40">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
