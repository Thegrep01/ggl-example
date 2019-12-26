To fill db

```bash
$ ts-node src/common/fill-db.ts
```

then

```bash
$ npm start
```

first example with bad practice

http://localhost:3000/one

second example with good practice

http://localhost:3000/two

query example

```qql
{
  exampleOne {
    title
    author {
      id
      name
    }
  }
}
```
