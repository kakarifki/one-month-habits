import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressCard } from "../components/ProgressCard";
import { HabitList } from "../components/HabitList";
import { FAB } from "../components/FAB";
import { Layout } from "../components/Layout";

export function DashboardPage() {
    const navigate = useNavigate();

    return (
        <Layout>
            {/* Augmented Header with navigation */}
            <Header />

            {/* Invisible button overlay to navigate to report (as per user flow, presumably clicking on progress card or similar, but adding a dedicated button or hooking into an existing element is better. For now, let's keep it simple and maybe add a link in the header or just a temporary button for testing if not specified) */}
            {/* Actually, looking at the header in the first request, there is a settings button. The user asked to create the UI. Let's assume the user might want to navigate via a button. I'll add a 'View Report' button temporarily or hook it to the Progress stats if common UX. 
         Wait, better yet, let's make the ProgressCard clickable as it shows stats.
      */}

            <main className="flex flex-col px-4 gap-6 relative">
                <div onClick={() => navigate("/report")} className="cursor-pointer">
                    <ProgressCard />
                </div>
                <HabitList />
            </main>
            <FAB />
        </Layout>
    );
}
