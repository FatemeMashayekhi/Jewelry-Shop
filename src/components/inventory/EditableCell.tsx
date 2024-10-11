import React, { useState, useRef, useEffect } from "react";

interface EditableCellProps {
  value: string | number;
  onSave: (newValue: string) => void;
  rowId: string;
  columnName: string;
}

const EditableCell: React.FC<EditableCellProps> = ({
  value,
  onSave,
  rowId,
  columnName,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    setIsEditing(false);
    onSave(String(inputValue));
    saveToLocalStorage(rowId, columnName, String(inputValue));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setInputValue(value); // Reset to initial value
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return isEditing ? (
    <input
      ref={inputRef}
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={handleCancel}
      onKeyDown={handleKeyDown}
      className="border border-gray-300 rounded p-1"
    />
  ) : (
    <div onClick={() => setIsEditing(true)}>{value}</div>
  );
};

const saveToLocalStorage = (
  rowId: string,
  columnName: string,
  value: string
) => {
  const data = JSON.parse(localStorage.getItem("editedData") || "{}");
  if (!data[rowId]) {
    data[rowId] = {};
  }
  data[rowId][columnName] = value;
  localStorage.setItem("editedData", JSON.stringify(data));
};

export default EditableCell;
