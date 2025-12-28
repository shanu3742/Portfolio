export function Badge({ children, variant = "secondary", className = "" }: any) {
    const variants: any = {
        secondary:
            "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200",
        primary:
            "bg-blue-600 text-white dark:bg-blue-500 dark:text-white"
    };


    return (
        <span
            className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-xl ${variants[variant as string]} ${className}`}
        >
            {children}
        </span>
    );
}