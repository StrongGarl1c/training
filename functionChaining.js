function chainableFunction() {
  const obj = {
    a: 0,
    b: 0,
  };
  function closure() {
    return {
      addToA() {
        obj.a += 1;
        return closure();
      },
      addToB() {
        obj.b += 1;
        return closure();
      },
      logObj() {
        console.log(obj);
        return closure();
      },
    };
  }
  return closure();
}

chainableFunction().addToA().addToA().addToB().addToA().addToB().logObj();
