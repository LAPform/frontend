import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Settings from "@/components/form/SettingsPage";
import ControlPannel from "./ControlPannel";

export default function SectionTabs({ formId }: { formId: string }) {
  return (
    <Tabs defaultValue="form" className="my-4">
      <TabsList>
        <TabsTrigger value="form">Questionnaire</TabsTrigger>
        <TabsTrigger value="answer">Réponses</TabsTrigger>
        <TabsTrigger value="control">Panneau de contrôle</TabsTrigger>
        <TabsTrigger value="setting">Paramètres</TabsTrigger>
      </TabsList>
      <TabsContent value="form">Liste des questions.</TabsContent>
      <TabsContent value="answer">Liste des réponses.</TabsContent>
      <TabsContent value="control"><ControlPannel/></TabsContent>
      <TabsContent value="setting"><Settings formId={formId}/></TabsContent>
    </Tabs>
  )
}
