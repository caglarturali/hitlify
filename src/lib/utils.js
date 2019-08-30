export const randomNumber = max => Math.floor(Math.random() * max) + 1;

export const randomColor = () => {
  const tokens = '0123456789ABCDEF';
  let color = Array.from({ length: 6 }, () => {
    const randomToken = Math.floor(Math.random() * tokens.length);
    return tokens[randomToken];
  });
  return `#${color.join('')}`;
};
