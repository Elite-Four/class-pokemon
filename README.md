# pokemon

Class Pokemon

```javascript
const myPikachu = new Pokemon({
  id: 25,
  level: 50,
  nature: Pokemon.Nature.HARDY,
  effort: {
    satk: 252
  },
  individual: {
    satk: 31
  }
})

myPikachu.getSatk() // => 102

```
