import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-bold">CareerConnect</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/dashboard"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center justify-end space-x-2">
          <Button variant="ghost">Log In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
