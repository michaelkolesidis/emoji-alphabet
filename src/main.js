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
  