-- create database project2_dev;

use moods_db;

create table moods (
  id int not null auto_increment,
  excited int(10) null,
  tired int(10) null,
  happy int(10) null,
  upset int(10) null,
  primary key (id)
);

insert into moods (excited, tired, happy, upset)
values (5, 7, 4, 2);

select * from moods;