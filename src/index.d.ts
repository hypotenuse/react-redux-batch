
export declare function batch
  <D extends (...args: any[]) => any,
   A extends any[]>
  (dispatch: D, actions: A): any