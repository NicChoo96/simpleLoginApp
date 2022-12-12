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

-- Name Tom, UserName Upper Tomson, password: p@ssword123 (Sha256 on FE and Bcrypt Encrypted 12 rounds in BE)
INSERT INTO user(name, user_name, password)
VALUES ("Tom", "Upper Tomson", "$2a$12$T4lJavy8tEAOfG1RzL7JeuSLWQIRxdFTERct3VhUz2Oh7.E.gT0tu");

INSERT INTO user_role(user_id, role_id)
SELECT u.id, r.id
FROM user u, role r
where u.user_name = "Upper Tomson"
and r.role_name = "manager";

-- Name John, UserName John Doe, password: p@ssword246 (Sha256 on FE and Bcrypt Encrypted 12 rounds in BE)
INSERT INTO user(name, user_name, password)
VALUES ("John", "John Doe", "$2a$12$yPWJRyEAtCibcY7Y8jhtjuHO40bYynHuZw.Dz.2XkuQ43QQfaZiKq");

INSERT INTO user_role(user_id, role_id)
SELECT u.id, r.id
FROM user u, role r
where u.user_name = "John Doe"
and r.role_name = "user";
