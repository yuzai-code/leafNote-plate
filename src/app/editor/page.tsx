import { PlateEditor } from '@/components/editor/plate-editor';
import { Sidebar } from '@/components/sidebar';

export default function EditorPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-base-100">
      {/* 侧边栏 */}
      <Sidebar className="w-78 border-r border-base-300" />
      
      {/* 主要内容区域 */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* 编辑器区域 */}
        <div className="flex-1 overflow-auto p-4">
          <div className="mx-auto h-full">
            <PlateEditor />
          </div>
        </div>
      </div>
    </div>
  );
}
