function getpairs(arr, n, target)
{
    let count = 0;
 
  
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == target)
                count++;
 
    return count;
}
 

    let arr = [ 3, 2, 4, 7, -2 ];
    let n = arr.length;
    let target = 5;
    console.log("count of pairs: "
        + getpairs(arr, n, target));
     