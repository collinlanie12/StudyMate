USE studymate;

INSERT INTO subjects
    (subject)
VALUES
    ('Music');
INSERT INTO subjects
    (subject)
VALUES
    ('Art');
INSERT INTO subjects
    (subject)
VALUES
    ('Math');

INSERT INTO users
    (email, username, password, is_student, is_tutor, timezone, user_bio, createdAt, updatedAt)
VALUES
    ('test@test.com', 'testMan', 'rootroot', 1, 1, 0, 'I am the test guy', now(), now());
INSERT INTO users
    (email, username, password, is_student, is_tutor, timezone, user_bio, createdAt, updatedAt)
VALUES
    ('example@example.com', 'exampleMan', 'rootroot', 1, 1, -5, 'I am the example guy', now(), now());
INSERT INTO users
    (email, username, password, is_student, is_tutor, timezone, user_bio, createdAt, updatedAt)
VALUES
    ('testing@testing.com', 'testingMan', 'rootroot', 1, 1, -2, 'I am the testing guy', now(), now());
INSERT INTO users
    (email, username, password, is_student, is_tutor, timezone, user_bio, createdAt, updatedAt)
VALUES
    ('bigexample@bigexample.com', 'bigexampleMan', 'rootroot', 1, 1, 3, 'I am the bigexample guy', now(), now());

INSERT INTO posts
    (content, title, userId, subjectId, time, createdAt, updatedAt)
VALUES
    ("Looking for a Study group", "Music Study Group", 1, 1, now(), now(), now());

INSERT INTO user_subject
    (userId, subjectId, createdAt, updatedAt)
VALUES
    (1, 1, now(), now());
INSERT INTO user_subject
    (userId, subjectId, createdAt, updatedAt)
VALUES
    (1, 2, now(), now());
INSERT INTO user_subject
    (userId, subjectId, createdAt, updatedAt)
VALUES
    (2, 1, now(), now());
INSERT INTO user_subject
    (userId, subjectId, createdAt, updatedAt)
VALUES
    (2, 3, now(), now());
INSERT INTO user_subject
    (userId, subjectId, createdAt, updatedAt)
VALUES
    (3, 2, now(), now());
INSERT INTO user_subject
    (userId, subjectId, createdAt, updatedAt)
VALUES
    (4, 3, now(), now());
