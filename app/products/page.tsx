'use client';

import { Footer } from "@/components/footer";
import { useDictionary } from "@/components/locale-provider";
import { PageShell } from "@/components/page-shell";
import { Title } from "@/components/title";

export default function Products() {
  const { products } = useDictionary();

  return (
    <PageShell>
      <Title>{products.title}</Title>
      <p className="mt-6 text-neutral-500">{products.comingSoon}</p>
      <Footer />
    </PageShell>
  );
}
