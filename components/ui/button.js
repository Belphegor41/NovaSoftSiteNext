import React from 'react';

export default function Button({ children, className = '', variant = 'primary', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition';
  const variants = {
    primary: 'bg-orange-500 text-white hover:bg-orange-400',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
  };
  const classes = [base, variants[variant] || '', className].filter(Boolean).join(' ');
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
