import { Response } from "@/model/tables";

export const responseList: Response[] = [
  {
    id: "resp-001",
    form_id: "form-001",
    answers: {
      "qst-001": "Marie Dubois",
      "qst-002": "marie.dubois@email.com",
      "qst-003": "0612345678",
      "qst-004": "2025-10-15",
      "qst-005": ["Service client", "Qualité produit"],
      "qst-006": "Oui",
      "qst-007": "Très satisfaite de mon expérience globale. Le personnel était accueillant."
    },
    submitted_at: "2025-10-20T14:30:00.000Z",
    user_id: "user-001",
    ip_address: "192.168.1.10"
  },
  {
    id: "resp-002",
    form_id: "form-001",
    answers: {
      "qst-001": "Pierre Martin",
      "qst-002": "pierre.martin@email.com",
      "qst-003": "0623456789",
      "qst-004": "2025-10-16",
      "qst-005": ["Prix", "Accessibilité"],
      "qst-006": "Non",
      "qst-007": "Les prix sont un peu élevés par rapport à la concurrence. L'accessibilité pourrait être améliorée."
    },
    submitted_at: "2025-10-20T15:45:00.000Z",
    user_id: "user-002",
    ip_address: "192.168.1.11"
  },
  {
    id: "resp-003",
    form_id: "form-001",
    answers: {
      "qst-001": "Sophie Lefebvre",
      "qst-002": "sophie.lefebvre@email.com",
      "qst-003": "0634567890",
      "qst-004": "2025-10-17",
      "qst-005": ["Accueil", "Service client"],
      "qst-006": "Oui",
      "qst-007": "Accueil chaleureux mais temps d'attente un peu long."
    },
    submitted_at: "2025-10-21T09:20:00.000Z",
    user_id: "user-003",
    ip_address: "192.168.1.12"
  },
  {
    id: "resp-004",
    form_id: "form-001",
    answers: {
      "qst-001": "Luc Moreau",
      "qst-002": "luc.moreau@email.com",
      "qst-003": "0645678901",
      "qst-004": "2025-10-18",
      "qst-005": ["Qualité produit"],
      "qst-006": "Oui",
      "qst-007": "Produits de qualité mais gamme un peu limitée."
    },
    submitted_at: "2025-10-21T11:15:00.000Z",
    user_id: "user-004",
    ip_address: "192.168.1.13"
  },
  {
    id: "resp-005",
    form_id: "form-001",
    answers: {
      "qst-001": "Camille Bernard",
      "qst-002": "camille.bernard@email.com",
      "qst-003": "0656789012",
      "qst-004": "2025-10-19",
      "qst-005": ["Service client", "Prix", "Accessibilité"],
      "qst-006": "Ne se prononce pas",
      "qst-007": "Expérience mitigée. Certains aspects à améliorer mais globalement correct."
    },
    submitted_at: "2025-10-21T16:30:00.000Z",
    user_id: "user-005",
    ip_address: "192.168.1.14"
  },
  {
    id: "resp-006",
    form_id: "form-001",
    answers: {
      "qst-001": "Thomas Rousseau",
      "qst-002": "thomas.rousseau@email.com",
      "qst-003": "0667890123",
      "qst-004": "2025-10-20",
      "qst-005": ["Accessibilité", "Accueil"],
      "qst-006": "Oui",
      "qst-007": "Bon service dans l'ensemble. Parking difficile à trouver."
    },
    submitted_at: "2025-10-22T10:00:00.000Z",
    user_id: "user-006",
    ip_address: "192.168.1.15"
  },
  {
    id: "resp-007",
    form_id: "form-001",
    answers: {
      "qst-001": "Julie Petit",
      "qst-002": "julie.petit@email.com",
      "qst-003": "0678901234",
      "qst-004": "2025-10-21",
      "qst-005": ["Prix"],
      "qst-006": "Oui",
      "qst-007": "Excellent service ! Juste les prix qui sont un peu élevés pour certains produits."
    },
    submitted_at: "2025-10-22T13:45:00.000Z",
    user_id: "user-007",
    ip_address: "192.168.1.16"
  },
  {
    id: "resp-008",
    form_id: "form-001",
    answers: {
      "qst-001": "Antoine Durand",
      "qst-002": "antoine.durand@email.com",
      "qst-003": "0689012345",
      "qst-004": "2025-10-22",
      "qst-005": ["Service client", "Qualité produit", "Prix"],
      "qst-006": "Non",
      "qst-007": "Déçu par la qualité des produits et le manque de professionnalisme du service client. Prix trop élevés."
    },
    submitted_at: "2025-10-23T08:30:00.000Z",
    user_id: "user-008",
    ip_address: "192.168.1.17"
  },
  {
    id: "resp-009",
    form_id: "form-001",
    answers: {
      "qst-001": "Isabelle Roux",
      "qst-002": "isabelle.roux@email.com",
      "qst-003": "0690123456",
      "qst-004": "2025-10-23",
      "qst-005": ["Accueil"],
      "qst-006": "Oui",
      "qst-007": "Très bonne expérience ! Personnel souriant et à l'écoute. Petit bémol sur l'accueil téléphonique."
    },
    submitted_at: "2025-10-23T14:20:00.000Z",
    user_id: "user-009",
    ip_address: "192.168.1.18"
  },
  {
    id: "resp-010",
    form_id: "form-001",
    answers: {
      "qst-001": "Nicolas Simon",
      "qst-002": "nicolas.simon@email.com",
      "qst-003": "0601234567",
      "qst-004": "2025-10-24",
      "qst-005": ["Qualité produit", "Accessibilité"],
      "qst-006": "Oui",
      "qst-007": "Satisfait globalement. Serait bien d'avoir plus de variété dans les produits proposés."
    },
    submitted_at: "2025-10-24T11:10:00.000Z",
    user_id: "user-010",
    ip_address: "192.168.1.19"
  }
];
