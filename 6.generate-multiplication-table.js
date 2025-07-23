 function printTable(tableOf, tableTill) {
    for(i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${tableOf * i}`);
    }
 }

 function printTable2(tableOf, tableTill) {
    for(let i = tableOf; i <= tableOf * tableTill; i = i + tableOf) {
        console.log(i);
    }
 }

 console.log(printTable(5, 10));
 console.log(printTable2(4, 10));
 