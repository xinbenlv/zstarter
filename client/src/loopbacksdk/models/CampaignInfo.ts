/* tslint:disable */
import {
  AccountInfo
} from '../index';

declare var Object: any;
export interface CampaignInfoInterface {
  "accountId": string;
  "id": string;
  "name"?: string;
  "ticker"?: string;
  "amountEach"?: string;
  "balance"?: number;
  "totalAirDropAmount"?: number;
  "accessibility"?: string;
  "status"?: string;
  accountInfo?: AccountInfo;
}

export class CampaignInfo implements CampaignInfoInterface {
  "accountId": string = '';
  "id": string = '';
  "name": string = '';
  "ticker": string = '';
  "amountEach": string = '';
  "balance": number = 0;
  "totalAirDropAmount": number = 0;
  "accessibility": string = '';
  "status": string = '';
  accountInfo: AccountInfo = null;
  constructor(data?: CampaignInfoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CampaignInfo`.
   */
  public static getModelName() {
    return "CampaignInfo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CampaignInfo for dynamic purposes.
  **/
  public static factory(data: CampaignInfoInterface): CampaignInfo{
    return new CampaignInfo(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CampaignInfo',
      plural: 'CampaignInfos',
      path: 'CampaignInfos',
      idName: 'id',
      properties: {
        "accountId": {
          name: 'accountId',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "ticker": {
          name: 'ticker',
          type: 'string'
        },
        "amountEach": {
          name: 'amountEach',
          type: 'string'
        },
        "balance": {
          name: 'balance',
          type: 'number'
        },
        "totalAirDropAmount": {
          name: 'totalAirDropAmount',
          type: 'number'
        },
        "accessibility": {
          name: 'accessibility',
          type: 'string'
        },
        "status": {
          name: 'status',
          type: 'string'
        },
      },
      relations: {
        accountInfo: {
          name: 'accountInfo',
          type: 'AccountInfo',
          model: 'AccountInfo',
          relationType: 'belongsTo',
                  keyFrom: 'accountId',
          keyTo: 'id'
        },
      }
    }
  }
}
