import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { FilePlus, Upload } from 'lucide-react';

const JobseekerCVDocuments = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <FilePlus className="h-6 w-6" /> Add CV Documents
      </h1>

      <Card>
        <CardHeader><CardTitle>Certificates</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Upload certificates (PDF, JPG, PNG • Max 5MB each)</p>
          </div>
          <p className="text-sm text-muted-foreground">No certificates uploaded yet.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Documents</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Upload documents (PDF, DOC, DOCX • Max 10MB each)</p>
          </div>
          <p className="text-sm text-muted-foreground">No documents uploaded yet.</p>
        </CardContent>
      </Card>

      <Button className="bg-primary hover:bg-primary/90">Save Documents</Button>
    </div>
  );
};

export default JobseekerCVDocuments;
