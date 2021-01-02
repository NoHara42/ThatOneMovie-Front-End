import {StoreAction} from '../app.store';

export enum RouteActions {
  ROUTE_CHANGE_ACTION = '[Route] Route change action'
}

export const routeChangeAction = (): StoreAction<null> =>
  ({ type: RouteActions.ROUTE_CHANGE_ACTION, payload: null });
