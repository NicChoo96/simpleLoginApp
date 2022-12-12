Nicholas Choo Jian Hao Interview Assessment Submission

Make sure to enter the **project location folder** to configure the application as stated, root folder is **LoginApplication**

----
## Encoder Application

### Project Location
- **/encoderApplication**
### How to run
- Run in any Java IDE
- Use the below command in a terminal.
```
java -cp ./out/artifacts/encoderApplication_jar/encoderApplication.jar com.company.Main
```

----

## Login Application

Make sure the software requirements are installed in order to run the application.
### Software Requirements (Due to time constraints, I could have dockerized most of the list below)
- Docker/Docker Compose
- JDK 17 and above
- Gradle 
- Node Package Manager
- MySQL Workbench

### Project Location
- /database-server
- /backendLoginApplication
- /webapp-login

## 1) Database Server MySQL DB

Folder Location from root: **./database-server**

Run below command in folder to run mySQL DB server
```
docker-compose up
```
Open a mySQL DB client, which I have used mySQL workbench (For testing purposes, the credentials are not meant to be secure)

```
Connection paramters:
Hostname: 127.0.0.1
Port: 3306
Username: root
Password: password
```

Load "login_mysql_db_seeder.sql" as SQL script and execute top to bottom in order to seed the Database

## 2) Backend Server SpringBoot Java

Folder Location from root: **./backendLoginApplication**

### How to run the backend server
```
./gradlew bootRun
```
Endpoint enabled: 

Post Request: http://127.0.0.1/api/login

## Password security

Password is assumed to be hashed in bcrypt algorithm. Frontend should hash once such as SHA256 before storing into the database with another bcrypt hash.

Payload request body:
```
{
    "username": "",
    "password":""
}
```

Response Body:
```
{
  "user": {
    "id": 2,
    "name": "John",
    "userName": "John Doe"
  },
  "role": {
    "id": 2,
    "roleName": "user"
  }
}
```

## 3) Login Web Application
Folder Location from root: **./webapp-login**

How to run web application
```
npm install
npm start
```

Password in the application used SHA256 hash when submitting credentials to the backend.

Browser should auto-launch web application at localhost:3000

## Enjoy using the simple login web application