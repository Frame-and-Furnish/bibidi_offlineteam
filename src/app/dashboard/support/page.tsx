'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Headphones,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Star,
  BookOpen,
  Video,
  Download,
  ExternalLink,
  ChevronRight,
  Users,
  Zap,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  FileText,
  Play,
  Calendar,
  MapPin,
  Globe
} from 'lucide-react';

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSupport, setSelectedSupport] = useState('tech');

  const supportCategories = [
    {
      id: 'tech',
      title: 'Technical Support',
      description: 'Get help with technical issues, bugs, and platform features',
      icon: <Headphones className="h-6 w-6" />,
      color: 'bg-blue-500',
      responseTime: '2-4 hours',
      availability: '24/7'
    },
    {
      id: 'founder',
      title: 'Founder Support',
      description: 'Direct access to leadership team for strategic guidance',
      icon: <Users className="h-6 w-6" />,
      color: 'bg-purple-500',
      responseTime: '1-2 hours',
      availability: 'Business Hours'
    },
    {
      id: 'training',
      title: 'Training & Development',
      description: 'Upskill your team with comprehensive training resources',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-green-500',
      responseTime: 'Immediate',
      availability: 'Self-paced'
    }
  ];

  const techSupportOptions = [
    {
      title: 'Phone Support',
      description: 'Speak directly with a technical expert',
      icon: <Phone className="h-5 w-5" />,
      action: 'Call Now',
      available: true,
      phone: '+1 (555) 123-4567'
    },
    {
      title: 'Email Support',
      description: 'Send detailed reports and get written responses',
      icon: <Mail className="h-5 w-5" />,
      action: 'Send Email',
      available: true,
      email: 'hello@bibidi.ca'
    }
  ];

  const handleSupportAction = (action: string, data?: any) => {
    switch (action) {
      case 'Start Chat':
        // Implement live chat functionality
        console.log('Starting live chat...');
        break;
      case 'Call Now':
        window.open(`tel:${data.phone}`);
        break;
      case 'Send Email':
        window.open(`mailto:${data.email}`);
        break;
      case 'Create Ticket':
        setActiveTab('ticket');
        break;
      default:
        console.log(`Action: ${action}`);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the help you need to succeed with Bibidi Offline Team. From technical support to training resources, we're here to help.
          </p>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportCategories.map((category) => (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedSupport === category.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedSupport(category.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {category.responseTime}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <Globe className="h-3 w-3 mr-1" />
                        {category.availability}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dynamic Content Based on Selection */}
        {selectedSupport === 'tech' && (
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <Headphones className="h-6 w-6 text-blue-500" />
                  <span>Technical Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {techSupportOptions.map((option, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            {option.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{option.title}</h4>
                            <p className="text-sm text-gray-600">{option.description}</p>
                            {option.phone && (
                              <p className="text-sm text-blue-600 mt-1">{option.phone}</p>
                            )}
                            {option.email && (
                              <p className="text-sm text-blue-600 mt-1">{option.email}</p>
                            )}
                          </div>
                          <Button 
                            size="sm" 
                            onClick={() => handleSupportAction(option.action, option)}
                            disabled={!option.available}
                          >
                            {option.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedSupport === 'founder' && (
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <Users className="h-6 w-6 text-purple-500" />
                  <span>Founder Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-500 rounded-full">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Direct Leadership Access</h3>
                      <p className="text-gray-600">Get direct access to our founders and leadership team for strategic guidance and priority support.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-2 border-purple-200">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Phone className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Direct Phone Line</h4>
                          <p className="text-sm text-gray-600">Priority support line</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-purple-600 mb-2">+1 (555) 987-6543</p>
                      <p className="text-sm text-gray-600 mb-4">Available: Mon-Fri 9AM-6PM PST</p>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => window.open('tel:+1 (555) 987-6543')}>
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Mail className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Executive Email</h4>
                          <p className="text-sm text-gray-600">Direct founder access</p>
                        </div>
                      </div>
                      <p className="text-lg font-semibold text-purple-600 mb-2">hello@bibidi.ca</p>
                      <p className="text-sm text-gray-600 mb-4">Response within 1-2 hours</p>
                      <Button variant="outline" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50" onClick={() => window.open('mailto:hello@bibidi.ca')}>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Star className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Priority Support Benefits</h4>
                      <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                        <li>• Direct access to leadership team</li>
                        <li>• Priority response times (1-2 hours)</li>
                        <li>• Strategic business guidance</li>
                        <li>• Custom solutions and integrations</li>
                        <li>• Dedicated account management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {selectedSupport === 'training' && (
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-green-500" />
                  <span>Training & Development Toolkit</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500 rounded-full">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Upskill Your Team</h3>
                      <p className="text-gray-600">Comprehensive training resources to help your team master Bibidi and improve their recruitment skills.</p>
                    </div>
                  </div>
                </div>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Download className="h-5 w-5 text-blue-500" />
                    <span>Download Training Toolkit</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700">
                      Access our comprehensive Training Toolkit PDF designed to boost your team's sales and recruitment skills. Download for offline viewing or launch directly in your browser.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                      <li>Step-by-step platform tutorials</li>
                      <li>Sales objections & script guides</li>
                      <li>Onboarding checklist for hiring managers</li>
                      <li>Printable resources and tips</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <Button 
                      asChild
                      className="bg-green-600 hover:bg-green-700 w-full"
                    >
                      <a 
                        href="/bibidi-training-toolkit.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <a 
                        href="/bibidi-training-toolkit.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4 mr-2" />
                        View as PDF
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact Form */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What can we help you with?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Describe your question or issue in detail..."
                  rows={4}
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}