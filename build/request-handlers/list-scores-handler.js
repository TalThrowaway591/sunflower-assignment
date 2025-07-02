"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listScoresHandler = void 0;
var query = function (rowAmount) { return "\n    SELECT a.id, a.username, s.value\n    FROM account_scores s \n    JOIN accounts a ON a.id = s.account_id\n    ORDER BY s.value DESC\n    LIMIT ".concat(rowAmount, ";"); };
var listScoresHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rowAmount, rowAmountNum, queryRes, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rowAmount = req.query.rowAmount;
                rowAmountNum = Number.parseInt(rowAmount);
                if (!rowAmount || Number.isNaN(rowAmountNum)) {
                    res.status(400).send({ success: false, body: 'Invalid parameter for \'rowAmount\'.' });
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, req.appProfile.postgresQuery(query(rowAmountNum))];
            case 2:
                queryRes = _a.sent();
                res.status(200).send({ success: true, body: queryRes.rows });
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                res.status(500).send({ success: false, body: 'An error occured during data fetching.' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.listScoresHandler = listScoresHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zY29yZXMtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXF1ZXN0LWhhbmRsZXJzL2xpc3Qtc2NvcmVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSxLQUFLLEdBQUcsVUFBQyxTQUFpQixJQUFLLE9BQUEsK0pBS3pCLFNBQVMsTUFBRyxFQUxhLENBS2IsQ0FBQTtBQUV4QixJQUFNLGlCQUFpQixHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQTBCOzs7OztnQkFHN0QsU0FBUyxHQUFLLEdBQUcsQ0FBQyxLQUFLLFVBQWQsQ0FBZTtnQkFFMUIsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBbUIsQ0FBQyxDQUFBO2dCQUV6RCxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztvQkFDM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxzQ0FBc0MsRUFBRSxDQUFDLENBQUE7b0JBRXRGLHNCQUFPO2dCQUNYLENBQUM7Ozs7Z0JBR29CLHFCQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFBOztnQkFBbEUsUUFBUSxHQUFHLFNBQXVEO2dCQUV4RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBOzs7O2dCQUU1RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLENBQUMsQ0FBQTs7Ozs7S0FHL0YsQ0FBQTtBQUVRLDhDQUFpQiJ9