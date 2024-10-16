import React, { useState } from "react";

interface EditableCellProps {
  value: string | number;
  onSave: (newValue: string | number) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({ value, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSave(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
      setIsEditing(true); // Keep it in edit mode
    } else if (e.key === "Escape") {
      setInputValue(value);
    }
  };

  return (
    <td className="p-2 border border-gray-300">
      {isEditing ? (
        <input
          type="text"
          value={String(inputValue)}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-1 border rounded"
        />
      ) : (
        <div onClick={() => setIsEditing(true)}>{value}</div>
      )}
    </td>
  );
};

export default EditableCell;
