import React from 'react';

export default function Badge({ children, className = '', variant = 'primary', ...props }) {
  const base = 'inline-flex items-center px-2 py-1 rounded-md text-xs font-medium';
  const variants = {
    primary: 'bg-orange-500 text-white',
    secondary: 'bg-white/10 text-white border border-white/20'
  };
  const classes = [base, variants[variant] || '', className].filter(Boolean).join(' ');
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
