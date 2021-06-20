---
sidebar_position: 2
---

# Built-in Modules

CalmAPI ships with some built-in Modules

- **Auth**
- **User**
- **Media**
- **Post** (Sample CRUD Module)

## Auth

CalmAPI ships with local Authentication & Authorization using JWT & Token Store.

For password encryption, `bcrypt` has been used.

Auth Module has these routes built-in, And yes you can add anything you want.

**Implemented Methods**

- Register
- Login
- Logout
- Auth Check Middleware **[Bearer Token]**
- Change Password
- Update Profile
- Get Profile
- Password Reset using OTP

### Register

```json title="POST: https://localhost:PORT/api/auth/register"
{
    "name": "Albert Einstein",
    "email": "info@example.com",
    "password": "S0m3S3cur3p4ssw0rd"
}
```

### Login

```json title="POST: https://localhost:PORT/api/auth/login"
{
    "email": "info@example.com",
    "password": "S0m3S3cur3p4ssw0rd"
}
```

Login response will contain `token` and `user`. A response will look like

```json
{
  "error": false,
  "status": true,
  "statusCode": 200,
  "responseTimestamp": "2021-06-20T16:55:17.767Z",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGNmNzJmMDU3YTViZDUwYzI5YTU3ZDQiLCJlbWFpbCI6ImluZm9AZXhhbXBsZS5jb20iLCJuYW1lIjoiQWxiZXJ0IEVpbnN0ZWluIiwiaWF0IjoxNjI0MjA4MTE3LCJleHAiOjE2MjQzODA5MTd9.CbawASIs8Mmr_gOFAp5upWWcRndKkuW7P21NRgSojmM",
    "user": {
      "_id": "60cf72f057a5bd50c29a57d4",
      "email": "info@example.com",
      "name": "Albert Einstein"
    }
  }
}
```

Use the token for **Bearer** Auth.

### Logout

```
DELETE: https://localhost:PORT/api/auth/logout
```

## User

This module contains mainly the user model. Controller & Route are not being used by default. You can use it if you want.

## Media

This module is for Uploading files. Currently, it only supports AWS S3.

### AWS S3 Configuration

Just define your ACCESS_KEY_ID, SECRET_ACCESS_KEY & BUCKET_NAME in `.env` file and Boom!

### Upload File

```javascript title="POST: https://localhost:PORT/api/media"
// Multipart FormData

file: Blob[FormData]
```

Response will contain path of the uploaded file. Add that to your bucket's base URL to access the file.

You can also store the `_id` in another collection's reference to populate the file information.

### Delete File

```shell
DELETE: https://localhost:PORT/api/media/MEDIA_ID
```

## Post

Post module is a sample CRUD module ships with CalmAPI which includes the following methods.

- Create Post
- Get All Posts with Pagination, filter & Sort
- Get Single Post by ID
- Update Single Post by ID
- Delete Single Post by ID

### Create Post

```json title="POST: https://localhost:PORT/api/posts"
{
	"title": "Welcome to CalmAPI",
	"content": "CALMAPI IS A PRODUCTION READY REST API GENERATOR USING NODEJS & MONGODB"
}
```

Sample response

```json
{
  "error": false,
  "status": true,
  "statusCode": 200,
  "responseTimestamp": "2021-06-20T17:41:28.453Z",
  "data": {
    "_id": "60cf7dc857a5bd50c29a57d7",
    "title": "Welcome to CalmAPI",
    "content": "CALMAPI IS A PRODUCTION READY REST API GENERATOR USING NODEJS & MONGODB",
    "slug": "welcome-to-calmapi"
  }
}
```

### Get All

```shell 
GET: http://localhost:PORT/api/posts?skip=0&limit=10
```

Sample response

```json
{
  "error": false,
  "status": true,
  "statusCode": 200,
  "responseTimestamp": "2021-06-20T17:45:53.721Z",
  "totalCount": 2,
  "data": [
    {
      "_id": "60cf7ea657a5bd50c29a57d8",
      "title": "CalmAPI 0.2.0 is Out Now",
      "content": "With some exciting features like module generator, Media Upload",
      "slug": "calmapi-0.2.0-is-out-now"
    },
    {
      "_id": "60cf7dc857a5bd50c29a57d7",
      "title": "Welcome to CalmAPI",
      "content": "CALMAPI IS A PRODUCTION READY REST API GENERATOR USING NODEJS & MONGODB",
      "slug": "welcome-to-calmapi"
    }
  ]
}
```
### Get Single

```shell 
GET: http://localhost:PORT/api/posts/{ID}
```

Sample response

```json
{
  "error": false,
  "status": true,
  "statusCode": 200,
  "responseTimestamp": "2021-06-20T17:46:44.022Z",
  "data": {
    "_id": "60cf7ea657a5bd50c29a57d8",
    "title": "CalmAPI 0.2.0 is Out Now",
    "content": "With some exciting features like module generator, Media Upload",
    "slug": "calmapi-0.2.0-is-out-now"
  }
}
```

### Update Single

```javascript title="PUT: http://localhost:PORT/api/posts/{ID}"
{
	"title": "CalmAPI 0.2.0 is Out Yesterday",
	"content": "With some exciting features like module generator, Media Upload and other features too"
}
```

Sample response

```json
{
  "error": false,
  "status": true,
  "statusCode": 200,
  "responseTimestamp": "2021-06-20T17:49:12.212Z",
  "data": {
    "_id": "60cf7ea657a5bd50c29a57d8",
    "title": "CalmAPI 0.2.0 is Out Yesterday",
    "content": "With some exciting features like module generator, Media Upload and other features too",
    "slug": "calmapi-0.2.0-is-out-now"
  }
}
```

### Delete Single

```shell
DELETE: http://localhost:PORT/api/posts/{ID}
```

Sample response

```json
{
  "error": false,
  "status": true,
  "statusCode": 200,
  "responseTimestamp": "2021-06-20T17:50:06.826Z",
  "deleted": true,
  "data": {
    "_id": "60cf7ea657a5bd50c29a57d8",
    "title": "CalmAPI 0.2.0 is Out Yesterday",
    "content": "With some exciting features like module generator, Media Upload and other features too",
    "slug": "calmapi-0.2.0-is-out-now"
  }
}
```
