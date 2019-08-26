-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" VARCHAR
(1000) || INT not null,
  "understanding" VARCHAR
(1000) || INT not null,
  "support" VARCHAR
(1000) || INT not null,
  "comments" VARCHAR
(1000) || text,
  "review" VARCHAR 
(1000) || text,
  "admin" VARCHAR 
(1000) || text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "review", "admin")
VALUES (4, 4, 5, 'Doing Great!', 'Love this Class!', 'Test');
