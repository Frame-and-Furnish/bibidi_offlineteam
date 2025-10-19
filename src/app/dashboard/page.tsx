'use client';

import React, { useState, useMemo, useEffect } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Users,
  Clock,
  Wallet,
  Search,
  Filter,
  Grid3x3,
  List,
  Plus,
  Edit,
  Trash2,
  Eye,
  MoreVertical,
  TrendingUp,
} from 'lucide-react';
import axios from 'axios';

// Mock data for service providers
interface ServiceProvider {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  pricePerHour: number;
  status: 'active' | 'pending';
  totalEarnings: number;
  phone: string;
  joinedDate: string;
  recruiter: {
    id: string;
    email: string;
  };
}
/*
const mockServiceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'John Carpenter',
    email: 'john.carpenter@example.com',
    serviceCategory: 'Carpentry',
    pricePerHour: 50,
    status: 'active',
    totalEarnings: 15000,
    phone: '+1 234 567 8901',
    joinedDate: '2024-01-15',
  },
  {
    id: '2',
    name: 'Sarah Painter',
    email: 'sarah.painter@example.com',
    serviceCategory: 'Painting',
    pricePerHour: 40,
    status: 'active',
    totalEarnings: 12000,
    phone: '+1 234 567 8902',
    joinedDate: '2024-02-20',
  },
  {
    id: '3',
    name: 'Mike Electrician',
    email: 'mike.electrician@example.com',
    serviceCategory: 'Electrical',
    pricePerHour: 60,
    status: 'pending',
    totalEarnings: 0,
    phone: '+1 234 567 8903',
    joinedDate: '2024-10-01',
  },
  {
    id: '4',
    name: 'Emily Plumber',
    email: 'emily.plumber@example.com',
    serviceCategory: 'Plumbing',
    pricePerHour: 55,
    status: 'active',
    totalEarnings: 18000,
    phone: '+1 234 567 8904',
    joinedDate: '2024-03-10',
  },
  {
    id: '5',
    name: 'David Mason',
    email: 'david.mason@example.com',
    serviceCategory: 'Masonry',
    pricePerHour: 45,
    status: 'pending',
    totalEarnings: 0,
    phone: '+1 234 567 8905',
    joinedDate: '2024-10-05',
  },
  {
    id: '6',
    name: 'Lisa Gardener',
    email: 'lisa.gardener@example.com',
    serviceCategory: 'Gardening',
    pricePerHour: 35,
    status: 'active',
    totalEarnings: 8000,
    phone: '+1 234 567 8906',
    joinedDate: '2024-04-12',
  },
];
*/
const serviceCategories = ['All', 'Carpentry', 'Painting', 'Electrical', 'Plumbing', 'Masonry', 'Gardening'];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [providers, setProviders] = useState<ServiceProvider[]>([]);


  useEffect(() => {
    const fetchProviders = async () => {
      const token = localStorage.getItem('token');
      const recruiter = JSON.parse(localStorage.getItem('recruiter') || '{}');
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/offline/providers`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Providers:', response.data.data.providers);
      console.log('Recruiter:', recruiter);
      //setProviders(response.data.data.providers)
      setProviders(response.data.data.providers.filter((provider: ServiceProvider) => provider?.recruiter?.email == recruiter.email));
    };
    fetchProviders(); 
  }, []);
  // Calculate stats
  const stats = useMemo(() => {
    const totalOnboarded = providers.filter(p => p.status === 'active').length;
    const totalPending = providers.filter(p => p.status === 'pending').length;
    const totalEarnings = providers.reduce((sum, p) => sum + p.totalEarnings, 0);
    const walletBalance = totalEarnings * 0.02; // 2% commission

    return {
      totalOnboarded,
      totalPending,
      walletBalance,
      totalEarnings,
    };
  }, [providers]);

  // Filter providers
  const filteredProviders = useMemo(() => {
    return providers.filter((provider) => {
      const matchesSearch =
        provider.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === 'All' || provider.category === categoryFilter;

      const matchesStatus =
        statusFilter === 'all' || provider.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [providers, searchQuery, categoryFilter, statusFilter]);

  const handleEdit = (id: string) => {
    console.log('Edit provider:', id);
    // Implement edit logic
  };

  const handleDelete = (id: string) => {
    console.log('Delete provider:', id);
    // Implement delete logic
  };

  const handleView = (id: string) => {
    console.log('View provider:', id);
    // Implement view logic
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your service providers</p>
          </div>
          <Button className="flex items-center gap-2" asChild>
            <a href="/dashboard/serviceprovider">
              <Plus className="h-4 w-4" />
              Add Service Provider
            </a>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Total Onboarded */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Onboarded
              </CardTitle>
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                {stats.totalOnboarded}
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-600 font-medium">
                  Active providers
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Total Pending */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pending Approvals
              </CardTitle>
              <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <Clock className="h-5 w-5 text-yellow-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                {stats.totalPending}
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-gray-500">
                  Awaiting verification
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Wallet Balance */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Wallet Balance (2% Commission)
              </CardTitle>
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <Wallet className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900">
                ${stats.walletBalance.toLocaleString()}
              </div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-sm text-gray-500">
                  From ${stats.totalEarnings.toLocaleString()} total earnings
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Providers Section */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="text-xl font-semibold">
                Service Providers
              </CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon-sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon-sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, email, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>

          <CardContent>
            {filteredProviders.length === 0 ? (
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  No providers found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : viewMode === 'list' ? (
              // List View
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200">
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Name
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Email
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Service Category
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Price/Hour
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                        Status
                      </th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProviders.map((provider) => (
                      <tr
                        key={provider.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-900">
                            {provider.firstName} {provider.lastName}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-sm text-gray-600">
                            {provider.email}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant="secondary">
                            {provider.category}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-medium text-gray-900">
                            ${provider.pricePerHour}/hr
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge
                            variant={
                              provider.status === 'active' ? 'success' : 'warning'
                            }
                          >
                            {provider.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              onClick={() => handleView(provider.id)}
                              title="View"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              onClick={() => handleEdit(provider.id)}
                              title="Edit"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              onClick={() => handleDelete(provider.id)}
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              // Grid View
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredProviders.map((provider) => (
                  <Card key={provider.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg">
                            {provider.firstName} {provider.lastName}
                          </CardTitle>
                          <p className="text-sm text-gray-500 mt-1">
                            {provider.email}
                          </p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon-sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleView(provider.id)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleEdit(provider.id)}
                            >
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDelete(provider.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Category</span>
                        <Badge variant="secondary">
                          {provider.category}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Price/Hour</span>
                        <span className="font-semibold text-gray-900">
                          ${provider.pricePerHour}/hr
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Status</span>
                        <Badge
                          variant={
                            provider.status === 'active' ? 'success' : 'warning'
                          }
                        >
                          {provider.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <span className="text-sm text-gray-500">Total Earnings</span>
                        <span className="font-medium text-gray-900">
                          ${provider.totalEarnings.toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Results Count */}
            {filteredProviders.length > 0 && (
              <div className="mt-4 text-sm text-gray-500 text-center">
                Showing {filteredProviders.length} of {providers.length} service providers
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
