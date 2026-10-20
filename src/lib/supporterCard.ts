export interface SupporterCardData {
  name: string
  sector: string
  serial: string
  tagline: string
  portraitPath: string
}

const CARD_WIDTH = 1080
const CARD_HEIGHT = 1350

function hashString(value: string): number {
  let hash = 0
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index)
    hash |= 0
  }
  return Math.abs(hash)
}

/** Deterministic, human-readable pass number. No data leaves the browser. */
export function buildSupporterSerial(name: string, sectorCode: string): string {
  const seed = `${name.trim().toLowerCase()}|${sectorCode}|2028`
  const digits = String(100_000 + (hashString(seed) % 900_000))
  return `CM28-${sectorCode}-${digits}`
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function wrapCanvasText(
  context: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let current = ''

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word
    if (context.measureText(next).width > maxWidth && current) {
      lines.push(current)
      current = word
    } else {
      current = next
    }
  })

  if (current) lines.push(current)
  return lines.slice(0, 2)
}

function splitSvgName(name: string): string[] {
  if (name.length <= 18) return [name]
  const words = name.split(/\s+/).filter(Boolean)
  if (words.length === 1) {
    const midpoint = Math.ceil(name.length / 2)
    return [name.slice(0, midpoint), name.slice(midpoint)]
  }

  let first = ''
  let second = ''
  words.forEach((word) => {
    if (!second && `${first} ${word}`.trim().length <= Math.ceil(name.length / 2)) {
      first = `${first} ${word}`.trim()
    } else {
      second = `${second} ${word}`.trim()
    }
  })
  return [first || name, second].filter(Boolean).slice(0, 2)
}

function drawImageCover(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
): void {
  const scale = Math.max(width / image.width, height / image.height)
  const drawWidth = image.width * scale
  const drawHeight = image.height * scale
  context.drawImage(
    image,
    x + (width - drawWidth) / 2,
    y + (height - drawHeight) / 2,
    drawWidth,
    drawHeight,
  )
}

export function buildSupporterSvg(data: SupporterCardData, origin: string): string {
  const nameLines = splitSvgName(data.name.toUpperCase())
  const nameSize = data.name.length <= 12 ? 104 : data.name.length <= 20 ? 84 : data.name.length <= 30 ? 68 : 54
  const nameStart = nameLines.length > 1 ? 790 : 812
  const sectorY = nameStart + (nameLines.length - 1) * (nameSize + 8) + 92
  const portraitHref = `${origin}${data.portraitPath}`

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}" role="img" aria-label="Cielo Magno 2028 supporter pass for ${escapeXml(data.name)}">
  <defs>
    <radialGradient id="crimsonGlow" cx="18%" cy="10%" r="70%">
      <stop offset="0%" stop-color="#F43F5E" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="#F43F5E" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="amberGlow" cx="88%" cy="78%" r="62%">
      <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="90" height="90" patternUnits="userSpaceOnUse">
      <path d="M 90 0 L 0 0 0 90" fill="none" stroke="#94A3B8" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
    <clipPath id="portraitClip">
      <circle cx="540" cy="420" r="205"/>
    </clipPath>
  </defs>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="#090D16"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#crimsonGlow)"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#amberGlow)"/>
  <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" fill="url(#grid)"/>

  <text x="80" y="106" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="600" letter-spacing="4">CIELO MAGNO · SENATOR 2028</text>
  <text x="1000" y="106" text-anchor="end" fill="#9EA8BA" font-family="'JetBrains Mono', monospace" font-size="20" letter-spacing="3">BANTAY NG KABAN</text>

  <circle cx="540" cy="420" r="226" fill="none" stroke="#F59E0B" stroke-opacity="0.45" stroke-width="3"/>
  <circle cx="540" cy="420" r="205" fill="#182338"/>
  <image href="${escapeXml(portraitHref)}" x="335" y="215" width="410" height="410" preserveAspectRatio="xMidYMid slice" clip-path="url(#portraitClip)"/>
  <circle cx="540" cy="420" r="205" fill="none" stroke="#F6F3ED" stroke-opacity="0.22" stroke-width="7"/>

  <text x="540" y="672" text-anchor="middle" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="22" letter-spacing="5">SUPPORTER PASS</text>
  ${nameLines
    .map(
      (line, index) =>
        `<text x="540" y="${nameStart + index * (nameSize + 6)}" text-anchor="middle" fill="#F6F3ED" font-family="'Plus Jakarta Sans', sans-serif" font-size="${nameSize}" font-weight="800" letter-spacing="-2">${escapeXml(line)}</text>`,
    )
    .join('\n  ')}
  <text x="540" y="${sectorY}" text-anchor="middle" fill="#F59E0B" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="700">${escapeXml(data.sector)}</text>

  <line x1="210" y1="${sectorY + 58}" x2="870" y2="${sectorY + 58}" stroke="#F6F3ED" stroke-opacity="0.15" stroke-width="2"/>
  <text x="540" y="${sectorY + 132}" text-anchor="middle" fill="#F6F3ED" fill-opacity="0.8" font-family="'Newsreader', serif" font-style="italic" font-size="42">${escapeXml(data.tagline)}</text>

  <text x="80" y="1218" fill="#9EA8BA" font-family="'JetBrains Mono', monospace" font-size="18" letter-spacing="3">SUPPORTER NO.</text>
  <text x="80" y="1256" fill="#F6F3ED" font-family="'JetBrains Mono', monospace" font-size="24" font-weight="600">${escapeXml(data.serial)}</text>
  <text x="540" y="1300" text-anchor="middle" fill="#9EA8BA" font-family="'JetBrains Mono', monospace" font-size="18" letter-spacing="3">MAY RESIBO. MAY PRINSIPYO.</text>
  <text x="540" y="1332" text-anchor="middle" fill="#9EA8BA" fill-opacity="0.75" font-family="'JetBrains Mono', monospace" font-size="12" letter-spacing="2">FAN-MADE PASS · NOT AN OFFICIAL ID</text>

  <circle cx="930" cy="1210" r="66" fill="none" stroke="#F59E0B" stroke-opacity="0.65" stroke-width="3"/>
  <circle cx="930" cy="1210" r="56" fill="none" stroke="#F59E0B" stroke-opacity="0.3" stroke-width="1.5"/>
  <text x="930" y="1198" text-anchor="middle" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="15" letter-spacing="2">FAN-MADE</text>
  <text x="930" y="1220" text-anchor="middle" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="12" letter-spacing="1.5">PASS</text>
  <path d="M 918 1242 L 926 1250 L 943 1231" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
}


