// Centralized theme configuration for SK Computers
// Custom HEX color palette: #466384, #2a3c51, #0f161d

export const themeColors = {
  // Primary custom colors (from user specification)
  primary: {
    50: '#f6f8fa',
    100: '#edf2f7', 
    200: '#dae5ed',
    300: '#c1d3e0',
    400: '#9bb5cb',
    500: '#466384',  // Main medium blue
    600: '#3d5a78',
    700: '#2a3c51',  // Darker blue-gray
    800: '#1f2e3d',
    900: '#0f161d',  // Darkest navy/black
    950: '#0a0f14',
  },
  
  // Secondary colors
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Accent colors
  accent: {
    blue: '#466384',
    orange: '#ff6b35',
    green: '#34d399',
    yellow: '#fbbf24',
    red: '#ef4444',
  }
}

// CSS class utilities for the custom theme
export const themeClasses = {
  // Background colors
  primary: 'bg-[#466384]',        // Medium blue
  primaryDark: 'bg-[#2a3c51]',    // Dark blue-gray
  primaryDarkest: 'bg-[#0f161d]', // Darkest navy/black
  
  // Text colors
  textPrimary: 'text-[#466384]',
  textPrimaryDark: 'text-[#2a3c51]',
  textPrimaryDarkest: 'text-[#0f161d]',
  
  // Hover states
  hoverPrimary: 'hover:bg-[#2a3c51]',
  hoverPrimaryDark: 'hover:bg-[#0f161d]',
  
  // Border colors
  borderPrimary: 'border-[#466384]',
  borderPrimaryDark: 'border-[#2a3c51]',
}

// Helper functions
export const getThemeColor = (variant: 'primary' | 'dark' | 'darkest' = 'primary') => {
  switch (variant) {
    case 'primary':
      return '#466384'
    case 'dark':
      return '#2a3c51'
    case 'darkest':
      return '#0f161d'
    default:
      return '#466384'
  }
}

export const getPrimaryClass = (variant: 'bg' | 'text' | 'border' = 'bg') => {
  switch (variant) {
    case 'bg':
      return themeClasses.primary
    case 'text':
      return themeClasses.textPrimary
    case 'border':
      return themeClasses.borderPrimary
    default:
      return themeClasses.primary
  }
}