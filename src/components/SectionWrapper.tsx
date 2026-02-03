interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  title,
  children,
}: SectionWrapperProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

      <h2 className="text-base font-semibold text-gray-800 mb-4">
  {title}
</h2>

      <div className="grid gap-4">{children}</div>
    </div>
  );
}
