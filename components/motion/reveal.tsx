'use client';

import { cn } from '@/lib/utils';
import { motion, useInView, type HTMLMotionProps } from 'motion/react';
import * as React from 'react';

type RevealProps = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  once = true,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
