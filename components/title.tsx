export function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <span className="size-2 rounded-full bg-neutral-500 dark:bg-neutral-300" />
      <h1 className="text-lg md:text-xl font-medium text-neutral-500 dark:text-neutral-300">
        {children}
      </h1>
    </div>
  );
}
