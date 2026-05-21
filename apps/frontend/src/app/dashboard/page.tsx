'use client';

import { motion } from 'framer-motion';
import { ProtectedRoute } from '@/components/providers/ProtectedRoute';
import { Card } from '@/components/ui/Card';
import { ProgressRing } from '@/components/ui/ProgressRing';
import { MacroBar } from '@/components/ui/MacroBar';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { Apple, Droplet, TrendingDown, Plus } from 'lucide-react';

export default function DashboardPage() {
  // Mock data - replace with real API calls
  const dailyStats = {
    calories: 1680,
    calorieTarget: 2000,
    protein: 125,
    carbs: 198,
    fat: 56,
    proteinTarget: 150,
    carbsTarget: 225,
    fatTarget: 65,
    water: 6,
    waterTarget: 8,
  };

  const caloriePercent = Math.min((dailyStats.calories / dailyStats.calorieTarget) * 100, 100);
  const proteinPercent = Math.min((dailyStats.protein / dailyStats.proteinTarget) * 100, 100);
  const carbsPercent = Math.min((dailyStats.carbs / dailyStats.carbsTarget) * 100, 100);
  const fatPercent = Math.min((dailyStats.fat / dailyStats.fatTarget) * 100, 100);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border p-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">Today's Progress</h1>
          <p className="text-muted-foreground">Wednesday, May 21, 2026</p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Calorie Ring */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card interactive>
              <div className="p-8 flex flex-col items-center justify-center">
                <ProgressRing
                  percentage={caloriePercent}
                  size={180}
                  current={dailyStats.calories}
                  target={dailyStats.calorieTarget}
                  label="Calories"
                />
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Link href="/meals/log">
                <Button size="lg" className="w-full flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Log Meal
                </Button>
              </Link>
              <Link href="/scan">
                <Button size="lg" variant="secondary" className="w-full flex items-center justify-center gap-2">
                  <Apple className="w-5 h-5" />
                  Scan Food
                </Button>
              </Link>
              <Link href="/water">
                <Button size="lg" variant="secondary" className="w-full flex items-center justify-center gap-2">
                  <Droplet className="w-5 h-5" />
                  Log Water
                </Button>
              </Link>
            </div>
          </div>

          {/* Macros */}
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Protein', value: dailyStats.protein, target: dailyStats.proteinTarget, percent: proteinPercent, color: 'text-blue-500' },
              { label: 'Carbs', value: dailyStats.carbs, target: dailyStats.carbsTarget, percent: carbsPercent, color: 'text-amber-500' },
              { label: 'Fat', value: dailyStats.fat, target: dailyStats.fatTarget, percent: fatPercent, color: 'text-red-500' },
              { label: 'Water', value: dailyStats.water, target: dailyStats.waterTarget, percent: (dailyStats.water / dailyStats.waterTarget) * 100, color: 'text-blue-400' },
            ].map((macro, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">{macro.label}</h3>
                      <div className={`text-2xl font-bold ${macro.color}`}>
                        {Math.round(macro.percent)}%
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {macro.value} / {macro.target}
                    </div>
                    <div className="w-full h-2 bg-soft-200 rounded-full mt-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(macro.percent, 100)}%` }}
                        transition={{ duration: 0.5 }}
                        className={`h-full ${macro.color}`}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}