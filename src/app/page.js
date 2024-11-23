'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Users, BarChart, CheckCircle } from 'lucide-react'

import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6 mr-2" />
          <span className="font-bold">StudyBuddy</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Boost Your Academic Performance with StudyBuddy
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Your all-in-one solution for better grades, improved time management, and academic success.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" onClick={()=> router.push('/chat')}>Start Solving your problems</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Calendar className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Smart Scheduling</h3>
                <p className="text-muted-foreground">Optimize your study time with AI-powered scheduling.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Collaborative Learning</h3>
                <p className="text-muted-foreground">Connect with peers for group study sessions and discussions.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BarChart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Progress Tracking</h3>
                <p className="text-muted-foreground">Monitor your academic progress with detailed analytics.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Students Say</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col items-center space-y-4 text-center">
                <p className="text-muted-foreground italic">"StudyBuddy has completely transformed my study habits. I'm more organized and my grades have improved significantly!"</p>
                <p className="font-semibold">- Sarah J., College Sophomore</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <p className="text-muted-foreground italic">"The collaborative features are amazing. I've connected with study partners and it's made a huge difference in my understanding of difficult subjects."</p>
                <p className="font-semibold">- Michael T., High School Senior</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple Pricing</h2>
            <div className="grid gap-6 lg:grid-cols-2 items-stretch">
              <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg justify-between border">
                <div>
                  <h3 className="text-2xl font-bold text-center">Free</h3>
                  <div className="mt-4 text-center text-muted-foreground">
                    <span className="text-4xl font-bold">$0</span> / month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Basic scheduling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Limited progress tracking
                    </li>
                  </ul>
                </div>
                <Button className="mt-6" variant="outline">Get Started</Button>
              </div>
              <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg justify-between border">
                <div>
                  <h3 className="text-2xl font-bold text-center">Pro</h3>
                  <div className="mt-4 text-center text-muted-foreground">
                    <span className="text-4xl font-bold">$9.99</span> / month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Advanced AI scheduling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Full progress analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-primary mr-2 h-4 w-4" />
                      Unlimited collaborative sessions
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Boost Your Grades?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join thousands of students already using StudyBuddy to improve their academic performance.
              </p>
              <Button size="lg" className="mt-4">Start Your Free Trial</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 StudyBuddy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

