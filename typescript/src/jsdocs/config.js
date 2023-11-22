// You can provide the type information extending the TypeScrip t declaration for a js file using JS Doc command

/** @type {import("./config").Config} */

const config = { global: true } // This just gives type hints not type checking error like tsc

export default config
