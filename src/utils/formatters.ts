/**
 * Format Indian Rupee currency format (e.g. ₹1,499)
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format standard readable dates
 */
export function formatDate(dateString: string): string {
  try {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  } catch {
    return dateString;
  }
}

/**
 * Truncate long text cleanly
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Calculate discount percentage from MRP and Selling Price
 */
export function calculateDiscount(price: number, mrp: number): number {
  if (mrp <= price || mrp <= 0) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}
