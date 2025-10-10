'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FileUpload } from '@/components/ui/file-upload';
import {
  User,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  Save,
  ArrowLeft,
  Building2,
  FileText,
  Image as ImageIcon,
  IdCard,
  DollarSign
} from 'lucide-react';

interface ServiceProviderFormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  serviceCategory: string;
  city: string;
  pricePerHour: number;
  // Advanced fields
  profilePicture?: File | null;
  fullAddress?: string;
  bio?: string;
  govIdFront?: File | null;
  govIdBack?: File | null;
}

const serviceCategories = [
  'Carpentry',
  'Painting',
  'Electrical',
  'Plumbing',
  'Masonry',
  'Gardening',
  'HVAC',
  'Roofing',
  'Flooring',
  'Interior Design',
];

const cities = [
  'Kelowna',
  'Vernon',
  'Penticton',
  'Summerland',
  'Kamloops',
  'Lake Country',
  'West Kelowna',
  'Merritt',
  'Hope',
  'Chilliwack',
  'Salmon Arm',
  'Revelstoke',
  'Golden',
  'Osoyoos',
  'Oliver',
  'Armstrong',
  'Enderby',
];

export default function ServiceProviderPage() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [govIdFront, setGovIdFront] = useState<File | null>(null);
  const [govIdBack, setGovIdBack] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ServiceProviderFormData>();

  const selectedCategory = watch('serviceCategory');
  const selectedCity = watch('city');

  const onSubmit = async (data: ServiceProviderFormData) => {
    // Add file data
    const formData = {
      ...data,
      profilePicture,
      govIdFront,
      govIdBack,
    };

    console.log('Form submitted:', formData);

    // TODO: Implement API call to save service provider
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    alert('Service Provider onboarded successfully!');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">Add Service Provider</h1>
            <p className="text-gray-500 mt-1">Onboard a new service provider to your platform</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Essential details about the service provider
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Full Name */}
              <div className="space-y-3">
                <Label htmlFor="fullName" className="text-base font-semibold">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="fullName"
                    placeholder="Enter full name"
                    className="pl-11 h-12 text-base"
                    {...register('fullName', {
                      required: 'Full name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-sm text-red-500">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base font-semibold">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="pl-11 h-12 text-base"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="space-y-3">
                <Label htmlFor="mobileNumber" className="text-base font-semibold">
                  Mobile Number <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="mobileNumber"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="pl-11 h-12 text-base"
                    {...register('mobileNumber', {
                      required: 'Mobile number is required',
                      pattern: {
                        value: /^[\d\s\+\-\(\)]+$/,
                        message: 'Invalid phone number',
                      },
                    })}
                  />
                </div>
                {errors.mobileNumber && (
                  <p className="text-sm text-red-500">{errors.mobileNumber.message}</p>
                )}
              </div>

              {/* Service Category and City - Two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Service Category */}
                <div className="space-y-3">
                  <Label htmlFor="serviceCategory" className="text-base font-semibold">
                    Service Category <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={selectedCategory}
                    onValueChange={(value) => setValue('serviceCategory', value)}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCategories.map((category) => (
                        <SelectItem key={category} value={category} className="text-base">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.serviceCategory && (
                    <p className="text-sm text-red-500">{errors.serviceCategory.message}</p>
                  )}
                </div>

                {/* City */}
                <div className="space-y-3">
                  <Label htmlFor="city" className="text-base font-semibold">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={selectedCity}
                    onValueChange={(value) => setValue('city', value)}
                  >
                    <SelectTrigger className="h-12 text-base">
                      <MapPin className="h-5 w-5 mr-2" />
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city} className="text-base">
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.city && (
                    <p className="text-sm text-red-500">{errors.city.message}</p>
                  )}
                </div>
              </div>

              {/* Price Per Hour */}
              <div className="space-y-3">
                <Label htmlFor="pricePerHour" className="text-base font-semibold">
                  Price per Hour <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="pricePerHour"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="pl-11 h-12 text-base"
                    {...register('pricePerHour', {
                      required: 'Price per hour is required',
                      min: {
                        value: 0,
                        message: 'Price must be greater than 0',
                      },
                      valueAsNumber: true,
                    })}
                  />
                </div>
                {errors.pricePerHour && (
                  <p className="text-sm text-red-500">{errors.pricePerHour.message}</p>
                )}
                <p className="text-sm text-gray-500">
                  Enter the hourly rate in CAD ($)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Section Toggle */}
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Hide Advanced Section
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                Show Advanced Section
              </>
            )}
          </Button>

          {/* Advanced Information Card */}
          {showAdvanced && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Advanced Information
                </CardTitle>
                <CardDescription>
                  Additional details and documents for verification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Profile Picture */}
                <div className="space-y-3">
                  <Label className="flex items-center gap-2 text-base font-semibold">
                    <ImageIcon className="h-5 w-5" />
                    Profile Picture
                  </Label>
                  <FileUpload
                    value={profilePicture}
                    onChange={setProfilePicture}
                    accept="image/*"
                    maxSize={5}
                    preview={true}
                    label="Click to upload profile picture"
                  />
                  <p className="text-sm text-gray-500">
                    Recommended: Square image, at least 400x400px
                  </p>
                </div>

                {/* Full Address */}
                <div className="space-y-3">
                  <Label htmlFor="fullAddress" className="flex items-center gap-2 text-base font-semibold">
                    <Building2 className="h-5 w-5" />
                    Full Address
                  </Label>
                  <Textarea
                    id="fullAddress"
                    placeholder="Enter complete address including street, landmark, postal code..."
                    rows={4}
                    className="text-base"
                    {...register('fullAddress')}
                  />
                  <p className="text-sm text-gray-500">
                    Include street name, building/house number, and postal code
                  </p>
                </div>

                {/* Bio */}
                <div className="space-y-3">
                  <Label htmlFor="bio" className="text-base font-semibold">Bio / Professional Summary</Label>
                  <Textarea
                    id="bio"
                    placeholder="Brief description of experience, skills, and specialization..."
                    rows={5}
                    className="text-base"
                    {...register('bio')}
                  />
                  <p className="text-sm text-gray-500">
                    Max 500 characters - describe professional experience and expertise
                  </p>
                </div>

                {/* Government ID Documents */}
                <div className="border-t pt-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <IdCard className="h-6 w-6 text-gray-700" />
                    <h3 className="font-semibold text-lg text-gray-900">Government ID Verification</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Government ID Front */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Government ID (Front)</Label>
                      <FileUpload
                        value={govIdFront}
                        onChange={setGovIdFront}
                        accept="image/*,.pdf"
                        maxSize={10}
                        preview={true}
                        label="Upload ID front"
                      />
                      <p className="text-sm text-gray-500">
                        Accepted: Driver&apos;s License, Passport, National ID
                      </p>
                    </div>

                    {/* Government ID Back */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Government ID (Back)</Label>
                      <FileUpload
                        value={govIdBack}
                        onChange={setGovIdBack}
                        accept="image/*,.pdf"
                        maxSize={10}
                        preview={true}
                        label="Upload ID back"
                      />
                      <p className="text-sm text-gray-500">
                        Upload the back side of the ID document
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-800">
                      <strong>Privacy Notice:</strong> All documents are securely stored and encrypted. 
                      Information is used solely for verification purposes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Form Actions */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => window.history.back()}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Onboarding...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Onboard Service Provider
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>

        {/* Help Section */}
        <Card className="bg-gray-50 border-dashed">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• All fields marked with <span className="text-red-500">*</span> are required</li>
              <li>• Advanced section is optional but recommended for faster verification</li>
              <li>• Government ID documents help verify provider authenticity</li>
              <li>• Profile picture improves trust and booking rates</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
