import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Upload } from 'lucide-react';

const JobseekerChangePhoto = () => {
  return (
    <div className="space-y-6 max-w-lg">
      <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Image className="h-6 w-6" /> Change Photo
      </h1>

      <Card>
        <CardHeader><CardTitle>Profile Photo</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl">
              G
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Current Photo</p>
              <p className="text-xs text-muted-foreground">JPG, PNG • Max 2MB</p>
            </div>
          </div>
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
            <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Update Photo</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobseekerChangePhoto;
