SHOW DATABASES;
USE historical_figures_db;
SHOW TABLES;
DESCRIBE figures;
INSERT INTO figures (name, description, birth_year, death_year, image_path) VALUES
('Albert Einstein', 'Theoretical physicist known for developing the theory of relativity, which transformed our understanding of space and time.', 1879, 1955, '/pictures/Albert%20Einstein.jpeg'),
('Isaac Newton', 'English mathematician and physicist recognized for his laws of motion and universal gravitation, foundational to classical mechanics.', 1643, 1727, '/pictures/Isaac%20Newton.jpeg'),
('Marie Curie', 'Physicist and chemist who conducted groundbreaking research on radioactivity, becoming the first woman to win a Nobel Prize.', 1867, 1934, '/pictures/Marie%20Curie.jpeg'),
('Albert Einstein', 'Theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.', 1879, 1955, 'historical_figure_pics/Albert Einstein.jpeg'),
('Isaac Newton', 'English mathematician, physicist, astronomer, and author who is widely recognised as one of the most influential scientists of all time.', 1643, 1727, 'historical_figure_pics/Albert Einstein.jpeg'),
('Cleopatra', 'Last active ruler of the Ptolemaic Kingdom of Egypt, known for her intelligence, beauty, and political acumen.', 69, 30, '/pictures/Cleopatra.jpeg'),
('Leonardo da Vinci', 'Italian polymath of the High Renaissance who is widely considered one of the most diversely talented individuals ever to have lived.', 1452, 1519, '/pictures/Leonardo%20da%20Vinci.jpeg'),
('Marie Curie', 'Pioneering scientist who conducted groundbreaking research on radioactivity. First woman to win a Nobel Prize.', 1867, 1934, 'historical_figure_pics/Albert Einstein.jpeg'),
('Nelson Mandela', 'South African anti-apartheid revolutionary and political leader who served as President of South Africa from 1994 to 1999.', 1918, 2013, '/pictures/Nelson%20Mandela.jpeg'),
('Julius Caesar', 'Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic.', 100, 44, '/pictures/Julius%20Caesar.jpeg'),
('Winston Churchill', 'British statesman, army officer, and writer who served as Prime Minister of the United Kingdom during World War II.', 1874, 1965, '/pictures/Winston%20Churchill.jpeg'),
('Joan of Arc', 'French heroine and Catholic saint who led the French army to victory during the Hundred Years\' War.', 1412, 1431, '/pictures/Joan%20of%20Arc.jpeg'),
('Mahatma Gandhi', 'Indian lawyer and anti-colonial nationalist who employed nonviolent resistance to lead the successful campaign for India\'s independence.', 1869, 1948, '/pictures/Mahatma%20Gandhi.jpeg'),
('George Washington', 'First President of the United States and one of the Founding Fathers of the United States.', 1732, 1799, '/pictures/George%20Washington.jpeg'),
('Abraham Lincoln', '16th President of the United States, known for leading the country during the American Civil War and emancipating slaves.', 1809, 1865, '/pictures/Abraham%20Lincoln.jpeg'),
('Napoleon Bonaparte', 'French military leader who rose to prominence during the French Revolution and led several successful campaigns during the Napoleonic Wars.', 1769, 1821, '/pictures/Napoleon%20Bonaparte.jpeg'),
('Alexander the Great', 'King of Macedonia who conquered an empire stretching from Greece to Egypt and into present-day Pakistan.', 356, 323, '/pictures/Alexander%20the%20Great.jpeg'),
('Galileo Galilei', 'Italian astronomer, physicist, and engineer, known as the father of observational astronomy, modern physics, and the scientific method.', 1564, 1642, '/pictures/Galileo%20Galilei.jpeg'),
('Socrates', 'Classical Greek philosopher credited as one of the founders of Western philosophy.', 470, 399, '/pictures/Socrates.jpeg'),
('Martin Luther King Jr.', 'American Baptist minister and civil rights activist, known for advancing civil rights using nonviolence and civil disobedience.', 1929, 1968, '/pictures/Martin%20Luther%20King%20Jr.jpeg'),
('Charles Darwin', 'English naturalist, geologist, and biologist, best known for his contributions to the science of evolution.', 1809, 1882, '/pictures/Charles%20Darwin.jpeg'),
('Queen Victoria', 'Queen of the United Kingdom of Great Britain and Ireland from 1837 until her death.', 1819, 1901, '/pictures/Queen%20Victoria.jpeg'),
('William Shakespeare', 'English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world\'s greatest dramatist.', 1564, 1616, '/pictures/William%20Shakespeare.jpeg');




SELECT * FROM figures;
COMMIT;




