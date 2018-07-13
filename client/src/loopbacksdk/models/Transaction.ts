/* tslint:disable */
import {
  AccountInfo
} from '../index';

declare var Object: any;
export interface TransactionInterface {
  "id": string;
  "timestamp"?: Date;
  "amount"?: number;
  "ticker"?: string;
  "from"?: string;
  "to"?: string;
  toAccountInfo?: AccountInfo;
  fromAccountInfo?: AccountInfo;
}

export class Transaction implements TransactionInterface {
  "id": string = '';
  "timestamp": Date = new Date(0);
  "amount": number = 0;
  "ticker": string = '';
  "from": string = '';
  "to": string = '';
  toAccountInfo: AccountInfo = null;
  fromAccountInfo: AccountInfo = null;
  constructor(data?: TransactionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Transaction`.
   */
  public static getModelName() {
    return "Transaction";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Transaction for dynamic purposes.
  **/
  public static factory(data: TransactionInterface): Transaction{
    return new Transaction(data);
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
      name: 'Transaction',
      plural: 'Transactions',
      path: 'Transactions',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "timestamp": {
          name: 'timestamp',
          type: 'Date'
        },
        "amount": {
          name: 'amount',
          type: 'number'
        },
        "ticker": {
          name: 'ticker',
          type: 'string'
        },
        "from": {
          name: 'from',
          type: 'string'
        },
        "to": {
          name: 'to',
          type: 'string'
        },
      },
      relations: {
        toAccountInfo: {
          name: 'toAccountInfo',
          type: 'AccountInfo',
          model: 'AccountInfo',
          relationType: 'belongsTo',
                  keyFrom: 'to',
          keyTo: 'id'
        },
        fromAccountInfo: {
          name: 'fromAccountInfo',
          type: 'AccountInfo',
          model: 'AccountInfo',
          relationType: 'belongsTo',
                  keyFrom: 'from',
          keyTo: 'id'
        },
      }
    }
  }
}
