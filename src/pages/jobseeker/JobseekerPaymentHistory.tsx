import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CreditCard } from 'lucide-react';

const payments = [
  { id: 'PAY-001', date: '2024-12-15', plan: 'Premium Monthly', amount: '$29.99', status: 'Completed' },
  { id: 'PAY-002', date: '2024-11-15', plan: 'Premium Monthly', amount: '$29.99', status: 'Completed' },
  { id: 'PAY-003', date: '2024-10-15', plan: 'Basic Monthly', amount: '$9.99', status: 'Refunded' },
];

const JobseekerPaymentHistory = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <CreditCard className="h-6 w-6" /> Payment History
      </h1>

      <Card>
        <CardHeader><CardTitle>All Transactions</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.id}</TableCell>
                  <TableCell>{p.date}</TableCell>
                  <TableCell>{p.plan}</TableCell>
                  <TableCell>{p.amount}</TableCell>
                  <TableCell>
                    <Badge variant={p.status === 'Completed' ? 'default' : 'secondary'}>{p.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobseekerPaymentHistory;
