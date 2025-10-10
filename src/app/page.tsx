import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/bibidi_logo.png"
                alt="Bibidi"
                width={100}
                height={100}
              />
              <span className="font-semibold text-gray-900 text-medium">Offline Team</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How It Works
              </Link>
              <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/login">
                <Button variant="ghost" size="sm">Login</Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Now Onboarding Service Providers</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Grow Your Service Business with{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Bibidi
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of service providers who trust Bibidi to connect them with customers. 
              Our offline team comes to you—no hassle, just growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="text-base px-8">
                  Join as Service Provider
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-base px-8">
                Learn More
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground mt-1">Service Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground mt-1">Active Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Service Providers Choose Bibidi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle the heavy lifting so you can focus on what you do best—providing quality service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle>Door-to-Door Onboarding</CardTitle>
                <CardDescription>
                  Our team comes to you. No need to travel or navigate complicated online forms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle>Instant Leads</CardTitle>
                <CardDescription>
                  Start receiving customer requests immediately after onboarding. No waiting period.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Fair Pricing</CardTitle>
                <CardDescription>
                  Keep more of what you earn with our transparent, low-fee structure. No hidden charges.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <CardTitle>Verified Customers</CardTitle>
                <CardDescription>
                  Work with confidence. All customers are verified and rated for your safety.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Get help whenever you need it. Our support team is always ready to assist you.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <CardTitle>Business Insights</CardTitle>
                <CardDescription>
                  Track your earnings, customer ratings, and growth with powerful analytics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Getting Started is Simple
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three easy steps to start growing your service business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 relative z-10">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Meet Our Team</h3>
                <p className="text-muted-foreground">
                  Our friendly representative visits your location at your convenience. No appointment needed—we come to you.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 relative z-10">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Registration</h3>
                <p className="text-muted-foreground">
                  Share your service details, experience, and availability. We handle all the paperwork and verification.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 relative z-10">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Start Earning</h3>
                <p className="text-muted-foreground">
                  Receive customer requests instantly and start building your reputation on our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Services We Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From plumbing to painting, we&apos;re onboarding professionals across all home services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Plumbing", icon: "🔧" },
              { name: "Painting", icon: "🎨" },
              { name: "Lawn Care", icon: "🌿" },
              { name: "Roofing", icon: "🏠" },
              { name: "Electrical", icon: "⚡" },
              { name: "HVAC", icon: "❄️" },
              { name: "Carpentry", icon: "🔨" },
              { name: "Cleaning", icon: "✨" },
              { name: "Landscaping", icon: "🌳" },
              { name: "Handyman", icon: "🛠️" },
            ].map((service) => (
              <Card key={service.name} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <div className="font-medium">{service.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join Bibidi today and start connecting with customers in your area. Our team is ready to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="text-base px-8">
                Register Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-base px-8">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Bibidi</h3>
              <p className="text-sm text-muted-foreground">
                Connecting service providers with customers, one door at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">For Providers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/register" className="hover:text-foreground">Register</Link></li>
                <li><Link href="/login" className="hover:text-foreground">Login</Link></li>
                <li><Link href="#features" className="hover:text-foreground">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">Help Center</Link></li>
                <li><Link href="#" className="hover:text-foreground">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-foreground">FAQs</Link></li>
                <li><Link href="#" className="hover:text-foreground">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="#" className="hover:text-foreground">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Bibidi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
