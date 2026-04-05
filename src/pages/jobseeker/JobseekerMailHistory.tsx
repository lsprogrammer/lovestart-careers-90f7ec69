import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Mail } from 'lucide-react';

const mails = [
  { id: 1, subject: 'Application Received - React Developer', date: '2024-12-20', type: 'Application' },
  { id: 2, subject: 'Interview Invitation - Google', date: '2024-12-18', type: 'Interview' },
  { id: 3, subject: 'Job Alert: 5 new React jobs', date: '2024-12-17', type: 'Alert' },
  { id: 4, subject: 'Profile viewed by TechCorp', date: '2024-12-15', type: 'Notification' },
];

const JobseekerMailHistory = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Mail className="h-6 w-6" /> Mail History
      </h1>

      <Card>
        <CardHeader><CardTitle>All Emails</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mails.map((m) => (
                <TableRow key={m.id}>
                  <TableCell className="font-medium">{m.subject}</TableCell>
                  <TableCell>{m.date}</TableCell>
                  <TableCell><Badge variant="secondary">{m.type}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobseekerMailHistory;
