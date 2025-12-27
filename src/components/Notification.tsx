
interface NotificationProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export function Notification({ message, isVisible, onClose }: NotificationProps) {
    if (!isVisible) return null;

    return (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-sm pointer-events-none">
            <div className="bg-gray-900/95 dark:bg-white/95 backdrop-blur-md text-white dark:text-gray-900 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center justify-between animate-bounce-slight border border-white/10 dark:border-black/5 pointer-events-auto">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-gray-900 text-lg font-bold">check</span>
                    </div>
                    <div>
                        <p className="text-sm font-bold leading-tight">{message}</p>
                        <p className="text-xs text-gray-300 dark:text-gray-600 leading-tight mt-0.5">Let's crush this goal.</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white dark:hover:text-gray-900 transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>
            </div>
        </div>
    );
}
