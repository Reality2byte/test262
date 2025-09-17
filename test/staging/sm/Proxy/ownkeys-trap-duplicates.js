/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Scripted proxies' [[OwnPropertyKeys]] should not throw if the trap implementation returns duplicate properties and the object is non-extensible or has non-configurable properties. Revised (bug 1389752): Throw TypeError for duplicate properties.
esid: pending
---*/

var target = Object.preventExtensions({ a: 1 });
var proxy = new Proxy(target, { ownKeys(t) { return ["a", "a"]; } });
assert.throws(TypeError, () => Object.getOwnPropertyNames(proxy));

target = Object.freeze({ a: 1 });
proxy = new Proxy(target, { ownKeys(t) { return ["a", "a"]; } });
assert.throws(TypeError, () => Object.getOwnPropertyNames(proxy));
