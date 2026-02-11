"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeSettings from "@/settings/Theme/page";

export default function SettingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold tracking-tight mb-6">Setting</h1>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="theme">Theme</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Manage your account settings and preferences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Account settings will be available soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="theme" className="mt-4">
          <ThemeSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
