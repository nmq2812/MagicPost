// components/SearchResults.tsx
import { Order } from "@/app/admin/components/data/order";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


type SearchResultsProps = {
  results: Order[];
};

export default function SearchResults({ results }: SearchResultsProps) {
  console.log(results)
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
      {results.map((order, index) => (
      <Table>
        <TableCaption>
          <tr key={index} className="grid grid-col border-b border-gray-300">
            <td className="text-left p-2">{order.customer.name}</td>
            <td className="text-right p-2">${order.total.toFixed(2)}</td>
            <td className="text-right p-2">{order.items.map(item => item.office1 )}</td>
          </tr>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      ))}
    </div>
  );
}
