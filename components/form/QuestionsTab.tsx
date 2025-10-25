"use client"
import { questionList } from "@/db/questionData";
import { Card, CardContent, CardTitle, CardAction } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";


export default function QuestionsTab({ formId }: { formId: string }) {
  return (
    <div className="space-y-2">
      {
        questionList.filter((question) => question.form_id === formId).map((question) => (
          <Card key={question.id}>
            <CardTitle className="pl-4">
              <div className="space-y-4">
                <label className="block text-lg text-foreground">
                  {question.text}
                  {question.required && <span className="text-destructive ml-1">*</span>}
                </label>
              </div>
            </CardTitle>
            <CardContent>
              {(() => {
                switch (question.type) {
                  case "text":
                    return <Input type="text" placeholder={question.text} />;
                  case "textarea":
                    return <Textarea placeholder={question.text} />;
                  case "number":
                    return <Input type="number" placeholder={question.text} />;
                  case "email":
                    return <Input type="email" placeholder={question.text} />;
                  case "radio":
                    return (
                      <RadioGroup>
                        {(question.options || []).map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                            <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    );
                  case "checkbox":
                    return (
                      <div className="space-y-2">
                        {(question.options || []).map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <Checkbox id={`${question.id}-${option}`} />
                            <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                          </div>
                        ))}
                      </div>
                    );
                  case "select":
                    return <Input type="text" placeholder={question.text} />;
                  case "date":
                    return <Input type="date" />;
                  case "file":
                    return <Input type="file" />;
                  default:
                    return null;
                }
              })()}
            </CardContent>
          </Card>
        ))
      }
    </div>
  )
}
