aInput.textContent
  .split("\n")
  .reduce(
    (total, curr) =>
      curr ? total + (Math.floor(parseInt(curr) / 3) - 2) : total,
    0
  );
