// @flow

// No state if we are on the home page
export const homePage = () => null

// Writes a message into the state for the about page
export const aboutPage = () => ({
  test: { message: 'Server-side preloaded message' },
})
