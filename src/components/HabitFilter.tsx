
export function HabitFilter() {
    const filters = ["All", "Water", "Journal", "Gym", "Read"];

    return (
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
            {filters.map((filter, index) => (
                <button
                    key={filter}
                    className={`flex h-10 shrink-0 items-center justify-center px-6 rounded-full font-semibold shadow-sm text-sm transition-transform active:scale-95 ${index === 0
                            ? "bg-primary text-black"
                            : "bg-white dark:bg-stone-850 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 font-medium hover:bg-stone-50 dark:hover:bg-stone-800"
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
