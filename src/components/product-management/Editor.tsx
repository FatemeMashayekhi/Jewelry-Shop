import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

interface EditorProps {
  description: string;
  setDescription: (description: string) => void;
  required?: boolean;
}

const Editor: React.FC<EditorProps> = ({
  description,
  setDescription,
  required,
}) => {
  return (
    <div style={{ width: "90%" }}>
      <label className="text-sm font-bold flex items-center gap-2">
        توضیحات
        {required}
      </label>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(_, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
      />
      {required && !description.trim() && (
        <p className="text-red-500 mt-2 text-sm">
          وارد کردن توضیحات الزامی است
        </p>
      )}
    </div>
  );
};

export default Editor;
