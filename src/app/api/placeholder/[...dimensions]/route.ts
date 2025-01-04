import { NextRequest } from 'next/server'
import sharp from 'sharp'

// Helper function to generate SVG
function generateSVG(width: number, height: number) {
  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e2e8f0"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif"
        font-size="16"
        fill="#64748b"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        ${width} × ${height}
      </text>
    </svg>
  `
}

// Helper function to validate dimensions
function validateDimensions(width: number, height: number) {
  const maxDimension = 2000
  if (isNaN(width) || isNaN(height)) {
    return { valid: false, error: 'Invalid dimensions' }
  }
  if (width > maxDimension || height > maxDimension) {
    return { valid: false, error: 'Dimensions too large' }
  }
  if (width <= 0 || height <= 0) {
    return { valid: false, error: 'Dimensions must be positive' }
  }
  return { valid: true, error: null }
}

// Helper function to generate PNG response
async function generatePNGResponse(svg: string) {
  const pngBuffer = await sharp(Buffer.from(svg))
    .png()
    .toBuffer()

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    },
  })
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ dimensions: string[] }> }
) {
  try {
    // Await the params object
    const { dimensions } = await context.params

    // Handle different URL patterns
    let width: number
    let height: number

    if (dimensions.length === 1) {
      // Format: /api/placeholder/400x300
      const [dimensionString] = dimensions
      const match = dimensionString.toLowerCase().match(/^(\d+)x(\d+)$/)
      if (match) {
        width = parseInt(match[1])
        height = parseInt(match[2])
      }
      // Format: /api/placeholder/400
      else {
        width = parseInt(dimensionString)
        height = width
      }
    }
    // Format: /api/placeholder/400/300
    else if (dimensions.length === 2) {
      width = parseInt(dimensions[0])
      height = parseInt(dimensions[1])
    }
    // Invalid format
    else {
      return new Response('Invalid URL format', { status: 400 })
    }

    // Validate dimensions
    const validation = validateDimensions(width, height)
    if (!validation.valid) {
      return new Response(validation.error, { status: 400 })
    }

    // Generate and return the image
    const svg = generateSVG(width, height)
    return await generatePNGResponse(svg)

  } catch (error) {
    console.error('Error generating placeholder:', error)
    return new Response('Error generating image', { status: 500 })
  }
}