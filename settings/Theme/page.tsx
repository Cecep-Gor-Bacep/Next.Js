import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeSwitch from "@/components/shared/ThemeSwitch";

export default function ThemeSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the appearance of the application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <p className="text-sm font-medium">Dark Mode</p>
            <p className="text-xs text-muted-foreground">
              Switch between light and dark theme
            </p>
          </div>
          <ThemeSwitch />
        </div>
      </CardContent>
    </Card>
  );
}
