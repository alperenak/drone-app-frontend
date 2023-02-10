import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./DynamicMap'), {
  ssr: false,
});

// interface MapProps extends MapOptions {
//   children?: ReactNode;
// }

function Map() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DynamicMap />
    </div>
  );
}

export default Map;
