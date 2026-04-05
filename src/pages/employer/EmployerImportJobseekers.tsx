import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FileText, Download } from 'lucide-react';

const EmployerImportJobseekers = () => (
  <div className="space-y-6 max-w-2xl">
    <div>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Upload className="h-6 w-6 text-primary" /> Import Jobseekers
      </h1>
      <p className="text-sm text-muted-foreground mt-1">Bulk import candidates from a CSV file</p>
    </div>

    <Card>
      <CardHeader><CardTitle className="text-base">Upload File</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
          <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm font-medium text-foreground mb-1">Drag & drop your CSV file here</p>
          <p className="text-xs text-muted-foreground mb-4">or click to browse files</p>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" /> Choose File
          </Button>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Download className="h-4 w-4" />
          <button className="text-primary hover:underline">Download sample CSV template</button>
        </div>

        <Button className="font-semibold w-full">Upload & Import</Button>
      </CardContent>
    </Card>
  </div>
);

export default EmployerImportJobseekers;
