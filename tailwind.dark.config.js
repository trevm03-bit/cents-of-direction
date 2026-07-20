module.exports = {
  content: ['./cents-of-direction-dark.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: { 50:'#f5f6fa', 100:'#e8eaf2', 200:'#a9b2c7', 800:'#12141f', 850:'#0d0e14', 900:'#05060a', 950:'#030308' },
        teal: { 300:'#5eead4', 400:'#2dd4bf', 500:'#14b8a6', 600:'#0d9488', 900:'#0f2b28' },
        copper: { 300:'#fcd34d', 400:'#fbbf24', 500:'#f59e0b', 900:'#2a2110' },
        pink: { 300:'#f9a8d4', 400:'#f472b6', 500:'#ec4899' },
        purple: { 300:'#c4b5fd', 400:'#a78bfa', 500:'#8b5cf6', 900:'#241a35' },
        good: { 400:'#34d399' }
      },
      fontFamily: { sans: ['Poppins', 'system-ui', 'sans-serif'] },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
        softd: '0 20px 60px -15px rgba(0, 0, 0, 0.8)',
      }
    }
  },
  safelist: [{ pattern: /^(bg|text|border)-(teal|copper|pink|purple|good|bg)-(50|100|200|300|400|500|600|800|850|900|950)$/, variants: ['dark', 'hover', 'dark:hover'] }]
}
