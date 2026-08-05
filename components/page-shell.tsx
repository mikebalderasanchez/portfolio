import { cn } from "@/lib/utils";

export function PageShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="relative w-full overflow-x-hidden">
      <div
        className={cn(
          "animate-fade-in mx-auto mt-20 mb-8 w-full max-w-5xl px-4 md:mt-28 md:px-8",
          className,
        )}
      >
        {children}
      </div>
    </main>
  );
}
