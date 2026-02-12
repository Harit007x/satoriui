import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";

type ComponentShowcaseProps = {
  title: string;
  description: string;
  preview: React.ReactNode;
  tsxCode: string;
  jsxCode?: string;
  scale?: number;
  innerStretch?: boolean;
  mobilePreviewImage?: string;
};

export function ComponentShowcase({
  title,
  description,
  preview,
  tsxCode,
  jsxCode,
  scale = 1,
  innerStretch,
  mobilePreviewImage,
}: ComponentShowcaseProps) {
  const hasMobilePreview = Boolean(mobilePreviewImage);

  return (
    <section className="space-y-6 mx-auto max-w-2xl">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-text">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl">{description}</p>
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
            className={cn(
              "w-full items-stretch justify-center p-4",
              hasMobilePreview
                ? "hidden md:flex min-h-[360px]"
                : "flex min-h-[360px]",
            )}
          >
            <div
              className={cn(
                "relative w-full flex justify-center overflow-hidden",
                innerStretch ? "items-stretch" : "items-center",
              )}
            >
              <div
                style={{
                  zoom: scale,
                }}
                className="w-full flex justify-center"
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
