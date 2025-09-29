
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const postedJobs = [
  { 
    title: 'Software Engineer Intern', 
    applicants: 42,
    status: 'Open'
  },
  { 
    title: 'Product Manager', 
    applicants: 25,
    status: 'Open'
  },
  { 
    title: 'UX/UI Designer',
    applicants: 15,
    status: 'Closed'
  }
];

export default function RecruiterDashboard() {
  const { toast } = useToast();

  const handleViewApplicants = (title: string) => {
    // Placeholder for future functionality
  };

  return (
    <div className="grid grid-cols-1 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Your Job Postings</CardTitle>
              <CardDescription>Manage your open positions and review applicants.</CardDescription>
            </div>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Post New Job
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {postedJobs.map((job, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{job.applicants} Applicants</span>
                        <Badge variant={job.status === 'Open' ? 'default' : 'outline'}>
                          {job.status}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="secondary" onClick={() => handleViewApplicants(job.title)}>View Applicants</Button>
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
