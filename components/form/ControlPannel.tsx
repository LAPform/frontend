"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Key} from "lucide-react";

export type FormPassword = {
  id: string;
  password: string;
  used: boolean;
  createdAt: string;
  usedAt?: string;
}

export type PasswordQuery = {
  isLoading: boolean;
  error: Error | null;
  data: FormPassword[];
}

export const passwordsQuery: PasswordQuery = {
  isLoading: false,
  error: null,
  data: [
    {
      id: "pwd-001",
      password: "CLIENT2024",
      used: true,
      createdAt: "2025-10-15T10:00:00.000Z",
      usedAt: "2025-10-20T14:30:00.000Z"
    },
    {
      id: "pwd-002",
      password: "FORM2025",
      used: false,
      createdAt: "2025-10-18T09:15:00.000Z"
    },
    {
      id: "pwd-003",
      password: "ACCESS123",
      used: true,
      createdAt: "2025-10-19T11:20:00.000Z",
      usedAt: "2025-10-22T16:45:00.000Z"
    },
    {
      id: "pwd-004",
      password: "TEMP456",
      used: false,
      createdAt: "2025-10-21T08:30:00.000Z"
    },
    {
      id: "pwd-005",
      password: "GUEST789",
      used: false,
      createdAt: "2025-10-23T13:00:00.000Z"
    }
  ]
}

export default function ControlPannel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Key className="w-5 h-5" />
          <span>Gestion des mots de passe d&apos;accès</span>
        </CardTitle>
        <CardDescription>
          Gérez les mots de passe clients qui peuvent accéder à ce formulaire. Chaque mot de passe ne peut être utilisé qu&apos;une seule fois.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Passwords */}
        <div>
          <h3 className="text-sm font-medium mb-3">Mots de passe d&apos;accès actuels</h3>
            <div className="space-y-2">
              {passwordsQuery.data.map((password: FormPassword) => (
                <div key={password.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${password.used ? 'bg-red-500' : 'bg-green-500'}`} />
                      <span className="text-xs text-muted-foreground">
                        {password.used ? 'Utilisé' : 'Disponible'}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">
                        Créé : {new Date(password.createdAt).toLocaleDateString()}
                      </span>
                      {password.used && password.usedAt && (
                        <span className="text-xs text-muted-foreground">
                          Utilisé : {new Date(password.usedAt).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    // onClick={() => handleDeletePassword(password.id)}
                    // disabled={deletePasswordMutation.isPending}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
        </div>

        {/* Add Single Password */}
        <div>
          <h3 className="text-sm font-medium mb-3">Ajouter un mot de passe</h3>
          <form className="flex space-x-2">
            <Input
              defaultValue={"newPassword"}
              // onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Entrez un nouveau mot de passe d'accès"
              // disabled={addPasswordMutation.isPending}
            />
            <Button
              type="submit"
              // disabled={addPasswordMutation.isPending || !newPassword.trim()}
            >
              <Plus className="w-4 h-4 mr-1" />
              Ajouter
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
