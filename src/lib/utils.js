export const randomNumber = max => Math.floor(Math.random() * max) + 1;

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
