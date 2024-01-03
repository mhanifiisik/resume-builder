import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-6xl font-bold">Hello World</h1>
      <Button>Click me</Button>
    </main>
  );
}
