"use client";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { IconButton } from "./animate-ui/components/buttons/icon";
import { useDictionary } from "./locale-provider";
import { Title } from "./title";

export function Footer() {
  const { footer } = useDictionary();

  return (
    <footer className="mt-20 border-t border-neutral-200/80 pt-10 dark:border-neutral-800">
      <div className="mb-8 flex items-center justify-between gap-4">
        <Title>{footer.follow}</Title>
        <div className="flex gap-2">
          <IconButton
            variant="outline"
            size="lg"
            onClick={() => {
              window.open(
                "https://linkedin.com/in/mikebalderasanchez",
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <IconBrandLinkedin />
          </IconButton>
          <IconButton
            variant="outline"
            size="lg"
            onClick={() => {
              window.open(
                "https://github.com/mikebalderasanchez",
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <IconBrandGithub />
          </IconButton>
        </div>
      </div>
      <p className="text-center text-sm text-neutral-500">{footer.thanks}</p>
    </footer>
  );
}
