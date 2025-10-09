import { Footer } from "@/components/footer";
import { Title } from "@/components/title";
import { Stickers } from "@/components/stickers";

export default function Products() {
  return (
    <main className="relative w-full">
      <div className="animate-fade-in mx-auto mt-24 mb-4 w-full rounded-2xl p-6 md:w-4xl md:px-4 md:py-8">
        <div className="md:px-8">
          <Title>My products</Title>
        </div>
        <section className="mt-8 flex flex-col items-start gap-6 md:flex-row md:gap-20 md:px-8"></section>
        <Footer />
      </div>
      <Stickers />
    </main>
  );
}
