import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SectionTabs() {
  return (
    <Tabs defaultValue="form">
      <TabsList>
        <TabsTrigger value="form">Questionnaire</TabsTrigger>
        <TabsTrigger value="answer">Réponses</TabsTrigger>
        <TabsTrigger value="control">Panneau de contrôle</TabsTrigger>
        <TabsTrigger value="setting">Paramètres</TabsTrigger>
      </TabsList>
      <TabsContent value="form">Liste des questions.</TabsContent>
      <TabsContent value="answer">Liste des réponses.</TabsContent>
      <TabsContent value="control">Panneau de contrôle.</TabsContent>
      <TabsContent value="setting">Tous les paramètres du formulaire.</TabsContent>
    </Tabs>
  )
}
