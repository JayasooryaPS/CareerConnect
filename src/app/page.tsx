import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Users, Briefcase } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const seekerImage = PlaceHolderImages.find((img) => img.id === 'seeker-feature');
  const recruiterImage = PlaceHolderImages.find((img) => img.id === 'recruiter-feature');

  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: 'Find Your Dream Job',
      description: 'Search through thousands of curated job and internship opportunities to find the perfect fit for your skills and aspirations.',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Hire Top Talent',
      description: 'Post job openings and connect with a diverse pool of qualified candidates eager to make an impact.',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-accent" />,
      title: 'Streamline Applications',
      description: 'Easily manage your job applications and track their status in one centralized dashboard.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Connect to Your Future Career
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    CareerConnect is the ultimate platform for students and recruiters. Find opportunities and hire top talent.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/dashboard">Find a Job</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/dashboard">Post a Job</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                {heroImage && (
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={600}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Why Choose CareerConnect?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide the tools and connections you need to succeed, whether you're starting your career or building a world-class team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              {features.map((feature, index) => (
                <Card key={index} className="h-full">
                  <CardHeader className="flex flex-col items-center text-center">
                    {feature.icon}
                    <CardTitle className="mt-4">{feature.title}</CardTitle>

                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                For Job Seekers: Land Your Dream Internship
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Create a stunning profile, upload your resume, and find opportunities that match your unique skills and passions.
              </p>
              <Button asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
            {seekerImage && (
              <Image
                src={seekerImage.imageUrl}
                alt={seekerImage.description}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                data-ai-hint={seekerImage.imageHint}
              />
            )}
          </div>
        </section>
        
        <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            {recruiterImage && (
                <Image
                  src={recruiterImage.imageUrl}
                  alt={recruiterImage.description}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  data-ai-hint={recruiterImage.imageHint}
                />
              )}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                For Recruiters: Discover and Hire Top Talent
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Effortlessly post jobs, manage applications, and identify the most promising candidates for your team.
              </p>
              <Button asChild>
                <Link href="/dashboard">Start Hiring</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
