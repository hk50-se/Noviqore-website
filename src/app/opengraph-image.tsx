import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Noviqore - Intelligent software. Built from idea to scale.';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(103,138,118,.35), rgba(10,10,10,1))',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6a8d78, #7f987f, #a68459)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ width: '18px', height: '18px', borderRadius: '999px', backgroundColor: '#fff' }} />
          </div>
          <span style={{ fontSize: 44, fontWeight: 700 }}>Noviqore</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: 18, textTransform: 'uppercase', letterSpacing: '.3em', color: '#d5c1a0', margin: 0 }}>
            Software and AI solutions
          </p>
          <h1 style={{ fontSize: 64, lineHeight: 1.1, margin: 0, maxWidth: '920px' }}>
            Intelligent software. Built from idea to scale.
          </h1>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}





