interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title.split(" ").map((word, i, arr) =>
          i === arr.length - 1 ? (
            <span key={i} className="text-gradient">
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="glow-line mx-auto mt-6 w-24" />
    </div>
  );
}
