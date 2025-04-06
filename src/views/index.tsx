import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Spinner } from '@/components/ui';
import routes from '@/config/routes';

export const Views = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/">
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
