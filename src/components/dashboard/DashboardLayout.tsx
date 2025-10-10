'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className={cn('flex-1 overflow-auto', className)}>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
