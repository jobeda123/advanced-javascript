const student = [
    {id:10, name: "Jobeda"},
    {id:20, name: "Kobeda"},
    {id:30, name: "Lobeda"},
    {id:40, name: "Sobeda"},
];


// const sName=[];

// for(let i=0; i<student.length;i++){
//     const element = student[i].name;
//     sName.push(element);
// }

// const sName = student.map(n => n.name);
// console.log(sName);

const ids = student.filter(n => n.id>20);
console.log(ids);

const id = student.find(n => n.id>20);
console.log(id);