# Factorial pixel

Snippet to track attribution on Factorial.

## What is this sorcery?

Factorial pixel will make a request to `/api/internal/pixel` and send params
about the current request such as the referrer or the marketing code.

The endpoint will save the attribution cookies in `*.factorialhr.com` (so they
work cross-domain) and then set them on the current domain.

This allows us to track attribution even across multiple domains as long as
they include this pixel.

## Installation

```
npm install factorial-pixel --save
yarn add factorial-pixel
```

## Example

```js
import pixel from 'factorial-pixel'

pixel(document)
```

## Where is it used?

Developed and battle tested in production in [Factorial](https://factorialhr.com)
