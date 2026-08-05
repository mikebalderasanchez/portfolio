import { cn } from "@/lib/utils";

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
      <h2 className="text-sm font-medium tracking-[0.14em] text-neutral-500 uppercase dark:text-neutral-400">
        {children}
      </h2>
    </div>
  );
}
