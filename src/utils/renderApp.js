import { STATIC_PATH, QUERY_CLASS, IS_PROD, WDS_PORT } from '../utils/config'

export default title =>
  `
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/main.css">
  </head>
  <body>
    <h1>${title}</h1>
    <div class="${QUERY_CLASS}"></div>
    <script src="${IS_PROD ? '' : `http://localhost:${WDS_PORT}/`}${STATIC_PATH}/js/bundle.js"></script>
  </body>
</html>
  `
