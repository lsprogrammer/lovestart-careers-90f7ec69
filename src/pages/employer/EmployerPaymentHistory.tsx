import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CreditCard } from 'lucide-react';

const mockPayments = [
  { id: 'INV-001', plan: 'Advanced', amount: '$99.00', date: 'Feb 15, 2024', status: 'Completed', method: 'Credit Card' },
  { id: 'INV-002', plan: 'Advanced', amount: '$99.00', date: 'Jan 15, 2024', status: 'Completed', method: 'Credit Card' },
  { id: 'INV-003', plan: 'Basic', amount: '$49.00', date: 'Dec 15, 2023', status: 'Completed', method: 'PayPal' },
  { id: 'INV-004', plan: 'Basic', amount: '$49.00', date: 'Nov 15, 2023', status: 'Refunded', method: 'Credit Card' },
];

const EmployerPaymentHistory = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <CreditCard className="h-6 w-6 text-primary" /> Payment History
      </h1>
      <p className="text-sm text-muted-foreground mt-1">View your billing and payment records</p>
    </div>

    <Card>
      <CardHeader><CardTitle className="text-base">All Transactions</CardTitle></CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPayments.map(p => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.id}</TableCell>
                  <TableCell>{p.plan}</TableCell>
                  <TableCell className="font-medium">{p.amount}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{p.date}</TableCell>
                  <TableCell className="text-sm">{p.method}</TableCell>
                  <TableCell>
                    <Badge className={p.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>{p.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
);

export default EmployerPaymentHistory;
