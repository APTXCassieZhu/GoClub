create database cse323;
use cse323;

CREATE TABLE user (
    username VARCHAR(255) ,
    password VARCHAR(255) NOT NULL ,
    security_question INTEGER NOT NULL, #Number corresponds to which question VARCHAR(1000) NOT NULL,
    security_answer VARCHAR(1000) NOT NULL,
    PRIMARY KEY (username) );
    
CREATE TABLE club (
    clubname VARCHAR(255) ,
    clubdescription VARCHAR(10000) NOT NULL ,
    #club INTEGER NOT NULL, #Number corresponds to which question VARCHAR(1000) NOT NULL,
    #security_answer VARCHAR(1000) NOT NULL,
    PRIMARY KEY (clubname) );
    
CREATE TABLE favorite (
	username VARCHAR(255),
    clubname VARCHAR(255),
    PRIMARY KEY (username, clubname),
	FOREIGN KEY (username) REFERENCES user (username)
		ON DELETE NO ACTION
        ON UPDATE CASCADE,
	FOREIGN KEY (clubname) REFERENCES club (clubname)
		ON DELETE NO ACTION
        ON UPDATE CASCADE);