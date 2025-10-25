
export type Form = {
  id: string;
  title: string;
  description?: string;
  settings: Record<string, any>; // JSON object
  created_by?: string;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
}

export type QuestionType =
  | "text"
  | "textarea"
  | "number"
  | "email"
  | "radio"
  | "checkbox"
  | "select"
  | "date"
  | "file";

export type Question = {
  id: string;
  form_id: string;
  type: QuestionType;
  text: string;
  options?: string[]; // JSON array
  required: boolean;
  validation?: Record<string, any>; // JSON object
  order_index: number;
  created_at: string; // ISO timestamp
}

export type User = {
  id: string;
  email: string;
  password_hash: string;
  salt: string;
  name?: string;
  created_at: string; // ISO timestamp
  last_login?: string; // ISO timestamp
}

export type Response = {
  id: string;
  form_id: string;
  answers: Record<string, any>; // JSON object with question_id as keys
  submitted_at: string; // ISO timestamp
  user_id?: string;
  ip_address?: string;
}

// Types pour les queries (avec �tats de chargement)
export type Query<T> = {
  isLoading: boolean;
  error: Error | null;
  data: T | null;
}

export type FormsQuery = Query<Form[]>;
export type FormQuery = Query<Form>;
export type QuestionsQuery = Query<Question[]>;
export type ResponsesQuery = Query<Response[]>;
export type UsersQuery = Query<User[]>;