function loadImage(source: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.onload = () => resolve(image)
    image.onerror = () => resolve(null)
    image.src = source
  })
}

export async function renderSupporterPng(data: SupporterCardData): Promise<Blob> {
  const canvas = document.createElement('canvas')
  canvas.width = CARD_WIDTH
  canvas.height = CARD_HEIGHT
  const context = canvas.getContext('2d')
  if (!context) throw new Error('Canvas is not available in this browser.')

  try {
    await document.fonts.ready
  } catch {
    // Font loading is best-effort; the system fallback still renders.
  }

  context.fillStyle = '#090D16'
  context.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT)

  const crimsonGlow = context.createRadialGradient(190, 130, 0, 190, 130, 720)
  crimsonGlow.addColorStop(0, 'rgba(244, 63, 94, 0.34)')
  crimsonGlow.addColorStop(1, 'rgba(244, 63, 94, 0)')
  context.fillStyle = crimsonGlow
  context.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT)

  const amberGlow = context.createRadialGradient(960, 1080, 0, 960, 1080, 640)
  amberGlow.addColorStop(0, 'rgba(245, 158, 11, 0.18)')
  amberGlow.addColorStop(1, 'rgba(245, 158, 11, 0)')
  context.fillStyle = amberGlow
  context.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT)

  context.strokeStyle = 'rgba(148, 163, 184, 0.08)'
  context.lineWidth = 1
  for (let x = 0; x <= CARD_WIDTH; x += 90) {
    context.beginPath()
    context.moveTo(x, 0)
    context.lineTo(x, CARD_HEIGHT)
    context.stroke()
  }
  for (let y = 0; y <= CARD_HEIGHT; y += 90) {
    context.beginPath()
    context.moveTo(0, y)
    context.lineTo(CARD_WIDTH, y)
    context.stroke()
  }

  context.textAlign = 'left'
  context.fillStyle = '#F59E0B'
  context.font = '600 24px "JetBrains Mono", monospace'
  context.fillText('CIELO MAGNO · SENATOR 2028', 80, 106)
  context.textAlign = 'right'
  context.fillStyle = '#9EA8BA'
  context.font = '20px "JetBrains Mono", monospace'
  context.fillText('BANTAY NG KABAN', 1000, 106)

  context.beginPath()
  context.arc(540, 420, 226, 0, Math.PI * 2)
  context.strokeStyle = 'rgba(245, 158, 11, 0.45)'
  context.lineWidth = 3
  context.stroke()

  const image = await loadImage(data.portraitPath)
  context.save()
  context.beginPath()
  context.arc(540, 420, 205, 0, Math.PI * 2)
  context.clip()
  context.fillStyle = '#182338'
  context.fillRect(335, 215, 410, 410)
  if (image) {
    drawImageCover(context, image, 335, 215, 410, 410)
  } else {
    context.fillStyle = '#F6F3ED'
    context.font = '800 96px "Plus Jakarta Sans", sans-serif'
    context.textAlign = 'center'
    context.fillText('CM', 540, 458)
  }
  context.restore()

  context.beginPath()
  context.arc(540, 420, 205, 0, Math.PI * 2)
  context.strokeStyle = 'rgba(246, 243, 237, 0.22)'
  context.lineWidth = 7
  context.stroke()

  context.textAlign = 'center'
  context.fillStyle = '#F59E0B'
  context.font = '22px "JetBrains Mono", monospace'
  context.fillText('SUPPORTER PASS', 540, 672)

  const name = data.name.trim().toUpperCase() || 'BANTAY NG KABAN'
  const nameSize = name.length <= 12 ? 104 : name.length <= 20 ? 84 : name.length <= 30 ? 68 : 54
  context.font = `800 ${nameSize}px "Plus Jakarta Sans", sans-serif`
  const nameLines = wrapCanvasText(context, name, 920)
  let cursor = nameLines.length > 1 ? 790 : 812
  context.fillStyle = '#F6F3ED'
  nameLines.forEach((line) => {
    context.fillText(line, 540, cursor)
    cursor += nameSize + 6
  })

  const sectorY = cursor + 34
  context.fillStyle = '#F59E0B'
  context.font = '700 32px "Plus Jakarta Sans", sans-serif'
  const sectorLines = wrapCanvasText(context, data.sector, 880)
  let sectorCursor = sectorY
  sectorLines.forEach((line) => {
    context.fillText(line, 540, sectorCursor)
    sectorCursor += 40
  })

  const dividerY = sectorCursor + 22
  context.beginPath()
  context.moveTo(210, dividerY)
  context.lineTo(870, dividerY)
  context.strokeStyle = 'rgba(246, 243, 237, 0.15)'
  context.lineWidth = 2
  context.stroke()

  context.fillStyle = 'rgba(246, 243, 237, 0.8)'
  context.font = 'italic 42px "Newsreader", serif'
  context.fillText(data.tagline, 540, dividerY + 82)

  context.textAlign = 'left'
  context.fillStyle = '#9EA8BA'
  context.font = '18px "JetBrains Mono", monospace'
  context.fillText('SUPPORTER NO.', 80, 1218)
  context.fillStyle = '#F6F3ED'
  context.font = '600 24px "JetBrains Mono", monospace'
  context.fillText(data.serial, 80, 1256)

  context.textAlign = 'center'
  context.fillStyle = '#9EA8BA'
  context.font = '18px "JetBrains Mono", monospace'
  context.fillText('MAY RESIBO. MAY PRINSIPYO.', 540, 1300)
  context.fillStyle = 'rgba(158, 168, 186, 0.75)'
  context.font = '12px "JetBrains Mono", monospace'
  context.fillText('FAN-MADE PASS · NOT AN OFFICIAL ID', 540, 1332)

  context.beginPath()
  context.arc(930, 1210, 66, 0, Math.PI * 2)
  context.strokeStyle = 'rgba(245, 158, 11, 0.65)'
  context.lineWidth = 3
  context.stroke()
  context.beginPath()
  context.arc(930, 1210, 56, 0, Math.PI * 2)
  context.strokeStyle = 'rgba(245, 158, 11, 0.3)'
  context.lineWidth = 1.5
  context.stroke()
  context.fillStyle = '#F59E0B'
  context.font = '15px "JetBrains Mono", monospace'
  context.fillText('FAN-MADE', 930, 1198)
  context.font = '12px "JetBrains Mono", monospace'
  context.fillText('PASS', 930, 1220)
  context.beginPath()
  context.moveTo(918, 1242)
  context.lineTo(926, 1250)
  context.lineTo(943, 1231)
  context.strokeStyle = '#F59E0B'
  context.lineWidth = 3
  context.lineCap = 'round'
  context.lineJoin = 'round'
  context.stroke()

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob)
      else reject(new Error('PNG export failed.'))
    }, 'image/png')
  })
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1_000)
}

