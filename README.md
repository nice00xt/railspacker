# Railspacker

## Features

- Ruby on Rails 5.2.x
- React 16.x
- Webpack 4.x
- Babel 6.x
- Postgres compatibility
- Using Rails default gems and NPM packages only

## Install

It's recommended to use Ruby 2.5.0 and NodeJS 8.11.x.

```sh
# install bundler if not available
gem install bundler

# install gem dependencies
bundle install

# install yarn dependencies
yarn install

# create the postgres databases
# update config/database.yml details if needed
rake db:create

# start server
rails s
```

On another tab if you want to use live code reloading, or you have enough JavaScript that on-demand compilation is too slow, you'll need to run

```sh
# webpack dev server
./bin/webpack-dev-server

# watcher
./bin/webpack --watch --colors --progress

# standalone build
./bin/webpack
```

Run test

```sh
# Run test coverage with Jest
yarn test

```