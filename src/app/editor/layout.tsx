import { Toaster } from 'sonner';

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full" data-registry="plate">
      {children}
      <Toaster />
    </div>
  );
} 