{
    const [n, x, ...arr]= require("fs")
      .readFileSync("/dev/stdin")
      .toString()
      .trim()
      .split(/\s+/)
      .map((v) => +v);
    let a = ''
      arr.forEach(e =>{
          e < x ? (a += e, a+= ' ') : '';
      })
      console.log(a);
  }