<p align="center">
  <img src="https://media.giphy.com/media/GxZ8bBoZJAIIo/giphy.gif" height="200px"/>
  <br><br>
  <b>quickly create a .travis.yml for node projects</b>
  <br>
</p>

&nbsp;

#### usage

```
npx travis.yml
```

&nbsp;

this creates a `.travis.yml` in your working directory

```
language: node_js
node_js:
  - "10"
cache:
  directories:
    - node_modules
notifications:
  email: false
```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
