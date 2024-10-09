import EmailForm from "./EmailForm";
import Sidebar from "./Sidebar";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default async function Dashboard() 
{
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0 ml-3">
                <header className="flex h-3 items-center gap-4 border-b bg-muted/40 px-4 md:h-[3.8rem] lg:h-[3.8rem] lg:px-6">
                    <h1 className='font-bold text-xl'>Setari</h1>
                </header>
                <h1>DARK MODE</h1>
                <div className="mt-2">
                    <Label htmlFor="email">Email-ul asociat contului tau:</Label>
                    <EmailForm/>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                    <Switch id="airplane-mode" />
                    <Label htmlFor="airplane-mode">Activeaza notificarile</Label>
                </div>
            </div>
        </div>
    );
};
