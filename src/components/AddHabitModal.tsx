import { useState, useEffect } from "react";

interface AddHabitModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AddHabitModal({ isOpen, onClose }: AddHabitModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for transition
            document.body.style.overflow = "unset";
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-end justify-center sm:items-center transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={`relative z-10 w-full sm:max-w-md bg-background-light dark:bg-background-dark rounded-t-[2rem] sm:rounded-[2rem] shadow-2xl overflow-hidden transition-transform duration-300 ease-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>

                {/* Handle & Header */}
                <div className="flex flex-col items-center pt-3 pb-2 px-6 relative">
                    <div className="h-1.5 w-12 rounded-full bg-[#e6e6db] dark:bg-gray-600 mb-4 opacity-80" />
                    <div className="w-full flex items-center justify-between">
                        <div className="w-10"></div>
                        <h4 className="text-[#181811] dark:text-white text-lg font-bold leading-normal tracking-[0.015em] text-center">Add New Habit</h4>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f0f0eb] dark:bg-[#323118] text-[#181811] dark:text-gray-200 hover:bg-[#e6e6db] dark:hover:bg-[#454425] transition-colors"
                        >
                            <span className="material-symbols-outlined text-[20px]">close</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col px-6 pt-6 pb-4 gap-8">
                    {/* Input */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[#8c8b5f] dark:text-gray-400 text-sm font-semibold pl-1 uppercase tracking-wide">Habit Name</label>
                        <div className="relative">
                            <input
                                autoFocus
                                className="w-full bg-transparent border-none text-[#181811] dark:text-white text-4xl font-medium placeholder-[#cdcDB4] dark:placeholder-gray-700 focus:ring-0 p-0 caret-primary leading-tight outline-none"
                                placeholder="e.g., Morning Run"
                            />
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#323118] border border-gray-100 dark:border-gray-800 shadow-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-[#3d3c2a] transition-colors">
                            <span className="material-symbols-outlined text-[#8c8b5f] dark:text-yellow-100/60 text-lg">calendar_month</span>
                            <span className="text-sm font-medium text-[#8c8b5f] dark:text-yellow-100/60">Daily Goal</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#323118] border border-gray-100 dark:border-gray-800 shadow-sm opacity-50 cursor-pointer hover:opacity-100 transition-opacity">
                            <span className="material-symbols-outlined text-[#8c8b5f] dark:text-gray-500 text-lg">notifications</span>
                            <span className="text-sm font-medium text-[#8c8b5f] dark:text-gray-500">Reminder</span>
                        </div>
                    </div>
                </div>

                <div className="h-4"></div>

                {/* Action Button */}
                <div className="px-6 pb-6 w-full">
                    <button className="w-full h-14 bg-primary text-[#181811] text-lg font-bold rounded-full shadow-glow hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <span>Save Habit</span>
                        <span className="material-symbols-outlined text-xl">check</span>
                    </button>
                </div>

                {/* Padding for bottom to separate from simulated keyboard if needed, or mostly just padding */}
                <div className="h-4 sm:h-0"></div>
            </div>
        </div>
    );
}
