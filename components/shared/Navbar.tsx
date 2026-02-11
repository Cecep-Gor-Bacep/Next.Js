"use client";

import * as React from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  UserX,
  UserMinus,
  GraduationCap,
  Ban,
  Settings,
  Menu,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItem1 = [
  { text: "Dashboard", icon: LayoutDashboard, href: "/" },
  { text: "Aktif", icon: Users, href: "/pages/aktif" },
  { text: "Tidak Aktif", icon: UserX, href: "/pages/tidakAktif" },
];

const menuItem2 = [
  { text: "Cuti", icon: UserMinus, href: "/pages/cuti" },
  { text: "Lulus", icon: GraduationCap, href: "/pages/lulus" },
  { text: "DO", icon: Ban, href: "/pages/deo" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="flex h-14 items-center px-4 gap-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-60 p-0">
            <SheetHeader className="p-4 bg-primary text-primary-foreground" >
              <SheetTitle className="text-primary-foreground">Menu</SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-4rem)]">
              <nav className="flex flex-col gap-1 p-2">
                {menuItem1.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.text}
                  </Link>
                ))}
                <Separator className="my-2" />
                {menuItem2.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.text}
                  </Link>
                ))}
                <Separator className="my-2" />
                <Link
                  href="/Setting"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Settings className="h-4 w-4" />
                  Setting
                </Link>
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <h1 className="text-lg font-semibold hidden sm:block">SIM</h1>

        <div className="flex-1" />

        <div className="relative w-full max-w-[200px] sm:max-w-[260px]">
          <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/60" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 h-9 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground/30"
          />
        </div>
      </div>
    </header>
  );
}
