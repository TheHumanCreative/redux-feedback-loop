-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "review" text, 
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "review", "admin")
VALUES (4, 4, 5, 'Doing Great!', 'Love this Class!');

DELETE FROM "feedback" WHERE id=$1

-- DROP TABLE "feedback";
