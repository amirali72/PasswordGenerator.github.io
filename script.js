// let button = document.getElementById("btn");
// button.textContent = "";

let passBox1 = document.getElementById("passBox1");
let passBox2 = document.getElementById("passBox2");
let passBox3 = document.getElementById("passBox3");
let passBox4 = document.getElementById("passBox4");

let strongPass = ["Dog.lov3r", "i7ovemydog!!", "d0gmybestfr13nds", "sn00pdoggyd0G", "Karm@beatsDogm@", "C@ts-and-Dogs-Liv", "!Lov3MyPiano", "&ebay.44", "$m3llycat", "d3ltagamm@", "BankLogin!3", "jelly22fi$h", "1Ki77y", "Myname99@", "1amBest777$", "TheGr8here@" ]


function generatePassword() {
    for (let i = 0; i < strongPass.length; i++) {
        let randEle = Math.floor(Math.random()*16);
        return strongPass[randEle];
    }
}

function passwords() {
    
    passBox1.textContent = generatePassword()
    passBox2.textContent = generatePassword()
    passBox3.textContent = generatePassword()
    passBox4.textContent = generatePassword()

}

