'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User,
  Bell,
  Shield,
  Palette,
  Zap,
  Save,
  Eye,
  EyeOff,
  Key,
  Mail,
  Phone,
  Edit,
  Check,
  X,
  Monitor,
  Moon,
  Sun,
  Activity
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    processing: true,
    team: true,
    system: false
  });
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC-8');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="h-4 w-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-4 w-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="h-4 w-4" /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette className="h-4 w-4" /> },
  ];

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Here you would typically save settings to backend
    console.log('Settings saved');
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">
              Manage your account settings and preferences
            </p>
          </div>
          <Button onClick={handleSave} className="bg-yellow-400 hover:bg-yellow-500">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <nav className="space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-sm font-medium rounded-none transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Settings Content */}
          <div className="lg:col-span-3">
            {activeTab === 'profile' && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-blue-600">JS</span>
                      </div>
                      <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">John Smith</h3>
                      <p className="text-gray-600">john.smith@company.com</p>
                      <Badge className="bg-green-100 text-green-800 mt-1">
                        <Check className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="john.smith@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input id="title" defaultValue="Senior Architect" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" defaultValue="Engineering" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea
                        id="bio"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue="Senior architect with 8+ years of experience in residential and commercial design."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'notifications' && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-md font-semibold text-gray-900">Communication</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                            <p className="text-xs text-gray-500">Receive notifications via email</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.email}
                            onChange={(e) => handleNotificationChange('email', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Bell className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Push Notifications</p>
                            <p className="text-xs text-gray-500">Receive push notifications in browser</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.push}
                            onChange={(e) => handleNotificationChange('push', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">SMS Notifications</p>
                            <p className="text-xs text-gray-500">Receive notifications via SMS</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.sms}
                            onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-md font-semibold text-gray-900">Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Zap className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Processing Updates</p>
                            <p className="text-xs text-gray-500">Get notified when processing jobs complete</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.processing}
                            onChange={(e) => handleNotificationChange('processing', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <User className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Team Activity</p>
                            <p className="text-xs text-gray-500">Get notified about team member activities</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.team}
                            onChange={(e) => handleNotificationChange('team', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Activity className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">System Alerts</p>
                            <p className="text-xs text-gray-500">Get notified about system maintenance and updates</p>
                          </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications.system}
                            onChange={(e) => handleNotificationChange('system', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'security' && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-md font-semibold text-gray-900">Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter current password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <Button variant="outline">
                        <Key className="h-4 w-4 mr-2" />
                        Update Password
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-md font-semibold text-gray-900">Active Sessions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Monitor className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Chrome on macOS</p>
                            <p className="text-xs text-gray-500">San Francisco, CA • Current session</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Monitor className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">Safari on iPhone</p>
                            <p className="text-xs text-gray-500">San Francisco, CA • 2 hours ago</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                          <X className="h-4 w-4 mr-1" />
                          Revoke
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'appearance' && (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Appearance Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-md font-semibold text-gray-900">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <button
                        onClick={() => setTheme('light')}
                        className={`p-4 border-2 rounded-lg text-center ${
                          theme === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <Sun className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                        <p className="text-sm font-medium">Light</p>
                      </button>
                      <button
                        onClick={() => setTheme('dark')}
                        className={`p-4 border-2 rounded-lg text-center ${
                          theme === 'dark' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <Moon className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm font-medium">Dark</p>
                      </button>
                      <button
                        onClick={() => setTheme('system')}
                        className={`p-4 border-2 rounded-lg text-center ${
                          theme === 'system' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                        }`}
                      >
                        <Monitor className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                        <p className="text-sm font-medium">System</p>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-md font-semibold text-gray-900">Language & Region</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <select
                          id="language"
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="en">English</option>
                          <option value="es">Spanish</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                          <option value="zh">Chinese</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <select
                          id="timezone"
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="UTC-8">Pacific Time (UTC-8)</option>
                          <option value="UTC-5">Eastern Time (UTC-5)</option>
                          <option value="UTC+0">UTC (UTC+0)</option>
                          <option value="UTC+1">Central European Time (UTC+1)</option>
                          <option value="UTC+8">China Standard Time (UTC+8)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
