// 'use client';
// import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { LucideProps, icons } from 'lucide-react';
import { RefAttributes } from 'react';
import { cn } from '~lib/utils';

type IconProps = { label: string; icon: keyof typeof icons } & LucideProps & RefAttributes<SVGSVGElement>;
export const Icon = ({ label, icon, ...props }: IconProps) => {
  const IconComp = icons[icon];

  return (
    <>
      <IconComp
        aria-hidden="true"
        focusable="false"
        {...props}
        className={cn('inline-block h-5 w-5', props.className)}
      />
      <span
        style={{
          position: 'absolute',
          border: '0',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
        }}>
        {label}
      </span>
    </>
  );
};
