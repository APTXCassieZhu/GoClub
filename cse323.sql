create database cse323;
use cse323;

CREATE TABLE Clubuser (
    username VARCHAR(255) ,
    password VARCHAR(255) NOT NULL ,
    PRIMARY KEY (username) );
    
CREATE TABLE Club (
    clubname VARCHAR(768) ,
    category TEXT ,
    logopath TEXT ,
    description TEXT ,
    contact TEXT,
    email VARCHAR(255),
    event_location VARCHAR(255),
    event_name VARCHAR(255),
    event_time VARCHAR(255),
    #club INTEGER NOT NULL, #Number corresponds to which question VARCHAR(1000) NOT NULL,
    #security_answer VARCHAR(1000) NOT NULL,
    PRIMARY KEY (clubname) );
    
CREATE TABLE Favorite (
	favorite_id BIGINT,
	username VARCHAR(255),
    clubname VARCHAR(255),
    follow_time DATETIME,
    PRIMARY KEY (favorite_id),
	FOREIGN KEY (username) REFERENCES Clubuser (username)
		ON DELETE NO ACTION
        ON UPDATE CASCADE,
	FOREIGN KEY (clubname) REFERENCES Club (clubname)
		ON DELETE NO ACTION
        ON UPDATE CASCADE);