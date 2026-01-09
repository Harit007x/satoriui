import { CodeBlock } from "./code-block";
import { PreviewCard } from "./preview-card";

type ComponentShowcaseProps = {
  title: string;
  description: string;
  preview: React.ReactNode;
  tsxCode: string;
  jsxCode?: string;
};

export function ComponentShowcase({
  title,
  description,
  preview,
  tsxCode,
  jsxCode,
}: ComponentShowcaseProps) {
  return (
    <section className="space-y-6 mx-auto max-w-[700px]">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">{description}</p>
      </header>

      <div>
        {/* Preview */}
        <PreviewCard>{preview}</PreviewCard>

        {/* Code */}
        <div className="space-y-4">
          <CodeBlock title="TSX" code={tsxCode} />
          {jsxCode && <CodeBlock title="JSX" code={jsxCode} />}
        </div>
      </div>
    </section>
  );
}
