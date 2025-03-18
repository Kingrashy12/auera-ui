import CodeTag from "@/components/CodeTag";
import {
  For,
  formatDate,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "auera-ui";
import React from "react";

const date = new Date(2025, 2, 15);

const formats = [
  "yyyy-mm-dd",
  "mm-yyyy",
  "dd-mmm",
  "mmm-dd",
  "ddd-mmm-dd",
  "yyyy/mm/dd",
  "dd-mm-yyyy",
  "mmm-yyyy",
  "full",
];

const SupportedFormat = () => {
  return (
    <Table rounded bordered raised>
      <TableHead tint>
        <TableRow verticalLine>
          <TableHeaderCell>Format</TableHeaderCell>
          <TableHeaderCell>
            Output Example (for <CodeTag>new Date(2025, 2, 15)</CodeTag>)
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <For
          each={formats}
          render={(res) => (
            <TableRow hoverable verticalLine>
              <TableCell>
                <CodeTag>{res}</CodeTag>
              </TableCell>
              {/* <TableCell>{res.output}</TableCell> */}
              <TableCell>
                {formatDate({ date, format: res as never })}
              </TableCell>
            </TableRow>
          )}
        />
      </TableBody>
    </Table>
  );
};

export default SupportedFormat;
