# react-redux-rails-oauth-boilerplate

**Warning: this code is not maintained, use at your own risk**

[Live demo](http://holap.herokuapp.com/)

Note: Both frontend and backend in the demo run on free Heroku dynos, they might need some time to boot.

<a href="https://travis-ci.org/danielres/react-redux-rails-oauth-boilerplate"><img src="https://travis-ci.org/danielres/react-redux-rails-oauth-boilerplate.svg?branch=master" alt="build status" /></a>

An experimental boilerplate with decoupled frontend/backend apps, featuring React, Redux, Redux sagas, Rails 5, Trailblazer,... with token authentication and using Facebook as an auth provider.

The spirit of this boilerplate is to provide the cleanest, most scalable possible base for developing a web app with its frontend and backend completely decoupled.

It aims to achieve maximal decoupling and componentization, both in frontend and in backend. Therefore, files are grouped by feature, not by type. 

The backend aims to minimize its dependecy to Rails, by capturing the business logic into services (simple, stateless ruby classes, and Trailblazer-like operations), an by abstracting dependencies to specific libraries (ActiveRecord, Koala gem, ...)

Resources:

* Article explaining the Feature First pattern for code organization: [Organizing Large React Applications](http://engineering.kapost.com/2016/01/organizing-large-react-applications/)

# Basic directions

## Environment variables (mandatory step)

Important configuration options are set through environment variables.

The easiest way to define them is to use .env ([dotenv](https://www.npmjs.com/package/dotenv)) files.

The frontend and the backend both need their separate .env files

You need to create your own .env files, you can start by copying the example ones:

```sh
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

Remember to edit these files with your own credentials and preferences.

## Starting the frontend

```sh
$ cd frontend; npm run start
```

## Starting the backend

```sh
$ cd backend; rails s -p 3001
```

You can now navigate to http://localhost:3000, try the Facebook authentication and the provided example features like the todolist.


