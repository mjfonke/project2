-- create database project2_dev;

use moods_db;

create table moods (
  id int not null auto_increment,
  alert  int(11) not null,
  happy int(11) not null,
  relaxed int(11) not null,
  primary key (id)
);

insert into moods (excited, tired, happy, upset)
values (5, 7, 4, 2);

select * from moods;
