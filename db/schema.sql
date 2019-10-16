-- create database project2_dev;

use moods_db;

create table moods (
  id int not null auto_increment,
  alert  int(11) not null,
  happy int(11) not null,
  relaxed int(11) not null,
  primary key (id)
);

select * from moods;
