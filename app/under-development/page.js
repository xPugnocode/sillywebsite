import Image from "next/image";

export default function UnderDevelopment() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/under-development.svg"
          alt="Icon of a construction sign"
          width={180}
          height={38}
          priority
        />
          <p>
            This website is very much {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              under development
            </code>
            . Sorry I will implement whatever this is soon.
          </p>
      </main>
    </div>
  );
}
