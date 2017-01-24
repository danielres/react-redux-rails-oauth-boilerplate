# react-redux-rails-oauth-boilerplate

An experimental boilerplate with decoupled frontend/backend apps, featuring React, Redux, Redux sagas, Rails 5, Trailblazer,... with token authentication and using Facebook as an auth provider.

The spirit of this boilerplate is to provide the cleanest, scalable base for developing a web app with its frontend and backend completely decoupled.

It aims to achieve maximal componentization, both in frontend and in backend. Files are grouped by feature, not by type.

The backend aims to minimize it's dependecy to Rails, by capturing the business logic into services (simple, stateless ruby classes, and Trailblazer-like operations), an by abstracting dependencies to specific libraries (ActiveRecord, Koala gem, ...)
