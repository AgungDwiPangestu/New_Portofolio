export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    slug: "rest-api-notes",
    title: "Notes REST API",
    description:
      "A simple REST API to manage notes with endpoints for create, read, update, and delete.",
    tech: ["Node.js", "Express", "TypeScript"],
    github: "https://github.com/your-username/notes-rest-api",
  },
  {
    slug: "crud-users",
    title: "Users CRUD Service",
    description:
      "Basic CRUD service with in-memory store and simple validation for user data.",
    tech: ["Node.js", "Fastify", "TypeScript"],
    github: "https://github.com/your-username/users-crud-service",
  },
  {
    slug: "sqlite-todo",
    title: "SQLite Todo Backend",
    description:
      "Backend service using SQLite for storing todos with lightweight migrations and query helpers.",
    tech: ["Node.js", "Kysely", "SQLite", "TypeScript"],
    github: "https://github.com/your-username/sqlite-todo-backend",
  },
];
