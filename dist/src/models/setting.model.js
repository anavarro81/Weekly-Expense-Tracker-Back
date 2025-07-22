"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SettingSchema = new mongoose_1.Schema({
    _id: { type: String, default: "settingsID" },
    limit: { type: Number, required: true },
}, {
    timestamps: true,
});
const SettingModel = (0, mongoose_1.model)("Setting", SettingSchema);
exports.default = SettingModel;
