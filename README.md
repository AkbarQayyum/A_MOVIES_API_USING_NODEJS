A Movie API For this lab, you will create a simple server that provides an API for someone to Create, Read, Update, and Delete movies and also movie reviews. We will be practicing: Seperating concerns into different modules: Database connection in one module Collections defined in another Data manipulation in another Practicing the usage of async / await for asynchronous code Continuing our exercises of linking these modules together as needed Developing a simple (9 route) API server

// ********** How to use *********** pull this repo run "npm install" to create node modules run "npm start" to start node server

example Apis
http://localhost:4433/movies (GET: get all movies)

http://localhost:4433/movies/create (POST: create movies record)

http://localhost:4433/movies/update (PUT: update movie record)

http://localhost:4433/movies/delete/635630646750a3c279a9e65f (DELETE: delete movie record by id)

http://localhost:4433/movies/getmovie/635637c4daf7d816bf8c6d52 (GET: get movie record by id)

http://localhost:4433/reviews/635630646750a3c279a9e65f (GET: get All reviews of a specific movie)

http://localhost:4433/reviews/getReview/635637c4daf7d816bf8c6d52/635637c4daf7d816bf8c6d54 (GET: get a specific review from a specific movie)

http://localhost:4433/reviews/create (POST: create review)

http://localhost:4433/reviews/delete/635637c4daf7d816bf8c6d52/635637c4daf7d816bf8c6d54 (DELETE: delete movie review)

example schemas

review = { reviewTitle: { type: String, required: true, }, reviewDate: { type: String, required: true, }, reviewerName: { type: String, required: true, }, review: { type: String, required: true, }, rating: { type: Number, required: true, }, }

movies={ title: { type: String, required: true, }, plot: { type: String, required: true, }, genres: { type: [String], required: true, }, rating: { type: String, required: true, }, studio: { type: String, required: true, }, director: { type: String, required: true, }, castMembers: { type: [String], required: true, }, dateReleased: { type: String, required: true, }, runtime: { type: String, required: true, }, reviews: { type: [Review_Schema], }, overallRating: { type: Number, required: true, }, }

these apis can only be use through api testing tools like Postman or thunderClient or by calling from frontend using axios
for instruction i am using ThunderClient here which is vscode extension you can easily download it in extension section
open your api testing tools and call apis as mention above
