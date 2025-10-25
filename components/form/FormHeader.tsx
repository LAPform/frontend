"use client";

import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Ellipsis, Pencil, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import Link from "next/link";
import { formList } from "@/db/formData";

export default function FormHeader({ formId }: { formId: string }) {

  const title = formList.data?.find(form => form.id === formId)?.title || "Titre du formulaire";
  const description = formList.data?.find(form => form.id === formId)?.description || "Description";

  return (
    <div>
      <Card className="min-h-40">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardAction>
            <DropdownMenu>
              <DropdownMenuTrigger className="hover:bg-neutral-200 p-2 rounded-lg cursor-pointer"><Ellipsis className="text-neutral-500" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Pencil />Editer</DropdownMenuItem>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem variant="destructive" onSelect={(e) => e.preventDefault()}>
                      <Trash2 className="w-4 h-4" /> Supprimer
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Supprimer le formulaire</AlertDialogTitle>
                      <AlertDialogDescription>
                        Êtes-vous sûr de vouloir supprimer ce formulaire ? Cette action est irréversible et supprimera définitivement le formulaire ainsi que toutes ses réponses.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-destructive/10 text-destructive hover:bg-destructive hover:text-white p-0 m-0"
                      >
                        <Link href={"/"} className="p-2 rounded-md"> Supprimer le formulaire</Link>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
