CREATE TABLE Cart (
    Id int NOT NULL IDENTITY (1,1),
    Title NVARCHAR(255),
    Shop NVARCHAR(255),
    CreationDate BIGINT,
    IsDeleted BIT,
    PRIMARY KEY (Id)
);

CREATE TABLE CartItem (
    Id int not null IDENTITY (1,1),    CartId int,
    Name NVARCHAR(255),
    IsActive BIT,
    IsDeleted BIT,
    PRIMARY KEY (Id),

    FOREIGN KEY (CartId) REFERENCES Cart(Id) ON DELETE CASCADE
);