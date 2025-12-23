export function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm ${className}`}
        >
            {children}
        </div>
    );
}


export function CardContent({ children, className = "" }) {
    return <div className={`p-6 ${className}`}>{children}</div>;
}