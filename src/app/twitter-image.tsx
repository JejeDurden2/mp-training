import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'MP Training Nice - Coaching Privé & Personal Training';
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
          background: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Neon glow effect background */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(0,128,255,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo SVG */}
        <svg
          width="180"
          height="200"
          viewBox="0 0 192.989 217.452"
          style={{ marginBottom: '40px' }}
        >
          <path
            fill="#bcbcbc"
            d="m155.518,87.759c-4.662-1.852-9.492-1.005-14.423-1.287v36.628c2.867,0,5.65.076,8.428-.014,8.556-.276,15.963-6.722,17.312-14.991,1.442-8.838-3.199-17.112-11.317-20.337Z"
          />
          <path
            fill="#bcbcbc"
            d="m138.138,86.564c-1.863,0-3.541,0-5.22,0-11.414.006-19.787,8.362-19.793,19.769-.007,12.186-.004,26.151-.004,38.337h5.223c11.437-.034,19.779-8.364,19.791-19.79.013-12.186.003-24.372.003-36.557v-1.758Zm-4.659,39.203c-.054,8.295-7.483,15.032-15.677,14.183l-.073-1.386.007-32.371c.037-8.569,6.535-15.136,14.805-15.074.241.002.483.034.818.059.049.418.133.796.133,1.174.007,11.138.061,22.277-.012,33.415Z"
          />
          <path
            fill="#fff"
            d="m107.635,144.553c-.531.03-.913.068-1.296.07-13.105.074-23.402-7.729-23.46-17.91l-.011-38.462.116-1.647c12.984-1.009,24.756,6.996,24.842,16.851.115,13.234.03,26.468.019,39.703,0,.449-.132.898-.21,1.395Z"
          />
          <path
            fill="#fff"
            d="m80.301,144.553c-.531.03-.913.068-1.296.07-13.105.074-23.402-7.729-23.46-17.91l-.011-38.462.116-1.647c12.984-1.009,24.756,6.996,24.842,16.851.115,13.234.03,26.468.019,39.703,0,.449-.132.898-.21,1.395Z"
          />
          <path
            fill="#fff"
            d="m52.966,144.553c-.531.03-.913.068-1.296.07-13.105.074-23.402-7.729-23.46-17.91l-.011-38.462.116-1.647c12.984-1.009,24.756,6.996,24.842,16.851.115,13.234.03,26.468.019,39.703,0,.449-.132.898-.21,1.395Z"
          />
        </svg>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '8px',
              margin: 0,
              textAlign: 'center',
            }}
          >
            MP Training
          </h1>
          <div
            style={{
              width: '120px',
              height: '4px',
              background: '#0080ff',
              boxShadow: '0 0 20px rgba(0,128,255,0.8), 0 0 40px rgba(0,128,255,0.4)',
            }}
          />
          <p
            style={{
              fontSize: '28px',
              color: '#0080ff',
              textTransform: 'uppercase',
              letterSpacing: '6px',
              margin: 0,
            }}
          >
            Coaching Privé Nice
          </p>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>
            Personal Training
          </span>
          <span style={{ color: '#0080ff', fontSize: '24px' }}>•</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>
            Small Groups
          </span>
          <span style={{ color: '#0080ff', fontSize: '24px' }}>•</span>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>
            Préparation Athlétique
          </span>
        </div>

        {/* Border glow effect */}
        <div
          style={{
            position: 'absolute',
            inset: '0',
            border: '2px solid rgba(0,128,255,0.3)',
            boxShadow: 'inset 0 0 100px rgba(0,128,255,0.1)',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
