# graphSchema.js
```js
let heroes = () =>  ({
    hero(id = 100) {
        id
        fena: Int
        fenaaa: [Chars]
    }
});

console.log(graphSchema(heroes().hero));

```

output:
hero(id : 100) {
        id
        fena: Int
        fenaaa: [Chars]
    }
