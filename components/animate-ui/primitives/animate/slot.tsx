'use client';

import * as React from 'react';
import { motion, isMotionComponent, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<keyof HTMLElementTagNameMap>,
  'ref'
> & { ref?: React.Ref<T> };

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
} & DOMMotionProps<T>;

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

function isMotionCreatable(type: unknown): type is React.ElementType {
  return (
    typeof type === 'string' ||
    typeof type === 'function' ||
    (typeof type === 'object' && type !== null)
  );
}

/** Motion-only props that must not be forwarded to non-motion DOM nodes. */
const MOTION_PROP_KEYS = [
  'animate',
  'initial',
  'exit',
  'variants',
  'whileHover',
  'whileTap',
  'whileFocus',
  'whileDrag',
  'whileInView',
  'drag',
  'dragConstraints',
  'dragElastic',
  'dragMomentum',
  'dragTransition',
  'dragPropagation',
  'dragControls',
  'dragListener',
  'layout',
  'layoutId',
  'layoutDependency',
  'layoutScroll',
  'layoutRoot',
  'transition',
  'transformTemplate',
  'transformValues',
  'onAnimationStart',
  'onAnimationComplete',
  'onUpdate',
  'onDrag',
  'onDragStart',
  'onDragEnd',
  'onDirectionLock',
  'onDragTransitionEnd',
  'onHoverStart',
  'onHoverEnd',
  'onTap',
  'onTapStart',
  'onTapCancel',
  'onPan',
  'onPanStart',
  'onPanEnd',
  'onPanSessionStart',
  'onViewportEnter',
  'onViewportLeave',
] as const;

function stripMotionProps(props: AnyProps): AnyProps {
  const rest = { ...props };
  for (const key of MOTION_PROP_KEYS) {
    delete rest[key];
  }
  return rest;
}

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  const childType = React.isValidElement(children) ? children.type : null;

  const isAlreadyMotion =
    typeof childType === 'object' &&
    childType !== null &&
    isMotionComponent(childType);

  const canCreateMotion = childType != null && isMotionCreatable(childType);

  const Base = React.useMemo(() => {
    if (!canCreateMotion || childType == null) return null;
    return isAlreadyMotion
      ? (childType as React.ElementType)
      : motion.create(childType as React.ElementType);
  }, [canCreateMotion, isAlreadyMotion, childType]);

  if (!React.isValidElement(children)) return null;

  const { ref: childRef, ...childProps } = children.props as AnyProps;

  // Children created in a Server Component lose a usable `type` when passed
  // into a Client Component — fall back to cloneElement without motion.create.
  if (!Base) {
    const safeProps = stripMotionProps(props as AnyProps);
    const mergedProps = mergeProps(childProps, safeProps as DOMMotionProps<T>);

    return React.cloneElement(children, {
      ...mergedProps,
      ref: mergeRefs(childRef as React.Ref<T>, ref),
    } as AnyProps);
  }

  const mergedProps = mergeProps(childProps, props);

  return (
    <Base {...mergedProps} ref={mergeRefs(childRef as React.Ref<T>, ref)} />
  );
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};
