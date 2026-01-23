import { CodeBlock } from "./code-block";

type ComponentShowcaseProps = {
  title: string;
  description: string;
  preview: React.ReactNode;
  tsxCode: string;
  jsxCode?: string;
  scale?: number;
  mobilePreviewImage?: string;
};

export function ComponentShowcase({
  title,
  description,
  preview,
  tsxCode,
  jsxCode,
  scale = 1,
  mobilePreviewImage,
}: ComponentShowcaseProps) {
  const hasMobilePreview = Boolean(mobilePreviewImage);

  return (
    <section className="space-y-6 mx-auto max-w-2xl">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="text-sm text-slate-500 max-w-xl">{description}</p>
      </header>

      <div>
        {/* Preview */}
        <div className="relative rounded-t-md border border-slate-200 bg-white overflow-hidden">
          {/* 📱 Mobile snapshot (ONLY if provided) */}
          {hasMobilePreview && (
            <div className="block md:hidden">
              <img
                src={mobilePreviewImage}
                alt={`${title} preview`}
                className="w-full h-auto object-contain bg-white"
                loading="lazy"
              />
            </div>
          )}

          {/* 🧠 Interactive preview */}
          <div
            className={[
              "w-full items-center justify-center p-4",
              hasMobilePreview
                ? "hidden md:flex min-h-[360px]"
                : "flex min-h-[360px]",
            ].join(" ")}
          >
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <div
                className="origin-center"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "center",
                  width: `${100 / scale}%`,
                  maxWidth: "none",
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
