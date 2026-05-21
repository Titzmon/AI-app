'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUIStore } from '@/lib/store';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Apple,
  Droplet,
  TrendingDown,
  MessageSquare,
  Settings,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Apple, label: 'Meals', href: '/meals' },
  { icon: Droplet, label: 'Water', href: '/water' },
  { icon: TrendingDown, label: 'Weight', href: '/weight' },
  { icon: MessageSquare, label: 'AI Coach', href: '/coach' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isSidebarOpen } = useUIStore();

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: isSidebarOpen ? 0 : -300 }}
      className="fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-soft-50 border-r border-border p-6 overflow-y-auto"
    >
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-foreground hover:bg-soft-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
}