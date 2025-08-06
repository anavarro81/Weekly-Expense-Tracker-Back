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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardDataService = void 0;
// TODO - Acceder a traves de los datos del usuario. 
const getSetting = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    // const setting = await getLimit()
    // return setting
});
const getCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    // TODO - Acceder a traves de los datos del usuario. 
    // // const categories = await getAllCategoriesService()
    // console.log(categories)
    // return categories
});
const getDashboardDataService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const setting = yield getSetting(userId);
    console.log('setting ', setting);
    const categories = yield getCategories();
    // return {limit: limit, categories: categories}
    return {
    // TODO - Devolver el limite del usuario y de sus categorasi
    // limit: setting.limit,
    // categories: categories
    };
});
exports.getDashboardDataService = getDashboardDataService;
//# sourceMappingURL=DashboardData.service.js.map