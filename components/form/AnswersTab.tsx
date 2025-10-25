import { responseList } from "@/db/responseData"
import { Card, CardContent, CardTitle, CardAction } from "@/components/ui/card";


export default function AnswersTab({ formId }: { formId: string }) {
  return (
    <div>
      {responseList.map((response) => (
        <div key={response.id}>
          {response.answers["qst-001"]}
        </div>
      ))}

    </div>
  )
}
