/**
 * Indicates that the result of a {@link Pipe} transformation has changed even though the reference has not changed.
 *
 * The wrapped value will be unwrapped by change detection, and the unwrapped value will be stored.
 *
 * @exportedAs angular2/pipes
 */
export class WrappedValue {
  wrapped:any;

  constructor(wrapped:any) {
    this.wrapped = wrapped;
  }

  static wrap(value:any):WrappedValue {
    var w = _wrappedValues[_wrappedIndex++ % 5];
    w.wrapped = value;
    return w;
  }
}

var _wrappedValues = [
  new WrappedValue(null),
  new WrappedValue(null),
  new WrappedValue(null),
  new WrappedValue(null),
  new WrappedValue(null)
];

var _wrappedIndex = 0;

/**
 * An interface for extending the list of pipes known to Angular.
 *
 * If you are writing a custom {@link Pipe}, you must extend this interface.
 *
 * #Example
 *
 * ```
 * class DoublePipe extends Pipe {
 *  supports(obj) {
 *    return true;
 *  }
 *
 *  transform(value) {
 *    return `${value}${value}`;
 *  }
 * }
 * ```
 *
 * @exportedAs angular2/pipes
 */
export class Pipe {
  supports(obj):boolean {return false;}
  onDestroy() {}
  transform(value:any):any {return null;}
}
