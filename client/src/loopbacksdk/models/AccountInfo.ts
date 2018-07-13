/* tslint:disable */

declare var Object: any;
export interface AccountInfoInterface {
  "id": string;
  "type": string;
  "virtualChannel"?: string;
  "realAccountId"?: string;
  "virtualAccountIds"?: Array<any>;
  "realAccountInfoId"?: string;
  realAccountInfo?: AccountInfo;
  virtualAccountInfos?: AccountInfo[];
}

export class AccountInfo implements AccountInfoInterface {
  "id": string = '';
  "type": string = '';
  "virtualChannel": string = '';
  "realAccountId": string = '';
  "virtualAccountIds": Array<any> = <any>[];
  "realAccountInfoId": string = '';
  realAccountInfo: AccountInfo = null;
  virtualAccountInfos: AccountInfo[] = null;
  constructor(data?: AccountInfoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AccountInfo`.
   */
  public static getModelName() {
    return "AccountInfo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AccountInfo for dynamic purposes.
  **/
  public static factory(data: AccountInfoInterface): AccountInfo{
    return new AccountInfo(data);
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
      name: 'AccountInfo',
      plural: 'AccountInfos',
      path: 'AccountInfos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string'
        },
        "virtualChannel": {
          name: 'virtualChannel',
          type: 'string'
        },
        "realAccountId": {
          name: 'realAccountId',
          type: 'string'
        },
        "virtualAccountIds": {
          name: 'virtualAccountIds',
          type: 'Array&lt;any&gt;'
        },
        "realAccountInfoId": {
          name: 'realAccountInfoId',
          type: 'string'
        },
      },
      relations: {
        realAccountInfo: {
          name: 'realAccountInfo',
          type: 'AccountInfo',
          model: 'AccountInfo',
          relationType: 'belongsTo',
                  keyFrom: 'realAccountInfoId',
          keyTo: 'id'
        },
        virtualAccountInfos: {
          name: 'virtualAccountInfos',
          type: 'AccountInfo[]',
          model: 'AccountInfo',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'realAccountId'
        },
      }
    }
  }
}
