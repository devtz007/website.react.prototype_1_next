/**
 * Escapes special characters in a given string to their corresponding HTML entities.
 *
 * @param {string} input - The input string containing special characters to be escaped.
 * @returns {string} - The escaped string with special characters replaced by HTML entities.
 */
const EscapeScInput1Func = (input: string): string => {
  console.log('Original input:', input); // Debugging statement

  const escapedString = input.replace(/[&<>"'`=\/]/g, (char) => {
    const escapeMap: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '`': '&#96;',
      '=': '&#61;',
      '/': '&#47;',
    };
    console.log(`Escaping character: ${char} to ${escapeMap[char]}`); // Debugging statement
    return escapeMap[char] || char;
  });

  console.log('Escaped string:', escapedString); // Debugging statement
  return escapedString;
};

export default EscapeScInput1Func;
