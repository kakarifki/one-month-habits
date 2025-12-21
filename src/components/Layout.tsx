import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24">
            {children}
        </div>
    );
}
