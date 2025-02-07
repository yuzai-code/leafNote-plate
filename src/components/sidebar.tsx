import { cn } from '@udecode/cn';
import { LucideFileText, LucidePlus } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {/* 顶部操作栏 */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">我的笔记</h2>
        <button className="btn btn-ghost btn-sm" aria-label="创建新笔记">
          <LucidePlus className="h-4 w-4" />
        </button>
      </div>

      {/* 笔记列表 */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-1 p-2">
          {/* 示例笔记项 */}
          {[1, 2, 3].map((i) => (
            <button
              key={i}
              className="flex w-full items-center gap-2 rounded-lg p-2 hover:bg-base-200"
              aria-label={`打开笔记 ${i}`}
            >
              <LucideFileText className="h-4 w-4" />
              <span className="flex-1 truncate text-left">笔记 {i}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 