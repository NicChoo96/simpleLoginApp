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

-- Name Tom, UserName Upper Tomson, password: p@ssword123 (Bcrypt Encrypted 12 rounds twice)
INSERT INTO user(name, user_name, password)
VALUES ("Tom", "Upper Tomson", "$2a$12$1K37S7GrtDVBA8pjFSb3i.ovo/UZ4HyH0eECIq85Jc2zj5TBqFYG.");

INSERT INTO user_role(user_id, role_id)
SELECT u.id, r.id
FROM user u, role r
where u.user_name = "Upper Tomson"
and r.role_name = "manager";

-- Name John, UserName John Doe, password: p@ssword246 (Bcrypt Encrypted 12 rounds twice)
INSERT INTO user(name, user_name, password)
VALUES ("John", "John Doe", "$2a$12$lzUbLDnfkC5bc.I6i4U/BujvVI33.Xhbx8nWV974b8rLIk27HUgsu");

INSERT INTO user_role(user_id, role_id)
SELECT u.id, r.id
FROM user u, role r
where u.user_name = "John Doe"
and r.role_name = "user";
