'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Upload,
  Eye,
  Download,
  User,
  Settings2,
  LogOut
} from 'lucide-react';

import { FaTools } from "react-icons/fa";
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';


interface SidebarProps {
  className?: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: '/dashboard'
  },
  {
    id: 'serviceprovider',
    label: 'Service Providers',
    icon: <FaTools className="h-5 w-5" />,
    href: '/dashboard/serviceprovider'
  },
  {
    id: 'team',
    label: 'Team',
    icon: <Users className="h-5 w-5" />,
    href: '/dashboard/team'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-5 w-5" />,
    href: '/dashboard/settings'
  }
];

const quickActions = [
  {
    id: 'serviceprovider',
    label: 'Add Service Provider',
    icon: <Upload className="h-4 w-4" />,
    href: '/dashboard/serviceprovider'
  },
  {
    id: 'view',
    label: 'View Service Providers',
    icon: <Eye className="h-4 w-4" />,
    href: '/dashboard'
  },
  {
    id: 'export',
    label: 'Export',
    icon: <Download className="h-4 w-4" />,
    href: '/dashboard/export'
  }
];

export default function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [recruiter, setRecruiter] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    // Safely access localStorage only on the client side
    if (typeof window !== 'undefined') {
      const recruiterData = localStorage.getItem('recruiter');
      if (recruiterData) {
        setRecruiter(JSON.parse(recruiterData));
      }
    }
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={cn(
        'flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BI</span>
            </div>
            <span className="font-semibold text-gray-900">
              <Image
                src="/bibidi_logo.png"
                alt="Bibidi"
                width={80}
                height={80}
              />
              <span className="font-semibold text-gray-900 text-sm">Offline Team</span>
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="h-8 w-8 p-0"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            className={cn(
              'w-full justify-start h-10 px-3',
              isCollapsed ? 'px-2' : 'px-3'
            )}
            asChild
          >
            <a href={item.href} className="flex items-center space-x-3">
              <span className="flex-shrink-0">{item.icon}</span>
              {!isCollapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </a>
          </Button>
        ))}
          {/* User Avatar with Dropdown */}
      {!isCollapsed && (
        <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* User Avatar, adapt with user image/name */}
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer select-none">
                {/* Replace with dynamic user image if available */}
                <Avatar>
                  <AvatarImage 
                    src={recruiter?.profileImage || ''} // update source to profile image if you have
                    alt="User Avatar"
                  />
                  <AvatarFallback>
                    {/* Fallback initials, update with user info */}
                    {recruiter?.firstName?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {/* Render username if desired */}
                <span className="font-medium text-gray-900 text-sm">{recruiter?.firstName}</span>
              </div>
              {/* Dropdown on hover */}
              <div className="absolute left-0 min-w-[180px] bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 transition-opacity duration-200">
                <div className="flex flex-col py-2">
                  <a href={`/dashboard/account/${recruiter?.id}`}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base"><User className="h-4 w-4" /></span>
                    Account
                  </a>
                  <a
                    href={`/dashboard/settings/${recruiter?.id}`}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base"><Settings2 className="h-4 w-4" /></span>
                    Settings
                  </a>
                  <button
                    onClick={() => {
                      // Clear localStorage and redirect to login or homepage
                      if (typeof window !== 'undefined') {
                        localStorage.removeItem('token');
                        localStorage.removeItem('recruiter');
                      }
                      router.push('/login');
                    }}
                    className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2 text-left w-full"
                  >
                    <span className="material-symbols-outlined text-base"><LogOut className="h-4 w-4" /></span>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Collapsed Quick Actions */}
      {isCollapsed && (
      <div className="flex flex-col items-center mt-5 group relative">
        <Avatar className="cursor-pointer">
          <AvatarImage 
            src={recruiter?.profileImage || ''} // update source to profile image if you have
            alt="User Avatar"
          />
          <AvatarFallback>
            {recruiter?.firstName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        {/* Small username initials (optional, can be removed) */}
        {/* <span className="text-xs mt-1">{recruiter?.name?.charAt(0)}</span> */}
        {/* Dropdown appears on avatar hover */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 min-w-[180px] bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 transition-opacity duration-200">
          <div className="flex flex-col py-2">
            <a href={`/dashboard/account/${recruiter?.id}`}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base"><User className="h-4 w-4" /></span>
              Account
            </a>
            <a
              href={`/dashboard/settings/${recruiter?.id}`}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base"><Settings2 className="h-4 w-4" /></span>
              Settings
            </a>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.removeItem('token');
                  localStorage.removeItem('recruiter');
                }
                router.push('/login');
              }}
              className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2 text-left w-full"
            >
              <span className="material-symbols-outlined text-base"><LogOut className="h-4 w-4" /></span>
              Logout
            </button>
          </div>
        </div>
      </div>

      )
      
      }
      </nav>

    
    </div>
  );
}
