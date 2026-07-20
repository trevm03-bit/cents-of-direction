module.exports = {
  content: ['./cents-of-direction-light.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: { 50:'#ffffff', 100:'#f4f6f9', 200:'#eef1f6', 500:'#5b6472', 800:'#111827', 900:'#0b0f17' },
        teal: { 50:'#e6f5f3', 400:'#0f766e', 500:'#0d6a63', 600:'#0b5c56' },
        copper: { 50:'#fdf1e2', 400:'#b45309', 500:'#92400e' },
        pink: { 400:'#be185d' },
        purple: { 50:'#f3e8ff', 400:'#6d28d9' },
        good: { 500:'#047857' }
      },
      fontFamily: { sans: ['Poppins', 'system-ui', 'sans-serif'] },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(17, 24, 39, 0.12)',
        softd: '0 20px 60px -15px rgba(0, 0, 0, 0.6)',
      }
    }
  },
  safelist: [{ pattern: /^(bg|text|border)-(teal|copper|pink|purple|good|bg)-(50|100|200|400|500|600|800|900)$/, variants: ['dark', 'hover', 'dark:hover'] }]
}
