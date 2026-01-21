import { CodeBlock } from "./code-block";

type ComponentShowcaseProps = {
  title: string;
  description: string;
  preview: React.ReactNode;
  tsxCode: string;
  jsxCode?: string;
  scale?: number;
};

export function ComponentShowcase({
  title,
  description,
  preview,
  tsxCode,
  jsxCode,
  scale = 0,
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
        <div className="relative rounded-tl-md rounded-tr-md border border-slate-200 border-b-0 bg-white overflow-hidden">
          <div className="min-h-[360px] w-full flex items-center justify-center p-4">
            {/* Add this wrapper div */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className="origin-center"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "center",
                  width: `${100 / scale}%`, // This is the key fix
                  maxWidth: "none", // Override any max-width
                }}
              >
                {preview}
              </div>
            </div>
          </div>
        </div>
        {/* Code */}
        <div className="space-y-4">
          <CodeBlock title="TSX" code={tsxCode} />
          {jsxCode && <CodeBlock title="JSX" code={jsxCode} />}
        </div>
      </div>
    </section>
  );
}
