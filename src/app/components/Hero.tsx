import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center gap-6 text-center">
      <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image
          src="/avatar.jpg"
          alt="Profile picture"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Aspiring Software Engineer
      </p>
      <a
        href="#projects"
        className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full
                 hover:bg-blue-700 transition-colors"
      >
        View My Projects
      </a>
    </section>
  );
}