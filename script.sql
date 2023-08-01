/*
  Import this SQL script into your local database if you don't have the structure and some sample data ready to test the application.
  Relationship between books and reviews table:
    BOOKS(1) ------ (n)REVIEWS  
*/
/* -- Create DB -- */
CREATE DATABASE crudbooks;
USE crudbooks;

/* -- Books Table -- */
CREATE TABLE `crudbooks`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `image` TEXT NOT NULL,
  `pages` INT NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  `publisher` VARCHAR(255) NOT NULL,
  `rating` INT(5) NOT NULL,
  PRIMARY KEY (`id`));

/* ----------------------------------------------------------- */

/* -- Reviews Table -- */
CREATE TABLE `crudbooks`.`reviews` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `text` TEXT NOT NULL,
  `book_id` INT NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `crudbooks`.`reviews` 
ADD CONSTRAINT `fk_reviews_books`
  FOREIGN KEY (`book_id`)
  REFERENCES `crudbooks`.`books` (`id`)
  ON DELETE CASCADE ON UPDATE CASCADE;

/* ----------------------------------------------------------- */

/* -- Datas in Books Table -- */
INSERT INTO `crudbooks`.`books` (`title`, `image`, `pages`, `author`, `publisher`, `rating`) VALUES ('Nação dopamina: Por que o excesso de prazer está nos deixando infelizes e o que podemos fazer para mudar.', 'https://m.media-amazon.com/images/P/B09SM3F8Z6.01._SCLZZZZZZZ_SX500_.jpg', '255', 'Dra. Anna Lembke', 'Vestígio', '4.7');
INSERT INTO `crudbooks`.`books` (`title`, `image`, `pages`, `author`, `publisher`, `rating`) VALUES ('Ansiedade: Como enfrentar o mal do século.', 'https://m.media-amazon.com/images/P/B0762J55MW.01._SCLZZZZZZZ_SX500_.jpg', '160', 'Augusto Cury', 'Bevirá', '4.7');
INSERT INTO `crudbooks`.`books` (`title`, `image`, `pages`, `author`, `publisher`, `rating`) VALUES ('Pai Rico, Pai Pobre Para Jovens: O que a escola não ensina sobre dinheiro.', 'https://m.media-amazon.com/images/P/B07HNDXQTS.01._SCLZZZZZZZ_SX500_.jpg', '144', 'Robert T. Kiyosaki', 'Alta Books', '4.8');
INSERT INTO `crudbooks`.`books` (`title`, `image`, `pages`, `author`, `publisher`, `rating`) VALUES ('Sprint: O método usado no Google para testar e aplicar novas ideias em apenas cinco dias.', 'https://m.media-amazon.com/images/P/B06XPPS4JW.01._SCLZZZZZZZ_SX500_.jpg', '320', 'John Zeratsky & Jake Knapp', 'Intrínseca', '4.7');
INSERT INTO `crudbooks`.`books` (`title`, `image`, `pages`, `author`, `publisher`, `rating`) VALUES ('Design Thinking: uma metodologia poderosa para decretar o fim das velhas ideias.', 'https://m.media-amazon.com/images/P/B08GVBDJHV.01._SCLZZZZZZZ_SX500_.jpg', '304', ' Tim Brown', 'Alta Books', '4.7');
INSERT INTO `crudbooks`.`books` (`title`, `image`, `pages`, `author`, `publisher`, `rating`) VALUES ('As Crônicas de Nárnia.', 'https://m.media-amazon.com/images/I/71yJLhQekBL.jpg', '752', 'C.S. Lewis', 'WMF Martins Fontes', '4.9');
INSERT INTO `crudbooks`.`books` (`title`, `image`, `pages`, `author`, `publisher`, `rating`) VALUES ('Box Sherlock Holmes - Obra completa.', 'https://m.media-amazon.com/images/I/71veccCx+oL.jpg', '1808', 'Arthur Conan Doyle', 'HarperCollins', '4.9');
/* ----------------------------------------------------------- */

/* -- Datas in Reviews Table -- */
INSERT INTO `crudbooks`.`reviews` (`name`, `text`, `book_id`) VALUES ('Ana Batista', 'Olha, até agora eu só li três dos livros que tem nele, e… INCRÍVEL!!!!! SENSACIONAL!!!! Até agora o Sobrinho do Mago é o meu preferido. O Rank fica assim:', 6);
INSERT INTO `crudbooks`.`reviews` (`name`, `text`, `book_id`) VALUES ('Joana', 'Antes de iniciar a leitura de Nação Dopamina, muito bem recomendada por Ana Paula Henkel, eu assisti a uma entrevista com a psiquiatra e autora do livro, Anna Lembke, na qual ela falava sobre a dopamina e sua gangorra de sofrimento e prazer. O conceito apresentado era interessantíssimo e me fez comprar o livro.', 1);
INSERT INTO `crudbooks`.`reviews` (`name`, `text`, `book_id`) VALUES ('Felipe Soares', 'Livro muito bem feito, ótima qualidade. É pesado, mas dá gosto de folhear e ler. Meu filho mais velho já leu todos os 7 livros (estão nessa edição).', 6);
INSERT INTO `crudbooks`.`reviews` (`name`, `text`, `book_id`) VALUES ('Pedro', 'O acabamento é simples, porém muito bom.', 6);
INSERT INTO `crudbooks`.`reviews` (`name`, `text`, `book_id`) VALUES ('Rodrigo Mendes', 'É um livro bem técnico com pesquisas, artigos e muitas outras informações. Pode usar e abusar do marca texto e de anotações pois é um ótimo livro. Nos explica biologicamente como nos viciamos e vivemos necessitados de estímulos.', 1);
INSERT INTO `crudbooks`.`reviews` (`name`, `text`, `book_id`) VALUES ('Maria Beatriz', 'O autor Apresenta o desenvolvimento do conceito do design thinking e desenvolve os pontos principais da técnica. Mas, devido ao tempo do lançamento, grande parte dos cases relatados não soam como novidade ou não se consolidaram como cases de sucesso sustentável. Vale pela perspectiva de publicação pivotal sobre o assunto.', 5);
INSERT INTO `crudbooks`.`reviews` (`name`, `text`, `book_id`) VALUES ('Lucas Pereira', 'Muito bom livro. Excelente referência para o tema.', 5);
INSERT INTO `crudbooks`.`reviews` (`name`, `text`, `book_id`) VALUES ('Bianca', 'Um livro de 292 páginas coladas, as duas primeiras na capa e uma quebra do restante do livro. Me incomoda poder ver a escrita do verso da folha. Não acho que vale o preço. Quanto ao conteúdo, estou na expectativa de ser bom, foi muito bem recomendado.', 5);
/* ----------------------------------------------------------- */
