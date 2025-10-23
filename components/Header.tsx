import { Button } from "./ui/button"
import Link from "next/link"
import { FileText } from "lucide-react"

export default function Header() {
  return (
    <div className="fixed flex h-20 bg-white w-full shadow">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full px-4">
        <Link href={"/"} className="flex items-center space-x-1.5">
          <div className="h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center">
            < FileText className="m-2 text-white" />
          </div>
          <h1 className="text-lg font-bold">LAPform</h1>
        </Link> 
        <Button variant={"outline"}>Se déconnecter</Button>
      </div>
    </div>
  )
}
