import mongoose, { Schema, Document, model } from "mongoose";

export interface ISetting extends Document {
    _id: string
    limit: number;

}

const SettingSchema = new Schema({
    _id: {type: String, default: "settingsID"},
    limit: { type: Number, required: true },


}, {
    timestamps: true,
});

const SettingModel = model<ISetting>("Setting", SettingSchema);
export default SettingModel;