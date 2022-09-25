export function generateAvatar(
  text = '',
  foregroundColor = 'white',
  backgroundColor = '#2E80E6',
) {
  const canvas: any = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = 100;
  canvas.height = 100;

  // Draw background
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text
  context.font = 'bold 100px Assistant';
  context.fillStyle = foregroundColor;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text.charAt(0), canvas.width / 2, canvas.height / 2);

  return canvas.toDataURL('image/png');
}

// document.getElementById('avatar').src = generateAvatar(
//   'DC',
//   'white',
//   '#009578',
// );
