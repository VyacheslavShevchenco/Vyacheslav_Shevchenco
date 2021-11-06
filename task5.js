const list = ["Corwill Fred","Corwill Willfred","Tornbull Barney","Tornbull Betty", "Tornbull Bjon", "Corwill Raphael"];

let result = list.slice().sort((a, b) =>
{
    let [aSurname, aNames] = a.match((/(.*)\s(\w+)$/)).slice(1);
    let [bSurname, bNames] = b.match((/(.*)\s(\w+)$/)).slice(1);

    if (aSurname.localeCompare(bSurname))
        return aSurname.localeCompare(bSurname);
    else
        return aNames.localeCompare(bNames);
});

console.log(result);