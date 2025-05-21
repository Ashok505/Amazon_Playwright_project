const namww = () => ['aaa','bbb','ccc'] [Math.floor(Math.random()*3)] + String.fromCharCode(65 + Math.floor(Math.random())*26);
console.log('The name is :',namww())

const aadharr = () => Array.from({length : 12} ,() => Math.floor(Math.random()*10)).join('');
console.log('The number is :',aadharr());

const mobileNO = () => '9' + Array.from({length : 9}, ()=> Math.floor(Math.random()*10)).join('');
console.log('The mob is :',mobileNO());

const pann = () => {
    const l = () => String.fromCharCode(65 + Math.floor(Math.random()*26));
    const n = () => Math.floor(Math.random()*10);
    return `${l()}${l()}${l()}${l()}${l()}${n()}${n()}${n()}${n()}${l()}`
    
}
console.log('The pan is:',pann());

