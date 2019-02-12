export const parameterize = str =>
  str
    .trim()
    .toLowerCase()
    .replace(/[^\w]/g, '-')
    .replace(/-+/g, '-')
