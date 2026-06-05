import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Chaorda | Human Intelligence Infrastructure';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Ambient Grid Background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Technical Label */}
        <div
          style={{
            display: 'flex',
            marginBottom: '40px',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '14px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontFamily: 'monospace',
          }}
        >
          Institutional Infrastructure // HI-01
        </div>

        {/* Brand */}
        <div
          style={{
            display: 'flex',
            fontSize: '84px',
            fontWeight: 700,
            color: '#fdfdfb',
            letterSpacing: '-0.04em',
            marginBottom: '10px',
          }}
        >
          CHAORDA
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            fontSize: '32px',
            fontWeight: 500,
            color: '#ffbf00',
            letterSpacing: '0.05em',
            marginBottom: '40px',
            textTransform: 'uppercase',
          }}
        >
          Human Intelligence Infrastructure
        </div>

        {/* Description */}
        <div
          style={{
            display: 'flex',
            fontSize: '28px',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.4,
            maxWidth: '800px',
          }}
        >
          AI Systems That Understand Human Behavior, Emotion, and Decision-Making
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            right: '80px',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '80px',
            color: 'rgba(255, 255, 255, 0.3)',
            fontSize: '12px',
            fontFamily: 'monospace',
          }}
        >
          https://chaorda.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
