import { Question, QuestionType } from "@/model/tables";

export const questionList: Question[] = [
  {
    id: "qst-001",
    form_id: "form-001",
    type: "text",
    text: "Quel est votre nom ?",
    options: [],
    required: true,
    validation: {},
    order_index: 0,
    created_at: "2025-10-20T10:30:00.000Z"
  },
  {
    id: "qst-002",
    form_id: "form-001",
    type: "text",
    text: "Quel est votre adresse email ?",
    options: [],
    required: true,
    validation: {},
    order_index: 1,
    created_at: "2025-10-20T10:30:00.000Z"
  },
  {
    id: "qst-003",
    form_id: "form-001",
    type: "number",
    text: "Quel est votre numéro de téléphone ?",
    options: [],
    required: true,
    validation: {},
    order_index: 2,
    created_at: "2025-10-20T10:30:00.000Z"
  },
  {
    id: "qst-004",
    form_id: "form-001",
    type: "date",
    text: "Quelle était la date de votre visite ?",
    options: [],
    required: true,
    validation: {},
    order_index: 3,
    created_at: "2025-10-20T10:30:00.000Z"
  },
  {
    id: "qst-005",
    form_id: "form-001",
    type: "checkbox",
    text: "Selectionnez les services à améliorer",
    options: ["Service client", "Qualité produit", "Prix", "Accessibilité", "Accueil"],
    required: true,
    validation: {},
    order_index: 4,
    created_at: "2025-10-20T10:30:00.000Z"
  },
  {
    id: "qst-006",
    form_id: "form-001",
    type: "radio",
    text: "Etes vous satisfait de notre service ?",
    options: ["Oui", "Non", "Ne se prononce pas"],
    required: true,
    validation: {},
    order_index: 5,
    created_at: "2025-10-20T10:30:00.000Z"
  },
  {
    id: "qst-007",
    form_id: "form-001",
    type: "textarea",
    text: "Vous avez d'autres remarques ?",
    options: [],
    required: true,
    validation: {},
    order_index: 6,
    created_at: "2025-10-20T10:30:00.000Z"
  }]