import { useLocation } from 'react-router-dom';
import { Check, ChevronLeft, ChevronRight, Eye, Pencil, Search, Trash2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAdminMenuEntry } from '@/lib/admin-menu';

type TableColumn = {
  key: string;
  label: string;
  align?: 'left' | 'center' | 'right';
};

type RowData = Record<string, string>;

type AdminSectionConfig = {
  title: string;
  actionLabel?: string;
  searchLabel?: string;
  searchPlaceholder?: string;
  resultsLabel?: string;
  columns?: TableColumn[];
  rows?: RowData[];
  bulkActions?: string[];
};

const sectionConfigs: Record<string, AdminSectionConfig> = {
  '/admin/dashboard/configurations/manage-plans': {
    title: 'Plans List',
    actionLabel: 'Add Plan',
    searchLabel: 'Search Plans by typing Plan Name',
    searchPlaceholder: 'Search...',
    resultsLabel: 'No. of Results 1-20 of 31',
    columns: [
      { key: 'name', label: 'Plan Name' },
      { key: 'userPlan', label: 'User Plan' },
      { key: 'amount', label: 'Amount' },
      { key: 'type', label: 'Plan Type' },
      { key: 'period', label: 'Time Period' },
      { key: 'created', label: 'Created' },
      { key: 'actions', label: 'Action', align: 'right' },
    ],
    rows: [
      { name: 'basic', userPlan: 'employer', amount: '365', type: 'Years', period: '1 Years', created: 'November 11, 2025' },
      { name: 'advanced', userPlan: 'employer', amount: '850', type: 'Years', period: '1 Years', created: 'March 26, 2024' },
      { name: 'Traya Plan', userPlan: 'employer', amount: '399', type: 'Months', period: '6 Months', created: 'January 29, 2024' },
      { name: 'ABC', userPlan: 'employer', amount: '0', type: 'Months', period: '1 Months', created: 'December 1, 2023' },
      { name: 'BRONZE', userPlan: 'employer', amount: '200', type: 'Months', period: '6 Months', created: 'October 31, 2023' },
      { name: 'FRESHER', userPlan: 'jobseeker', amount: '10', type: 'Years', period: '6 Years', created: 'October 31, 2023' },
      { name: 'FRESHER2', userPlan: 'employer', amount: '12', type: 'Years', period: '1 Years', created: 'October 31, 2023' },
      { name: 'Platinum II', userPlan: 'employer', amount: '50', type: 'Months', period: '12 Months', created: 'February 17, 2022' },
    ],
    bulkActions: ['Activate', 'Deactivate'],
  },
  '/admin/dashboard/employers': {
    title: 'Employers List',
    actionLabel: 'Add Employer',
    searchLabel: 'Search employers by company name or email',
    searchPlaceholder: 'Search employers...',
    resultsLabel: 'No. of Results 1-8 of 26',
    columns: [
      { key: 'company', label: 'Company Name' },
      { key: 'owner', label: 'Full Name' },
      { key: 'email', label: 'Email' },
      { key: 'plan', label: 'Current Plan' },
      { key: 'created', label: 'Created' },
      { key: 'actions', label: 'Action', align: 'right' },
    ],
    rows: [
      { company: 'LS Tech', owner: 'Rohan Pednekar', email: 'rohan.shekhar@logicspice.com', plan: 'Silver Monthly', created: 'Apr 01, 2026' },
      { company: 'Tree Service', owner: 'Abel Gomez', email: 'katocha1988@gmail.com', plan: 'Basic Annual', created: 'Mar 18, 2026' },
      { company: 'Juliet Works', owner: 'Juliet Boadu', email: 'nyarkojulietabena@gmail.com', plan: 'Starter', created: 'Mar 15, 2026' },
      { company: 'Chichi Group', owner: 'Chioma Jacintha', email: 'jacinthachioma2@gmail.com', plan: 'Starter', created: 'Mar 15, 2026' },
    ],
  },
  '/admin/dashboard/employers/pending': {
    title: 'Pending Employers',
    actionLabel: 'Add Employer',
    searchLabel: 'Search pending employers by company name or email',
    searchPlaceholder: 'Search pending employers...',
    resultsLabel: 'No. of Results 1-5 of 5',
    columns: [
      { key: 'company', label: 'Company Name' },
      { key: 'owner', label: 'Full Name' },
      { key: 'email', label: 'Email' },
      { key: 'status', label: 'Status' },
      { key: 'created', label: 'Created' },
      { key: 'actions', label: 'Action', align: 'right' },
    ],
    rows: [
      { company: 'North Star Hiring', owner: 'Ama Kusi', email: 'ama@northstar.co', status: 'Pending Review', created: 'Apr 05, 2026' },
      { company: 'Bright Path', owner: 'Ibrahim Bello', email: 'ibrahim@brightpath.com', status: 'Awaiting Documents', created: 'Apr 02, 2026' },
      { company: 'Harbor Labs', owner: 'Diane Cole', email: 'diane@harborlabs.io', status: 'Pending Review', created: 'Mar 31, 2026' },
      { company: 'Vista Build', owner: 'Michael Amoah', email: 'hello@vistabuild.com', status: 'Awaiting Approval', created: 'Mar 28, 2026' },
      { company: 'Orbit Works', owner: 'Sarah Duke', email: 'ops@orbitworks.ai', status: 'Pending Review', created: 'Mar 26, 2026' },
    ],
    bulkActions: ['Approve', 'Decline'],
  },
  '/admin/dashboard/jobseekers': {
    title: 'Jobseekers List',
    actionLabel: 'Add Jobseeker',
    searchLabel: 'Search jobseekers by name or email',
    searchPlaceholder: 'Search jobseekers...',
    resultsLabel: 'No. of Results 1-8 of 368',
    columns: [
      { key: 'name', label: 'Full Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'Phone' },
      { key: 'location', label: 'Location' },
      { key: 'created', label: 'Created' },
      { key: 'actions', label: 'Action', align: 'right' },
    ],
    rows: [
      { name: 'Walt Ond', email: 'williamgrey@gmail.com', phone: '—', location: '—', created: 'Apr 05, 2026' },
      { name: 'Sandeep Kumar', email: 'ibbons3@gmail.com', phone: '7075836440', location: 'Hyderabad', created: 'Apr 01, 2026' },
      { name: 'Praveen Kumar', email: 'ghodkekarsandeep@gmail.com', phone: '—', location: '—', created: 'Apr 01, 2026' },
      { name: 'Anil Moud', email: 'anil.moud@gmail.com', phone: '—', location: '—', created: 'Mar 23, 2026' },
    ],
  },
  '/admin/dashboard/jobseekers/pending': {
    title: 'Pending Jobseekers',
    actionLabel: 'Add Jobseeker',
    searchLabel: 'Search pending jobseekers by name or email',
    searchPlaceholder: 'Search pending jobseekers...',
    resultsLabel: 'No. of Results 1-4 of 4',
    columns: [
      { key: 'name', label: 'Full Name' },
      { key: 'email', label: 'Email' },
      { key: 'status', label: 'Status' },
      { key: 'created', label: 'Created' },
      { key: 'actions', label: 'Action', align: 'right' },
    ],
    rows: [
      { name: 'Maureen Kay', email: 'maureen@kaymail.com', status: 'Pending Review', created: 'Apr 04, 2026' },
      { name: 'Kwame Ofori', email: 'kwame@portfolio.dev', status: 'Awaiting Approval', created: 'Apr 03, 2026' },
      { name: 'Nadia Smith', email: 'nadia@smithmail.com', status: 'Pending Review', created: 'Apr 01, 2026' },
      { name: 'Koffi Adjatey', email: 'koffi@jobmail.com', status: 'Awaiting Approval', created: 'Mar 29, 2026' },
    ],
    bulkActions: ['Approve', 'Decline'],
  },
};

const toTitleCase = (value: string) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const getDefaultConfig = (pathname: string, breadcrumbLabel: string): AdminSectionConfig => ({
  title: breadcrumbLabel,
  searchLabel: `Search ${breadcrumbLabel.toLowerCase()}`,
  searchPlaceholder: `Search ${breadcrumbLabel.toLowerCase()}...`,
  resultsLabel: 'No. of Results 1-5 of 5',
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { key: 'updated', label: 'Updated' },
    { key: 'actions', label: 'Action', align: 'right' },
  ],
  rows: [
    { name: breadcrumbLabel, description: `${breadcrumbLabel} configuration entry`, updated: 'Apr 06, 2026' },
    { name: `${breadcrumbLabel} v2`, description: `Secondary ${breadcrumbLabel.toLowerCase()} entry`, updated: 'Apr 01, 2026' },
  ],
  actionLabel: pathname.includes('settings') ? 'Save Settings' : undefined,
});

