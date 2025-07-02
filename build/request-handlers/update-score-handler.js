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
exports.updateScoreHandler = void 0;
var updateScoreQuery = function (accountId, score) { return "\n    UPDATE account_scores\n    SET value=".concat(score, "\n    WHERE account_id='").concat(accountId, "'\n"); };
var findAccountQuery = function (accountId) { return "SELECT * from accounts WHERE id='".concat(accountId, "'"); };
var updateScoreHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var accountId, score, queryRes, e_1, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                accountId = req.params.accountId;
                score = req.body.score;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, req.appProfile.postgresQuery(findAccountQuery(accountId))];
            case 2:
                queryRes = _a.sent();
                if (!queryRes.rows.length) {
                    res.status(400).send({ success: false, body: 'Account doesn\'t exist.' });
                    return [2 /*return*/];
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                res.status(500).send({ success: false, body: 'An error occured during DB query.' });
                return [2 /*return*/];
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, req.appProfile.postgresQuery(updateScoreQuery(accountId, score))];
            case 5:
                _a.sent();
                res.send({ success: true, body: null });
                return [3 /*break*/, 7];
            case 6:
                e_2 = _a.sent();
                console.log(e_2);
                res.status(500).send({ success: false, body: 'An error occured during DB query. (2)' });
                return [2 /*return*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.updateScoreHandler = updateScoreHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXNjb3JlLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVxdWVzdC1oYW5kbGVycy91cGRhdGUtc2NvcmUtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNLGdCQUFnQixHQUFHLFVBQUMsU0FBaUIsRUFBRSxLQUFhLElBQUssT0FBQSxxREFFL0MsS0FBSyxxQ0FDRyxTQUFTLFFBQ2hDLEVBSjhELENBSTlELENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHLFVBQUMsU0FBaUIsSUFBSyxPQUFBLDJDQUFvQyxTQUFTLE1BQUcsRUFBaEQsQ0FBZ0QsQ0FBQTtBQUVoRyxJQUFNLGtCQUFrQixHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQTBCOzs7OztnQkFDOUQsU0FBUyxHQUFLLEdBQUcsQ0FBQyxNQUFNLFVBQWYsQ0FBZ0I7Z0JBQ3pCLEtBQUssR0FBSyxHQUFHLENBQUMsSUFBSSxNQUFiLENBQWM7Ozs7Z0JBSU4scUJBQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBbUIsQ0FBQyxDQUFDLEVBQUE7O2dCQUFwRixRQUFRLEdBQUcsU0FBeUU7Z0JBRTFGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUN4QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQTtvQkFFekUsc0JBQU87Z0JBQ1gsQ0FBQzs7OztnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFBO2dCQUVkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxDQUFBO2dCQUVuRixzQkFBTzs7O2dCQUtQLHFCQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBQTs7Z0JBQWhGLFNBQWdGLENBQUM7Z0JBRWpGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBOzs7O2dCQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUMsQ0FBQyxDQUFBO2dCQUVkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsQ0FBQyxDQUFBO2dCQUV2RixzQkFBTzs7OztLQUdkLENBQUE7QUFFUSxnREFBa0IifQ==