import React from 'react';

export function Dialog({ children }) {
  return <>{children}</>;
}

export function DialogTrigger({ children }) {
  return <>{children}</>;
}

export function DialogContent({ children, className = '', ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function DialogHeader({ children, className = '', ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function DialogTitle({ children, className = '', ...props }) {
  return (
    <h3 className={className} {...props}>
      {children}
    </h3>
  );
}

export default Dialog;
