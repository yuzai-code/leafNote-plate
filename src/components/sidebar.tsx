import { cn } from '@udecode/cn';

interface SidebarProps {
  className?: string;
}

// 定义笔记项的类型
interface NoteItem {
  id: string;
  title: string;
  type: 'file' | 'folder' | 'image';
  children?: NoteItem[];
}

// 文件图标组件
const FileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
);

// 文件夹图标组件
const FolderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
    />
  </svg>
);

// 图片图标组件
const ImageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

// 递归渲染目录树的组件
const NoteTreeItem = ({ item }: { item: NoteItem }) => {
  const getIcon = () => {
    if (item.type === 'folder') return <FolderIcon />;
    if (item.type === 'image' || item.title.match(/\.(png|jpg|jpeg|gif)$/i)) return <ImageIcon />;
    return <FileIcon />;
  };

  if (item.type === 'folder' && item.children) {
    return (
      <li>
        <details open>
          <summary className="flex items-center gap-3 px-4 py-2 text-base">
            {getIcon()}
            {item.title}
          </summary>
          <ul className="menu">
            {item.children.map((child) => (
              <NoteTreeItem key={child.id} item={child} />
            ))}
          </ul>
        </details>
      </li>
    );
  }

  return (
    <li>
      <a className="flex items-center gap-3 px-4 py-2 text-base">
        {getIcon()}
        {item.title}
      </a>
    </li>
  );
};

export function Sidebar({ className }: SidebarProps) {
  // 示例数据结构
  const notes: NoteItem[] = [
    {
      id: '1',
      title: '我的文档',
      type: 'folder',
      children: [
        { id: '2', title: '工作笔记.md', type: 'file' },
        { id: '3', title: '学习资料.md', type: 'file' },
        {
          id: '4',
          title: '图片资源',
          type: 'folder',
          children: [
            { id: '5', title: 'screenshot1.png', type: 'image' },
            { id: '6', title: 'screenshot2.png', type: 'image' },
            {
              id: '7',
              title: '其他图片',
              type: 'folder',
              children: [
                { id: '8', title: 'screenshot3.png', type: 'image' },
              ],
            },
          ],
        },
      ],
    },
    { id: '9', title: 'resume.pdf', type: 'file' },
    { id: '10', title: 'reports-final-2.pdf', type: 'file' },
  ];

  return (
    <div className={cn('flex flex-col h-full', className)}>
      {/* 顶部操作栏 */}
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">我的笔记</h2>
        <button 
          className="btn btn-ghost btn-sm" 
          aria-label="创建新笔记"
          title="创建新笔记"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>

      {/* 笔记目录树 */}
      <div className="flex-1 overflow-auto px-2">
        <ul className="menu rounded-box max-w-xs w-full">
          {notes.map((note) => (
            <NoteTreeItem key={note.id} item={note} />
          ))}
        </ul>
      </div>
    </div>
  );
} 