/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableProps } from "../../models/TableModel";
import EditableCell from "../inventory/EditableCell";

const Table = <T,>({ columns, data, actions }: TableProps<T>) => {
  const handleSave = (rowIndex: number, key: keyof T, newValue: string) => {
    // Find the row and update the specific key with the new value
    const updatedData = [...data];
    (updatedData[rowIndex] as any)[key] = newValue;
    // Assuming you have a way to update the data context or state with the new values
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
          {data.map((item, rowIndex) => (
            <tr key={(item as any)._id}>
              {columns.map((column) => (
                <td key={column.key as string}>
                  {column.key === "price" || column.key === "quantity" ? (
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
