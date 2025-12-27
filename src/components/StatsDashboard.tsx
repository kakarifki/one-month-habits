
export function StatsDashboard() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {/* Best Streak */}
            <div className="col-span-2 flex items-center justify-between bg-primary p-6 rounded-2xl shadow-sm group">
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-black/70">Best Streak</span>
                    <span className="text-4xl font-bold text-black tracking-tight">12 Days</span>
                    <div className="flex items-center gap-1 text-black/60 text-sm font-medium mt-1">
                        <span className="material-symbols-outlined text-base">local_fire_department</span>
                        <span>Oct 9 - Oct 20</span>
                    </div>
                </div>
                <div className="size-14 rounded-full bg-black/10 flex items-center justify-center text-black">
                    <span className="material-symbols-outlined text-3xl">emoji_events</span>
                </div>
            </div>
            {/* Success Rate */}
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-stone-850 border border-stone-100 dark:border-stone-800/50">
                <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                    <span className="material-symbols-outlined text-xl">trending_up</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Success</span>
                </div>
                <span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">85%</span>
            </div>
            {/* Total Days */}
            <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white dark:bg-stone-800 border border-stone-100 dark:border-stone-800/50">
                <div className="flex items-center gap-2 text-stone-500 dark:text-stone-400">
                    <span className="material-symbols-outlined text-xl">check_circle</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Total</span>
                </div>
                <span className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">24</span>
            </div>
        </div>
    );
}
