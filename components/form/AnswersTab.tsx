import { responseList } from "@/db/responseData"
import { questionList } from "@/db/questionData";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


export default function AnswersTab({ formId }: { formId: string }) {

  // Filtrer les réponses pour ce formulaire
  const formResponses = responseList.filter((response) => response.form_id === formId);

  // Créer un objet qui mappe question.id -> nombre de réponses
  const totalResponsesByQuestion = questionList
    .filter((question) => question.form_id === formId)
    .reduce((acc, question) => {
      // Compter combien de réponses contiennent cette question
      const count = formResponses.filter((response) =>
        response.answers[question.id] !== undefined &&
        response.answers[question.id] !== null &&
        response.answers[question.id] !== ""
      ).length;

      acc[question.id] = count;
      return acc;
    }, {} as Record<string, number>);

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
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({totalResponsesByQuestion[question.id] > 1
                      ? `${totalResponsesByQuestion[question.id]}\u00A0réponses`
                      : (totalResponsesByQuestion[question.id] === 1
                        ? "1\u00A0réponse"
                        : "Aucune\u00A0réponse")})
                  </span>
                </label>
              </div>
            </CardTitle>
            <CardContent>
              {(() => {
                switch (question.type) {
                  case "text":
                    return <div className="max-h-40 md:max-h-[270px] overflow-y-auto space-y-2 pr-2">
                      {formResponses.map((response) => (
                        <p key={response.id} className="p-3 border rounded bg-muted text-sm">{response.answers[question.id]}</p>
                      ))}
                    </div>;
                  case "textarea":
                    return <p>On pourrait imaginer un affichage des thèmes qui reviennent le plus souvent en mode nuage de mots qu&apos;il faudrait au préalable définir avec du LLM</p>;
                  case "number":
                    return <div className="max-h-40 md:max-h-[270px] overflow-y-auto space-y-2 pr-2">
                      {formResponses.map((response) => (
                        <p key={response.id} className="p-3 border rounded bg-muted text-sm">{response.answers[question.id]}</p>
                      ))}
                    </div>;
                  case "email":
                    return <div className="max-h-40 md:max-h-[270px] overflow-y-auto space-y-2 pr-2">
                      {formResponses.map((response) => (
                        <p key={response.id} className="p-3 border rounded bg-muted text-sm">{response.answers[question.id]}</p>
                      ))}
                    </div>;
                  case "radio":
                    // Calculer le nombre de réponses pour chaque option
                    const radioStats = (question.options || []).map(option => {
                      const count = formResponses.filter(response =>
                        response.answers[question.id] === option
                      ).length;
                      const percentage = totalResponsesByQuestion[question.id] > 0
                        ? (count / totalResponsesByQuestion[question.id]) * 100
                        : 0;
                      return { option, count, percentage };
                    });

                    return (
                      <div className="space-y-3">
                        {radioStats.map(({ option, count, percentage }) => (
                          <div key={option} className="relative">
                            {/* Barre de fond représentant le pourcentage */}
                            <div
                              className="absolute inset-0 bg-violet-600/10 rounded-lg transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                            {/* Contenu par-dessus */}
                            <div className="relative flex items-center justify-between p-3 rounded-lg border">
                              <div className="flex items-center space-x-2">
                                <div className="aspect-square size-4 shrink-0 rounded-full border border-primary bg-primary/20" />
                                <span className="text-sm font-medium">
                                  {option}
                                </span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="text-sm font-medium text-muted-foreground">
                                  {count}&nbsp;{count > 1 ? 'réponses' : 'réponse'}
                                </span>
                                <span className="text-sm font-bold text-primary">
                                  {percentage.toFixed(0)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  case "checkbox":
                    // Calculer le nombre de réponses pour chaque option
                    const checkboxStats = (question.options || []).map(option => {
                      const count = formResponses.filter(response => {
                        const answer = response.answers[question.id];
                        // Les réponses checkbox peuvent être un tableau ou une string
                        if (Array.isArray(answer)) {
                          return answer.includes(option);
                        }
                        return answer === option;
                      }).length;
                      const percentage = totalResponsesByQuestion[question.id] > 0
                        ? (count / totalResponsesByQuestion[question.id]) * 100
                        : 0;
                      return { option, count, percentage };
                    });

                    return (
                      <div className="space-y-3">
                        {checkboxStats.map(({ option, count, percentage }) => (
                          <div key={option} className="relative">
                            {/* Barre de fond représentant le pourcentage */}
                            <div
                              className="absolute inset-0 bg-violet-600/10 rounded-lg transition-all"
                              style={{ width: `${percentage}%` }}
                            />
                            {/* Contenu par-dessus */}
                            <div className="relative flex items-center justify-between p-3 rounded-lg border">
                              <div className="flex items-center space-x-2">
                                <div className="aspect-square size-4 shrink-0 rounded border border-primary bg-primary/20" />
                                <span className="text-sm font-medium">
                                  {option}
                                </span>
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="text-sm font-medium text-muted-foreground">
                                  {count}&nbsp;{count > 1 ? 'réponses' : 'réponse'}
                                </span>
                                <span className="text-sm font-bold text-primary">
                                  {percentage.toFixed(1)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  case "select":
                    return <Input type="text" placeholder={question.text} />;
                  case "date":
                    return <p>On pourrait afficher un calendrier en mode Heatmap</p>;
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
