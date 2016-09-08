# pokemon

Class Pokemon

```javascript
const myPikachu = new Pokemon({
  id: 25,
  level: 50,
  nature: 'hardy',
  effort: {
    satk: 252
  },
  individual: {
    satk: 31
  }
})

myPikachu.getSatk() // => 102

```
