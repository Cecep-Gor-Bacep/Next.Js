import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, UserX, UserMinus } from "lucide-react";

const stats = [
  {
    title: "Total Jumlah Siswa",
    value: "2.544",
    description: "Semua program studi",
    icon: GraduationCap,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
  },
  {
    title: "Aktif",
    value: "852",
    description: "33.5% dari total",
    icon: Users,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-950/40",
    border: "border-green-200 dark:border-green-800",
  },
  {
    title: "Tidak Aktif",
    value: "210",
    description: "8.3% dari total",
    icon: UserX,
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/40",
    border: "border-red-200 dark:border-red-800",
  },
  {
    title: "Cuti",
    value: "5",
    description: "Saat ini sedang cuti",
    icon: UserMinus,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-950/40",
    border: "border-orange-200 dark:border-orange-800",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold tracking-tight mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className={`${stat.bg} ${stat.border} hover:-translate-y-0.5 transition-all duration-200`}
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <p className={`text-3xl sm:text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
