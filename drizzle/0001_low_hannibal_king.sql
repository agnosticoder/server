CREATE TABLE `note` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`isDone` integer DEFAULT false NOT NULL,
	`createdAt` integer
);
--> statement-breakpoint
DROP TABLE `comment`;