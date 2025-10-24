import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Copy, Edit, FileText, Trash2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog"
import Link from "next/link"

type Form = {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
}

type Query = {
  isLoading: boolean;
  error: Error | null;
  data: Form[] | null;
}

export const formsQuery : Query = {
  isLoading: false,
  error: null,
  data: [
    {
      id: "form-001",
      title: "Enquête sur le ressenti client",
      description: "Rassembler les retours des clients sur nos services",
      createdAt: "2025-10-20T10:30:00.000Z"
    },
    {
      id: "form-002",
      title: "Nouveau formulaire d'employé",
      description: "Formulaire pour l'intégration des nouveaux employés",
      createdAt: "2025-10-21T14:15:00.000Z"
    },
    {
      id: "form-003",
      title: "Formulaire d'inscription à l'événement",
      description: "Collecter les inscriptions pour notre prochain événement",
      createdAt: "2025-10-22T09:00:00.000Z"
    }
  ]
}

export default function FormList() {
  return (
    <div className="my-20 centerClass">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-lg">
            <FileText className="w-5 h-5" />
            <span>Formulaires de test</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {formsQuery.isLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading forms...</p>
            </div>
          ) : formsQuery.error ? (
            <div className="text-center py-8">
              <p className="text-destructive">Failed to load forms</p>
            </div>
          ) : !formsQuery.data || formsQuery.data.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No forms created yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {formsQuery.data.map((form: Form) => (
                <Card key={form.id} className="border-l-4 border-l-violet-600">
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{form.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {form.description || "No description"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          ID: {form.id} • Created: {form.createdAt ? new Date(form.createdAt).toLocaleDateString() : 'Unknown'}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/form/${form.id}`}>
                            View
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Duplicate
                        </Button>
                        <Button size="sm" asChild>
                          <Link href={`/builder/${form.id}`}>
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Link>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Form</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete ? This action cannot be undone and will permanently remove the form and all its responses.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete Form
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
