import FormHeader from "@/components/form/FormHeader";
import SectionTabs from "@/components/form/SectionTabs";

export default async function page({ params } : { params : Promise<{ formId: string }> }) {

  const { formId } = await params;

  return (
    <div className="centerClass py-28">
      <FormHeader formId={formId}/>
      <h1>Form : {formId}</h1>
      <SectionTabs/>
    </div>
  )
}
