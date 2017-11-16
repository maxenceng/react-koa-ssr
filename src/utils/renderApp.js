import { STATIC_PATH } from '../utils/config'

export default title =>
  `
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/main.css">
  </head>
  <body>
    <h1>${title}</h1>
  </body>
</html>
 `
