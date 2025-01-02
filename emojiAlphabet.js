const emojiAlphabet = {
  A: '🅰️',
  B: '🅱️',
  C: '©️',
  D: '▶️',
  E: '📧',
  F: '🎏',
  G: '🌀',
  H: '♓',
  I: 'ℹ️',
  J: '🎷',
  K: '🔑',
  L: '🛴',
  M: 'Ⓜ️',
  N: '♑',
  O: '🅾️',
  P: '🅿️',
  Q: '🔍',
  R: '®️',
  S: '💲',
  T: '✝️',
  U: '⛎',
  V: '✔️',
  W: '〰️',
  X: '❌',
  Y: '🪀',
  Z: '💤',
  ' ': '⬜',
  '.': '▪️',
  ',': '🔻',
  '!': '❗️',
  '?': '❓',
  '#': '#️⃣',
  '*': '*️⃣',
  0: '0️⃣',
  1: '1️⃣',
  2: '2️⃣',
  3: '3️⃣',
  4: '4️⃣',
  5: '5️⃣',
  6: '6️⃣',
  7: '7️⃣',
  8: '8️⃣',
  9: '9️⃣',
  '+': '➕',
  '-': '➖',
  '÷': '➗',
  '=': '🟰',
  '∞': '♾️',
};

// Transliterate to emoji
const transliterateToEmoji = (text) => {
  return text
    .split('')
    .map((char) => emojiAlphabet[char.toUpperCase()] || char)
    .join('');
};

const outputTitle = document.getElementById('output-title');
const outputText = document.getElementById('output-text');
const transliterateButton = document.getElementById('transliterate-button');

transliterateButton.addEventListener('click', function () {
  const input = document.getElementById('input-text').value;
  const output = transliterateToEmoji(input);
  outputTitle.style.display = 'block';
  outputText.innerText = output;
  console.log(output);
});

// Copy to clipboard
outputText.addEventListener('click', () => {
  copyToClipboard(outputText);
});

const copyToClipboard = (element) => {
  const textToCopy = element.innerText;
  navigator.clipboard.writeText(textToCopy);
  showTooltip(element);
};

const showTooltip = (element) => {
  const tooltip = document.getElementById('tooltip');
  tooltip.innerText = `Copied!`;
  const rect = element.getBoundingClientRect();
  tooltip.style.left = `${rect.left + window.scrollX}px`;
  tooltip.style.top = `${rect.bottom + window.scrollY}px`;
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = 1;

  setTimeout(() => {
    tooltip.style.opacity = 0;
    tooltip.style.visibility = 'hidden';
  }, 900);
};
