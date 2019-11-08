import { Injectable } from '@nestjs/common';

export enum SmsCodeLabel {
  /**
   * 注册手机号验证码
   */
  REGISTER = 'register',
  /**
   * 邮箱认证验证码
   */
  EMAIL = 'email',
  /**
   * 通过邮箱找回密码验证码
   */
  RESET_EMAIL = 'reset_email',
  /**
   * 通过手机号找回密码验证码
   */
  RESET_MOBILE = 'reset_mobile',
}


@Injectable()
export class SmsCodeService {
  constructor() { }

  /**
   * @description 发送手机验证码
   * @param {SmsCodeLabel} label
   * @param {string} target
   * @returns {Promise<string>}
   * @memberof SmsCodeService
   */
  sendMobileCode(label: SmsCodeLabel, target: string): Promise<string> {
    return Promise.resolve(this.generateCode());
  }

  /**
   * @description 发送邮箱验证码
   * @param {SmsCodeLabel} label
   * @param {string} target
   * @returns {Promise<string>}
   * @memberof SmsCodeService
   */
  sendEmailCode(label: SmsCodeLabel, target: string): Promise<string> {
    return Promise.resolve(this.generateCode());
  }

  /**
   * @description 效验验证码
   * @param {string} code
   * @param {string} target
   * @returns {boolean}
   * @memberof SmsCodeService
   */
  validateCode(label: SmsCodeLabel, target: string, code: string): boolean {
    return true;
  }

  private generateCode(): string {
    let code: string = Math.floor(Math.random() * 999999) + '';
    if (code.length < 6) {
      const length: number = 6 - code.length;
      const fill: string = Array(length).fill(0).join('');
      code = code + fill;
    }
    return code;
  }
}
