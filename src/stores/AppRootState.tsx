/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */

import { IConfigurationState } from "stores/configuration";
import { INavigationState } from "stores/navigation";
import { ITransactionState } from "./transaction";

export interface IAppRootState {
  configuration: IConfigurationState;
  navigation: INavigationState;
  transaction: ITransactionState;
}