const actionButtonClass =
  'h-8 w-8 rounded-md border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground';

const AdminSectionPage = () => {
  const location = useLocation();
  const entry = getAdminMenuEntry(location.pathname);
  const breadcrumbLabel = entry?.child?.title ?? entry?.item.title ?? toTitleCase(location.pathname.split('/').pop() || 'Section');
  const config = sectionConfigs[location.pathname] ?? getDefaultConfig(location.pathname, breadcrumbLabel);

  return (
    <div className="space-y-6">
      <Card className="rounded-xl border-border shadow-sm">
        <CardContent className="flex items-center gap-3 p-4 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Dashboard</span>
          <span>›</span>
          {entry?.item.title !== 'Dashboard' && <span>{entry?.item.title}</span>}
          {entry?.item.title !== 'Dashboard' && <span>›</span>}
          <span className="text-foreground">{breadcrumbLabel}</span>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">{config.title}</h1>
        {config.actionLabel && <Button>{config.actionLabel}</Button>}
      </div>

      {config.searchLabel && (
        <Card className="rounded-2xl border-border shadow-sm">
          <CardContent className="space-y-4 p-5">
            <p className="text-lg text-muted-foreground">{config.searchLabel}</p>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="h-12 rounded-xl pl-11" placeholder={config.searchPlaceholder} />
            </div>
          </CardContent>
        </Card>
      )}

      {config.resultsLabel && <p className="text-sm text-muted-foreground">{config.resultsLabel}</p>}

      {config.columns && config.rows && (
        <Card className="rounded-2xl border-border shadow-sm">
          <CardContent className="p-3 md:p-5">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <input type="checkbox" aria-label="Select all rows" className="h-4 w-4 rounded border-border" />
                    </TableHead>
                    {config.columns.map((column) => (
                      <TableHead
                        key={column.key}
                        className={column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left'}
                      >
                        {column.label}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {config.rows.map((row, index) => (
                    <TableRow key={`${row[config.columns?.[0].key ?? 'name']}-${index}`}>
                      <TableCell>
                        <input type="checkbox" aria-label={`Select row ${index + 1}`} className="h-4 w-4 rounded border-border" />
                      </TableCell>
                      {config.columns?.map((column) => (
                        <TableCell
                          key={column.key}
                          className={column.key === 'actions' ? 'text-right' : 'text-sm text-foreground'}
                        >
                          {column.key === 'actions' ? (
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="icon" className={actionButtonClass}>
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" className={actionButtonClass}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" className={actionButtonClass}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon" className={actionButtonClass}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : column.key === 'status' ? (
                            <span className="inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                              {row[column.key]}
                            </span>
                          ) : (
                            row[column.key]
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          {config.bulkActions?.map((label) => (
            <Button key={label} variant="outline" className="min-w-32">
              {label}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" className="h-8 w-8 rounded-full">
            1
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-background text-foreground hover:bg-muted">
            2
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!sectionConfigs[location.pathname] && (
        <Card className="rounded-2xl border-dashed border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Quick Note</CardTitle>
          </CardHeader>
          <CardContent className="flex items-start gap-3 text-sm text-muted-foreground">
            <XCircle className="mt-0.5 h-4 w-4 text-primary" />
            <p>This section uses a placeholder dataset for now so you can continue styling the admin area before wiring it to real data.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminSectionPage;
