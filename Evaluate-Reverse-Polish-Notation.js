/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(t) {
  let st = []
  const operate = (a, b, e) => {
    a = Number(a)
    b = Number(b)
    const ops = {
      '+': () => a + b,
      '-': () => a - b,
      '*': () => a * b,
      '/': () => Math.trunc(a / b),
    };
    return ops[e]?.();
  };
  for(let i=0;i<t.length;i++){
    if(isNaN(t[i])){
      let temp = operate(st[st.length-2],st[st.length-1], t[i])
      st.pop()
      st.pop()
      st.push(temp)
    }else{
      st.push(t[i])
    }
  }
  return Number(st[0])
};