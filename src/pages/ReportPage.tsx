import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MonthSelector } from "../components/MonthSelector";
import { HabitFilter } from "../components/HabitFilter";
import { Calendar } from "../components/Calendar";
import { StatsDashboard } from "../components/StatsDashboard";

export function ReportPage() {
    const navigate = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePrevMonth = () => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() - 1);
            return newDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            newDate.setMonth(prev.getMonth() + 1);
            return newDate;
        });
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col antialiased selection:bg-primary selection:text-black">
            {/* Top App Bar */}
            <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-transparent">
                <button
                    onClick={() => navigate("/")}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-transform text-slate-900 dark:text-white"
                >
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h1 className="text-lg font-bold tracking-tight">Report</h1>
                <button className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-transform text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined">more_horiz</span>
                </button>
            </header>

            <main className="flex-1 flex flex-col gap-6 px-4 pb-8 w-full max-w-md mx-auto">
                <MonthSelector
                    currentDate={currentDate}
                    onPrevMonth={handlePrevMonth}
                    onNextMonth={handleNextMonth}
                />
                <HabitFilter />
                <Calendar currentDate={currentDate} />
                <StatsDashboard />
            </main>
        </div>
    );
}
