export function formatDate(dateString: string, locales: Intl.LocalesArgument = undefined, options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' }) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locales, options);
}
