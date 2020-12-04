function reverse(str) {
    let openBracketStack = [];
    let topStackIndex = -1;
    let result = '';
    for(let i=0;i<str.length;i++){
        console.log('Loop Next');
        if(str[i] === '(') {
            openBracketStack.push(i);
            console.log('Push ' + i);
            topStackIndex = openBracketStack.length - 1;
        }
        else if(str[i]===')'){
            console.log('Close Found');
            if(openBracketStack.length >= 0){
                console.log('Open Found' + topStackIndex);
                let strInBracket = str.slice(openBracketStack[topStackIndex] + 1, i);
                let reversedStr = '';
                for(let i = strInBracket.length - 1; i >= 0; i--){

                    reversedStr += strInBracket[i];      
                }
                console.log(strInBracket + ' ' + reversedStr)
                let strr = '';
                let reversedIndex = 0;
                for(let j = 0; j < str.length; j++){
                    if(j > openBracketStack[topStackIndex] && j < i){
                        strr += reversedStr[reversedIndex];
                        reversedIndex++;
                    }
                    else{
                        strr += str[j]
                    }
                }
                str = strr;
                openBracketStack.pop();
                topStackIndex = openBracketStack.length - 1;
            }
        }
    }
    for(let i = 0; i < str.length; i++){
        if(str[i] !== '(' && str[i] !== ')'){
            result += str[i];
        }
    }
    console.log(result);
}

reverse('a(foo(bar)b(noey)c)');