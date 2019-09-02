export const randomNumber = (max, min = 0) =>
  Math.max(Math.floor(Math.random() * max) + 1, min);

export const randomColor = () => {
  const tokens = '0123456789ABCDEF';
  let color = Array.from({ length: 6 }, () => {
    const randomToken = Math.floor(Math.random() * tokens.length);
    return tokens[randomToken];
  });
  return `#${color.join('')}`;
};

export const svgAsText = (
  width,
  height,
  fontSize,
  maxLength,
  backgroundColor,
  fontColor,
  fontFamily,
  count
) => `<svg
xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink"
width="${width}px"
height="${height}px"
preserveAspectRatio="xMidYMid meet">
<rect
  x="0"
  y="0"
  width="100%"
  height="100%"
  style="fill: ${backgroundColor}; stroke: none;"/>
<text
  x="50%"
  y="50%"
  dominant-baseline="middle"
  text-anchor="middle"
  style="fill: ${fontColor}; font-family: ${fontFamily}; font-size: ${fontSize}px;">
  ${count.toString().padStart(maxLength, '0')}
</text>
</svg>`;

export const humanVerification = (maxNum = 10) => {
  let question, answer;

  const operations = ['+', '-'];
  const selectedOp = operations[Math.floor(Math.random() * operations.length)];
  let number1 = Math.floor(Math.random() * maxNum) + 1;
  let number2 = Math.floor(Math.random() * maxNum) + 1;

  switch (selectedOp) {
    case '+':
      question = `${number1} + ${number2}`;
      answer = number1 + number2;
      break;
    case '-':
      if (number2 > number1) {
        [number1, number2] = [number2, number1];
      }
      question = `${number1} - ${number2}`;
      answer = number1 - number2;
  }

  return { question, answer };
};
