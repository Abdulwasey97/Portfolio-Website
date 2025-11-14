// Color configuration from environment variables
export const colors = {
  primary: import.meta.env.VITE_PRIMARY_COLOR || '#4f7c82',
  secondary: import.meta.env.VITE_SECONDARY_COLOR || '#ffffff'
}

// Export individual colors for convenience
export const PRIMARY_COLOR = colors.primary
export const SECONDARY_COLOR = colors.secondary

