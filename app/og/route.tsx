import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  const fontData = await fetch(new URL('../fonts/GeistVF.woff', import.meta.url)).then((res) => res.arrayBuffer()).catch(() => undefined)

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#ffffff',
          padding: '80px',
        }}
      >
        <div style={{ fontSize: 52, color: '#103428', fontWeight: 800 }}>NOVA</div>
        <div style={{ fontSize: 28, color: '#2f795e', marginTop: 8 }}>Formations d&apos;excellence</div>
        <div style={{ fontSize: 20, color: '#103428', marginTop: 24, maxWidth: 800 }}>
          Accélérez votre carrière avec des programmes intensifs en 60 jours.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [
            {
              name: 'Geist',
              data: fontData,
              style: 'normal',
              weight: 700,
            },
          ]
        : [],
    }
  )
}


