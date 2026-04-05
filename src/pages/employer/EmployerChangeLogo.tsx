import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image, Upload } from 'lucide-react';

const EmployerChangeLogo = () => (
  <div className="space-y-6 max-w-lg">
    <div>
      <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
        <Image className="h-6 w-6 text-primary" /> Change Logo
      </h1>
      <p className="text-sm text-muted-foreground mt-1">Upload your company logo</p>
    </div>

    <Card>
      <CardContent className="pt-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl border-2 border-dashed border-primary/30">
            W
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Current Logo</p>
            <p className="text-xs text-muted-foreground">Recommended: 200x200px, PNG or JPG</p>
          </div>
        </div>

        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm font-medium text-foreground mb-1">Upload new logo</p>
          <p className="text-xs text-muted-foreground mb-3">PNG, JPG up to 2MB</p>
          <Button variant="outline" size="sm">Choose File</Button>
        </div>

        <Button className="w-full font-semibold">Save Logo</Button>
      </CardContent>
    </Card>
  </div>
);

export default EmployerChangeLogo;
