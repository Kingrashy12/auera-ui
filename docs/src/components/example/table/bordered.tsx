import TabLayout from "@/components/layout/TabLayout";
import CardContent from "@/components/lib/CardContent";
import {
  For,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "auera-ui";
import React from "react";

const BorderdTable = () => {
  return (
    <CardContent>
      <TabLayout code={code}>
        <Table bordered>
          <TableHead>
            <TableRow>
              <For
                each={["Name", "Age", "Location"]}
                render={(data) => <TableHeaderCell>{data}</TableHeaderCell>}
              />
            </TableRow>
          </TableHead>

          <TableBody>
            <For
              each={[
                { name: "John Doe", age: 27, location: "New York" },
                { name: "Jane Smith", age: 34, location: "California" },
                { name: "Sam Lee", age: 25, location: "New Jersey" },
              ]}
              render={(user) => (
                <TableRow>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.location}</TableCell>
                </TableRow>
              )}
            />
          </TableBody>
        </Table>
      </TabLayout>
    </CardContent>
  );
};

export default BorderdTable;

const code = `import { 
  For, 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeaderCell, 
  TableRow 
} from "auera-ui";

export const TableDemo = () => {
  return (
    <Table bordered>
      <TableHead>
        <TableRow>
          <For
            each={["Name", "Age", "Location"]}
            render={(data) => <TableHeaderCell>{data}</TableHeaderCell>}
          />
        </TableRow>
      </TableHead>
      <TableBody>
        <For
          each={[
            { name: "John Doe", age: 27, location: "New York" },
            { name: "Jane Smith", age: 34, location: "California" },
            { name: "Sam Lee", age: 25, location: "New Jersey" },
          ]}
          render={(user) => (
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.location}</TableCell>
            </TableRow>
          )}
        />
      </TableBody>
    </Table>
  );
};`;
