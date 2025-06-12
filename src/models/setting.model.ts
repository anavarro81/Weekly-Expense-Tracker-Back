import mongoose, { Schema, Document, model } from "mongoose";

export interface ISetting extends Document {
    limit: number;

}

const SettingSchema = new Schema({
    limit: { type: Number, required: true },


}, {
    timestamps: true,
});

const SettingModel = model<ISetting>("Setting", SettingSchema);
export default SettingModel;