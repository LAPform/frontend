import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Edit, FileText, Trash2 } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import Link from "next/link"
import { formList, Form } from "../db/formData";

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
          {formList.isLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading forms...</p>
            </div>
          ) : formList.error ? (
            <div className="text-center py-8">
              <p className="text-destructive">Failed to load forms</p>
            </div>
          ) : !formList.data || formList.data.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No forms created yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {formList.data.map((form: Form) => (
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
                        <Button variant="default" size="sm" asChild>
                          <Link href={`/form/${form.id}`}>
                            View
                          </Link>
                        </Button>
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
