////-------ПЕРЕМЕННАЯ - BASE-------
//var base = prompt('Какое число возвести в степень?');
//
//console.log('base = ', base);
//
//while ( isNaN(base) ){
//  alert('Неверное число!');
//  
//  base = prompt('Какое число возвести в степень?');
//  console.log('base = ', base);
//}
//
////-------ПЕРЕМЕННАЯ - EXPONENT-------
//var exponent = prompt('В какую степень возвести число?');
//
//console.log('exponent = ', exponent);
//
//while ( isNaN(exponent) ){
//  alert('Неверное число!');
//  
//  exponent = prompt('В какую степень возвести число?');
//  console.log('exponent = ', exponent);
//}
//
//alert( pow(base, exponent) );
//
//console.log( 'result = ', pow(base, exponent) );

//-------ФУНКЦИЯ-------
function pow(base, exponent) {
  var result = base;

  if (exponent < 0) { 
    var modul = -1;
    exponent = exponent * modul;
    
    for (var i = 1; i < exponent; i++) { 
      result = result * base;
    }
    result = 1 / result;
    return result;
    
  } else {
    for (i = 1; i < exponent; i++) { 
      result = result * base;
    }
    return result;
  } 
}


try {
	module.exports.pow = pow;
} catch (e) {}











