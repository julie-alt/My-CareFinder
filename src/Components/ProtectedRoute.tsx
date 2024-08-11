// src/components/ProtectedRoute.tsx
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import useAuth from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return <div>Loading...</div>; // Show a loading spinner or some placeholder
  }

  return <>{children}</>;
};

export default ProtectedRoute;
