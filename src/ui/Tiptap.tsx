import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import { useTranslation } from "react-i18next";

export default function Tiptap({
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

  return (
    <>
      {dir === "ltr" ? (
        <div className="border border-gray-300 bg-transparent text-black rounded-md ">
          <Toolbar editor={editor} />
          <EditorContent editor={editor} dir="rtl" />
        </div>
      ) : (
        <div className="border border-gray-300 bg-transparent text-black rounded-md ">
          <Toolbar editor={editor} />
          <EditorContent editor={editor} dir="rtl" />
        </div>
      )}
    </>
  );
}
