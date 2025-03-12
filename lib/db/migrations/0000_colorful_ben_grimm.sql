CREATE TABLE "suggestion" (
	"id" serial PRIMARY KEY NOT NULL,
	"suggestion" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
