/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { TableProps } from "../../models/TableModel";
import EditableCell from "../inventory/EditableCell";

const NumberConverter = (value: number): string => {
  // Add your conversion logic here
  return value.toLocaleString(); // Example: Convert number to locale string
};

const Table = <T,>({ columns, data, actions }: TableProps<T>) => {
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data); // Sync local data with context data
  }, [data]);

  const handleSave = (rowIndex: number, key: keyof T, newValue: string) => {
    const updatedData = [...localData];
    (updatedData[rowIndex] as any)[key] = newValue;
    setLocalData(updatedData); // Update local state to reflect changes in the UI
  };

  return (
    <div className="overflow-x-auto">
      <table className="table font-bold text-lg">
        <thead>
          <tr className="text-lg">
            {columns.map((column) => (
              <th key={column.key as string}>{column.label}</th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {localData.map((item, rowIndex) => (
            <tr key={(item as any)._id}>
              {columns.map((column) => (
                <td key={column.key as string}>
                  {column.key === "price" ? (
                    NumberConverter(Number(item[column.key])) // Apply NumberConverter to price
                  ) : column.key === "quantity" ? (
                    <EditableCell
                      value={String(item[column.key])}
                      onSave={(newValue) =>
                        handleSave(rowIndex, column.key, newValue)
                      }
                      rowId={(item as any)._id}
                      columnName={column.key as string}
                    />
                  ) : column.render ? (
                    column.render(item)
                  ) : (
                    String(item[column.key])
                  )}
                </td>
              ))}
              {actions && (
                <td>
                  <div className="join rounded-lg">
                    {actions.map((action) => (
                      <button
                        key={action.label}
                        className={`btn join-item ${action.className}`}
                        onClick={() => action.handler(item)}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
