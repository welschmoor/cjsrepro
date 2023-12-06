# CJS Maximum call stack size exceeded
A reproduction of another repo bug

NextJs 14, craftJs 0.2.3

## Reproduction
- yarn install
- yarn dev, visit localhost:3000
- on the left side take the image and drag it twice to the right (not sure why it must be done twice, in 0.2.0-beta.8 it was once, and since 0.2.0-beta.11 twice, I have fixed it in a different way, but decided to leave the fix out of this repo as it unlikely to be relevant to the main bug)
- on the right side the result of your drag appears. Click on it several times and see the stack size exceeded error appearing.