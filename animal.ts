const animal:string[] = ["cat","Dog","tiger"]
for (var i = 0; i<animal.length; i++)
{
    console.log(animal[i]);
}
animal.forEach(A => {
    console.log(`${A} have great pet`)
})
