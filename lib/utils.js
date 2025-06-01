// Simple utility function for conditional class names
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

// Simple utility for merging objects
export function merge(target, source) {
  return { ...target, ...source }
}

// Simple utility for clamping values
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
