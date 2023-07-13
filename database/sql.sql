-- Creación de la tabla "roles"
CREATE TABLE roles (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  status boolean
);

-- Creación de la tabla "usuarios"
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  id_role INT,
  created_at datetime,
  verification BOOLEAN,
  verification_code VARCHAR(255),
  status BOOLEAN,
  FOREIGN KEY(id_role) REFERENCES roles(id)
);

-- Creación de la tabla "grupos"
CREATE TABLE teams (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

-- Creación de la tabla "tareas"
CREATE TABLE boards (
  id INT PRIMARY KEY,
  description TEXT,
  status BOOLEAN,
  id_team INT,
  id_user INT,
  FOREIGN KEY (id_team) REFERENCES teams(id),
  FOREIGN KEY (id_user) REFERENCES users(id)
);

-- Inserción de roles de ejemplo
INSERT INTO roles (id, name, status) VALUES
  (1, 'Administrador', 1),
  (2, 'Miembro', 1),
  (3, 'Invitado', 2);

-- Inserción de usuarios de ejemplo
INSERT INTO usuarios (id, name, email, password, created_at, id_role) VALUES
  (1, 'usuario1', 'email1@gmail.com', 'contraseña1', '12-12-12 12-12', 1),
  (2, 'usuario2', 'email2@gmail.com', 'contraseña2', '12-12-12 12-12', 2),
  (3, 'usuario3', 'email3@gmail.com', 'contraseña3', '12-12-12 12-12', 2),
  (4, 'usuario4', 'email4@gmail.com', 'contraseña4', '12-12-12 12-12', 2);

-- Inserción de grupos de ejemplo
INSERT INTO teams (id, name) VALUES
  (1, 'team 1'),
  (2, 'team 2'),
  (3, 'team 3');

-- Inserción de tareas de ejemplo
INSERT INTO boards (id, id_team, description, status, id_user) VALUES
  (1, 1, 'Tarea 1 del Grupo 1', 0, 1),
  (2, 1, 'Tarea 2 del Grupo 1', 0, 2),
  (3, 2, 'Tarea 1 del Grupo 2', 1, 3);
