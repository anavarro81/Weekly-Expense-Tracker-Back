"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    user: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    weeklylimit: {
        type: Number,
        required: true,
        default: 50,
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: 'El límite semanal debe ser mayor que cero.'
        }
    },
    categories: [
        {
            name: { type: String }
        }
    ]
}, {
    timestamps: true,
});
const UserModel = (0, mongoose_1.model)("User", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map