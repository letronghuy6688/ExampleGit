 let table1 = document.getElementById("table1")
 let table2 = document.getElementById("table2")

 let tableTR1 = table1.getElementsByTagName("tr");
 let tableTR2 = table2.getElementsByTagName("tr");
console.log(tableTR1);

tableTR1.array.forEach((row) => {
    const setheight = tableTR2[1].offsetHeight * 3;

    row.style.setheight = '${setheight}px';
});