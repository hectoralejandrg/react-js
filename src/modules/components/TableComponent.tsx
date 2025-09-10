import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type BaseColumn<T, K extends keyof T | "actions" = keyof T | "actions"> = {
  title: string;
  align?: "left" | "center" | "right";
  key: K;
};

type DataColumn<T, K extends keyof T = keyof T> = BaseColumn<T, K> & {
  type?: "data";
  render: (value: T[K], row: T) => React.ReactNode;
};

type ActionColumn<T> = BaseColumn<T, "actions"> & {
  type: "actions";
  render: (row: T) => React.ReactNode;
};

export type TableColumn<T> = DataColumn<T> | ActionColumn<T>;

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}

export const TableComponent = <T extends object>({
  columns,
  data,
}: TableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map(({ key, align, title }) => (
              <TableCell key={key.toString()} align={align}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((col) => {
                if (col.type === "actions") {
                  return (
                    <TableCell align={col.align} key={col.key.toString()}>
                      {col.render(row)}
                    </TableCell>
                  );
                }

                return (
                  <TableCell align={col.align} key={col.key.toString()}>
                    {col.render(row[col.key], row)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
