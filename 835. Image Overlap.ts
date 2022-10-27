function largestOverlap(img1: number[][], img2: number[][]): number {
  const n = img1.length
  let maxOverlap = 0

  function overlapCount(X: number, Y: number) {
    const startX = X > 0 ? 0 : -X, startY = Y > 0 ? 0 : -Y
    const endX = X > 0 ? n - X : n, endY = Y > 0 ? n - Y : n
    let count = 0;

    for (let x=startX; x<endX; x++)
      for (let y=startY; y<endY; y++)
        count += img1[x][y] && img2[x + X][y + Y]

    return count
  }

  for (let i=-(n-1); i<n; i++)
    for (let j=-(n-1); j<n; j++)
      maxOverlap = Math.max(maxOverlap, overlapCount(i, j))

  return maxOverlap
}
