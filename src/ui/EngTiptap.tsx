import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import { useTranslation } from "react-i18next";
import EngToolbar from "./EngToolbar";
import { useEffect } from "react";

export default function EngTiptap({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) {
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: description,
    editorProps: {
      attributes: {
        class:
          "ltr rounded-md border min-h-[150px] border-gray-300 bg-white px-3 py-2 text-black ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });
  useEffect(() => {
    if (editor && description !== editor.getHTML()) {
      editor.commands.setContent(description || "");
    }
  }, [description, editor]);
  return (
    <>
      <div className="border border-gray-300 bg-transparent text-black rounded-md ">
        <EngToolbar editor={editor} />
        <EditorContent editor={editor} dir="rtl" className="text-end" />
      </div>
    </>
  );
}
