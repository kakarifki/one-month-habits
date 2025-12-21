

interface HabitItemProps {
    title: string;
    streak: number;
    completed: boolean;
}

export function HabitItem({ title, streak, completed }: HabitItemProps) {
    return (
        <div className={`group flex items-center gap-4 p-4 rounded-xl border transition-all active:scale-[0.98] ${completed
            ? "bg-primary/20 dark:bg-primary/10 border-primary/20"
            : "bg-white dark:bg-[#2c2b1f] border-gray-100 dark:border-white/5 shadow-sm"
            }`}>
            <button className={`shrink-0 size-8 rounded-full flex items-center justify-center transition-transform ${completed
                ? "bg-primary text-[#181811] shadow-sm hover:scale-110"
                : "border-2 border-gray-300 dark:border-gray-600 bg-transparent text-transparent hover:border-primary hover:bg-primary/10"
                }`}>
                <span className={`material-symbols-outlined text-xl ${completed ? "font-bold" : ""}`}>check</span>
            </button>
            <div className="flex flex-col flex-1">
                <h3 className={`font-bold text-lg text-[#181811] dark:text-white ${completed ? "line-through decoration-2 decoration-primary/50 opacity-70" : ""}`}>
                    {title}
                </h3>
                <div className={`flex items-center gap-1 text-sm font-medium ${completed ? "text-gray-600 dark:text-gray-400 opacity-80" : "text-gray-500 dark:text-gray-400"}`}>
                    <span className={completed ? "text-orange-500" : "grayscale opacity-50 group-hover:grayscale-0 transition-all"}>🔥</span> {streak} Day Streak
                </div>
            </div>
        </div>
    );
}
