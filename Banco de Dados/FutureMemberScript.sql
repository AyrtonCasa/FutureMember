create database FutureMember;
use FutureMember;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
nomeSocial varchar(45),
DtNasc date,
email varchar(216),
	constraint chkEmail check (email in ('%@%', '%.%')),
senha varchar(20)
);

create table publicacao(
idPublicacao int primary key auto_increment,
Titulo varchar(45),
Descricao varchar(250),
fkDono int,
foreign key (fkDono) references usuario(idUsuario)
);

create table comentario(
idComentario int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
fkPublicacao int,
foreign key (fkPublicacao) references publicacao(idPublicacao),
primary key (idComentario, fkUsuario, fkPublicacao),
texto varchar(100)
);

create table resposta(
idResposta int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
fkPublicacao int,
foreign key (fkPublicacao) references publicacao(idPublicacao),
fkComentario int, 
foreign key (fkComentario) references comentario(idComentario),
Texto varchar(100),
primary key (idResposta, fkUsuario, fkPublicacao, fkComentario)
);

create table curtida(
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
fkPublicacao int,
foreign key (fkPublicacao) references publicacao(idPublicacao),
primary key (fkUsuario, fkPublicacao)
);
