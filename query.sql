CREATE TABLE dbo.Author
   (id int IDENTITY(1,1) PRIMARY KEY NOT NULL,
    firstName varchar(25) NOT NULL,
    lastName varchar(25) NULL)
GO

CREATE TABLE dbo.Genre
   (id int IDENTITY(1,1) PRIMARY KEY NOT NULL,
    title varchar(25) NOT NULL)
GO

CREATE TABLE dbo.Publisher
   (id int IDENTITY(1,1) PRIMARY KEY NOT NULL,
    name varchar(25) NOT NULL)
GO

CREATE TABLE dbo.Book
    (id int IDENTITY(1,1) PRIMARY KEY NOT NULL,
    title varchar(25) NOT NULL,
    yearProduction int NULL,
    countPage int NULL,
    id_a int FOREIGN KEY REFERENCES dbo.Author(id),
    id_g int FOREIGN KEY REFERENCES dbo.Genre(id),
    id_p int FOREIGN KEY REFERENCES dbo.Publisher(id))
GO

INSERT INTO dbo.Author
           (firstName, lastName)
     VALUES
           ('Люко', 'Дашвар'),
           ('Любко', 'Дереш'),
           ('Іван', 'Дзюба'),
           ('Мирослав', 'Дочинець'),
           ('Оксана','Забужко')
GO

INSERT INTO dbo.Genre
           (title)
     VALUES
           ('Роман'),
           ('Сучасна проза'),
           ('Біографія'),
           ('Гумор')
GO

INSERT INTO dbo.Publisher
           (name)
     VALUES
           ('КСД'),
           ('Либідь'),
           ('Карпатська вежа'),
           ('Факт')
GO

INSERT INTO dbo.Book
           (title, yearProduction, countPage, id_a, id_g, id_p)
     VALUES
           ('Биті є. Гоцик', '2012', '272', '1', '1', '1'),
           ('Голова Якова', '2012', '240', '2', '4', '1'),
           ('Є поети для епох', '2012', '208', '3', '3', '2'),
           ('Вічник', '2011', '284', '4', '2', '3'),
           ('Музей покинутих секретів', '2009', '832', '5', '1', '4')
GO

SELECT Book.title, Author.firstName, Author.lastName, Publisher.name, Genre.title as titleGenre, Book.yearProduction, Book.countPage
FROM Book
INNER JOIN Author
ON Book.id_a=Author.id
INNER JOIN Publisher
ON Book.id_p=Publisher.id
INNER JOIN Genre
ON Book.id_g=Genre.id