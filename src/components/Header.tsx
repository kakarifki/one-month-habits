

export function Header() {
    return (
        <header className="flex items-center px-6 py-4 justify-between sticky top-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md z-10 transition-colors duration-200">
            <div className="flex items-center gap-3">
                <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#2c2b1f] shadow-sm text-[#181811] dark:text-white transition-transform active:scale-95">
                    <span className="material-symbols-outlined">account_circle</span>
                </button>
            </div>
            <h1 className="text-xl font-bold leading-tight tracking-tight">Today</h1>
            <button className="flex size-10 shrink-0 items-center justify-center rounded-full bg-transparent text-[#181811] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">settings</span>
            </button>
        </header>
    );
}
