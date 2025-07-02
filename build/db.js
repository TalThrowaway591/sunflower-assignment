"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toExport = void 0;
var pg_1 = require("pg");
var config_1 = __importDefault(require("config"));
var pool = new pg_1.Pool({
    host: config_1.default.get('postgresql.host'),
    user: config_1.default.get('postgresql.user'),
    password: config_1.default.get('postgresql.password'),
    port: config_1.default.get('postgresql.port'),
    database: config_1.default.get('postgresql.database'),
});
var toExport = {
    query: function (text, params) { return pool.query(text, params); }
};
exports.toExport = toExport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUJBQTBCO0FBQzFCLGtEQUEyQjtBQUUzQixJQUFNLElBQUksR0FBRyxJQUFJLFNBQUksQ0FBQztJQUNsQixJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDbkMsSUFBSSxFQUFFLGdCQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBQ25DLFFBQVEsRUFBRSxnQkFBTSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztJQUMzQyxJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDbkMsUUFBUSxFQUFFLGdCQUFNLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO0NBQzlDLENBQUMsQ0FBQztBQUVILElBQU0sUUFBUSxHQUFHO0lBQ2IsS0FBSyxFQUFFLFVBQUMsSUFBWSxFQUFFLE1BQVcsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUF4QixDQUF3QjtDQUNqRSxDQUFBO0FBR0csNEJBQVEifQ==