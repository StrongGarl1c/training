function asd(): number {
    const result = 123;
    console.log(result);
    return result;
  }
  
  function go(): void {
    return void asd();
  }
  
  go()