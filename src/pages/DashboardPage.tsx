import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { ProgressCard } from "../components/ProgressCard";
import { HabitList } from "../components/HabitList";
import { FAB } from "../components/FAB";
import { Layout } from "../components/Layout";
import { AddHabitModal } from "../components/AddHabitModal";
import { Notification } from "../components/Notification";

export function DashboardPage() {
    const navigate = useNavigate();
    const [isAddHabitOpen, setIsAddHabitOpen] = useState(false);
    const [notification, setNotification] = useState<{ message: string, isVisible: boolean }>({ message: "", isVisible: false });

    const handleSaveHabit = (name: string) => {
        setNotification({ message: `${name} saved!`, isVisible: true });
        // Auto-hide after 3 seconds
        setTimeout(() => {
            setNotification(prev => ({ ...prev, isVisible: false }));
        }, 3000);
    };

    return (
        <Layout>
            <Header />
            <Notification
                message={notification.message}
                isVisible={notification.isVisible}
                onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
            />

            <main className="flex flex-col px-4 gap-6 relative">
                <div onClick={() => navigate("/report")} className="cursor-pointer">
                    <ProgressCard />
                </div>
                <HabitList />
            </main>

            <FAB onClick={() => setIsAddHabitOpen(true)} />
            <AddHabitModal
                isOpen={isAddHabitOpen}
                onClose={() => setIsAddHabitOpen(false)}
                onSave={handleSaveHabit}
            />
        </Layout>
    );
}
