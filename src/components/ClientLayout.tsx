// app/components/ClientLayout.tsx
"use client";

import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div>
        {children}
      </div>
    </>
  );
}
