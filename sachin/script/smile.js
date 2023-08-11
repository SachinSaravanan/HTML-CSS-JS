function max(num1, num2) {

    if ( parseFloat(num1) < parseFloat(num2) ) {
     return num2;
     } else if ( parseFloat(num1) > parseFloat(num2) ) {
     return num1;
     } else {
      document.write(num1 + " and " + num2 + " are equal!");
  }
  }
  
  /* That is just an exemple and pratice for 
    commenting */
  
  document.write(max(1, 5) + "<br>");
  document.write(max(8.89, 5.52) + "<br>");
  max(5, 5);
  
  ///
  