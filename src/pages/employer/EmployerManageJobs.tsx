import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Briefcase, Eye, Edit, Trash2 } from 'lucide-react';

const mockJobs = [
  { id: 1, title: 'Senior React Developer', location: 'Mumbai, India', type: 'Full Time', status: 'Active', applications: 24, posted: 'Jan 15, 2024' },
  { id: 2, title: 'UI/UX Designer', location: 'Delhi, India', type: 'Full Time', status: 'Active', applications: 18, posted: 'Feb 2, 2024' },
  { id: 3, title: 'Backend Engineer', location: 'Bangalore, India', type: 'Remote', status: 'Closed', applications: 42, posted: 'Dec 10, 2023' },
  { id: 4, title: 'Marketing Manager', location: 'Pune, India', type: 'Part Time', status: 'Draft', applications: 0, posted: 'Mar 1, 2024' },
  { id: 5, title: 'DevOps Engineer', location: 'Hyderabad, India', type: 'Full Time', status: 'Active', applications: 12, posted: 'Feb 20, 2024' },
];

const statusColor: Record<string, string> = {
  Active: 'bg-green-100 text-green-800',
  Closed: 'bg-red-100 text-red-800',
  Draft: 'bg-yellow-100 text-yellow-800',
};

const EmployerManageJobs = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" /> Manage Jobs
          </h1>
          <p className="text-sm text-muted-foreground mt-1">View and manage your job postings</p>
        </div>
        <Button className="font-semibold" asChild>
          <a href="/employer/dashboard/create-job">+ Post New Job</a>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {[
          { label: 'Total Jobs', value: '5', color: 'text-primary' },
          { label: 'Active', value: '3', color: 'text-green-600' },
          { label: 'Applications', value: '96', color: 'text-blue-600' },
          { label: 'Closed', value: '1', color: 'text-red-600' },
        ].map(s => (
          <Card key={s.label}>
            <CardContent className="pt-4 pb-3 text-center">
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">All Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">Applications</TableHead>
                  <TableHead>Posted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockJobs.map(job => (
                  <TableRow key={job.id}>
                    <TableCell className="font-medium">{job.title}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{job.location}</TableCell>
                    <TableCell><Badge variant="secondary" className="text-xs">{job.type}</Badge></TableCell>
                    <TableCell><Badge className={`text-xs ${statusColor[job.status]}`}>{job.status}</Badge></TableCell>
                    <TableCell className="text-center font-medium">{job.applications}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{job.posted}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Edit className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"><Trash2 className="h-4 w-4" /></Button>
                      </div>
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
};

export default EmployerManageJobs;
