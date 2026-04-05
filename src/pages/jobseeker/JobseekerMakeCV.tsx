import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye } from 'lucide-react';

const templates = [
  { id: 1, name: 'Professional', desc: 'Clean and modern layout for corporate roles' },
  { id: 2, name: 'Creative', desc: 'Visually rich design for creative professionals' },
  { id: 3, name: 'Simple', desc: 'Minimal and straightforward format' },
];

const JobseekerMakeCV = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <FileText className="h-6 w-6" /> Make A CV
      </h1>

      <p className="text-sm text-muted-foreground">
        Choose a template and we'll generate your CV from your profile data.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((t) => (
          <Card key={t.id} className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-base">{t.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-muted rounded mb-3 flex items-center justify-center text-muted-foreground text-sm">
                Preview
              </div>
              <p className="text-xs text-muted-foreground mb-3">{t.desc}</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="gap-1"><Eye className="h-3.5 w-3.5" /> Preview</Button>
                <Button size="sm" className="gap-1 bg-primary hover:bg-primary/90"><Download className="h-3.5 w-3.5" /> Generate</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobseekerMakeCV;
