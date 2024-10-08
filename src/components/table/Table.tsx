/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableProps } from "../../models/TableModel";

const Table = <T,>({ columns, data, actions }: TableProps<T>) => {
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
          {data.map((item) => (
            <tr key={(item as any)._id}>
              {columns.map((column) => (
                <td key={column.key as string}>
                  {column.render
                    ? column.render(item)
                    : String(item[column.key])}
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
