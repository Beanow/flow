//@flow
type T = {};
opaque type T: {} = {};

function test(x: {}): {} {}
class A {}
interface B {}
declare class C {}
declare interface D {}

type Nested = { x: {},  };
type Exact = {| |};

type Generic<T: {}> = T;
opaque type Generic<T: {}> = T;

class A {
  static x: {} = {}
}

type T = {
  a: number,
  b: string,
  c: {},
  d: string,
};
type U = {
  a: number,
  b: {},
  c: { x : {},  },
  d: { x: { y :{},  },  },
};

// We should also make sure objects already using this syntax aren't broken by the codemod
type T = {...};
opaque type T: {...} = {...};

function test(x: {...}): {...} {}
class A {}
interface B {}
declare class C {}
declare interface D {}

type Nested = { x: {...}, ... };
type Exact = {| |};

type Generic<T: {...}> = T;
opaque type Generic<T: {...}> = T;

class A {
  static x: {...} = {}
}

type T = {
  a: number,
  b: string,
  c: {...},
  d: string,
  ...
};
type U = {
  a: number,
  b: {...},
  c: { x : {...}, ... },
  d: { x: { y :{...}, ... }, ... },
  ...
};
