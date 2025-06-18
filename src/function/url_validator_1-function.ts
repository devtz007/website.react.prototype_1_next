/**
 * Validates the given URL to ensure it is either an absolute HTTP/HTTPS URL or a valid relative URL.
 *
 * @param {string} url - The URL to validate.
 * @returns {boolean} - Returns true if the URL is valid.
 */
const UrlValidator1Func = (url: string): boolean => {
  try {
    // Allow relative URLs that start with "/"
    if (url.startsWith('/')) {
      return true;
    }

    // Validate absolute URLs
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch {
    return false;
  }
};

UrlValidator1Func.displayName = 'UrlValidator1Func';

export default UrlValidator1Func;
