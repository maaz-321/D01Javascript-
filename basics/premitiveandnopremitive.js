
//premitive datatype store in Stack change in the copy of variables
let myname="MaazRahim";

let secondname=myname;

secondname="Khan";


console.log(secondname);
console.log(myname);


//nonpremitive datatype

let one={
    myname:"MaazRahim",
    Lastname:"Khan",

}

two=one;

two.myname="saam";
two.Lastname="KK";


console.table([one.myname,one.Lastname,two.myname,two.Lastname]);

