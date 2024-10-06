import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface EditorProps {
  description: string;
  setDescription: (description: string) => void;
}

export default function Editor({ description, setDescription }: EditorProps) {
  return (
    <div style={{ width: "90%" }}>
      <label className="text-sm font-bold">توضیحات</label>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(_, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
      />
    </div>
  );
}