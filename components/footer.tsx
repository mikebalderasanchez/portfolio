"use client";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { IconButton } from "./animate-ui/components/buttons/icon";
import { Title } from "./title";

export function Footer() {
  return (
    <footer className="mt-10 mb-4">
      <div className="mb-4 flex items-center justify-between px-4 py-4 md:px-8">
        <Title>Follow me</Title>
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
      <div className="flex-col items-center justify-center px-4 py-4 md:px-8">
        <p className="text-center text-neutral-500">
          Thanks for visiting my portfolio!
        </p>
        <p className="text-center text-neutral-500">Miguel Angel Balderas</p>
      </div>
    </footer>
  );
}
