'use client';

import { motion } from 'framer-motion';

interface MacroBarProps {
  protein: number;
  carbs: number;
  fat: number;
}

export function MacroBar({ protein, carbs, fat }: MacroBarProps) {
  const total = protein + carbs + fat;
  const proteinPercent = (protein / total) * 100;
  const carbsPercent = (carbs / total) * 100;

  return (
    <div className="w-full">
      <div className="flex h-3 rounded-full overflow-hidden bg-soft-200 gap-0.5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${proteinPercent}%` }}
          transition={{ duration: 0.5, delay: 0 }}
          className="bg-blue-500 rounded-full"
          title={`Protein: ${protein}g`}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${carbsPercent}%` }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-amber-500 rounded-full"
          title={`Carbs: ${carbs}g`}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(fat / total) * 100}%` }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-red-500 rounded-full"
          title={`Fat: ${fat}g`}
        />
      </div>
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>P: {protein}g</span>
        <span>C: {carbs}g</span>
        <span>F: {fat}g</span>
      </div>
    </div>
  );
}