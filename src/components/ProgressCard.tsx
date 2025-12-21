

export function ProgressCard() {
    return (
        <section className="w-full">
            <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-[#2c2b1f] p-6 shadow-sm border border-gray-100 dark:border-white/5 relative overflow-hidden">
                {/* Background decorative shape */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="flex items-start justify-between relative z-0">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wide">Daily Progress</p>
                        <h2 className="text-3xl font-bold leading-tight">Thursday, Oct 24</h2>
                    </div>
                    <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-yellow-700 dark:text-yellow-200">
                        <span className="material-symbols-outlined filled">calendar_today</span>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-2">
                    <div className="flex justify-between items-end">
                        <span className="text-4xl font-bold text-[#181811] dark:text-white">60%</span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium mb-1">3 of 5 completed</span>
                    </div>
                    {/* Progress Bar Component */}
                    <div className="h-4 w-full bg-[#e6e6db] dark:bg-white/10 rounded-full overflow-hidden p-1">
                        <div className="h-full rounded-full bg-primary transition-all duration-1000 ease-out relative" style={{ width: "60%" }}>
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-white/30 w-full h-full animate-shimmer -translate-x-full transform" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
