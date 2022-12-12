Nicholas Choo Jian Hao Interview Assessment Submission

Make sure to enter the **project location folder** to configure the application as stated, root folder is **simpleLoginApp**

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
- /login-webapp

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

### How to run the backend server (If the command doesn't work in in command line terminal, run it in intelliJ instead. For testing only.)
```
./gradle bootRun
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
Folder Location from root: **./login-webapp**

How to run web application
```
npm install
npm start
```

### SQL Seeded Username and Password

Manager
```
username: Upper Tomson
password: p@ssword123
```

User
```
username: John Doe
password: p@ssword246
```
Feel free to seed more username and password into the DB.

Password in the application used SHA256 hash when submitting credentials to the backend.

Browser should auto-launch web application at localhost:3000

## Enjoy using the simple login web application