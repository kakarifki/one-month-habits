
import { HabitItem } from "./HabitItem";

export function HabitList() {
    const habits = [
        { title: "Morning Run", streak: 12, completed: true },
        { title: "Drink Water", streak: 5, completed: true },
        { title: "Read 10 Pages", streak: 2, completed: true },
        { title: "Meditate", streak: 0, completed: false },
        { title: "No Sugar", streak: 4, completed: false },
    ];

    return (
        <section className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold tracking-tight">Your Habits</h2>
                <button className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">View All</button>
            </div>
            <div className="flex flex-col gap-3">
                {habits.map((habit, index) => (
                    <HabitItem key={index} {...habit} />
                ))}
            </div>
        </section>
    );
}
