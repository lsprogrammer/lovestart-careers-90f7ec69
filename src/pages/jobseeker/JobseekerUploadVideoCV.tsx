import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Video, Upload } from 'lucide-react';

const JobseekerUploadVideoCV = () => {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Video className="h-6 w-6" /> Upload a Video CV
      </h1>

      <Card>
        <CardHeader><CardTitle>Video CV</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground mb-2">Drag and drop your video here, or click to browse</p>
            <p className="text-xs text-muted-foreground">MP4, MOV, AVI • Max 50MB</p>
          </div>
          <div className="space-y-2">
            <Label>Or paste a YouTube/Vimeo URL</Label>
            <Input placeholder="https://youtube.com/watch?v=..." />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Upload Video CV</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobseekerUploadVideoCV;
