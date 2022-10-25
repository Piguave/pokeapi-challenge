CREATE DATABASE pokemon_db WITH ENCODING 'UTF8'

Create table if not exists pokemon  (
numero_pokedex int primary key ,
    nombre varchar(15) not null,
    peso real not null,
    altura real not null,
img_url varchar(100), 
descripcion varchar(100)
);
Create table if not exists tipo_ataque  (
	id_tipo_ataque int primary key,
	tipo varchar(8) not null
);
Create table if not exists tipo (
	id_tipo int primary key , 
    nombre varchar(10) not null,
    id_tipo_ataque int not null,
	foreign key (id_tipo_ataque) references tipo_ataque(id_tipo_ataque)
);
Create table if not exists pokemon_tipo  (
	numero_pokedex int not null,
    id_tipo int not null,
    primary key(numero_pokedex, id_tipo),
    foreign key (numero_pokedex) references pokemon(numero_pokedex),
    foreign key (id_tipo) references tipo(id_tipo)
);

/* insercion de datos */

/*Tipos de ataques*/
insert into tipo_ataque values(1, 'Físico');
insert into tipo_ataque values(2, 'Especial');

/*Tipos*/
insert into tipo values (1, 'Agua', 2);
insert into tipo values (2, 'Bicho', 1);
insert into tipo values (3, 'Dragón', 2);
insert into tipo values (4, 'Eléctrico', 2);
insert into tipo values (5, 'Fantasma', 1);
insert into tipo values (6, 'Fuego', 2);
insert into tipo values (7, 'Hielo', 2);
insert into tipo values (8, 'Lucha', 1);
insert into tipo values (9, 'Normal', 1);
insert into tipo values (10, 'Planta', 2);
insert into tipo values (11, 'Psíquico', 2);
insert into tipo values (12, 'Roca', 1);
insert into tipo values (13, 'Tierra', 1);
insert into tipo values (14, 'Veneno', 1);
insert into tipo values (15, 'Volador', 1);

/*Tipos Pokemon*/

insert into pokemon_tipo values (1,10);
insert into pokemon_tipo values (1,14);
insert into pokemon_tipo values (2,10);
insert into pokemon_tipo values (2,14);
insert into pokemon_tipo values (3,10);
insert into pokemon_tipo values (3,14);
insert into pokemon_tipo values (4,6);
insert into pokemon_tipo values (5,6);
insert into pokemon_tipo values (6,6);
insert into pokemon_tipo values (6,15);
insert into pokemon_tipo values (7,1);
insert into pokemon_tipo values (8,1);
insert into pokemon_tipo values (9,1);
insert into pokemon_tipo values (10,2);

/*Pokemon*/

insert into pokemon values (1, 'Bulbasaur', 6.9, 0.7, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png, "A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.");
insert into pokemon values (2, 'Ivysaur', 13,1, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png, "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.");
insert into pokemon values (3, 'Venasaur', 100, 2, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png, "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.");
insert into pokemon values (4, 'Charmander', 8.5, 0.6, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png, "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.");
insert into pokemon values (5, 'Charmeleon', 19, 1.1, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png, "When it swings its burning tail, it elevates the temperature to unbearably high levels.");
insert into pokemon values (6, 'Charizard', 90.5, 1.7, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png,"Spits fire that is hot enough to melt boulders.Known to cause forest fires unintentionally.");
insert into pokemon values (7, 'Squirtle', 9, 0.5, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png, "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.");
insert into pokemon values (8, 'Wartortle', 22.5, 1, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png, "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.");
insert into pokemon values (9, 'Blastoise', 85.5, 1.6, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png, "A brutal POKéMON with pressurized water jets on its shell. They are used for high speed tackles.");
insert into pokemon values (10, 'Caperpie', 2.9, 0.3, https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png, "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.");

