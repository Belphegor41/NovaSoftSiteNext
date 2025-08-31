import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext(null);

export function Tabs({ defaultValue, children, ...props }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

export function TabsTrigger({ value, children, ...props }) {
  const { value: current, setValue } = useContext(TabsContext);
  const active = current === value;
  return (
    <button
      type="button"
      onClick={() => setValue(value)}
      data-state={active ? 'active' : 'inactive'}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, ...props }) {
  const { value: current } = useContext(TabsContext);
  if (current !== value) return null;
  return <div {...props}>{children}</div>;
}
