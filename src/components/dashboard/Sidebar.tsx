'use client';

import React, { useState } from 'react';
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
  Download
} from 'lucide-react';

import { FaTools } from "react-icons/fa";
import Image from 'next/image';


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
      </nav>

      {/* Quick Actions */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Quick Actions
          </h3>
          <div className="space-y-1">
            {quickActions.map((action) => (
              <Button
                key={action.id}
                variant="ghost"
                size="sm"
                className="w-full justify-start h-8 px-2 text-sm"
                asChild
              >
                <a href={action.href} className="flex items-center space-x-2">
                  {action.icon}
                  <span>{action.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Collapsed Quick Actions */}
      {isCollapsed && (
        <div className="p-2 border-t border-gray-200">
          <div className="space-y-1">
            {quickActions.map((action) => (
              <Button
                key={action.id}
                variant="ghost"
                size="sm"
                className="w-full h-8 p-0"
                asChild
                title={action.label}
              >
                <a href={action.href}>
                  {action.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
