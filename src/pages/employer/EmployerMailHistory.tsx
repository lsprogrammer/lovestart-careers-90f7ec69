import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Mail, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockMails = [
  { id: 1, subject: 'Application Received - Senior React Developer', to: 'john@example.com', date: 'Mar 5, 2024', status: 'Sent' },
  { id: 2, subject: 'Interview Invitation - UI/UX Designer', to: 'priya@example.com', date: 'Mar 3, 2024', status: 'Sent' },
  { id: 3, subject: 'Application Status Update', to: 'alex@example.com', date: 'Feb 28, 2024', status: 'Sent' },
  { id: 4, subject: 'Welcome to JS Jobber', to: 'Waltond2@gmail.com', date: 'Mar 1, 2024', status: 'Received' },
  { id: 5, subject: 'Plan Renewal Reminder', to: 'Waltond2@gmail.com', date: 'Feb 15, 2024', status: 'Received' },
];

const EmployerMailHistory = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Mail className="h-6 w-6 text-primary" /> Mail History
      </h1>
      <p className="text-sm text-muted-foreground mt-1">View your sent and received emails</p>
    </div>

    <Card>
      <CardHeader><CardTitle className="text-base">All Emails</CardTitle></CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>To/From</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMails.map(m => (
                <TableRow key={m.id}>
                  <TableCell className="font-medium max-w-[250px] truncate">{m.subject}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{m.to}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{m.date}</TableCell>
                  <TableCell>
                    <Badge className={m.status === 'Sent' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>{m.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
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

export default EmployerMailHistory;
