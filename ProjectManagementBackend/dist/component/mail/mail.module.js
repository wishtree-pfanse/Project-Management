"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const mail_service_1 = require("./mail.service");
const config_1 = require("@nestjs/config");
let MailModule = class MailModule {
};
MailModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (config) => ({
                    transport: {
                        host: config.get('MAIL_HOST'),
                        port: new Number(config.get('MAIL_PORT')).valueOf(),
                        auth: {
                            user: config.get('MAIL_USER'),
                            pass: config.get('MAIL_PASS')
                        }
                    },
                    defaults: {
                        from: `"No Reply" <noreply@gmail.com>`,
                    },
                }),
                inject: [config_1.ConfigService]
            })
        ],
        providers: [mail_service_1.MailService],
        exports: [mail_service_1.MailService],
    })
], MailModule);
exports.MailModule = MailModule;
//# sourceMappingURL=mail.module.js.map