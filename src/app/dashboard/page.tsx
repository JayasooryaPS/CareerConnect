import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JobSeekerDashboard from '@/components/dashboards/job-seeker-dashboard';
import RecruiterDashboard from '@/components/dashboards/recruiter-dashboard';
import AdminDashboard from '@/components/dashboards/admin-dashboard';
import { User, Briefcase, BarChart3 } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold tracking-tight font-headline">Dashboard</h1>
      <Tabs defaultValue="job-seeker" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="job-seeker">
            <User className="mr-2 h-4 w-4" />
            Job Seeker
          </TabsTrigger>
          <TabsTrigger value="recruiter">
            <Briefcase className="mr-2 h-4 w-4" />
            Recruiter
          </TabsTrigger>
          <TabsTrigger value="admin">
            <BarChart3 className="mr-2 h-4 w-4" />
            Admin
          </TabsTrigger>
        </TabsList>
        <TabsContent value="job-seeker" className="mt-6">
          <JobSeekerDashboard />
        </TabsContent>
        <TabsContent value="recruiter" className="mt-6">
          <RecruiterDashboard />
        </TabsContent>
        <TabsContent value="admin" className="mt-6">
          <AdminDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
