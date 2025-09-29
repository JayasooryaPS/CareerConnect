
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const sampleJobs = [
  { title: 'Software Engineer Intern', company: 'TechCorp', location: 'San Francisco, CA' },
  { title: 'Product Manager', company: 'Innovate LLC', location: 'New York, NY' },
  { title: 'UX/UI Designer', company: 'Creative Solutions', location: 'Remote' },
  { title: 'Data Analyst Intern', company: 'DataDriven Inc.', location: 'Austin, TX' },
];

export default function JobSeekerDashboard() {
  const { toast } = useToast();

  const handleApply = (title: string) => {
    // Placeholder for future apply functionality
  };

  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Find Your Next Opportunity</CardTitle>
            <CardDescription>Search for jobs and internships.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Job title, keywords, or company" className="pl-10" />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="City, state, or remote" className="pl-10" />
              </div>
              <Button>Search</Button>
            </div>
            <div className="space-y-4">
              {sampleJobs.map((job, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company} - {job.location}</p>
                    </div>
                    <Button variant="secondary" onClick={() => handleApply(job.title)}>Apply Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
