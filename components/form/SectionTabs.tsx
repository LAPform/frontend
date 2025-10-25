import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Settings from "@/components/form/SettingsTab";
import ControlPannel from "@/components/form/ControlPannelTab";
import QuestionsTab from "@/components/form/QuestionsTab";
import AnswersTab from "@/components/form/AnswersTab";


export default function SectionTabs({ formId }: { formId: string }) {
  return (
    <Tabs defaultValue="question" className="my-4">
      <TabsList>
        <TabsTrigger value="question">Questionnaire</TabsTrigger>
        <TabsTrigger value="answer">Réponses</TabsTrigger>
        <TabsTrigger value="control">Panneau de contrôle</TabsTrigger>
        <TabsTrigger value="setting">Paramètres</TabsTrigger>
      </TabsList>
      <TabsContent value="question"><QuestionsTab formId={formId}/></TabsContent>
      <TabsContent value="answer"><AnswersTab formId={formId}/></TabsContent>
      <TabsContent value="control"><ControlPannel formId={formId}/></TabsContent>
      <TabsContent value="setting"><Settings formId={formId}/></TabsContent>
    </Tabs>
  )
}
