
export function Calendar() {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

    // Mock data for day statuses: 0=skipped, 1=done, 2=failed
    const getStatus = (day: number) => {
        if ([2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 21, 22, 23].includes(day)) return 1;
        if ([4, 16].includes(day)) return 2;
        return 0;
    };

    return (
        <div className="bg-white dark:bg-stone-850 rounded-2xl p-4 shadow-sm border border-stone-100 dark:border-stone-800/50">
            <div className="grid grid-cols-7 mb-2">
                {weekDays.map((day) => (
                    <div key={day} className="text-center text-[10px] uppercase font-bold text-stone-400 dark:text-stone-500 tracking-wider">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-y-3 gap-x-1 justify-items-center">
                {/* Padding days */}
                <div className="size-9"></div>
                <div className="size-9"></div>

                {days.map((day) => {
                    const status = getStatus(day);
                    const isToday = day === 24;

                    if (isToday) {
                        return (
                            <div key={day} className="relative group">
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-[10px] px-2 py-1 rounded-md mb-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">Today</div>
                                <button className="size-9 rounded-full bg-primary text-black text-sm font-bold flex items-center justify-center ring-2 ring-offset-2 ring-primary ring-offset-white dark:ring-offset-stone-850 transition-all">
                                    {day}
                                </button>
                            </div>
                        )
                    }

                    let className = "size-9 rounded-full text-sm font-medium flex items-center justify-center transition-transform hover:scale-110 ";

                    if (status === 1) { // Done
                        className += "bg-primary text-black font-bold shadow-[0_2px_8px_rgba(249,245,6,0.3)]";
                    } else if (status === 2) { // Failed
                        className += "border-2 border-red-200 dark:border-red-900/40 text-red-500 dark:text-red-400";
                    } else { // Skipped
                        if (day > 24) {
                            className += "bg-transparent text-stone-300 dark:text-stone-700 cursor-default hover:scale-100";
                        } else {
                            className += "bg-stone-100 dark:bg-stone-800 text-stone-400 dark:text-stone-500";
                        }
                    }

                    return (
                        <button key={day} className={className}>
                            {day}
                        </button>
                    );
                })}
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-stone-400 dark:text-stone-500 font-medium">
                <div className="flex items-center gap-1"><div className="size-2 rounded-full bg-primary"></div>Done</div>
                <div className="flex items-center gap-1"><div className="size-2 rounded-full bg-stone-200 dark:bg-stone-700"></div>Skipped</div>
                <div className="flex items-center gap-1"><div className="size-2 rounded-full border border-red-300 dark:border-red-800"></div>Failed</div>
            </div>
        </div>
    );
}
