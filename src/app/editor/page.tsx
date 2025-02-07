import { PlateEditor } from '@/components/editor/plate-editor';
import { Sidebar } from '@/components/sidebar';
import { Toolbar } from '@/components/toolbar';

export default function EditorPage() {
  return (
    <div className="flex h-screen bg-base-100">
      {/* 侧边栏 */}
      <Sidebar className="w-64 border-r border-base-300" />
      
      {/* 主要内容区域 */}
      <div className="flex flex-1 flex-col">
        {/* 编辑器区域 */}
        <div className="flex-1 overflow-auto p-4">
          <div className="mx-auto max-w-4xl">
            <PlateEditor />
          </div>
        </div>
      </div>
    </div>
  );
}
