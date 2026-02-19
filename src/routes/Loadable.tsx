import { ComponentType, Suspense } from 'react';

const Loadable = (Component: ComponentType) => (props: any) =>
  (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;