import React from 'react';

export default function Input({ className = '', ...props }) {
  const base = 'w-full rounded-md px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent';
  const classes = [base, className].filter(Boolean).join(' ');
  return <input className={classes} {...props} />;
}
