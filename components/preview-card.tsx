type PreviewCardProps = {
  children: React.ReactNode;
};

export function PreviewCard({ children }: PreviewCardProps) {
  return (
    <div className="relative rounded-tl-md rounded-tr-md border border-slate-200 border-b-0 bg-white overflow-hidden">
      <div className="flex h-[360px] items-center justify-center">
        {/* scale wrapper */}
        <div className="scale-[0.7] w-full h-full">{children}</div>
      </div>
    </div>
  );
}
