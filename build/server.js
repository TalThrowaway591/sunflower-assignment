"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
var express_1 = __importDefault(require("express"));
var requestHandlers = __importStar(require("./request-handlers/index"));
var routes_1 = require("./routes");
var db_1 = require("./db");
var registerDb = function (app) {
    app.use(function (req, res, next) {
        req.appProfile = {
            postgresQuery: db_1.toExport.query
        };
        next();
    });
};
var registerRequestHandlers = function (app) {
    app.get(routes_1.routes.scores.list, requestHandlers.listScoresHandler);
    app.get(routes_1.routes.scores.retrieve, requestHandlers.retrieveScoreHandler);
    app.post(routes_1.routes.scores.create, requestHandlers.createScoreHandler);
    app.patch(routes_1.routes.scores.update, requestHandlers.updateScoreHandler);
};
var registerMiddlewares = function (app) {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    registerDb(app);
    return app;
};
var createServer = function () { return __awaiter(void 0, void 0, void 0, function () {
    var app;
    return __generator(this, function (_a) {
        app = (0, express_1.default)();
        registerMiddlewares(app);
        registerRequestHandlers(app);
        app.get('/', function (req, res) {
            res.send('hello world');
        });
        return [2 /*return*/, app];
    });
}); };
exports.createServer = createServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBZ0Y7QUFDaEYsd0VBQTREO0FBQzVELG1DQUFrQztBQUNsQywyQkFBZ0M7QUFFaEMsSUFBTSxVQUFVLEdBQUcsVUFBQyxHQUFnQjtJQUNoQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUNwRCxHQUFHLENBQUMsVUFBVSxHQUFHO1lBQ2IsYUFBYSxFQUFFLGFBQVEsQ0FBQyxLQUFLO1NBQ2hDLENBQUE7UUFDRCxJQUFJLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQsSUFBTSx1QkFBdUIsR0FBRyxVQUFDLEdBQWdCO0lBQzdDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDOUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtJQUNyRSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQ2xFLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUE7QUFDdkUsQ0FBQyxDQUFBO0FBRUQsSUFBTSxtQkFBbUIsR0FBRyxVQUFDLEdBQWdCO0lBQ3pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVoQixPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFHOzs7UUFDWCxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7UUFFdEIsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO1FBRUYsc0JBQU8sR0FBRyxFQUFDOztLQUNkLENBQUE7QUFFUSxvQ0FBWSJ9