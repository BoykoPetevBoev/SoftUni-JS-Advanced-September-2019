function solve(input) {
    input.shift();
   for(let line of input){
       const regEx= /(.+)>(\d{3}\|[a-z]{3}\|[A-Z]{3}\|[^<>]{3})<\1$/g;
       if(regEx.test(line)){
           printPassword(line);
       }
       else {
           console.log('Try another password!');
       }
   }
   function printPassword(string){
        let re = />(\d{3}\|[a-z]{3}\|[A-Z]{3}\|[^<>]{3})</g;
        let password = re.exec(string);
        console.log(`Password: ${password[1].split('|').join('')}`);
   }
}
solve([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
]);
solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
]);