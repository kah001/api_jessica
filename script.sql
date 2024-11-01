CREATE DATABASE db_arquitetura;
USE db_arquitetura;

CREATE TABLE tb_adm (
nm_adm        VARCHAR (100) NOT NULL,
ds_senha      VARCHAR (255) NOT NULL
);

INSERT INTO tb_adm (nm_adm, ds_senha) VALUES ('Jéssica', 'adminadmin');

CREATE TABLE tb_projetos (
id_projeto            INT PRIMARY KEY AUTO_INCREMENT,
nm_projeto            VARCHAR (100) NOT NULL,
nm_cliente            VARCHAR (50) NOT NULL,
contato_cliente       VARCHAR (100) NOT NULL,
dt_inicio             DATE NOT NULL,
tp_projeto            VARCHAR (100) NOT NULL,
ds_projeto            TEXT NOT NULL,
vl_total_estimado     DECIMAL (10,2) NOT NULL,
vl_pago               DECIMAL (10,2),
forma_pagamento       VARCHAR (100)
);

CREATE TABLE tb_tarefas (
id_tarefa        INT PRIMARY KEY AUTO_INCREMENT,
ds_tarefa        VARCHAR (200) NOT NULL,
id_projeto       INT NOT NULL,
FOREIGN KEY (id_projeto) REFERENCES tb_projetos (id_projeto)
);

CREATE TABLE tb_formulario (
id_formulario           INT PRIMARY KEY AUTO_INCREMENT,
nm_cliente              VARCHAR (100) NOT NULL,
ds_email                VARCHAR (100) NOT NULL,
ds_telefone             VARCHAR (20) NOT NULL,
ds_pais                 VARCHAR (100) NOT NULL,
ds_mensagem             TEXT NOT NULL,
dt_dia                  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tb_projetos_andamento (
id_projeto_andamento    INT PRIMARY KEY AUTO_INCREMENT,
ft_projeto              LONGBLOB NOT NULL,
tp_projeto              VARCHAR (100) NOT NULL,
ds_local                VARCHAR (100) NOT NULL
);