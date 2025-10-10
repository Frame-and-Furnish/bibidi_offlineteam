'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Mail, 
  Phone, 
  MapPin, 
  UserPlus, 
  Search,
  MapPinned,
  Users,
  Send
} from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const TeamMap = dynamic(() => import('@/components/dashboard/TeamMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
});

interface TeamMember {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  role: string;
  avatar?: string;
  status: 'active' | 'away' | 'offline';
}

export default function Team() {
  const [searchQuery, setSearchQuery] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [showMap, setShowMap] = useState(true);

  // Sample team members data (in a real app, this would come from an API)
  const [teamMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      phone: '+1 (555) 123-4567',
      location: 'Kelowna, Canada',
      coordinates: { lat: 49.8862, lng: -119.4859 },
      role: 'Project Manager',
      status: 'active',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah.smith@company.com',
      phone: '+1 (555) 234-5678',
      location: 'Vernon, Canada',
      coordinates: { lat: 50.2646, lng: -119.2758 },
      role: 'Designer',
      status: 'active',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@company.com',
      phone: '+44 20 1234 5678',
      location: 'Penticton, Canada',
      coordinates: { lat: 49.4862, lng: -119.5859 },
      role: 'Developer',
      status: 'away',
    },
    {
      id: 4,
      name: 'Emily Chen',
      email: 'emily.chen@company.com',
      phone: '+81 3 1234 5678',
      location: 'Kelowna, Canada',
      coordinates: { lat: 49.8862, lng: -119.4859 },
      role: 'Marketing Manager',
      status: 'active',
    },
    {
      id: 5,
      name: 'Alex Rodriguez',
      email: 'alex.rodriguez@company.com',
      phone: '+34 91 123 4567',
      location: 'Lake Country, Canada',
      coordinates: { lat: 49.4862, lng: -119.5859 },
      role: 'Sales Representative',
      status: 'offline',
    },
  ]);

  // Filter team members based on search query
  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendInvite = () => {
    // In a real app, this would send an invite to the backend
    console.log('Sending invite to:', inviteEmail);
    setInviteEmail('');
    setIsInviteOpen(false);
    // Show success message
    alert(`Invite sent to ${inviteEmail}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Team Members</h1>
            <p className="text-gray-500 mt-1">
              Manage your team and view their locations
            </p>
          </div>
          <Dialog open={isInviteOpen} onOpenChange={setIsInviteOpen}>
            <DialogTrigger asChild>
              <Button className="bg-yellow-400 hover:bg-yellow-500">
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Invite Team Member</DialogTitle>
                <DialogDescription>
                  Send an invitation to join your team. They will receive an email with instructions.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="colleague@company.com"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsInviteOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSendInvite}
                  disabled={!inviteEmail}
                  className="bg-yellow-400 hover:bg-yellow-500"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Invite
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Members
              </CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Now
              </CardTitle>
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {teamMembers.filter((m) => m.status === 'active').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Locations
              </CardTitle>
              <MapPinned className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {new Set(teamMembers.map((m) => m.location)).size}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and View Toggle */}
        <div className="flex gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant={showMap ? 'default' : 'outline'}
            onClick={() => setShowMap(!showMap)}
          >
            <MapPin className="mr-2 h-4 w-4" />
            {showMap ? 'Hide Map' : 'Show Map'}
          </Button>
        </div>

        {/* Map View */}
        {showMap && (
          <Card>
            <CardHeader>
              <CardTitle>Team Locations</CardTitle>
              <CardDescription>
                View where your team members are located around the world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <TeamMap members={filteredMembers} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="text-lg font-semibold bg-blue-100 text-blue-600">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white ${getStatusColor(
                        member.status
                      )}`}
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                    <Badge
                      variant="outline"
                      className="mt-2 text-xs capitalize"
                    >
                      {member.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span>{member.location}</span>
                </div>
                <div className="pt-3 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      setInviteEmail(member.email);
                      setIsInviteOpen(true);
                    }}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Invite
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No team members found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
