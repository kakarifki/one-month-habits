import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function SettingsPage() {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial dark mode state
        if (document.documentElement.classList.contains("dark")) {
            setIsDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    };

    return (
        <div className="relative flex h-full min-h-screen w-full max-w-md flex-col overflow-hidden bg-background-light dark:bg-background-dark shadow-xl mx-auto font-display">
            {/* Top Navigation */}
            <div className="flex items-center px-4 py-3 pb-4 justify-between sticky top-0 z-10 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm">
                <button
                    onClick={() => navigate("/")}
                    className="flex size-10 shrink-0 items-center justify-center rounded-full active:bg-gray-100 dark:active:bg-white/10 transition-colors cursor-pointer text-[#181811] dark:text-white"
                >
                    <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
                </button>
                <h2 className="text-xl font-bold leading-tight tracking-tight flex-1 text-center pr-10 text-[#181811] dark:text-white">Settings</h2>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-8">

                {/* Section: Appearance */}
                <div className="mt-2">
                    <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-tight tracking-wider px-6 pb-2 pt-4 uppercase">Appearance</h3>
                    <div className="mx-4 overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm">
                        {/* Dark Mode Item */}
                        <div className="flex items-center gap-4 px-4 py-3 justify-between active:bg-gray-50 dark:active:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-full bg-primary/20 text-yellow-700 dark:text-yellow-200 shrink-0 size-10">
                                    <span className="material-symbols-outlined">dark_mode</span>
                                </div>
                                <p className="text-base font-medium leading-normal flex-1 truncate text-[#181811] dark:text-white">Dark Mode</p>
                            </div>
                            <div className="shrink-0">
                                <label className="relative flex h-[32px] w-[52px] cursor-pointer items-center rounded-full border-none bg-gray-200 dark:bg-white/20 p-1 transition-colors has-[:checked]:bg-primary">
                                    <input
                                        className="peer invisible absolute"
                                        type="checkbox"
                                        checked={isDarkMode}
                                        onChange={toggleDarkMode}
                                    />
                                    <div className="h-[24px] w-[24px] rounded-full bg-white shadow-sm transition-all peer-checked:translate-x-[20px]"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Data Management */}
                <div className="mt-6">
                    <h3 className="text-gray-500 dark:text-gray-400 text-xs font-bold leading-tight tracking-wider px-6 pb-2 pt-4 uppercase">Data Management</h3>
                    <div className="mx-4 flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm">
                        {/* Import Data */}
                        <div className="group flex items-center gap-4 px-4 py-3 justify-between cursor-pointer active:bg-gray-50 dark:active:bg-white/5 transition-colors border-b border-gray-100 dark:border-white/5 last:border-0">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 shrink-0 size-10">
                                    <span className="material-symbols-outlined">download</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-base font-medium leading-normal truncate text-[#181811] dark:text-white">Import Data</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 font-normal">Restore from backup</p>
                                </div>
                            </div>
                            <div className="shrink-0 text-gray-400 dark:text-gray-500">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                        {/* Export Data */}
                        <div className="group flex items-center gap-4 px-4 py-3 justify-between cursor-pointer active:bg-gray-50 dark:active:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-300 shrink-0 size-10">
                                    <span className="material-symbols-outlined">upload</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-base font-medium leading-normal truncate text-[#181811] dark:text-white">Export JSON</p>
                                    <p className="text-xs text-gray-400 dark:text-gray-500 font-normal">Save your progress</p>
                                </div>
                            </div>
                            <div className="shrink-0 text-gray-400 dark:text-gray-500">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section: Danger Zone */}
                <div className="mt-8 px-4">
                    <div className="rounded-2xl border border-red-100 bg-red-50/50 dark:bg-red-900/10 dark:border-red-900/30 p-4">
                        <div className="flex flex-col items-center gap-3 text-center">
                            <div className="size-12 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400 flex items-center justify-center">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-bold text-red-700 dark:text-red-400">Danger Zone</h4>
                                <p className="text-sm text-red-600/80 dark:text-red-300/70">Once you delete your data, there is no going back. Please be certain.</p>
                            </div>
                            <button className="mt-2 w-full rounded-xl bg-white dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 font-semibold py-3 px-4 shadow-sm hover:bg-red-50 dark:hover:bg-red-900/20 active:scale-[0.98] transition-all">
                                Clear All Data
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer: About */}
                <div className="mt-12 mb-8 flex flex-col items-center justify-center gap-2 text-center opacity-60">
                    <div className="size-16 rounded-2xl bg-gradient-to-br from-primary to-yellow-200 dark:to-yellow-600 shadow-inner flex items-center justify-center mb-2">
                        <span className="material-symbols-outlined text-3xl text-black/50">calendar_month</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">One Month</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Version 1.0.2</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 flex items-center gap-1">
                        Made with <span className="material-symbols-outlined text-[14px] text-red-400 fill-current">favorite</span> by DesignBot
                    </p>
                </div>
            </div>
        </div>
    );
}
