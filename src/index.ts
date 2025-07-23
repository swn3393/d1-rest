import { Hono, Context, Next } from "hono";
import { cors } from "hono/cors";
import { handleRest } from './rest';

export interface Env {
    DB: D1Database;
    SECRET: SecretsStoreSecret;
}

// # List all users
// GET /rest/users

// # Get filtered and sorted users
// GET /rest/users?age=25&sort_by=name&order=desc

// # Get paginated results
// GET /rest/users?limit=10&offset=20

// # Create a new user
// POST /rest/users
// { "name": "John", "age": 30 }

// # Update a user
// PATCH /rest/users/123
// { "age": 31 }

// # Delete a user
// DELETE /rest/users/123

export

        // Authentication middleware that verifies the Authorization header
        // is sent in on each request and matc
            }

            return next();
        };

        // CRUD REST endpoints made available to all of our tables
        app.all('/rest/*', authMiddleware, handleRest);

        // Execute a raw SQL statement with parameters with this route
        app.post('/query', authMiddleware, async (c) => {
            try {
                const body = await c.req.json();
                    .bind(...(params || []))
                    .all();

                return c.json(results);
            } catch (error: any) {
                return c.json({ error: error.message }, 500);
            }
        });

        return app.fetch(request, env, ctx);
    }
} satisfies ExportedHandler<Env>;
