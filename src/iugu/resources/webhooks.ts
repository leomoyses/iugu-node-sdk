import IuguCommon from './common'
import IuguMethods from '../iugu_methods'
import { IuguConfigAccount, IuguVerificationAccount, IuguInfoAccount, IuguWithdrawRequest, IuguWebhook, IuguWebhookEvents } from '../models'

class IuguWebhooks extends IuguCommon<IuguWebhook> {
  async listSupportedEvents (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguWebhookEvents[]> {
    return IuguMethods.createIuguMethod<IuguWebhookEvents[]>({
      method: 'get',
      path: '/' + this.routeName + '/supported_events',
      urlParams: []
    })(data, urlParams)
  }

  async toggleActivation (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguWebhook> {
    return IuguMethods.createIuguMethod<IuguWebhook>({
      method: 'get',
      path: '/' + this.routeName + '/toggle_activation',
      urlParams: []
    })(data, urlParams)
  }
  
  async resend (data: string | object, urlParams?: Map<string, string> | undefined, queryParams?: Map<string, string> | undefined): Promise<IuguWebhook> {
    return IuguMethods.createIuguMethod<IuguWebhook>({
      method: 'put',
      path: '/' + this.routeName + '/toggle_activation',
      urlParams: ['id']
    })(data, urlParams)
  }

  get routeName (): string {
    return 'web_hooks'
  }
}

export default new IuguWebhooks()
