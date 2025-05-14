'use client';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { LucideProps, icons } from 'lucide-react';
import { RefAttributes } from 'react';
import { cn } from '~lib/utils';

type IconProps = { label: string; icon: keyof typeof icons } & LucideProps & RefAttributes<SVGSVGElement>;
export const Icon = ({ label, icon, ...props }: IconProps) => {
  const IconComp = icons[icon];

  if (!IconComp) return null;

  return (
    <AccessibleIcon label={label}>
      <IconComp
        aria-hidden="true"
        focusable="false"
        {...props}
        className={cn('inline-block h-5 w-5', props.className)}
      />
    </AccessibleIcon>
  );
};
