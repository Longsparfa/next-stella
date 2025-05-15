import { forwardRef } from 'react';
import Link from 'next/link';
import { PolymorphicButtonProps } from '@/app/lib/types';
import { ButtonProps, LinkButtonProps } from '@/app/lib/types';

const variantClasses = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
  secondary: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:ring-indigo-500',
  white: 'bg-white text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500',
};

const sizeClasses = {
  sm: 'px-2.5 py-1.5 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-2 text-base',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, PolymorphicButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      className = '',
      children,
      asLink,
      ...rest
    } = props;

    const baseClasses = `inline-flex items-center justify-center rounded-md border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (asLink) {
      const { href, ...linkProps } = rest as LinkButtonProps;
      return (
        <Link
          href={href}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={baseClasses}
          {...linkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        className={baseClasses}
        {...rest as ButtonProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';