CREATE SCHEMA user_db;

CREATE TABLE user (
	id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    user_name varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role(
	id int NOT NULL AUTO_INCREMENT,
    role_name varchar(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE user_role (
	id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    role_id int NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES user_db.user(id),
    FOREIGN KEY (role_id) REFERENCES user_db.role(id)
);

INSERT INTO role (role_name)
VALUES ("manager"), ("user");

-- Name Tom, UserName Upper Tomson, password: p@ssword123 (Bcrypt Encrypted 12 rounds)
INSERT INTO user(name, user_name, password)
VALUES ("Tom", "Upper Tomson", "$2a$12$yIIHX2c6xPqNyssXZCd6veWiRyDDK3MeejIJSWmiVFDTILww1N9M.");

INSERT INTO user_role(user_id, role_id)
SELECT u.id, r.id
FROM user u, role r
where u.user_name = "Upper Tomson"
and r.role_name = "manager";

-- Name John, UserName John Doe, password: p@ssword246 (Bcrypt Encrypted 12 rounds)
INSERT INTO user(name, user_name, password)
VALUES ("John", "John Doe", "$2a$12$BAwNbFJXVc8RSamstDWzquxyFK5b0iG3KyIMQ6O7Aw9yVNtcvR.9S");

INSERT INTO user_role(user_id, role_id)
SELECT u.id, r.id
FROM user u, role r
where u.user_name = "John Doe"
and r.role_name = "user";
