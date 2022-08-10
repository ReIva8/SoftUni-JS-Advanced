function squareOfStars(n) {
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      let stars = "*";
      for (let j = 1; j < n; j++) {
        stars += " *";
      }
      console.log(stars);
    }
  } else {
    for (let i = 1; i <= 5; i++) {
        let stars = "*";
        for (let j = 1; j < 5; j++) {
          stars += " *";
        }
        console.log(stars);
      }
  }
}

squareOfStars(7);
