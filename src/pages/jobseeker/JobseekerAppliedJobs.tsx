import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ClipboardList } from 'lucide-react';

const appliedJobs = [
  { id: 1, title: 'Frontend Developer', company: 'Infosys', appliedDate: '2024-12-20', status: 'Under Review' },
  { id: 2, title: 'React Developer', company: 'Wipro', appliedDate: '2024-12-18', status: 'Shortlisted' },
  { id: 3, title: 'Web Developer', company: 'TCS', appliedDate: '2024-12-15', status: 'Rejected' },
  { id: 4, title: 'Software Engineer', company: 'Google', appliedDate: '2024-12-10', status: 'Interview Scheduled' },
];

const statusColor = (s: string) => {
  if (s === 'Shortlisted' || s === 'Interview Scheduled') return 'default';
  if (s === 'Rejected') return 'destructive';
  return 'secondary';
};

const JobseekerAppliedJobs = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <ClipboardList className="h-6 w-6" /> Applied Jobs
      </h1>

      <Card>
        <CardHeader><CardTitle>Application History</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appliedJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.title}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.appliedDate}</TableCell>
                  <TableCell>
                    <Badge variant={statusColor(job.status)}>{job.status}</Badge>
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

export default JobseekerAppliedJobs;
