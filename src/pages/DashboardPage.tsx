import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressCard } from "../components/ProgressCard";
import { HabitList } from "../components/HabitList";
import { FAB } from "../components/FAB";
import { Layout } from "../components/Layout";
import { AddHabitModal } from "../components/AddHabitModal";

export function DashboardPage() {
    const navigate = useNavigate();
    const [isAddHabitOpen, setIsAddHabitOpen] = useState(false);

    return (
        <Layout>
            <Header />

            <main className="flex flex-col px-4 gap-6 relative">
                <div onClick={() => navigate("/report")} className="cursor-pointer">
                    <ProgressCard />
                </div>
                <HabitList />
            </main>

            <FAB onClick={() => setIsAddHabitOpen(true)} />
            <AddHabitModal isOpen={isAddHabitOpen} onClose={() => setIsAddHabitOpen(false)} />
        </Layout>
    );
}
