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
exports.createScoreHandler = void 0;
var insertScoreQuery = function (accountId, score) { return "\n    INSERT INTO account_scores (account_id, value)\n    VALUES ('".concat(accountId, "', ").concat(score, ");"); };
var insertAccountQuery = function (accountId) { return "\n    INSERT INTO accounts (id, username)\n    VALUES ('".concat(accountId, "', '").concat(createRandomUsername(), "');"); };
var findAccountQuery = function (accountId) { return "SELECT * from accounts WHERE id='".concat(accountId, "'"); };
// for debugging purposes
var createRandomUsername = function () {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
var createScoreHandler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, accountId, score, queryRes, e_1, e_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, accountId = _a.accountId, score = _a.score;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, req.appProfile.postgresQuery(findAccountQuery(accountId))];
            case 2:
                queryRes = _b.sent();
                if (!!queryRes.rows.length) return [3 /*break*/, 4];
                // res.status(400).send({ success: false, body: 'Account doesn\'t exist.' })
                return [4 /*yield*/, req.appProfile.postgresQuery(insertAccountQuery(accountId))];
            case 3:
                // res.status(400).send({ success: false, body: 'Account doesn\'t exist.' })
                _b.sent();
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                e_1 = _b.sent();
                console.log(e_1);
                res.status(500).send({ success: false, body: 'An error occured during DB query.' });
                return [2 /*return*/];
            case 6:
                _b.trys.push([6, 8, , 9]);
                return [4 /*yield*/, req.appProfile.postgresQuery(insertScoreQuery(accountId, score))];
            case 7:
                _b.sent();
                res.status(200).send({ success: true, body: null });
                return [3 /*break*/, 9];
            case 8:
                e_2 = _b.sent();
                console.log(e_2);
                res.status(500).send({ success: false, body: 'An error occured during DB query. (2)' });
                return [2 /*return*/];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.createScoreHandler = createScoreHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXNjb3JlLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVxdWVzdC1oYW5kbGVycy9jcmVhdGUtc2NvcmUtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNLGdCQUFnQixHQUFHLFVBQUMsU0FBaUIsRUFBRSxLQUFhLElBQUssT0FBQSw2RUFFaEQsU0FBUyxnQkFBTSxLQUFLLE9BQUksRUFGd0IsQ0FFeEIsQ0FBQTtBQUV2QyxJQUFNLGtCQUFrQixHQUFHLFVBQUMsU0FBaUIsSUFBSyxPQUFBLGtFQUVuQyxTQUFTLGlCQUFPLG9CQUFvQixFQUFFLFFBQUssRUFGUixDQUVRLENBQUE7QUFHMUQsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLFNBQWlCLElBQUssT0FBQSwyQ0FBb0MsU0FBUyxNQUFHLEVBQWhELENBQWdELENBQUE7QUFFaEcseUJBQXlCO0FBQ3pCLElBQU0sb0JBQW9CLEdBQUc7SUFDekIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLElBQU0sVUFBVSxHQUFHLGdFQUFnRSxDQUFDO0lBQ3BGLElBQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUIsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUVsQixDQUFDLENBQUE7QUFFRCxJQUFNLGtCQUFrQixHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQTBCOzs7OztnQkFDaEUsS0FBdUIsR0FBRyxDQUFDLElBQUksRUFBN0IsU0FBUyxlQUFBLEVBQUUsS0FBSyxXQUFBLENBQWM7Ozs7Z0JBS2pCLHFCQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUE7O2dCQUExRSxRQUFRLEdBQUcsU0FBK0Q7cUJBRTVFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQXJCLHdCQUFxQjtnQkFDckIsNEVBQTRFO2dCQUU1RSxxQkFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFBOztnQkFGakUsNEVBQTRFO2dCQUU1RSxTQUFpRSxDQUFDOzs7OztnQkFHdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQTtnQkFFZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLG1DQUFtQyxFQUFFLENBQUMsQ0FBQTtnQkFFbkYsc0JBQU87OztnQkFLUCxxQkFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBQTs7Z0JBQXRFLFNBQXNFLENBQUM7Z0JBRXZFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTs7OztnQkFHbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQTtnQkFFZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLHVDQUF1QyxFQUFFLENBQUMsQ0FBQTtnQkFFdkYsc0JBQU87Ozs7S0FHZCxDQUFBO0FBRVEsZ0RBQWtCIn0=