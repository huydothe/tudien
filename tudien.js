let english = ['one', 'two', 'three', 'banana', 'apple'];
let vietnam = ['một', 'hai', 'ba', 'chuối', 'táo'];
let keyword=prompt('Enter a word');
function findbyname(){
    for(i=0; i<english.length; i++) {
        if (english[i] == keyword)
            return i;
    }
    return -1
}
function translate(){
    let i=findbyname();
    if(i==-1){
        alert('Nhập lại chữ');
    }else {
        document.write('Nghĩa của từ là ' + vietnam[i]);
    }
}
translate();
