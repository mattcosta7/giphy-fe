# Giphinator

An express and react application providing a ui for viewing and searching GIFs via the GIPHY api.

## Getting Started - Dev

* Clone the repository
* Register for a GIPHY api key if you don't already have one [here](https://developers.giphy.com/dashboard/)
* Add a .env file to the root of the repository with the following keys
  * CLIENT_PORT=`defaults to 3001`
  * NODE_ENV=`development || production - defaults to development`
  * GIPHY_API_KEY=`your giphy api key`
* yarn install
* yarn start

A production build is also available, by running yarn build:prod and then yarn start. Note the environment variables above must be set, with NODE_ENV="production"

## Dev environment

The development environment is setup to faciliate ease and speed utilizing hot reloading
