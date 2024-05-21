CREATE DATABASE futuremember;
use FutureMember;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
nomeSocial varchar(45),
DtNasc date,
email varchar(216),
	constraint chkEmail check (email like ('%@%.%')),
senha varchar(20)
);


create table publicacao(
idPublicacao int primary key auto_increment,
Titulo varchar(45),
Descricao varchar(250),
DtPostagem timestamp not null default current_timestamp,
fkDono int,
foreign key (fkDono) references usuario(idUsuario)
);


create table curtida(
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
fkPublicacao int,
foreign key (fkPublicacao) references publicacao(idPublicacao),
primary key (fkUsuario, fkPublicacao),
dataCurtida timestamp not null default current_timestamp
);
