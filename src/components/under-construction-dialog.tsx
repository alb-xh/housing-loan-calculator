"use client";

import { Construction } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useTranslation } from '@/hooks/use-translation';

export function UnderConstructionDialog () {
  const t = useTranslation();

  return (
    <Dialog open={true}>
      <DialogContent className="[&>button]:hidden sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex justify-center"><Construction className="w-28 h-28"/></DialogTitle>
        </DialogHeader>
        <div className="flex justify-center font-semi-bold items-center gap-2 sm:text-2xl">
          {t('underConstruction.message')}
        </div>
      </DialogContent>
    </Dialog>
  )
}