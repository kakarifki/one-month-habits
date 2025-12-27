
interface MonthSelectorProps {
    currentDate: Date;
    onPrevMonth: () => void;
    onNextMonth: () => void;
}

export function MonthSelector({ currentDate, onPrevMonth, onNextMonth }: MonthSelectorProps) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <div className="flex items-center justify-between mt-2">
            <button
                onClick={onPrevMonth}
                className="group flex size-12 items-center justify-center rounded-full bg-white dark:bg-stone-850 shadow-sm border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-all active:scale-95"
            >
                <span className="material-symbols-outlined text-stone-500 group-hover:text-stone-900 dark:group-hover:text-stone-200">chevron_left</span>
            </button>
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold leading-none tracking-tight">{monthNames[currentDate.getMonth()]}</h2>
                <span className="text-sm font-medium text-stone-500 dark:text-stone-400 mt-1">{currentDate.getFullYear()}</span>
            </div>
            <button
                onClick={onNextMonth}
                className="group flex size-12 items-center justify-center rounded-full bg-white dark:bg-stone-850 shadow-sm border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-all active:scale-95"
            >
                <span className="material-symbols-outlined text-stone-500 group-hover:text-stone-900 dark:group-hover:text-stone-200">chevron_right</span>
            </button>
        </div>
    );
}
