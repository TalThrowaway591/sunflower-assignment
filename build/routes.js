"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var routes = {
    heartbeat: 'api/heartbeat',
    scores: {
        create: '/api/scores', // add a new user with a score
        list: "/api/scores", // retrieve the top N users on the leaderboard
        update: '/api/scores/:accountId', // update a user's score
        retrieve: '/api/scores/:accountId', // retrieve a user's position on the leaderboard (+5 users above and below)
    }
};
exports.routes = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLE1BQU0sR0FBRztJQUNYLFNBQVMsRUFBRSxlQUFlO0lBQzFCLE1BQU0sRUFBRTtRQUNKLE1BQU0sRUFBRSxhQUFhLEVBQUUsOEJBQThCO1FBQ3JELElBQUksRUFBRSxhQUFhLEVBQUUsOENBQThDO1FBQ25FLE1BQU0sRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0I7UUFDMUQsUUFBUSxFQUFFLHdCQUF3QixFQUFFLDJFQUEyRTtLQUNsSDtDQUNKLENBQUE7QUFFUSx3QkFBTSJ9