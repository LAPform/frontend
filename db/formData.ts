export type Form = {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
}

export type Query = {
  isLoading: boolean;
  error: Error | null;
  data: Form[] | null;
}

export const formList : Query = {
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