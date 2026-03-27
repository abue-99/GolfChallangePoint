
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PlayerProfile
 * 
 */
export type PlayerProfile = $Result.DefaultSelection<Prisma.$PlayerProfilePayload>
/**
 * Model CoachPlayerLink
 * 
 */
export type CoachPlayerLink = $Result.DefaultSelection<Prisma.$CoachPlayerLinkPayload>
/**
 * Model TaskTemplate
 * 
 */
export type TaskTemplate = $Result.DefaultSelection<Prisma.$TaskTemplatePayload>
/**
 * Model CalendarEvent
 * 
 */
export type CalendarEvent = $Result.DefaultSelection<Prisma.$CalendarEventPayload>
/**
 * Model TaskLog
 * 
 */
export type TaskLog = $Result.DefaultSelection<Prisma.$TaskLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  COACH: 'COACH',
  PLAYER: 'PLAYER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EventStatus: {
  PLANNED: 'PLANNED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerProfile`: Exposes CRUD operations for the **PlayerProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerProfiles
    * const playerProfiles = await prisma.playerProfile.findMany()
    * ```
    */
  get playerProfile(): Prisma.PlayerProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coachPlayerLink`: Exposes CRUD operations for the **CoachPlayerLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachPlayerLinks
    * const coachPlayerLinks = await prisma.coachPlayerLink.findMany()
    * ```
    */
  get coachPlayerLink(): Prisma.CoachPlayerLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskTemplate`: Exposes CRUD operations for the **TaskTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskTemplates
    * const taskTemplates = await prisma.taskTemplate.findMany()
    * ```
    */
  get taskTemplate(): Prisma.TaskTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarEvent`: Exposes CRUD operations for the **CalendarEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarEvents
    * const calendarEvents = await prisma.calendarEvent.findMany()
    * ```
    */
  get calendarEvent(): Prisma.CalendarEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskLog`: Exposes CRUD operations for the **TaskLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskLogs
    * const taskLogs = await prisma.taskLog.findMany()
    * ```
    */
  get taskLog(): Prisma.TaskLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PlayerProfile: 'PlayerProfile',
    CoachPlayerLink: 'CoachPlayerLink',
    TaskTemplate: 'TaskTemplate',
    CalendarEvent: 'CalendarEvent',
    TaskLog: 'TaskLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "playerProfile" | "coachPlayerLink" | "taskTemplate" | "calendarEvent" | "taskLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PlayerProfile: {
        payload: Prisma.$PlayerProfilePayload<ExtArgs>
        fields: Prisma.PlayerProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          findFirst: {
            args: Prisma.PlayerProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          findMany: {
            args: Prisma.PlayerProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          create: {
            args: Prisma.PlayerProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          createMany: {
            args: Prisma.PlayerProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          delete: {
            args: Prisma.PlayerProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          update: {
            args: Prisma.PlayerProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          deleteMany: {
            args: Prisma.PlayerProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>[]
          }
          upsert: {
            args: Prisma.PlayerProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerProfilePayload>
          }
          aggregate: {
            args: Prisma.PlayerProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerProfile>
          }
          groupBy: {
            args: Prisma.PlayerProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerProfileCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerProfileCountAggregateOutputType> | number
          }
        }
      }
      CoachPlayerLink: {
        payload: Prisma.$CoachPlayerLinkPayload<ExtArgs>
        fields: Prisma.CoachPlayerLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachPlayerLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachPlayerLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>
          }
          findFirst: {
            args: Prisma.CoachPlayerLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachPlayerLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>
          }
          findMany: {
            args: Prisma.CoachPlayerLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>[]
          }
          create: {
            args: Prisma.CoachPlayerLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>
          }
          createMany: {
            args: Prisma.CoachPlayerLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachPlayerLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>[]
          }
          delete: {
            args: Prisma.CoachPlayerLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>
          }
          update: {
            args: Prisma.CoachPlayerLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>
          }
          deleteMany: {
            args: Prisma.CoachPlayerLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachPlayerLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachPlayerLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>[]
          }
          upsert: {
            args: Prisma.CoachPlayerLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPlayerLinkPayload>
          }
          aggregate: {
            args: Prisma.CoachPlayerLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachPlayerLink>
          }
          groupBy: {
            args: Prisma.CoachPlayerLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachPlayerLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachPlayerLinkCountArgs<ExtArgs>
            result: $Utils.Optional<CoachPlayerLinkCountAggregateOutputType> | number
          }
        }
      }
      TaskTemplate: {
        payload: Prisma.$TaskTemplatePayload<ExtArgs>
        fields: Prisma.TaskTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>
          }
          findFirst: {
            args: Prisma.TaskTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>
          }
          findMany: {
            args: Prisma.TaskTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>[]
          }
          create: {
            args: Prisma.TaskTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>
          }
          createMany: {
            args: Prisma.TaskTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>[]
          }
          delete: {
            args: Prisma.TaskTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>
          }
          update: {
            args: Prisma.TaskTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>
          }
          deleteMany: {
            args: Prisma.TaskTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>[]
          }
          upsert: {
            args: Prisma.TaskTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskTemplatePayload>
          }
          aggregate: {
            args: Prisma.TaskTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskTemplate>
          }
          groupBy: {
            args: Prisma.TaskTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TaskTemplateCountAggregateOutputType> | number
          }
        }
      }
      CalendarEvent: {
        payload: Prisma.$CalendarEventPayload<ExtArgs>
        fields: Prisma.CalendarEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findFirst: {
            args: Prisma.CalendarEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findMany: {
            args: Prisma.CalendarEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          create: {
            args: Prisma.CalendarEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          createMany: {
            args: Prisma.CalendarEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          delete: {
            args: Prisma.CalendarEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          update: {
            args: Prisma.CalendarEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          deleteMany: {
            args: Prisma.CalendarEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          upsert: {
            args: Prisma.CalendarEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          aggregate: {
            args: Prisma.CalendarEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarEvent>
          }
          groupBy: {
            args: Prisma.CalendarEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarEventCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventCountAggregateOutputType> | number
          }
        }
      }
      TaskLog: {
        payload: Prisma.$TaskLogPayload<ExtArgs>
        fields: Prisma.TaskLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          findFirst: {
            args: Prisma.TaskLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          findMany: {
            args: Prisma.TaskLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          create: {
            args: Prisma.TaskLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          createMany: {
            args: Prisma.TaskLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          delete: {
            args: Prisma.TaskLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          update: {
            args: Prisma.TaskLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          deleteMany: {
            args: Prisma.TaskLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>[]
          }
          upsert: {
            args: Prisma.TaskLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLogPayload>
          }
          aggregate: {
            args: Prisma.TaskLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskLog>
          }
          groupBy: {
            args: Prisma.TaskLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskLogCountArgs<ExtArgs>
            result: $Utils.Optional<TaskLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    playerProfile?: PlayerProfileOmit
    coachPlayerLink?: CoachPlayerLinkOmit
    taskTemplate?: TaskTemplateOmit
    calendarEvent?: CalendarEventOmit
    taskLog?: TaskLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    coachedPlayers: number
    coachLinks: number
    playerLinks: number
    taskTemplates: number
    calendarEvents: number
    taskLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coachedPlayers?: boolean | UserCountOutputTypeCountCoachedPlayersArgs
    coachLinks?: boolean | UserCountOutputTypeCountCoachLinksArgs
    playerLinks?: boolean | UserCountOutputTypeCountPlayerLinksArgs
    taskTemplates?: boolean | UserCountOutputTypeCountTaskTemplatesArgs
    calendarEvents?: boolean | UserCountOutputTypeCountCalendarEventsArgs
    taskLogs?: boolean | UserCountOutputTypeCountTaskLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoachedPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoachLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachPlayerLinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlayerLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachPlayerLinkWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCalendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
  }


  /**
   * Count Type TaskTemplateCountOutputType
   */

  export type TaskTemplateCountOutputType = {
    calendarEvents: number
  }

  export type TaskTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendarEvents?: boolean | TaskTemplateCountOutputTypeCountCalendarEventsArgs
  }

  // Custom InputTypes
  /**
   * TaskTemplateCountOutputType without action
   */
  export type TaskTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplateCountOutputType
     */
    select?: TaskTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskTemplateCountOutputType without action
   */
  export type TaskTemplateCountOutputTypeCountCalendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }


  /**
   * Count Type CalendarEventCountOutputType
   */

  export type CalendarEventCountOutputType = {
    taskLogs: number
  }

  export type CalendarEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskLogs?: boolean | CalendarEventCountOutputTypeCountTaskLogsArgs
  }

  // Custom InputTypes
  /**
   * CalendarEventCountOutputType without action
   */
  export type CalendarEventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEventCountOutputType
     */
    select?: CalendarEventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalendarEventCountOutputType without action
   */
  export type CalendarEventCountOutputTypeCountTaskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    role: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    role?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    role: $Enums.Role
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playerProfile?: boolean | User$playerProfileArgs<ExtArgs>
    coachedPlayers?: boolean | User$coachedPlayersArgs<ExtArgs>
    coachLinks?: boolean | User$coachLinksArgs<ExtArgs>
    playerLinks?: boolean | User$playerLinksArgs<ExtArgs>
    taskTemplates?: boolean | User$taskTemplatesArgs<ExtArgs>
    calendarEvents?: boolean | User$calendarEventsArgs<ExtArgs>
    taskLogs?: boolean | User$taskLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "role" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playerProfile?: boolean | User$playerProfileArgs<ExtArgs>
    coachedPlayers?: boolean | User$coachedPlayersArgs<ExtArgs>
    coachLinks?: boolean | User$coachLinksArgs<ExtArgs>
    playerLinks?: boolean | User$playerLinksArgs<ExtArgs>
    taskTemplates?: boolean | User$taskTemplatesArgs<ExtArgs>
    calendarEvents?: boolean | User$calendarEventsArgs<ExtArgs>
    taskLogs?: boolean | User$taskLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      playerProfile: Prisma.$PlayerProfilePayload<ExtArgs> | null
      coachedPlayers: Prisma.$PlayerProfilePayload<ExtArgs>[]
      coachLinks: Prisma.$CoachPlayerLinkPayload<ExtArgs>[]
      playerLinks: Prisma.$CoachPlayerLinkPayload<ExtArgs>[]
      taskTemplates: Prisma.$TaskTemplatePayload<ExtArgs>[]
      calendarEvents: Prisma.$CalendarEventPayload<ExtArgs>[]
      taskLogs: Prisma.$TaskLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      role: $Enums.Role
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playerProfile<T extends User$playerProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$playerProfileArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    coachedPlayers<T extends User$coachedPlayersArgs<ExtArgs> = {}>(args?: Subset<T, User$coachedPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coachLinks<T extends User$coachLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$coachLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playerLinks<T extends User$playerLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$playerLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskTemplates<T extends User$taskTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$taskTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendarEvents<T extends User$calendarEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskLogs<T extends User$taskLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$taskLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.playerProfile
   */
  export type User$playerProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    where?: PlayerProfileWhereInput
  }

  /**
   * User.coachedPlayers
   */
  export type User$coachedPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    where?: PlayerProfileWhereInput
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    cursor?: PlayerProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * User.coachLinks
   */
  export type User$coachLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    where?: CoachPlayerLinkWhereInput
    orderBy?: CoachPlayerLinkOrderByWithRelationInput | CoachPlayerLinkOrderByWithRelationInput[]
    cursor?: CoachPlayerLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachPlayerLinkScalarFieldEnum | CoachPlayerLinkScalarFieldEnum[]
  }

  /**
   * User.playerLinks
   */
  export type User$playerLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    where?: CoachPlayerLinkWhereInput
    orderBy?: CoachPlayerLinkOrderByWithRelationInput | CoachPlayerLinkOrderByWithRelationInput[]
    cursor?: CoachPlayerLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachPlayerLinkScalarFieldEnum | CoachPlayerLinkScalarFieldEnum[]
  }

  /**
   * User.taskTemplates
   */
  export type User$taskTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    where?: TaskTemplateWhereInput
    orderBy?: TaskTemplateOrderByWithRelationInput | TaskTemplateOrderByWithRelationInput[]
    cursor?: TaskTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskTemplateScalarFieldEnum | TaskTemplateScalarFieldEnum[]
  }

  /**
   * User.calendarEvents
   */
  export type User$calendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    cursor?: CalendarEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * User.taskLogs
   */
  export type User$taskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    cursor?: TaskLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PlayerProfile
   */

  export type AggregatePlayerProfile = {
    _count: PlayerProfileCountAggregateOutputType | null
    _avg: PlayerProfileAvgAggregateOutputType | null
    _sum: PlayerProfileSumAggregateOutputType | null
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  export type PlayerProfileAvgAggregateOutputType = {
    golfHandicap: number | null
  }

  export type PlayerProfileSumAggregateOutputType = {
    golfHandicap: number | null
  }

  export type PlayerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    golfHandicap: number | null
    coachId: string | null
  }

  export type PlayerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    golfHandicap: number | null
    coachId: string | null
  }

  export type PlayerProfileCountAggregateOutputType = {
    id: number
    userId: number
    golfHandicap: number
    coachId: number
    _all: number
  }


  export type PlayerProfileAvgAggregateInputType = {
    golfHandicap?: true
  }

  export type PlayerProfileSumAggregateInputType = {
    golfHandicap?: true
  }

  export type PlayerProfileMinAggregateInputType = {
    id?: true
    userId?: true
    golfHandicap?: true
    coachId?: true
  }

  export type PlayerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    golfHandicap?: true
    coachId?: true
  }

  export type PlayerProfileCountAggregateInputType = {
    id?: true
    userId?: true
    golfHandicap?: true
    coachId?: true
    _all?: true
  }

  export type PlayerProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerProfile to aggregate.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerProfiles
    **/
    _count?: true | PlayerProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type GetPlayerProfileAggregateType<T extends PlayerProfileAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerProfile[P]>
      : GetScalarType<T[P], AggregatePlayerProfile[P]>
  }




  export type PlayerProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerProfileWhereInput
    orderBy?: PlayerProfileOrderByWithAggregationInput | PlayerProfileOrderByWithAggregationInput[]
    by: PlayerProfileScalarFieldEnum[] | PlayerProfileScalarFieldEnum
    having?: PlayerProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerProfileCountAggregateInputType | true
    _avg?: PlayerProfileAvgAggregateInputType
    _sum?: PlayerProfileSumAggregateInputType
    _min?: PlayerProfileMinAggregateInputType
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type PlayerProfileGroupByOutputType = {
    id: string
    userId: string
    golfHandicap: number | null
    coachId: string | null
    _count: PlayerProfileCountAggregateOutputType | null
    _avg: PlayerProfileAvgAggregateOutputType | null
    _sum: PlayerProfileSumAggregateOutputType | null
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  type GetPlayerProfileGroupByPayload<T extends PlayerProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerProfileGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerProfileGroupByOutputType[P]>
        }
      >
    >


  export type PlayerProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    golfHandicap?: boolean
    coachId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | PlayerProfile$coachArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    golfHandicap?: boolean
    coachId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | PlayerProfile$coachArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    golfHandicap?: boolean
    coachId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | PlayerProfile$coachArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    golfHandicap?: boolean
    coachId?: boolean
  }

  export type PlayerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "golfHandicap" | "coachId", ExtArgs["result"]["playerProfile"]>
  export type PlayerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | PlayerProfile$coachArgs<ExtArgs>
  }
  export type PlayerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | PlayerProfile$coachArgs<ExtArgs>
  }
  export type PlayerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | PlayerProfile$coachArgs<ExtArgs>
  }

  export type $PlayerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      coach: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      golfHandicap: number | null
      coachId: string | null
    }, ExtArgs["result"]["playerProfile"]>
    composites: {}
  }

  type PlayerProfileGetPayload<S extends boolean | null | undefined | PlayerProfileDefaultArgs> = $Result.GetResult<Prisma.$PlayerProfilePayload, S>

  type PlayerProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerProfileCountAggregateInputType | true
    }

  export interface PlayerProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerProfile'], meta: { name: 'PlayerProfile' } }
    /**
     * Find zero or one PlayerProfile that matches the filter.
     * @param {PlayerProfileFindUniqueArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerProfileFindUniqueArgs>(args: SelectSubset<T, PlayerProfileFindUniqueArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerProfileFindUniqueOrThrowArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindFirstArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerProfileFindFirstArgs>(args?: SelectSubset<T, PlayerProfileFindFirstArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindFirstOrThrowArgs} args - Arguments to find a PlayerProfile
     * @example
     * // Get one PlayerProfile
     * const playerProfile = await prisma.playerProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerProfiles
     * const playerProfiles = await prisma.playerProfile.findMany()
     * 
     * // Get first 10 PlayerProfiles
     * const playerProfiles = await prisma.playerProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerProfileFindManyArgs>(args?: SelectSubset<T, PlayerProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerProfile.
     * @param {PlayerProfileCreateArgs} args - Arguments to create a PlayerProfile.
     * @example
     * // Create one PlayerProfile
     * const PlayerProfile = await prisma.playerProfile.create({
     *   data: {
     *     // ... data to create a PlayerProfile
     *   }
     * })
     * 
     */
    create<T extends PlayerProfileCreateArgs>(args: SelectSubset<T, PlayerProfileCreateArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerProfiles.
     * @param {PlayerProfileCreateManyArgs} args - Arguments to create many PlayerProfiles.
     * @example
     * // Create many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerProfileCreateManyArgs>(args?: SelectSubset<T, PlayerProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerProfiles and returns the data saved in the database.
     * @param {PlayerProfileCreateManyAndReturnArgs} args - Arguments to create many PlayerProfiles.
     * @example
     * // Create many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerProfiles and only return the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerProfile.
     * @param {PlayerProfileDeleteArgs} args - Arguments to delete one PlayerProfile.
     * @example
     * // Delete one PlayerProfile
     * const PlayerProfile = await prisma.playerProfile.delete({
     *   where: {
     *     // ... filter to delete one PlayerProfile
     *   }
     * })
     * 
     */
    delete<T extends PlayerProfileDeleteArgs>(args: SelectSubset<T, PlayerProfileDeleteArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerProfile.
     * @param {PlayerProfileUpdateArgs} args - Arguments to update one PlayerProfile.
     * @example
     * // Update one PlayerProfile
     * const playerProfile = await prisma.playerProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerProfileUpdateArgs>(args: SelectSubset<T, PlayerProfileUpdateArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerProfiles.
     * @param {PlayerProfileDeleteManyArgs} args - Arguments to filter PlayerProfiles to delete.
     * @example
     * // Delete a few PlayerProfiles
     * const { count } = await prisma.playerProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerProfileDeleteManyArgs>(args?: SelectSubset<T, PlayerProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerProfileUpdateManyArgs>(args: SelectSubset<T, PlayerProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerProfiles and returns the data updated in the database.
     * @param {PlayerProfileUpdateManyAndReturnArgs} args - Arguments to update many PlayerProfiles.
     * @example
     * // Update many PlayerProfiles
     * const playerProfile = await prisma.playerProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerProfiles and only return the `id`
     * const playerProfileWithIdOnly = await prisma.playerProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerProfile.
     * @param {PlayerProfileUpsertArgs} args - Arguments to update or create a PlayerProfile.
     * @example
     * // Update or create a PlayerProfile
     * const playerProfile = await prisma.playerProfile.upsert({
     *   create: {
     *     // ... data to create a PlayerProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerProfile we want to update
     *   }
     * })
     */
    upsert<T extends PlayerProfileUpsertArgs>(args: SelectSubset<T, PlayerProfileUpsertArgs<ExtArgs>>): Prisma__PlayerProfileClient<$Result.GetResult<Prisma.$PlayerProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileCountArgs} args - Arguments to filter PlayerProfiles to count.
     * @example
     * // Count the number of PlayerProfiles
     * const count = await prisma.playerProfile.count({
     *   where: {
     *     // ... the filter for the PlayerProfiles we want to count
     *   }
     * })
    **/
    count<T extends PlayerProfileCountArgs>(
      args?: Subset<T, PlayerProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerProfileAggregateArgs>(args: Subset<T, PlayerProfileAggregateArgs>): Prisma.PrismaPromise<GetPlayerProfileAggregateType<T>>

    /**
     * Group by PlayerProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerProfileGroupByArgs['orderBy'] }
        : { orderBy?: PlayerProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerProfile model
   */
  readonly fields: PlayerProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coach<T extends PlayerProfile$coachArgs<ExtArgs> = {}>(args?: Subset<T, PlayerProfile$coachArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerProfile model
   */
  interface PlayerProfileFieldRefs {
    readonly id: FieldRef<"PlayerProfile", 'String'>
    readonly userId: FieldRef<"PlayerProfile", 'String'>
    readonly golfHandicap: FieldRef<"PlayerProfile", 'Float'>
    readonly coachId: FieldRef<"PlayerProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayerProfile findUnique
   */
  export type PlayerProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile findUniqueOrThrow
   */
  export type PlayerProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile findFirst
   */
  export type PlayerProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile findFirstOrThrow
   */
  export type PlayerProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfile to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile findMany
   */
  export type PlayerProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter, which PlayerProfiles to fetch.
     */
    where?: PlayerProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerProfiles to fetch.
     */
    orderBy?: PlayerProfileOrderByWithRelationInput | PlayerProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerProfiles.
     */
    cursor?: PlayerProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerProfiles.
     */
    distinct?: PlayerProfileScalarFieldEnum | PlayerProfileScalarFieldEnum[]
  }

  /**
   * PlayerProfile create
   */
  export type PlayerProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerProfile.
     */
    data: XOR<PlayerProfileCreateInput, PlayerProfileUncheckedCreateInput>
  }

  /**
   * PlayerProfile createMany
   */
  export type PlayerProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerProfiles.
     */
    data: PlayerProfileCreateManyInput | PlayerProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerProfile createManyAndReturn
   */
  export type PlayerProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerProfiles.
     */
    data: PlayerProfileCreateManyInput | PlayerProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerProfile update
   */
  export type PlayerProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerProfile.
     */
    data: XOR<PlayerProfileUpdateInput, PlayerProfileUncheckedUpdateInput>
    /**
     * Choose, which PlayerProfile to update.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile updateMany
   */
  export type PlayerProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerProfiles.
     */
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyInput>
    /**
     * Filter which PlayerProfiles to update
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to update.
     */
    limit?: number
  }

  /**
   * PlayerProfile updateManyAndReturn
   */
  export type PlayerProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * The data used to update PlayerProfiles.
     */
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyInput>
    /**
     * Filter which PlayerProfiles to update
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerProfile upsert
   */
  export type PlayerProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerProfile to update in case it exists.
     */
    where: PlayerProfileWhereUniqueInput
    /**
     * In case the PlayerProfile found by the `where` argument doesn't exist, create a new PlayerProfile with this data.
     */
    create: XOR<PlayerProfileCreateInput, PlayerProfileUncheckedCreateInput>
    /**
     * In case the PlayerProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerProfileUpdateInput, PlayerProfileUncheckedUpdateInput>
  }

  /**
   * PlayerProfile delete
   */
  export type PlayerProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
    /**
     * Filter which PlayerProfile to delete.
     */
    where: PlayerProfileWhereUniqueInput
  }

  /**
   * PlayerProfile deleteMany
   */
  export type PlayerProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerProfiles to delete
     */
    where?: PlayerProfileWhereInput
    /**
     * Limit how many PlayerProfiles to delete.
     */
    limit?: number
  }

  /**
   * PlayerProfile.coach
   */
  export type PlayerProfile$coachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PlayerProfile without action
   */
  export type PlayerProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerProfile
     */
    select?: PlayerProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerProfile
     */
    omit?: PlayerProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerProfileInclude<ExtArgs> | null
  }


  /**
   * Model CoachPlayerLink
   */

  export type AggregateCoachPlayerLink = {
    _count: CoachPlayerLinkCountAggregateOutputType | null
    _min: CoachPlayerLinkMinAggregateOutputType | null
    _max: CoachPlayerLinkMaxAggregateOutputType | null
  }

  export type CoachPlayerLinkMinAggregateOutputType = {
    id: string | null
    coachId: string | null
    playerId: string | null
  }

  export type CoachPlayerLinkMaxAggregateOutputType = {
    id: string | null
    coachId: string | null
    playerId: string | null
  }

  export type CoachPlayerLinkCountAggregateOutputType = {
    id: number
    coachId: number
    playerId: number
    _all: number
  }


  export type CoachPlayerLinkMinAggregateInputType = {
    id?: true
    coachId?: true
    playerId?: true
  }

  export type CoachPlayerLinkMaxAggregateInputType = {
    id?: true
    coachId?: true
    playerId?: true
  }

  export type CoachPlayerLinkCountAggregateInputType = {
    id?: true
    coachId?: true
    playerId?: true
    _all?: true
  }

  export type CoachPlayerLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachPlayerLink to aggregate.
     */
    where?: CoachPlayerLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachPlayerLinks to fetch.
     */
    orderBy?: CoachPlayerLinkOrderByWithRelationInput | CoachPlayerLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachPlayerLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachPlayerLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachPlayerLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachPlayerLinks
    **/
    _count?: true | CoachPlayerLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachPlayerLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachPlayerLinkMaxAggregateInputType
  }

  export type GetCoachPlayerLinkAggregateType<T extends CoachPlayerLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachPlayerLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachPlayerLink[P]>
      : GetScalarType<T[P], AggregateCoachPlayerLink[P]>
  }




  export type CoachPlayerLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachPlayerLinkWhereInput
    orderBy?: CoachPlayerLinkOrderByWithAggregationInput | CoachPlayerLinkOrderByWithAggregationInput[]
    by: CoachPlayerLinkScalarFieldEnum[] | CoachPlayerLinkScalarFieldEnum
    having?: CoachPlayerLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachPlayerLinkCountAggregateInputType | true
    _min?: CoachPlayerLinkMinAggregateInputType
    _max?: CoachPlayerLinkMaxAggregateInputType
  }

  export type CoachPlayerLinkGroupByOutputType = {
    id: string
    coachId: string
    playerId: string
    _count: CoachPlayerLinkCountAggregateOutputType | null
    _min: CoachPlayerLinkMinAggregateOutputType | null
    _max: CoachPlayerLinkMaxAggregateOutputType | null
  }

  type GetCoachPlayerLinkGroupByPayload<T extends CoachPlayerLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachPlayerLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachPlayerLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachPlayerLinkGroupByOutputType[P]>
            : GetScalarType<T[P], CoachPlayerLinkGroupByOutputType[P]>
        }
      >
    >


  export type CoachPlayerLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    playerId?: boolean
    coach?: boolean | UserDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachPlayerLink"]>

  export type CoachPlayerLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    playerId?: boolean
    coach?: boolean | UserDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachPlayerLink"]>

  export type CoachPlayerLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachId?: boolean
    playerId?: boolean
    coach?: boolean | UserDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachPlayerLink"]>

  export type CoachPlayerLinkSelectScalar = {
    id?: boolean
    coachId?: boolean
    playerId?: boolean
  }

  export type CoachPlayerLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "coachId" | "playerId", ExtArgs["result"]["coachPlayerLink"]>
  export type CoachPlayerLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | UserDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachPlayerLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | UserDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachPlayerLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | UserDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoachPlayerLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachPlayerLink"
    objects: {
      coach: Prisma.$UserPayload<ExtArgs>
      player: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coachId: string
      playerId: string
    }, ExtArgs["result"]["coachPlayerLink"]>
    composites: {}
  }

  type CoachPlayerLinkGetPayload<S extends boolean | null | undefined | CoachPlayerLinkDefaultArgs> = $Result.GetResult<Prisma.$CoachPlayerLinkPayload, S>

  type CoachPlayerLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachPlayerLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachPlayerLinkCountAggregateInputType | true
    }

  export interface CoachPlayerLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachPlayerLink'], meta: { name: 'CoachPlayerLink' } }
    /**
     * Find zero or one CoachPlayerLink that matches the filter.
     * @param {CoachPlayerLinkFindUniqueArgs} args - Arguments to find a CoachPlayerLink
     * @example
     * // Get one CoachPlayerLink
     * const coachPlayerLink = await prisma.coachPlayerLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachPlayerLinkFindUniqueArgs>(args: SelectSubset<T, CoachPlayerLinkFindUniqueArgs<ExtArgs>>): Prisma__CoachPlayerLinkClient<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoachPlayerLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachPlayerLinkFindUniqueOrThrowArgs} args - Arguments to find a CoachPlayerLink
     * @example
     * // Get one CoachPlayerLink
     * const coachPlayerLink = await prisma.coachPlayerLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachPlayerLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachPlayerLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachPlayerLinkClient<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachPlayerLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachPlayerLinkFindFirstArgs} args - Arguments to find a CoachPlayerLink
     * @example
     * // Get one CoachPlayerLink
     * const coachPlayerLink = await prisma.coachPlayerLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachPlayerLinkFindFirstArgs>(args?: SelectSubset<T, CoachPlayerLinkFindFirstArgs<ExtArgs>>): Prisma__CoachPlayerLinkClient<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachPlayerLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachPlayerLinkFindFirstOrThrowArgs} args - Arguments to find a CoachPlayerLink
     * @example
     * // Get one CoachPlayerLink
     * const coachPlayerLink = await prisma.coachPlayerLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachPlayerLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachPlayerLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachPlayerLinkClient<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoachPlayerLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachPlayerLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachPlayerLinks
     * const coachPlayerLinks = await prisma.coachPlayerLink.findMany()
     * 
     * // Get first 10 CoachPlayerLinks
     * const coachPlayerLinks = await prisma.coachPlayerLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachPlayerLinkWithIdOnly = await prisma.coachPlayerLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachPlayerLinkFindManyArgs>(args?: SelectSubset<T, CoachPlayerLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoachPlayerLink.
     * @param {CoachPlayerLinkCreateArgs} args - Arguments to create a CoachPlayerLink.
     * @example
     * // Create one CoachPlayerLink
     * const CoachPlayerLink = await prisma.coachPlayerLink.create({
     *   data: {
     *     // ... data to create a CoachPlayerLink
     *   }
     * })
     * 
     */
    create<T extends CoachPlayerLinkCreateArgs>(args: SelectSubset<T, CoachPlayerLinkCreateArgs<ExtArgs>>): Prisma__CoachPlayerLinkClient<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoachPlayerLinks.
     * @param {CoachPlayerLinkCreateManyArgs} args - Arguments to create many CoachPlayerLinks.
     * @example
     * // Create many CoachPlayerLinks
     * const coachPlayerLink = await prisma.coachPlayerLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachPlayerLinkCreateManyArgs>(args?: SelectSubset<T, CoachPlayerLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachPlayerLinks and returns the data saved in the database.
     * @param {CoachPlayerLinkCreateManyAndReturnArgs} args - Arguments to create many CoachPlayerLinks.
     * @example
     * // Create many CoachPlayerLinks
     * const coachPlayerLink = await prisma.coachPlayerLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachPlayerLinks and only return the `id`
     * const coachPlayerLinkWithIdOnly = await prisma.coachPlayerLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachPlayerLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachPlayerLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoachPlayerLink.
     * @param {CoachPlayerLinkDeleteArgs} args - Arguments to delete one CoachPlayerLink.
     * @example
     * // Delete one CoachPlayerLink
     * const CoachPlayerLink = await prisma.coachPlayerLink.delete({
     *   where: {
     *     // ... filter to delete one CoachPlayerLink
     *   }
     * })
     * 
     */
    delete<T extends CoachPlayerLinkDeleteArgs>(args: SelectSubset<T, CoachPlayerLinkDeleteArgs<ExtArgs>>): Prisma__CoachPlayerLinkClient<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoachPlayerLink.
     * @param {CoachPlayerLinkUpdateArgs} args - Arguments to update one CoachPlayerLink.
     * @example
     * // Update one CoachPlayerLink
     * const coachPlayerLink = await prisma.coachPlayerLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachPlayerLinkUpdateArgs>(args: SelectSubset<T, CoachPlayerLinkUpdateArgs<ExtArgs>>): Prisma__CoachPlayerLinkClient<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoachPlayerLinks.
     * @param {CoachPlayerLinkDeleteManyArgs} args - Arguments to filter CoachPlayerLinks to delete.
     * @example
     * // Delete a few CoachPlayerLinks
     * const { count } = await prisma.coachPlayerLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachPlayerLinkDeleteManyArgs>(args?: SelectSubset<T, CoachPlayerLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachPlayerLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachPlayerLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachPlayerLinks
     * const coachPlayerLink = await prisma.coachPlayerLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachPlayerLinkUpdateManyArgs>(args: SelectSubset<T, CoachPlayerLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachPlayerLinks and returns the data updated in the database.
     * @param {CoachPlayerLinkUpdateManyAndReturnArgs} args - Arguments to update many CoachPlayerLinks.
     * @example
     * // Update many CoachPlayerLinks
     * const coachPlayerLink = await prisma.coachPlayerLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoachPlayerLinks and only return the `id`
     * const coachPlayerLinkWithIdOnly = await prisma.coachPlayerLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoachPlayerLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachPlayerLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoachPlayerLink.
     * @param {CoachPlayerLinkUpsertArgs} args - Arguments to update or create a CoachPlayerLink.
     * @example
     * // Update or create a CoachPlayerLink
     * const coachPlayerLink = await prisma.coachPlayerLink.upsert({
     *   create: {
     *     // ... data to create a CoachPlayerLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachPlayerLink we want to update
     *   }
     * })
     */
    upsert<T extends CoachPlayerLinkUpsertArgs>(args: SelectSubset<T, CoachPlayerLinkUpsertArgs<ExtArgs>>): Prisma__CoachPlayerLinkClient<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoachPlayerLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachPlayerLinkCountArgs} args - Arguments to filter CoachPlayerLinks to count.
     * @example
     * // Count the number of CoachPlayerLinks
     * const count = await prisma.coachPlayerLink.count({
     *   where: {
     *     // ... the filter for the CoachPlayerLinks we want to count
     *   }
     * })
    **/
    count<T extends CoachPlayerLinkCountArgs>(
      args?: Subset<T, CoachPlayerLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachPlayerLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachPlayerLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachPlayerLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoachPlayerLinkAggregateArgs>(args: Subset<T, CoachPlayerLinkAggregateArgs>): Prisma.PrismaPromise<GetCoachPlayerLinkAggregateType<T>>

    /**
     * Group by CoachPlayerLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachPlayerLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoachPlayerLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachPlayerLinkGroupByArgs['orderBy'] }
        : { orderBy?: CoachPlayerLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoachPlayerLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachPlayerLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachPlayerLink model
   */
  readonly fields: CoachPlayerLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachPlayerLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachPlayerLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoachPlayerLink model
   */
  interface CoachPlayerLinkFieldRefs {
    readonly id: FieldRef<"CoachPlayerLink", 'String'>
    readonly coachId: FieldRef<"CoachPlayerLink", 'String'>
    readonly playerId: FieldRef<"CoachPlayerLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CoachPlayerLink findUnique
   */
  export type CoachPlayerLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * Filter, which CoachPlayerLink to fetch.
     */
    where: CoachPlayerLinkWhereUniqueInput
  }

  /**
   * CoachPlayerLink findUniqueOrThrow
   */
  export type CoachPlayerLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * Filter, which CoachPlayerLink to fetch.
     */
    where: CoachPlayerLinkWhereUniqueInput
  }

  /**
   * CoachPlayerLink findFirst
   */
  export type CoachPlayerLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * Filter, which CoachPlayerLink to fetch.
     */
    where?: CoachPlayerLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachPlayerLinks to fetch.
     */
    orderBy?: CoachPlayerLinkOrderByWithRelationInput | CoachPlayerLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachPlayerLinks.
     */
    cursor?: CoachPlayerLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachPlayerLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachPlayerLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachPlayerLinks.
     */
    distinct?: CoachPlayerLinkScalarFieldEnum | CoachPlayerLinkScalarFieldEnum[]
  }

  /**
   * CoachPlayerLink findFirstOrThrow
   */
  export type CoachPlayerLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * Filter, which CoachPlayerLink to fetch.
     */
    where?: CoachPlayerLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachPlayerLinks to fetch.
     */
    orderBy?: CoachPlayerLinkOrderByWithRelationInput | CoachPlayerLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachPlayerLinks.
     */
    cursor?: CoachPlayerLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachPlayerLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachPlayerLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachPlayerLinks.
     */
    distinct?: CoachPlayerLinkScalarFieldEnum | CoachPlayerLinkScalarFieldEnum[]
  }

  /**
   * CoachPlayerLink findMany
   */
  export type CoachPlayerLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * Filter, which CoachPlayerLinks to fetch.
     */
    where?: CoachPlayerLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachPlayerLinks to fetch.
     */
    orderBy?: CoachPlayerLinkOrderByWithRelationInput | CoachPlayerLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachPlayerLinks.
     */
    cursor?: CoachPlayerLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachPlayerLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachPlayerLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachPlayerLinks.
     */
    distinct?: CoachPlayerLinkScalarFieldEnum | CoachPlayerLinkScalarFieldEnum[]
  }

  /**
   * CoachPlayerLink create
   */
  export type CoachPlayerLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachPlayerLink.
     */
    data: XOR<CoachPlayerLinkCreateInput, CoachPlayerLinkUncheckedCreateInput>
  }

  /**
   * CoachPlayerLink createMany
   */
  export type CoachPlayerLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachPlayerLinks.
     */
    data: CoachPlayerLinkCreateManyInput | CoachPlayerLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachPlayerLink createManyAndReturn
   */
  export type CoachPlayerLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * The data used to create many CoachPlayerLinks.
     */
    data: CoachPlayerLinkCreateManyInput | CoachPlayerLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachPlayerLink update
   */
  export type CoachPlayerLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachPlayerLink.
     */
    data: XOR<CoachPlayerLinkUpdateInput, CoachPlayerLinkUncheckedUpdateInput>
    /**
     * Choose, which CoachPlayerLink to update.
     */
    where: CoachPlayerLinkWhereUniqueInput
  }

  /**
   * CoachPlayerLink updateMany
   */
  export type CoachPlayerLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachPlayerLinks.
     */
    data: XOR<CoachPlayerLinkUpdateManyMutationInput, CoachPlayerLinkUncheckedUpdateManyInput>
    /**
     * Filter which CoachPlayerLinks to update
     */
    where?: CoachPlayerLinkWhereInput
    /**
     * Limit how many CoachPlayerLinks to update.
     */
    limit?: number
  }

  /**
   * CoachPlayerLink updateManyAndReturn
   */
  export type CoachPlayerLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * The data used to update CoachPlayerLinks.
     */
    data: XOR<CoachPlayerLinkUpdateManyMutationInput, CoachPlayerLinkUncheckedUpdateManyInput>
    /**
     * Filter which CoachPlayerLinks to update
     */
    where?: CoachPlayerLinkWhereInput
    /**
     * Limit how many CoachPlayerLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachPlayerLink upsert
   */
  export type CoachPlayerLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachPlayerLink to update in case it exists.
     */
    where: CoachPlayerLinkWhereUniqueInput
    /**
     * In case the CoachPlayerLink found by the `where` argument doesn't exist, create a new CoachPlayerLink with this data.
     */
    create: XOR<CoachPlayerLinkCreateInput, CoachPlayerLinkUncheckedCreateInput>
    /**
     * In case the CoachPlayerLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachPlayerLinkUpdateInput, CoachPlayerLinkUncheckedUpdateInput>
  }

  /**
   * CoachPlayerLink delete
   */
  export type CoachPlayerLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
    /**
     * Filter which CoachPlayerLink to delete.
     */
    where: CoachPlayerLinkWhereUniqueInput
  }

  /**
   * CoachPlayerLink deleteMany
   */
  export type CoachPlayerLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachPlayerLinks to delete
     */
    where?: CoachPlayerLinkWhereInput
    /**
     * Limit how many CoachPlayerLinks to delete.
     */
    limit?: number
  }

  /**
   * CoachPlayerLink without action
   */
  export type CoachPlayerLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachPlayerLink
     */
    select?: CoachPlayerLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachPlayerLink
     */
    omit?: CoachPlayerLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachPlayerLinkInclude<ExtArgs> | null
  }


  /**
   * Model TaskTemplate
   */

  export type AggregateTaskTemplate = {
    _count: TaskTemplateCountAggregateOutputType | null
    _min: TaskTemplateMinAggregateOutputType | null
    _max: TaskTemplateMaxAggregateOutputType | null
  }

  export type TaskTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    coachId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TaskTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    coachId: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type TaskTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    coachId: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type TaskTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coachId?: true
    isActive?: true
    createdAt?: true
  }

  export type TaskTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coachId?: true
    isActive?: true
    createdAt?: true
  }

  export type TaskTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    coachId?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type TaskTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTemplate to aggregate.
     */
    where?: TaskTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTemplates to fetch.
     */
    orderBy?: TaskTemplateOrderByWithRelationInput | TaskTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskTemplates
    **/
    _count?: true | TaskTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskTemplateMaxAggregateInputType
  }

  export type GetTaskTemplateAggregateType<T extends TaskTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskTemplate[P]>
      : GetScalarType<T[P], AggregateTaskTemplate[P]>
  }




  export type TaskTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTemplateWhereInput
    orderBy?: TaskTemplateOrderByWithAggregationInput | TaskTemplateOrderByWithAggregationInput[]
    by: TaskTemplateScalarFieldEnum[] | TaskTemplateScalarFieldEnum
    having?: TaskTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskTemplateCountAggregateInputType | true
    _min?: TaskTemplateMinAggregateInputType
    _max?: TaskTemplateMaxAggregateInputType
  }

  export type TaskTemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    coachId: string
    isActive: boolean
    createdAt: Date
    _count: TaskTemplateCountAggregateOutputType | null
    _min: TaskTemplateMinAggregateOutputType | null
    _max: TaskTemplateMaxAggregateOutputType | null
  }

  type GetTaskTemplateGroupByPayload<T extends TaskTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TaskTemplateGroupByOutputType[P]>
        }
      >
    >


  export type TaskTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coachId?: boolean
    isActive?: boolean
    createdAt?: boolean
    coach?: boolean | UserDefaultArgs<ExtArgs>
    calendarEvents?: boolean | TaskTemplate$calendarEventsArgs<ExtArgs>
    _count?: boolean | TaskTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTemplate"]>

  export type TaskTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coachId?: boolean
    isActive?: boolean
    createdAt?: boolean
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTemplate"]>

  export type TaskTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    coachId?: boolean
    isActive?: boolean
    createdAt?: boolean
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTemplate"]>

  export type TaskTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    coachId?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type TaskTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "coachId" | "isActive" | "createdAt", ExtArgs["result"]["taskTemplate"]>
  export type TaskTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | UserDefaultArgs<ExtArgs>
    calendarEvents?: boolean | TaskTemplate$calendarEventsArgs<ExtArgs>
    _count?: boolean | TaskTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskTemplate"
    objects: {
      coach: Prisma.$UserPayload<ExtArgs>
      calendarEvents: Prisma.$CalendarEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      coachId: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["taskTemplate"]>
    composites: {}
  }

  type TaskTemplateGetPayload<S extends boolean | null | undefined | TaskTemplateDefaultArgs> = $Result.GetResult<Prisma.$TaskTemplatePayload, S>

  type TaskTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskTemplateCountAggregateInputType | true
    }

  export interface TaskTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskTemplate'], meta: { name: 'TaskTemplate' } }
    /**
     * Find zero or one TaskTemplate that matches the filter.
     * @param {TaskTemplateFindUniqueArgs} args - Arguments to find a TaskTemplate
     * @example
     * // Get one TaskTemplate
     * const taskTemplate = await prisma.taskTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskTemplateFindUniqueArgs>(args: SelectSubset<T, TaskTemplateFindUniqueArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskTemplateFindUniqueOrThrowArgs} args - Arguments to find a TaskTemplate
     * @example
     * // Get one TaskTemplate
     * const taskTemplate = await prisma.taskTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTemplateFindFirstArgs} args - Arguments to find a TaskTemplate
     * @example
     * // Get one TaskTemplate
     * const taskTemplate = await prisma.taskTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskTemplateFindFirstArgs>(args?: SelectSubset<T, TaskTemplateFindFirstArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTemplateFindFirstOrThrowArgs} args - Arguments to find a TaskTemplate
     * @example
     * // Get one TaskTemplate
     * const taskTemplate = await prisma.taskTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskTemplates
     * const taskTemplates = await prisma.taskTemplate.findMany()
     * 
     * // Get first 10 TaskTemplates
     * const taskTemplates = await prisma.taskTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskTemplateWithIdOnly = await prisma.taskTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskTemplateFindManyArgs>(args?: SelectSubset<T, TaskTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskTemplate.
     * @param {TaskTemplateCreateArgs} args - Arguments to create a TaskTemplate.
     * @example
     * // Create one TaskTemplate
     * const TaskTemplate = await prisma.taskTemplate.create({
     *   data: {
     *     // ... data to create a TaskTemplate
     *   }
     * })
     * 
     */
    create<T extends TaskTemplateCreateArgs>(args: SelectSubset<T, TaskTemplateCreateArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskTemplates.
     * @param {TaskTemplateCreateManyArgs} args - Arguments to create many TaskTemplates.
     * @example
     * // Create many TaskTemplates
     * const taskTemplate = await prisma.taskTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskTemplateCreateManyArgs>(args?: SelectSubset<T, TaskTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskTemplates and returns the data saved in the database.
     * @param {TaskTemplateCreateManyAndReturnArgs} args - Arguments to create many TaskTemplates.
     * @example
     * // Create many TaskTemplates
     * const taskTemplate = await prisma.taskTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskTemplates and only return the `id`
     * const taskTemplateWithIdOnly = await prisma.taskTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskTemplate.
     * @param {TaskTemplateDeleteArgs} args - Arguments to delete one TaskTemplate.
     * @example
     * // Delete one TaskTemplate
     * const TaskTemplate = await prisma.taskTemplate.delete({
     *   where: {
     *     // ... filter to delete one TaskTemplate
     *   }
     * })
     * 
     */
    delete<T extends TaskTemplateDeleteArgs>(args: SelectSubset<T, TaskTemplateDeleteArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskTemplate.
     * @param {TaskTemplateUpdateArgs} args - Arguments to update one TaskTemplate.
     * @example
     * // Update one TaskTemplate
     * const taskTemplate = await prisma.taskTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskTemplateUpdateArgs>(args: SelectSubset<T, TaskTemplateUpdateArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskTemplates.
     * @param {TaskTemplateDeleteManyArgs} args - Arguments to filter TaskTemplates to delete.
     * @example
     * // Delete a few TaskTemplates
     * const { count } = await prisma.taskTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskTemplateDeleteManyArgs>(args?: SelectSubset<T, TaskTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskTemplates
     * const taskTemplate = await prisma.taskTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskTemplateUpdateManyArgs>(args: SelectSubset<T, TaskTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskTemplates and returns the data updated in the database.
     * @param {TaskTemplateUpdateManyAndReturnArgs} args - Arguments to update many TaskTemplates.
     * @example
     * // Update many TaskTemplates
     * const taskTemplate = await prisma.taskTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskTemplates and only return the `id`
     * const taskTemplateWithIdOnly = await prisma.taskTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskTemplate.
     * @param {TaskTemplateUpsertArgs} args - Arguments to update or create a TaskTemplate.
     * @example
     * // Update or create a TaskTemplate
     * const taskTemplate = await prisma.taskTemplate.upsert({
     *   create: {
     *     // ... data to create a TaskTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskTemplate we want to update
     *   }
     * })
     */
    upsert<T extends TaskTemplateUpsertArgs>(args: SelectSubset<T, TaskTemplateUpsertArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTemplateCountArgs} args - Arguments to filter TaskTemplates to count.
     * @example
     * // Count the number of TaskTemplates
     * const count = await prisma.taskTemplate.count({
     *   where: {
     *     // ... the filter for the TaskTemplates we want to count
     *   }
     * })
    **/
    count<T extends TaskTemplateCountArgs>(
      args?: Subset<T, TaskTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskTemplateAggregateArgs>(args: Subset<T, TaskTemplateAggregateArgs>): Prisma.PrismaPromise<GetTaskTemplateAggregateType<T>>

    /**
     * Group by TaskTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskTemplateGroupByArgs['orderBy'] }
        : { orderBy?: TaskTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskTemplate model
   */
  readonly fields: TaskTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    calendarEvents<T extends TaskTemplate$calendarEventsArgs<ExtArgs> = {}>(args?: Subset<T, TaskTemplate$calendarEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskTemplate model
   */
  interface TaskTemplateFieldRefs {
    readonly id: FieldRef<"TaskTemplate", 'String'>
    readonly name: FieldRef<"TaskTemplate", 'String'>
    readonly description: FieldRef<"TaskTemplate", 'String'>
    readonly coachId: FieldRef<"TaskTemplate", 'String'>
    readonly isActive: FieldRef<"TaskTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"TaskTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskTemplate findUnique
   */
  export type TaskTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TaskTemplate to fetch.
     */
    where: TaskTemplateWhereUniqueInput
  }

  /**
   * TaskTemplate findUniqueOrThrow
   */
  export type TaskTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TaskTemplate to fetch.
     */
    where: TaskTemplateWhereUniqueInput
  }

  /**
   * TaskTemplate findFirst
   */
  export type TaskTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TaskTemplate to fetch.
     */
    where?: TaskTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTemplates to fetch.
     */
    orderBy?: TaskTemplateOrderByWithRelationInput | TaskTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTemplates.
     */
    cursor?: TaskTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTemplates.
     */
    distinct?: TaskTemplateScalarFieldEnum | TaskTemplateScalarFieldEnum[]
  }

  /**
   * TaskTemplate findFirstOrThrow
   */
  export type TaskTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TaskTemplate to fetch.
     */
    where?: TaskTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTemplates to fetch.
     */
    orderBy?: TaskTemplateOrderByWithRelationInput | TaskTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskTemplates.
     */
    cursor?: TaskTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTemplates.
     */
    distinct?: TaskTemplateScalarFieldEnum | TaskTemplateScalarFieldEnum[]
  }

  /**
   * TaskTemplate findMany
   */
  export type TaskTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * Filter, which TaskTemplates to fetch.
     */
    where?: TaskTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskTemplates to fetch.
     */
    orderBy?: TaskTemplateOrderByWithRelationInput | TaskTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskTemplates.
     */
    cursor?: TaskTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskTemplates.
     */
    distinct?: TaskTemplateScalarFieldEnum | TaskTemplateScalarFieldEnum[]
  }

  /**
   * TaskTemplate create
   */
  export type TaskTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskTemplate.
     */
    data: XOR<TaskTemplateCreateInput, TaskTemplateUncheckedCreateInput>
  }

  /**
   * TaskTemplate createMany
   */
  export type TaskTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskTemplates.
     */
    data: TaskTemplateCreateManyInput | TaskTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskTemplate createManyAndReturn
   */
  export type TaskTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many TaskTemplates.
     */
    data: TaskTemplateCreateManyInput | TaskTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTemplate update
   */
  export type TaskTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskTemplate.
     */
    data: XOR<TaskTemplateUpdateInput, TaskTemplateUncheckedUpdateInput>
    /**
     * Choose, which TaskTemplate to update.
     */
    where: TaskTemplateWhereUniqueInput
  }

  /**
   * TaskTemplate updateMany
   */
  export type TaskTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskTemplates.
     */
    data: XOR<TaskTemplateUpdateManyMutationInput, TaskTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TaskTemplates to update
     */
    where?: TaskTemplateWhereInput
    /**
     * Limit how many TaskTemplates to update.
     */
    limit?: number
  }

  /**
   * TaskTemplate updateManyAndReturn
   */
  export type TaskTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * The data used to update TaskTemplates.
     */
    data: XOR<TaskTemplateUpdateManyMutationInput, TaskTemplateUncheckedUpdateManyInput>
    /**
     * Filter which TaskTemplates to update
     */
    where?: TaskTemplateWhereInput
    /**
     * Limit how many TaskTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskTemplate upsert
   */
  export type TaskTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskTemplate to update in case it exists.
     */
    where: TaskTemplateWhereUniqueInput
    /**
     * In case the TaskTemplate found by the `where` argument doesn't exist, create a new TaskTemplate with this data.
     */
    create: XOR<TaskTemplateCreateInput, TaskTemplateUncheckedCreateInput>
    /**
     * In case the TaskTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskTemplateUpdateInput, TaskTemplateUncheckedUpdateInput>
  }

  /**
   * TaskTemplate delete
   */
  export type TaskTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
    /**
     * Filter which TaskTemplate to delete.
     */
    where: TaskTemplateWhereUniqueInput
  }

  /**
   * TaskTemplate deleteMany
   */
  export type TaskTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskTemplates to delete
     */
    where?: TaskTemplateWhereInput
    /**
     * Limit how many TaskTemplates to delete.
     */
    limit?: number
  }

  /**
   * TaskTemplate.calendarEvents
   */
  export type TaskTemplate$calendarEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    cursor?: CalendarEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * TaskTemplate without action
   */
  export type TaskTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskTemplate
     */
    select?: TaskTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskTemplate
     */
    omit?: TaskTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskTemplateInclude<ExtArgs> | null
  }


  /**
   * Model CalendarEvent
   */

  export type AggregateCalendarEvent = {
    _count: CalendarEventCountAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  export type CalendarEventMinAggregateOutputType = {
    id: string | null
    taskTemplateId: string | null
    playerId: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.EventStatus | null
  }

  export type CalendarEventMaxAggregateOutputType = {
    id: string | null
    taskTemplateId: string | null
    playerId: string | null
    startDate: Date | null
    endDate: Date | null
    status: $Enums.EventStatus | null
  }

  export type CalendarEventCountAggregateOutputType = {
    id: number
    taskTemplateId: number
    playerId: number
    startDate: number
    endDate: number
    status: number
    _all: number
  }


  export type CalendarEventMinAggregateInputType = {
    id?: true
    taskTemplateId?: true
    playerId?: true
    startDate?: true
    endDate?: true
    status?: true
  }

  export type CalendarEventMaxAggregateInputType = {
    id?: true
    taskTemplateId?: true
    playerId?: true
    startDate?: true
    endDate?: true
    status?: true
  }

  export type CalendarEventCountAggregateInputType = {
    id?: true
    taskTemplateId?: true
    playerId?: true
    startDate?: true
    endDate?: true
    status?: true
    _all?: true
  }

  export type CalendarEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvent to aggregate.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarEvents
    **/
    _count?: true | CalendarEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarEventMaxAggregateInputType
  }

  export type GetCalendarEventAggregateType<T extends CalendarEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarEvent[P]>
      : GetScalarType<T[P], AggregateCalendarEvent[P]>
  }




  export type CalendarEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithAggregationInput | CalendarEventOrderByWithAggregationInput[]
    by: CalendarEventScalarFieldEnum[] | CalendarEventScalarFieldEnum
    having?: CalendarEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarEventCountAggregateInputType | true
    _min?: CalendarEventMinAggregateInputType
    _max?: CalendarEventMaxAggregateInputType
  }

  export type CalendarEventGroupByOutputType = {
    id: string
    taskTemplateId: string
    playerId: string
    startDate: Date
    endDate: Date
    status: $Enums.EventStatus
    _count: CalendarEventCountAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  type GetCalendarEventGroupByPayload<T extends CalendarEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
        }
      >
    >


  export type CalendarEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskTemplateId?: boolean
    playerId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    taskTemplate?: boolean | TaskTemplateDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
    taskLogs?: boolean | CalendarEvent$taskLogsArgs<ExtArgs>
    _count?: boolean | CalendarEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskTemplateId?: boolean
    playerId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    taskTemplate?: boolean | TaskTemplateDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskTemplateId?: boolean
    playerId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    taskTemplate?: boolean | TaskTemplateDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectScalar = {
    id?: boolean
    taskTemplateId?: boolean
    playerId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
  }

  export type CalendarEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskTemplateId" | "playerId" | "startDate" | "endDate" | "status", ExtArgs["result"]["calendarEvent"]>
  export type CalendarEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTemplate?: boolean | TaskTemplateDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
    taskLogs?: boolean | CalendarEvent$taskLogsArgs<ExtArgs>
    _count?: boolean | CalendarEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CalendarEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTemplate?: boolean | TaskTemplateDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CalendarEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskTemplate?: boolean | TaskTemplateDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CalendarEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarEvent"
    objects: {
      taskTemplate: Prisma.$TaskTemplatePayload<ExtArgs>
      player: Prisma.$UserPayload<ExtArgs>
      taskLogs: Prisma.$TaskLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskTemplateId: string
      playerId: string
      startDate: Date
      endDate: Date
      status: $Enums.EventStatus
    }, ExtArgs["result"]["calendarEvent"]>
    composites: {}
  }

  type CalendarEventGetPayload<S extends boolean | null | undefined | CalendarEventDefaultArgs> = $Result.GetResult<Prisma.$CalendarEventPayload, S>

  type CalendarEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarEventCountAggregateInputType | true
    }

  export interface CalendarEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarEvent'], meta: { name: 'CalendarEvent' } }
    /**
     * Find zero or one CalendarEvent that matches the filter.
     * @param {CalendarEventFindUniqueArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarEventFindUniqueArgs>(args: SelectSubset<T, CalendarEventFindUniqueArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalendarEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarEventFindUniqueOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarEventFindFirstArgs>(args?: SelectSubset<T, CalendarEventFindFirstArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalendarEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany()
     * 
     * // Get first 10 CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarEventFindManyArgs>(args?: SelectSubset<T, CalendarEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalendarEvent.
     * @param {CalendarEventCreateArgs} args - Arguments to create a CalendarEvent.
     * @example
     * // Create one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.create({
     *   data: {
     *     // ... data to create a CalendarEvent
     *   }
     * })
     * 
     */
    create<T extends CalendarEventCreateArgs>(args: SelectSubset<T, CalendarEventCreateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalendarEvents.
     * @param {CalendarEventCreateManyArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarEventCreateManyArgs>(args?: SelectSubset<T, CalendarEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarEvents and returns the data saved in the database.
     * @param {CalendarEventCreateManyAndReturnArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalendarEvent.
     * @param {CalendarEventDeleteArgs} args - Arguments to delete one CalendarEvent.
     * @example
     * // Delete one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.delete({
     *   where: {
     *     // ... filter to delete one CalendarEvent
     *   }
     * })
     * 
     */
    delete<T extends CalendarEventDeleteArgs>(args: SelectSubset<T, CalendarEventDeleteArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalendarEvent.
     * @param {CalendarEventUpdateArgs} args - Arguments to update one CalendarEvent.
     * @example
     * // Update one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarEventUpdateArgs>(args: SelectSubset<T, CalendarEventUpdateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalendarEvents.
     * @param {CalendarEventDeleteManyArgs} args - Arguments to filter CalendarEvents to delete.
     * @example
     * // Delete a few CalendarEvents
     * const { count } = await prisma.calendarEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarEventDeleteManyArgs>(args?: SelectSubset<T, CalendarEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarEventUpdateManyArgs>(args: SelectSubset<T, CalendarEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents and returns the data updated in the database.
     * @param {CalendarEventUpdateManyAndReturnArgs} args - Arguments to update many CalendarEvents.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CalendarEventUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalendarEvent.
     * @param {CalendarEventUpsertArgs} args - Arguments to update or create a CalendarEvent.
     * @example
     * // Update or create a CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.upsert({
     *   create: {
     *     // ... data to create a CalendarEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarEvent we want to update
     *   }
     * })
     */
    upsert<T extends CalendarEventUpsertArgs>(args: SelectSubset<T, CalendarEventUpsertArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventCountArgs} args - Arguments to filter CalendarEvents to count.
     * @example
     * // Count the number of CalendarEvents
     * const count = await prisma.calendarEvent.count({
     *   where: {
     *     // ... the filter for the CalendarEvents we want to count
     *   }
     * })
    **/
    count<T extends CalendarEventCountArgs>(
      args?: Subset<T, CalendarEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarEventAggregateArgs>(args: Subset<T, CalendarEventAggregateArgs>): Prisma.PrismaPromise<GetCalendarEventAggregateType<T>>

    /**
     * Group by CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarEventGroupByArgs['orderBy'] }
        : { orderBy?: CalendarEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarEvent model
   */
  readonly fields: CalendarEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taskTemplate<T extends TaskTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskTemplateDefaultArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskLogs<T extends CalendarEvent$taskLogsArgs<ExtArgs> = {}>(args?: Subset<T, CalendarEvent$taskLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CalendarEvent model
   */
  interface CalendarEventFieldRefs {
    readonly id: FieldRef<"CalendarEvent", 'String'>
    readonly taskTemplateId: FieldRef<"CalendarEvent", 'String'>
    readonly playerId: FieldRef<"CalendarEvent", 'String'>
    readonly startDate: FieldRef<"CalendarEvent", 'DateTime'>
    readonly endDate: FieldRef<"CalendarEvent", 'DateTime'>
    readonly status: FieldRef<"CalendarEvent", 'EventStatus'>
  }
    

  // Custom InputTypes
  /**
   * CalendarEvent findUnique
   */
  export type CalendarEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findUniqueOrThrow
   */
  export type CalendarEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findFirst
   */
  export type CalendarEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findFirstOrThrow
   */
  export type CalendarEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findMany
   */
  export type CalendarEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter, which CalendarEvents to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent create
   */
  export type CalendarEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The data needed to create a CalendarEvent.
     */
    data: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
  }

  /**
   * CalendarEvent createMany
   */
  export type CalendarEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarEvent createManyAndReturn
   */
  export type CalendarEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarEvent update
   */
  export type CalendarEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The data needed to update a CalendarEvent.
     */
    data: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
    /**
     * Choose, which CalendarEvent to update.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent updateMany
   */
  export type CalendarEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
  }

  /**
   * CalendarEvent updateManyAndReturn
   */
  export type CalendarEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CalendarEvent upsert
   */
  export type CalendarEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * The filter to search for the CalendarEvent to update in case it exists.
     */
    where: CalendarEventWhereUniqueInput
    /**
     * In case the CalendarEvent found by the `where` argument doesn't exist, create a new CalendarEvent with this data.
     */
    create: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
    /**
     * In case the CalendarEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
  }

  /**
   * CalendarEvent delete
   */
  export type CalendarEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
    /**
     * Filter which CalendarEvent to delete.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent deleteMany
   */
  export type CalendarEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvents to delete
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to delete.
     */
    limit?: number
  }

  /**
   * CalendarEvent.taskLogs
   */
  export type CalendarEvent$taskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    cursor?: TaskLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * CalendarEvent without action
   */
  export type CalendarEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarEventInclude<ExtArgs> | null
  }


  /**
   * Model TaskLog
   */

  export type AggregateTaskLog = {
    _count: TaskLogCountAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  export type TaskLogMinAggregateOutputType = {
    id: string | null
    calendarEventId: string | null
    playerId: string | null
    value: string | null
    loggedAt: Date | null
  }

  export type TaskLogMaxAggregateOutputType = {
    id: string | null
    calendarEventId: string | null
    playerId: string | null
    value: string | null
    loggedAt: Date | null
  }

  export type TaskLogCountAggregateOutputType = {
    id: number
    calendarEventId: number
    playerId: number
    value: number
    loggedAt: number
    _all: number
  }


  export type TaskLogMinAggregateInputType = {
    id?: true
    calendarEventId?: true
    playerId?: true
    value?: true
    loggedAt?: true
  }

  export type TaskLogMaxAggregateInputType = {
    id?: true
    calendarEventId?: true
    playerId?: true
    value?: true
    loggedAt?: true
  }

  export type TaskLogCountAggregateInputType = {
    id?: true
    calendarEventId?: true
    playerId?: true
    value?: true
    loggedAt?: true
    _all?: true
  }

  export type TaskLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLog to aggregate.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskLogs
    **/
    _count?: true | TaskLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskLogMaxAggregateInputType
  }

  export type GetTaskLogAggregateType<T extends TaskLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskLog[P]>
      : GetScalarType<T[P], AggregateTaskLog[P]>
  }




  export type TaskLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLogWhereInput
    orderBy?: TaskLogOrderByWithAggregationInput | TaskLogOrderByWithAggregationInput[]
    by: TaskLogScalarFieldEnum[] | TaskLogScalarFieldEnum
    having?: TaskLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskLogCountAggregateInputType | true
    _min?: TaskLogMinAggregateInputType
    _max?: TaskLogMaxAggregateInputType
  }

  export type TaskLogGroupByOutputType = {
    id: string
    calendarEventId: string
    playerId: string
    value: string | null
    loggedAt: Date
    _count: TaskLogCountAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  type GetTaskLogGroupByPayload<T extends TaskLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskLogGroupByOutputType[P]>
            : GetScalarType<T[P], TaskLogGroupByOutputType[P]>
        }
      >
    >


  export type TaskLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarEventId?: boolean
    playerId?: boolean
    value?: boolean
    loggedAt?: boolean
    calendarEvent?: boolean | CalendarEventDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarEventId?: boolean
    playerId?: boolean
    value?: boolean
    loggedAt?: boolean
    calendarEvent?: boolean | CalendarEventDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    calendarEventId?: boolean
    playerId?: boolean
    value?: boolean
    loggedAt?: boolean
    calendarEvent?: boolean | CalendarEventDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectScalar = {
    id?: boolean
    calendarEventId?: boolean
    playerId?: boolean
    value?: boolean
    loggedAt?: boolean
  }

  export type TaskLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "calendarEventId" | "playerId" | "value" | "loggedAt", ExtArgs["result"]["taskLog"]>
  export type TaskLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendarEvent?: boolean | CalendarEventDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendarEvent?: boolean | CalendarEventDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    calendarEvent?: boolean | CalendarEventDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskLog"
    objects: {
      calendarEvent: Prisma.$CalendarEventPayload<ExtArgs>
      player: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      calendarEventId: string
      playerId: string
      value: string | null
      loggedAt: Date
    }, ExtArgs["result"]["taskLog"]>
    composites: {}
  }

  type TaskLogGetPayload<S extends boolean | null | undefined | TaskLogDefaultArgs> = $Result.GetResult<Prisma.$TaskLogPayload, S>

  type TaskLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskLogCountAggregateInputType | true
    }

  export interface TaskLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskLog'], meta: { name: 'TaskLog' } }
    /**
     * Find zero or one TaskLog that matches the filter.
     * @param {TaskLogFindUniqueArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskLogFindUniqueArgs>(args: SelectSubset<T, TaskLogFindUniqueArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskLogFindUniqueOrThrowArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindFirstArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskLogFindFirstArgs>(args?: SelectSubset<T, TaskLogFindFirstArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindFirstOrThrowArgs} args - Arguments to find a TaskLog
     * @example
     * // Get one TaskLog
     * const taskLog = await prisma.taskLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskLogs
     * const taskLogs = await prisma.taskLog.findMany()
     * 
     * // Get first 10 TaskLogs
     * const taskLogs = await prisma.taskLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskLogFindManyArgs>(args?: SelectSubset<T, TaskLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskLog.
     * @param {TaskLogCreateArgs} args - Arguments to create a TaskLog.
     * @example
     * // Create one TaskLog
     * const TaskLog = await prisma.taskLog.create({
     *   data: {
     *     // ... data to create a TaskLog
     *   }
     * })
     * 
     */
    create<T extends TaskLogCreateArgs>(args: SelectSubset<T, TaskLogCreateArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskLogs.
     * @param {TaskLogCreateManyArgs} args - Arguments to create many TaskLogs.
     * @example
     * // Create many TaskLogs
     * const taskLog = await prisma.taskLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskLogCreateManyArgs>(args?: SelectSubset<T, TaskLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskLogs and returns the data saved in the database.
     * @param {TaskLogCreateManyAndReturnArgs} args - Arguments to create many TaskLogs.
     * @example
     * // Create many TaskLogs
     * const taskLog = await prisma.taskLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskLogs and only return the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskLog.
     * @param {TaskLogDeleteArgs} args - Arguments to delete one TaskLog.
     * @example
     * // Delete one TaskLog
     * const TaskLog = await prisma.taskLog.delete({
     *   where: {
     *     // ... filter to delete one TaskLog
     *   }
     * })
     * 
     */
    delete<T extends TaskLogDeleteArgs>(args: SelectSubset<T, TaskLogDeleteArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskLog.
     * @param {TaskLogUpdateArgs} args - Arguments to update one TaskLog.
     * @example
     * // Update one TaskLog
     * const taskLog = await prisma.taskLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskLogUpdateArgs>(args: SelectSubset<T, TaskLogUpdateArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskLogs.
     * @param {TaskLogDeleteManyArgs} args - Arguments to filter TaskLogs to delete.
     * @example
     * // Delete a few TaskLogs
     * const { count } = await prisma.taskLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskLogDeleteManyArgs>(args?: SelectSubset<T, TaskLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskLogs
     * const taskLog = await prisma.taskLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskLogUpdateManyArgs>(args: SelectSubset<T, TaskLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLogs and returns the data updated in the database.
     * @param {TaskLogUpdateManyAndReturnArgs} args - Arguments to update many TaskLogs.
     * @example
     * // Update many TaskLogs
     * const taskLog = await prisma.taskLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskLogs and only return the `id`
     * const taskLogWithIdOnly = await prisma.taskLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskLog.
     * @param {TaskLogUpsertArgs} args - Arguments to update or create a TaskLog.
     * @example
     * // Update or create a TaskLog
     * const taskLog = await prisma.taskLog.upsert({
     *   create: {
     *     // ... data to create a TaskLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskLog we want to update
     *   }
     * })
     */
    upsert<T extends TaskLogUpsertArgs>(args: SelectSubset<T, TaskLogUpsertArgs<ExtArgs>>): Prisma__TaskLogClient<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogCountArgs} args - Arguments to filter TaskLogs to count.
     * @example
     * // Count the number of TaskLogs
     * const count = await prisma.taskLog.count({
     *   where: {
     *     // ... the filter for the TaskLogs we want to count
     *   }
     * })
    **/
    count<T extends TaskLogCountArgs>(
      args?: Subset<T, TaskLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskLogAggregateArgs>(args: Subset<T, TaskLogAggregateArgs>): Prisma.PrismaPromise<GetTaskLogAggregateType<T>>

    /**
     * Group by TaskLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskLogGroupByArgs['orderBy'] }
        : { orderBy?: TaskLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskLog model
   */
  readonly fields: TaskLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    calendarEvent<T extends CalendarEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CalendarEventDefaultArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskLog model
   */
  interface TaskLogFieldRefs {
    readonly id: FieldRef<"TaskLog", 'String'>
    readonly calendarEventId: FieldRef<"TaskLog", 'String'>
    readonly playerId: FieldRef<"TaskLog", 'String'>
    readonly value: FieldRef<"TaskLog", 'String'>
    readonly loggedAt: FieldRef<"TaskLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskLog findUnique
   */
  export type TaskLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog findUniqueOrThrow
   */
  export type TaskLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog findFirst
   */
  export type TaskLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog findFirstOrThrow
   */
  export type TaskLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLog to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog findMany
   */
  export type TaskLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter, which TaskLogs to fetch.
     */
    where?: TaskLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLogs to fetch.
     */
    orderBy?: TaskLogOrderByWithRelationInput | TaskLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskLogs.
     */
    cursor?: TaskLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLogs.
     */
    distinct?: TaskLogScalarFieldEnum | TaskLogScalarFieldEnum[]
  }

  /**
   * TaskLog create
   */
  export type TaskLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskLog.
     */
    data: XOR<TaskLogCreateInput, TaskLogUncheckedCreateInput>
  }

  /**
   * TaskLog createMany
   */
  export type TaskLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskLogs.
     */
    data: TaskLogCreateManyInput | TaskLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskLog createManyAndReturn
   */
  export type TaskLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * The data used to create many TaskLogs.
     */
    data: TaskLogCreateManyInput | TaskLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLog update
   */
  export type TaskLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskLog.
     */
    data: XOR<TaskLogUpdateInput, TaskLogUncheckedUpdateInput>
    /**
     * Choose, which TaskLog to update.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog updateMany
   */
  export type TaskLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskLogs.
     */
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyInput>
    /**
     * Filter which TaskLogs to update
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to update.
     */
    limit?: number
  }

  /**
   * TaskLog updateManyAndReturn
   */
  export type TaskLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * The data used to update TaskLogs.
     */
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyInput>
    /**
     * Filter which TaskLogs to update
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLog upsert
   */
  export type TaskLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskLog to update in case it exists.
     */
    where: TaskLogWhereUniqueInput
    /**
     * In case the TaskLog found by the `where` argument doesn't exist, create a new TaskLog with this data.
     */
    create: XOR<TaskLogCreateInput, TaskLogUncheckedCreateInput>
    /**
     * In case the TaskLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskLogUpdateInput, TaskLogUncheckedUpdateInput>
  }

  /**
   * TaskLog delete
   */
  export type TaskLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
    /**
     * Filter which TaskLog to delete.
     */
    where: TaskLogWhereUniqueInput
  }

  /**
   * TaskLog deleteMany
   */
  export type TaskLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLogs to delete
     */
    where?: TaskLogWhereInput
    /**
     * Limit how many TaskLogs to delete.
     */
    limit?: number
  }

  /**
   * TaskLog without action
   */
  export type TaskLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLog
     */
    select?: TaskLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLog
     */
    omit?: TaskLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlayerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    golfHandicap: 'golfHandicap',
    coachId: 'coachId'
  };

  export type PlayerProfileScalarFieldEnum = (typeof PlayerProfileScalarFieldEnum)[keyof typeof PlayerProfileScalarFieldEnum]


  export const CoachPlayerLinkScalarFieldEnum: {
    id: 'id',
    coachId: 'coachId',
    playerId: 'playerId'
  };

  export type CoachPlayerLinkScalarFieldEnum = (typeof CoachPlayerLinkScalarFieldEnum)[keyof typeof CoachPlayerLinkScalarFieldEnum]


  export const TaskTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    coachId: 'coachId',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type TaskTemplateScalarFieldEnum = (typeof TaskTemplateScalarFieldEnum)[keyof typeof TaskTemplateScalarFieldEnum]


  export const CalendarEventScalarFieldEnum: {
    id: 'id',
    taskTemplateId: 'taskTemplateId',
    playerId: 'playerId',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status'
  };

  export type CalendarEventScalarFieldEnum = (typeof CalendarEventScalarFieldEnum)[keyof typeof CalendarEventScalarFieldEnum]


  export const TaskLogScalarFieldEnum: {
    id: 'id',
    calendarEventId: 'calendarEventId',
    playerId: 'playerId',
    value: 'value',
    loggedAt: 'loggedAt'
  };

  export type TaskLogScalarFieldEnum = (typeof TaskLogScalarFieldEnum)[keyof typeof TaskLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playerProfile?: XOR<PlayerProfileNullableScalarRelationFilter, PlayerProfileWhereInput> | null
    coachedPlayers?: PlayerProfileListRelationFilter
    coachLinks?: CoachPlayerLinkListRelationFilter
    playerLinks?: CoachPlayerLinkListRelationFilter
    taskTemplates?: TaskTemplateListRelationFilter
    calendarEvents?: CalendarEventListRelationFilter
    taskLogs?: TaskLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playerProfile?: PlayerProfileOrderByWithRelationInput
    coachedPlayers?: PlayerProfileOrderByRelationAggregateInput
    coachLinks?: CoachPlayerLinkOrderByRelationAggregateInput
    playerLinks?: CoachPlayerLinkOrderByRelationAggregateInput
    taskTemplates?: TaskTemplateOrderByRelationAggregateInput
    calendarEvents?: CalendarEventOrderByRelationAggregateInput
    taskLogs?: TaskLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playerProfile?: XOR<PlayerProfileNullableScalarRelationFilter, PlayerProfileWhereInput> | null
    coachedPlayers?: PlayerProfileListRelationFilter
    coachLinks?: CoachPlayerLinkListRelationFilter
    playerLinks?: CoachPlayerLinkListRelationFilter
    taskTemplates?: TaskTemplateListRelationFilter
    calendarEvents?: CalendarEventListRelationFilter
    taskLogs?: TaskLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlayerProfileWhereInput = {
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    userId?: StringFilter<"PlayerProfile"> | string
    golfHandicap?: FloatNullableFilter<"PlayerProfile"> | number | null
    coachId?: StringNullableFilter<"PlayerProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coach?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PlayerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    golfHandicap?: SortOrderInput | SortOrder
    coachId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    coach?: UserOrderByWithRelationInput
  }

  export type PlayerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    golfHandicap?: FloatNullableFilter<"PlayerProfile"> | number | null
    coachId?: StringNullableFilter<"PlayerProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    coach?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type PlayerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    golfHandicap?: SortOrderInput | SortOrder
    coachId?: SortOrderInput | SortOrder
    _count?: PlayerProfileCountOrderByAggregateInput
    _avg?: PlayerProfileAvgOrderByAggregateInput
    _max?: PlayerProfileMaxOrderByAggregateInput
    _min?: PlayerProfileMinOrderByAggregateInput
    _sum?: PlayerProfileSumOrderByAggregateInput
  }

  export type PlayerProfileScalarWhereWithAggregatesInput = {
    AND?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    OR?: PlayerProfileScalarWhereWithAggregatesInput[]
    NOT?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerProfile"> | string
    userId?: StringWithAggregatesFilter<"PlayerProfile"> | string
    golfHandicap?: FloatNullableWithAggregatesFilter<"PlayerProfile"> | number | null
    coachId?: StringNullableWithAggregatesFilter<"PlayerProfile"> | string | null
  }

  export type CoachPlayerLinkWhereInput = {
    AND?: CoachPlayerLinkWhereInput | CoachPlayerLinkWhereInput[]
    OR?: CoachPlayerLinkWhereInput[]
    NOT?: CoachPlayerLinkWhereInput | CoachPlayerLinkWhereInput[]
    id?: StringFilter<"CoachPlayerLink"> | string
    coachId?: StringFilter<"CoachPlayerLink"> | string
    playerId?: StringFilter<"CoachPlayerLink"> | string
    coach?: XOR<UserScalarRelationFilter, UserWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoachPlayerLinkOrderByWithRelationInput = {
    id?: SortOrder
    coachId?: SortOrder
    playerId?: SortOrder
    coach?: UserOrderByWithRelationInput
    player?: UserOrderByWithRelationInput
  }

  export type CoachPlayerLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coachId_playerId?: CoachPlayerLinkCoachIdPlayerIdCompoundUniqueInput
    AND?: CoachPlayerLinkWhereInput | CoachPlayerLinkWhereInput[]
    OR?: CoachPlayerLinkWhereInput[]
    NOT?: CoachPlayerLinkWhereInput | CoachPlayerLinkWhereInput[]
    coachId?: StringFilter<"CoachPlayerLink"> | string
    playerId?: StringFilter<"CoachPlayerLink"> | string
    coach?: XOR<UserScalarRelationFilter, UserWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "coachId_playerId">

  export type CoachPlayerLinkOrderByWithAggregationInput = {
    id?: SortOrder
    coachId?: SortOrder
    playerId?: SortOrder
    _count?: CoachPlayerLinkCountOrderByAggregateInput
    _max?: CoachPlayerLinkMaxOrderByAggregateInput
    _min?: CoachPlayerLinkMinOrderByAggregateInput
  }

  export type CoachPlayerLinkScalarWhereWithAggregatesInput = {
    AND?: CoachPlayerLinkScalarWhereWithAggregatesInput | CoachPlayerLinkScalarWhereWithAggregatesInput[]
    OR?: CoachPlayerLinkScalarWhereWithAggregatesInput[]
    NOT?: CoachPlayerLinkScalarWhereWithAggregatesInput | CoachPlayerLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachPlayerLink"> | string
    coachId?: StringWithAggregatesFilter<"CoachPlayerLink"> | string
    playerId?: StringWithAggregatesFilter<"CoachPlayerLink"> | string
  }

  export type TaskTemplateWhereInput = {
    AND?: TaskTemplateWhereInput | TaskTemplateWhereInput[]
    OR?: TaskTemplateWhereInput[]
    NOT?: TaskTemplateWhereInput | TaskTemplateWhereInput[]
    id?: StringFilter<"TaskTemplate"> | string
    name?: StringFilter<"TaskTemplate"> | string
    description?: StringNullableFilter<"TaskTemplate"> | string | null
    coachId?: StringFilter<"TaskTemplate"> | string
    isActive?: BoolFilter<"TaskTemplate"> | boolean
    createdAt?: DateTimeFilter<"TaskTemplate"> | Date | string
    coach?: XOR<UserScalarRelationFilter, UserWhereInput>
    calendarEvents?: CalendarEventListRelationFilter
  }

  export type TaskTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coachId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    coach?: UserOrderByWithRelationInput
    calendarEvents?: CalendarEventOrderByRelationAggregateInput
  }

  export type TaskTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskTemplateWhereInput | TaskTemplateWhereInput[]
    OR?: TaskTemplateWhereInput[]
    NOT?: TaskTemplateWhereInput | TaskTemplateWhereInput[]
    name?: StringFilter<"TaskTemplate"> | string
    description?: StringNullableFilter<"TaskTemplate"> | string | null
    coachId?: StringFilter<"TaskTemplate"> | string
    isActive?: BoolFilter<"TaskTemplate"> | boolean
    createdAt?: DateTimeFilter<"TaskTemplate"> | Date | string
    coach?: XOR<UserScalarRelationFilter, UserWhereInput>
    calendarEvents?: CalendarEventListRelationFilter
  }, "id">

  export type TaskTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    coachId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: TaskTemplateCountOrderByAggregateInput
    _max?: TaskTemplateMaxOrderByAggregateInput
    _min?: TaskTemplateMinOrderByAggregateInput
  }

  export type TaskTemplateScalarWhereWithAggregatesInput = {
    AND?: TaskTemplateScalarWhereWithAggregatesInput | TaskTemplateScalarWhereWithAggregatesInput[]
    OR?: TaskTemplateScalarWhereWithAggregatesInput[]
    NOT?: TaskTemplateScalarWhereWithAggregatesInput | TaskTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskTemplate"> | string
    name?: StringWithAggregatesFilter<"TaskTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"TaskTemplate"> | string | null
    coachId?: StringWithAggregatesFilter<"TaskTemplate"> | string
    isActive?: BoolWithAggregatesFilter<"TaskTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TaskTemplate"> | Date | string
  }

  export type CalendarEventWhereInput = {
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    id?: StringFilter<"CalendarEvent"> | string
    taskTemplateId?: StringFilter<"CalendarEvent"> | string
    playerId?: StringFilter<"CalendarEvent"> | string
    startDate?: DateTimeFilter<"CalendarEvent"> | Date | string
    endDate?: DateTimeFilter<"CalendarEvent"> | Date | string
    status?: EnumEventStatusFilter<"CalendarEvent"> | $Enums.EventStatus
    taskTemplate?: XOR<TaskTemplateScalarRelationFilter, TaskTemplateWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskLogs?: TaskLogListRelationFilter
  }

  export type CalendarEventOrderByWithRelationInput = {
    id?: SortOrder
    taskTemplateId?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    taskTemplate?: TaskTemplateOrderByWithRelationInput
    player?: UserOrderByWithRelationInput
    taskLogs?: TaskLogOrderByRelationAggregateInput
  }

  export type CalendarEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    taskTemplateId?: StringFilter<"CalendarEvent"> | string
    playerId?: StringFilter<"CalendarEvent"> | string
    startDate?: DateTimeFilter<"CalendarEvent"> | Date | string
    endDate?: DateTimeFilter<"CalendarEvent"> | Date | string
    status?: EnumEventStatusFilter<"CalendarEvent"> | $Enums.EventStatus
    taskTemplate?: XOR<TaskTemplateScalarRelationFilter, TaskTemplateWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    taskLogs?: TaskLogListRelationFilter
  }, "id">

  export type CalendarEventOrderByWithAggregationInput = {
    id?: SortOrder
    taskTemplateId?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    _count?: CalendarEventCountOrderByAggregateInput
    _max?: CalendarEventMaxOrderByAggregateInput
    _min?: CalendarEventMinOrderByAggregateInput
  }

  export type CalendarEventScalarWhereWithAggregatesInput = {
    AND?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    OR?: CalendarEventScalarWhereWithAggregatesInput[]
    NOT?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalendarEvent"> | string
    taskTemplateId?: StringWithAggregatesFilter<"CalendarEvent"> | string
    playerId?: StringWithAggregatesFilter<"CalendarEvent"> | string
    startDate?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
    status?: EnumEventStatusWithAggregatesFilter<"CalendarEvent"> | $Enums.EventStatus
  }

  export type TaskLogWhereInput = {
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    id?: StringFilter<"TaskLog"> | string
    calendarEventId?: StringFilter<"TaskLog"> | string
    playerId?: StringFilter<"TaskLog"> | string
    value?: StringNullableFilter<"TaskLog"> | string | null
    loggedAt?: DateTimeFilter<"TaskLog"> | Date | string
    calendarEvent?: XOR<CalendarEventScalarRelationFilter, CalendarEventWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskLogOrderByWithRelationInput = {
    id?: SortOrder
    calendarEventId?: SortOrder
    playerId?: SortOrder
    value?: SortOrderInput | SortOrder
    loggedAt?: SortOrder
    calendarEvent?: CalendarEventOrderByWithRelationInput
    player?: UserOrderByWithRelationInput
  }

  export type TaskLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    calendarEventId?: StringFilter<"TaskLog"> | string
    playerId?: StringFilter<"TaskLog"> | string
    value?: StringNullableFilter<"TaskLog"> | string | null
    loggedAt?: DateTimeFilter<"TaskLog"> | Date | string
    calendarEvent?: XOR<CalendarEventScalarRelationFilter, CalendarEventWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskLogOrderByWithAggregationInput = {
    id?: SortOrder
    calendarEventId?: SortOrder
    playerId?: SortOrder
    value?: SortOrderInput | SortOrder
    loggedAt?: SortOrder
    _count?: TaskLogCountOrderByAggregateInput
    _max?: TaskLogMaxOrderByAggregateInput
    _min?: TaskLogMinOrderByAggregateInput
  }

  export type TaskLogScalarWhereWithAggregatesInput = {
    AND?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    OR?: TaskLogScalarWhereWithAggregatesInput[]
    NOT?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskLog"> | string
    calendarEventId?: StringWithAggregatesFilter<"TaskLog"> | string
    playerId?: StringWithAggregatesFilter<"TaskLog"> | string
    value?: StringNullableWithAggregatesFilter<"TaskLog"> | string | null
    loggedAt?: DateTimeWithAggregatesFilter<"TaskLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileUncheckedCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUncheckedUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUncheckedUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileCreateInput = {
    id?: string
    golfHandicap?: number | null
    user: UserCreateNestedOneWithoutPlayerProfileInput
    coach?: UserCreateNestedOneWithoutCoachedPlayersInput
  }

  export type PlayerProfileUncheckedCreateInput = {
    id?: string
    userId: string
    golfHandicap?: number | null
    coachId?: string | null
  }

  export type PlayerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
    coach?: UserUpdateOneWithoutCoachedPlayersNestedInput
  }

  export type PlayerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
    coachId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerProfileCreateManyInput = {
    id?: string
    userId: string
    golfHandicap?: number | null
    coachId?: string | null
  }

  export type PlayerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
    coachId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoachPlayerLinkCreateInput = {
    id?: string
    coach: UserCreateNestedOneWithoutCoachLinksInput
    player: UserCreateNestedOneWithoutPlayerLinksInput
  }

  export type CoachPlayerLinkUncheckedCreateInput = {
    id?: string
    coachId: string
    playerId: string
  }

  export type CoachPlayerLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coach?: UserUpdateOneRequiredWithoutCoachLinksNestedInput
    player?: UserUpdateOneRequiredWithoutPlayerLinksNestedInput
  }

  export type CoachPlayerLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type CoachPlayerLinkCreateManyInput = {
    id?: string
    coachId: string
    playerId: string
  }

  export type CoachPlayerLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CoachPlayerLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    coach: UserCreateNestedOneWithoutTaskTemplatesInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutTaskTemplateInput
  }

  export type TaskTemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    coachId: string
    isActive?: boolean
    createdAt?: Date | string
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutTaskTemplateInput
  }

  export type TaskTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUpdateOneRequiredWithoutTaskTemplatesNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutTaskTemplateNestedInput
  }

  export type TaskTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coachId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutTaskTemplateNestedInput
  }

  export type TaskTemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    coachId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TaskTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coachId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
    taskTemplate: TaskTemplateCreateNestedOneWithoutCalendarEventsInput
    player: UserCreateNestedOneWithoutCalendarEventsInput
    taskLogs?: TaskLogCreateNestedManyWithoutCalendarEventInput
  }

  export type CalendarEventUncheckedCreateInput = {
    id?: string
    taskTemplateId: string
    playerId: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutCalendarEventInput
  }

  export type CalendarEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    taskTemplate?: TaskTemplateUpdateOneRequiredWithoutCalendarEventsNestedInput
    player?: UserUpdateOneRequiredWithoutCalendarEventsNestedInput
    taskLogs?: TaskLogUpdateManyWithoutCalendarEventNestedInput
  }

  export type CalendarEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskTemplateId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    taskLogs?: TaskLogUncheckedUpdateManyWithoutCalendarEventNestedInput
  }

  export type CalendarEventCreateManyInput = {
    id?: string
    taskTemplateId: string
    playerId: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
  }

  export type CalendarEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
  }

  export type CalendarEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskTemplateId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
  }

  export type TaskLogCreateInput = {
    id?: string
    value?: string | null
    loggedAt?: Date | string
    calendarEvent: CalendarEventCreateNestedOneWithoutTaskLogsInput
    player: UserCreateNestedOneWithoutTaskLogsInput
  }

  export type TaskLogUncheckedCreateInput = {
    id?: string
    calendarEventId: string
    playerId: string
    value?: string | null
    loggedAt?: Date | string
  }

  export type TaskLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEvent?: CalendarEventUpdateOneRequiredWithoutTaskLogsNestedInput
    player?: UserUpdateOneRequiredWithoutTaskLogsNestedInput
  }

  export type TaskLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarEventId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogCreateManyInput = {
    id?: string
    calendarEventId: string
    playerId: string
    value?: string | null
    loggedAt?: Date | string
  }

  export type TaskLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarEventId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlayerProfileNullableScalarRelationFilter = {
    is?: PlayerProfileWhereInput | null
    isNot?: PlayerProfileWhereInput | null
  }

  export type PlayerProfileListRelationFilter = {
    every?: PlayerProfileWhereInput
    some?: PlayerProfileWhereInput
    none?: PlayerProfileWhereInput
  }

  export type CoachPlayerLinkListRelationFilter = {
    every?: CoachPlayerLinkWhereInput
    some?: CoachPlayerLinkWhereInput
    none?: CoachPlayerLinkWhereInput
  }

  export type TaskTemplateListRelationFilter = {
    every?: TaskTemplateWhereInput
    some?: TaskTemplateWhereInput
    none?: TaskTemplateWhereInput
  }

  export type CalendarEventListRelationFilter = {
    every?: CalendarEventWhereInput
    some?: CalendarEventWhereInput
    none?: CalendarEventWhereInput
  }

  export type TaskLogListRelationFilter = {
    every?: TaskLogWhereInput
    some?: TaskLogWhereInput
    none?: TaskLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlayerProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachPlayerLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PlayerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    golfHandicap?: SortOrder
    coachId?: SortOrder
  }

  export type PlayerProfileAvgOrderByAggregateInput = {
    golfHandicap?: SortOrder
  }

  export type PlayerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    golfHandicap?: SortOrder
    coachId?: SortOrder
  }

  export type PlayerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    golfHandicap?: SortOrder
    coachId?: SortOrder
  }

  export type PlayerProfileSumOrderByAggregateInput = {
    golfHandicap?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CoachPlayerLinkCoachIdPlayerIdCompoundUniqueInput = {
    coachId: string
    playerId: string
  }

  export type CoachPlayerLinkCountOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    playerId?: SortOrder
  }

  export type CoachPlayerLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    playerId?: SortOrder
  }

  export type CoachPlayerLinkMinOrderByAggregateInput = {
    id?: SortOrder
    coachId?: SortOrder
    playerId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TaskTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coachId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coachId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    coachId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type TaskTemplateScalarRelationFilter = {
    is?: TaskTemplateWhereInput
    isNot?: TaskTemplateWhereInput
  }

  export type CalendarEventCountOrderByAggregateInput = {
    id?: SortOrder
    taskTemplateId?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type CalendarEventMaxOrderByAggregateInput = {
    id?: SortOrder
    taskTemplateId?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type CalendarEventMinOrderByAggregateInput = {
    id?: SortOrder
    taskTemplateId?: SortOrder
    playerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
  }

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type CalendarEventScalarRelationFilter = {
    is?: CalendarEventWhereInput
    isNot?: CalendarEventWhereInput
  }

  export type TaskLogCountOrderByAggregateInput = {
    id?: SortOrder
    calendarEventId?: SortOrder
    playerId?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
  }

  export type TaskLogMaxOrderByAggregateInput = {
    id?: SortOrder
    calendarEventId?: SortOrder
    playerId?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
  }

  export type TaskLogMinOrderByAggregateInput = {
    id?: SortOrder
    calendarEventId?: SortOrder
    playerId?: SortOrder
    value?: SortOrder
    loggedAt?: SortOrder
  }

  export type PlayerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type PlayerProfileCreateNestedManyWithoutCoachInput = {
    create?: XOR<PlayerProfileCreateWithoutCoachInput, PlayerProfileUncheckedCreateWithoutCoachInput> | PlayerProfileCreateWithoutCoachInput[] | PlayerProfileUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutCoachInput | PlayerProfileCreateOrConnectWithoutCoachInput[]
    createMany?: PlayerProfileCreateManyCoachInputEnvelope
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
  }

  export type CoachPlayerLinkCreateNestedManyWithoutCoachInput = {
    create?: XOR<CoachPlayerLinkCreateWithoutCoachInput, CoachPlayerLinkUncheckedCreateWithoutCoachInput> | CoachPlayerLinkCreateWithoutCoachInput[] | CoachPlayerLinkUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachPlayerLinkCreateOrConnectWithoutCoachInput | CoachPlayerLinkCreateOrConnectWithoutCoachInput[]
    createMany?: CoachPlayerLinkCreateManyCoachInputEnvelope
    connect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
  }

  export type CoachPlayerLinkCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CoachPlayerLinkCreateWithoutPlayerInput, CoachPlayerLinkUncheckedCreateWithoutPlayerInput> | CoachPlayerLinkCreateWithoutPlayerInput[] | CoachPlayerLinkUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CoachPlayerLinkCreateOrConnectWithoutPlayerInput | CoachPlayerLinkCreateOrConnectWithoutPlayerInput[]
    createMany?: CoachPlayerLinkCreateManyPlayerInputEnvelope
    connect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
  }

  export type TaskTemplateCreateNestedManyWithoutCoachInput = {
    create?: XOR<TaskTemplateCreateWithoutCoachInput, TaskTemplateUncheckedCreateWithoutCoachInput> | TaskTemplateCreateWithoutCoachInput[] | TaskTemplateUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCoachInput | TaskTemplateCreateOrConnectWithoutCoachInput[]
    createMany?: TaskTemplateCreateManyCoachInputEnvelope
    connect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
  }

  export type CalendarEventCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput> | CalendarEventCreateWithoutPlayerInput[] | CalendarEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPlayerInput | CalendarEventCreateOrConnectWithoutPlayerInput[]
    createMany?: CalendarEventCreateManyPlayerInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type TaskLogCreateNestedManyWithoutPlayerInput = {
    create?: XOR<TaskLogCreateWithoutPlayerInput, TaskLogUncheckedCreateWithoutPlayerInput> | TaskLogCreateWithoutPlayerInput[] | TaskLogUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutPlayerInput | TaskLogCreateOrConnectWithoutPlayerInput[]
    createMany?: TaskLogCreateManyPlayerInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type PlayerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    connect?: PlayerProfileWhereUniqueInput
  }

  export type PlayerProfileUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<PlayerProfileCreateWithoutCoachInput, PlayerProfileUncheckedCreateWithoutCoachInput> | PlayerProfileCreateWithoutCoachInput[] | PlayerProfileUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutCoachInput | PlayerProfileCreateOrConnectWithoutCoachInput[]
    createMany?: PlayerProfileCreateManyCoachInputEnvelope
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
  }

  export type CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<CoachPlayerLinkCreateWithoutCoachInput, CoachPlayerLinkUncheckedCreateWithoutCoachInput> | CoachPlayerLinkCreateWithoutCoachInput[] | CoachPlayerLinkUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachPlayerLinkCreateOrConnectWithoutCoachInput | CoachPlayerLinkCreateOrConnectWithoutCoachInput[]
    createMany?: CoachPlayerLinkCreateManyCoachInputEnvelope
    connect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
  }

  export type CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CoachPlayerLinkCreateWithoutPlayerInput, CoachPlayerLinkUncheckedCreateWithoutPlayerInput> | CoachPlayerLinkCreateWithoutPlayerInput[] | CoachPlayerLinkUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CoachPlayerLinkCreateOrConnectWithoutPlayerInput | CoachPlayerLinkCreateOrConnectWithoutPlayerInput[]
    createMany?: CoachPlayerLinkCreateManyPlayerInputEnvelope
    connect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
  }

  export type TaskTemplateUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<TaskTemplateCreateWithoutCoachInput, TaskTemplateUncheckedCreateWithoutCoachInput> | TaskTemplateCreateWithoutCoachInput[] | TaskTemplateUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCoachInput | TaskTemplateCreateOrConnectWithoutCoachInput[]
    createMany?: TaskTemplateCreateManyCoachInputEnvelope
    connect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput> | CalendarEventCreateWithoutPlayerInput[] | CalendarEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPlayerInput | CalendarEventCreateOrConnectWithoutPlayerInput[]
    createMany?: CalendarEventCreateManyPlayerInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<TaskLogCreateWithoutPlayerInput, TaskLogUncheckedCreateWithoutPlayerInput> | TaskLogCreateWithoutPlayerInput[] | TaskLogUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutPlayerInput | TaskLogCreateOrConnectWithoutPlayerInput[]
    createMany?: TaskLogCreateManyPlayerInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlayerProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    upsert?: PlayerProfileUpsertWithoutUserInput
    disconnect?: PlayerProfileWhereInput | boolean
    delete?: PlayerProfileWhereInput | boolean
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutUserInput, PlayerProfileUpdateWithoutUserInput>, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type PlayerProfileUpdateManyWithoutCoachNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutCoachInput, PlayerProfileUncheckedCreateWithoutCoachInput> | PlayerProfileCreateWithoutCoachInput[] | PlayerProfileUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutCoachInput | PlayerProfileCreateOrConnectWithoutCoachInput[]
    upsert?: PlayerProfileUpsertWithWhereUniqueWithoutCoachInput | PlayerProfileUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: PlayerProfileCreateManyCoachInputEnvelope
    set?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    disconnect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    delete?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    update?: PlayerProfileUpdateWithWhereUniqueWithoutCoachInput | PlayerProfileUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: PlayerProfileUpdateManyWithWhereWithoutCoachInput | PlayerProfileUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
  }

  export type CoachPlayerLinkUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CoachPlayerLinkCreateWithoutCoachInput, CoachPlayerLinkUncheckedCreateWithoutCoachInput> | CoachPlayerLinkCreateWithoutCoachInput[] | CoachPlayerLinkUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachPlayerLinkCreateOrConnectWithoutCoachInput | CoachPlayerLinkCreateOrConnectWithoutCoachInput[]
    upsert?: CoachPlayerLinkUpsertWithWhereUniqueWithoutCoachInput | CoachPlayerLinkUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CoachPlayerLinkCreateManyCoachInputEnvelope
    set?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    disconnect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    delete?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    connect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    update?: CoachPlayerLinkUpdateWithWhereUniqueWithoutCoachInput | CoachPlayerLinkUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CoachPlayerLinkUpdateManyWithWhereWithoutCoachInput | CoachPlayerLinkUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CoachPlayerLinkScalarWhereInput | CoachPlayerLinkScalarWhereInput[]
  }

  export type CoachPlayerLinkUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<CoachPlayerLinkCreateWithoutPlayerInput, CoachPlayerLinkUncheckedCreateWithoutPlayerInput> | CoachPlayerLinkCreateWithoutPlayerInput[] | CoachPlayerLinkUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CoachPlayerLinkCreateOrConnectWithoutPlayerInput | CoachPlayerLinkCreateOrConnectWithoutPlayerInput[]
    upsert?: CoachPlayerLinkUpsertWithWhereUniqueWithoutPlayerInput | CoachPlayerLinkUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: CoachPlayerLinkCreateManyPlayerInputEnvelope
    set?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    disconnect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    delete?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    connect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    update?: CoachPlayerLinkUpdateWithWhereUniqueWithoutPlayerInput | CoachPlayerLinkUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: CoachPlayerLinkUpdateManyWithWhereWithoutPlayerInput | CoachPlayerLinkUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: CoachPlayerLinkScalarWhereInput | CoachPlayerLinkScalarWhereInput[]
  }

  export type TaskTemplateUpdateManyWithoutCoachNestedInput = {
    create?: XOR<TaskTemplateCreateWithoutCoachInput, TaskTemplateUncheckedCreateWithoutCoachInput> | TaskTemplateCreateWithoutCoachInput[] | TaskTemplateUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCoachInput | TaskTemplateCreateOrConnectWithoutCoachInput[]
    upsert?: TaskTemplateUpsertWithWhereUniqueWithoutCoachInput | TaskTemplateUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: TaskTemplateCreateManyCoachInputEnvelope
    set?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    disconnect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    delete?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    connect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    update?: TaskTemplateUpdateWithWhereUniqueWithoutCoachInput | TaskTemplateUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: TaskTemplateUpdateManyWithWhereWithoutCoachInput | TaskTemplateUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: TaskTemplateScalarWhereInput | TaskTemplateScalarWhereInput[]
  }

  export type CalendarEventUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput> | CalendarEventCreateWithoutPlayerInput[] | CalendarEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPlayerInput | CalendarEventCreateOrConnectWithoutPlayerInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutPlayerInput | CalendarEventUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: CalendarEventCreateManyPlayerInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutPlayerInput | CalendarEventUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutPlayerInput | CalendarEventUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type TaskLogUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<TaskLogCreateWithoutPlayerInput, TaskLogUncheckedCreateWithoutPlayerInput> | TaskLogCreateWithoutPlayerInput[] | TaskLogUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutPlayerInput | TaskLogCreateOrConnectWithoutPlayerInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutPlayerInput | TaskLogUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: TaskLogCreateManyPlayerInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutPlayerInput | TaskLogUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutPlayerInput | TaskLogUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type PlayerProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    upsert?: PlayerProfileUpsertWithoutUserInput
    disconnect?: PlayerProfileWhereInput | boolean
    delete?: PlayerProfileWhereInput | boolean
    connect?: PlayerProfileWhereUniqueInput
    update?: XOR<XOR<PlayerProfileUpdateToOneWithWhereWithoutUserInput, PlayerProfileUpdateWithoutUserInput>, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type PlayerProfileUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<PlayerProfileCreateWithoutCoachInput, PlayerProfileUncheckedCreateWithoutCoachInput> | PlayerProfileCreateWithoutCoachInput[] | PlayerProfileUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutCoachInput | PlayerProfileCreateOrConnectWithoutCoachInput[]
    upsert?: PlayerProfileUpsertWithWhereUniqueWithoutCoachInput | PlayerProfileUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: PlayerProfileCreateManyCoachInputEnvelope
    set?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    disconnect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    delete?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    connect?: PlayerProfileWhereUniqueInput | PlayerProfileWhereUniqueInput[]
    update?: PlayerProfileUpdateWithWhereUniqueWithoutCoachInput | PlayerProfileUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: PlayerProfileUpdateManyWithWhereWithoutCoachInput | PlayerProfileUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
  }

  export type CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CoachPlayerLinkCreateWithoutCoachInput, CoachPlayerLinkUncheckedCreateWithoutCoachInput> | CoachPlayerLinkCreateWithoutCoachInput[] | CoachPlayerLinkUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachPlayerLinkCreateOrConnectWithoutCoachInput | CoachPlayerLinkCreateOrConnectWithoutCoachInput[]
    upsert?: CoachPlayerLinkUpsertWithWhereUniqueWithoutCoachInput | CoachPlayerLinkUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CoachPlayerLinkCreateManyCoachInputEnvelope
    set?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    disconnect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    delete?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    connect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    update?: CoachPlayerLinkUpdateWithWhereUniqueWithoutCoachInput | CoachPlayerLinkUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CoachPlayerLinkUpdateManyWithWhereWithoutCoachInput | CoachPlayerLinkUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CoachPlayerLinkScalarWhereInput | CoachPlayerLinkScalarWhereInput[]
  }

  export type CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<CoachPlayerLinkCreateWithoutPlayerInput, CoachPlayerLinkUncheckedCreateWithoutPlayerInput> | CoachPlayerLinkCreateWithoutPlayerInput[] | CoachPlayerLinkUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CoachPlayerLinkCreateOrConnectWithoutPlayerInput | CoachPlayerLinkCreateOrConnectWithoutPlayerInput[]
    upsert?: CoachPlayerLinkUpsertWithWhereUniqueWithoutPlayerInput | CoachPlayerLinkUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: CoachPlayerLinkCreateManyPlayerInputEnvelope
    set?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    disconnect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    delete?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    connect?: CoachPlayerLinkWhereUniqueInput | CoachPlayerLinkWhereUniqueInput[]
    update?: CoachPlayerLinkUpdateWithWhereUniqueWithoutPlayerInput | CoachPlayerLinkUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: CoachPlayerLinkUpdateManyWithWhereWithoutPlayerInput | CoachPlayerLinkUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: CoachPlayerLinkScalarWhereInput | CoachPlayerLinkScalarWhereInput[]
  }

  export type TaskTemplateUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<TaskTemplateCreateWithoutCoachInput, TaskTemplateUncheckedCreateWithoutCoachInput> | TaskTemplateCreateWithoutCoachInput[] | TaskTemplateUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCoachInput | TaskTemplateCreateOrConnectWithoutCoachInput[]
    upsert?: TaskTemplateUpsertWithWhereUniqueWithoutCoachInput | TaskTemplateUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: TaskTemplateCreateManyCoachInputEnvelope
    set?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    disconnect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    delete?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    connect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    update?: TaskTemplateUpdateWithWhereUniqueWithoutCoachInput | TaskTemplateUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: TaskTemplateUpdateManyWithWhereWithoutCoachInput | TaskTemplateUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: TaskTemplateScalarWhereInput | TaskTemplateScalarWhereInput[]
  }

  export type CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput> | CalendarEventCreateWithoutPlayerInput[] | CalendarEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPlayerInput | CalendarEventCreateOrConnectWithoutPlayerInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutPlayerInput | CalendarEventUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: CalendarEventCreateManyPlayerInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutPlayerInput | CalendarEventUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutPlayerInput | CalendarEventUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<TaskLogCreateWithoutPlayerInput, TaskLogUncheckedCreateWithoutPlayerInput> | TaskLogCreateWithoutPlayerInput[] | TaskLogUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutPlayerInput | TaskLogCreateOrConnectWithoutPlayerInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutPlayerInput | TaskLogUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: TaskLogCreateManyPlayerInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutPlayerInput | TaskLogUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutPlayerInput | TaskLogUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPlayerProfileInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCoachedPlayersInput = {
    create?: XOR<UserCreateWithoutCoachedPlayersInput, UserUncheckedCreateWithoutCoachedPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachedPlayersInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPlayerProfileNestedInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    upsert?: UserUpsertWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerProfileInput, UserUpdateWithoutPlayerProfileInput>, UserUncheckedUpdateWithoutPlayerProfileInput>
  }

  export type UserUpdateOneWithoutCoachedPlayersNestedInput = {
    create?: XOR<UserCreateWithoutCoachedPlayersInput, UserUncheckedCreateWithoutCoachedPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachedPlayersInput
    upsert?: UserUpsertWithoutCoachedPlayersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachedPlayersInput, UserUpdateWithoutCoachedPlayersInput>, UserUncheckedUpdateWithoutCoachedPlayersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserCreateNestedOneWithoutCoachLinksInput = {
    create?: XOR<UserCreateWithoutCoachLinksInput, UserUncheckedCreateWithoutCoachLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachLinksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPlayerLinksInput = {
    create?: XOR<UserCreateWithoutPlayerLinksInput, UserUncheckedCreateWithoutPlayerLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerLinksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCoachLinksNestedInput = {
    create?: XOR<UserCreateWithoutCoachLinksInput, UserUncheckedCreateWithoutCoachLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachLinksInput
    upsert?: UserUpsertWithoutCoachLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachLinksInput, UserUpdateWithoutCoachLinksInput>, UserUncheckedUpdateWithoutCoachLinksInput>
  }

  export type UserUpdateOneRequiredWithoutPlayerLinksNestedInput = {
    create?: XOR<UserCreateWithoutPlayerLinksInput, UserUncheckedCreateWithoutPlayerLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerLinksInput
    upsert?: UserUpsertWithoutPlayerLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerLinksInput, UserUpdateWithoutPlayerLinksInput>, UserUncheckedUpdateWithoutPlayerLinksInput>
  }

  export type UserCreateNestedOneWithoutTaskTemplatesInput = {
    create?: XOR<UserCreateWithoutTaskTemplatesInput, UserUncheckedCreateWithoutTaskTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type CalendarEventCreateNestedManyWithoutTaskTemplateInput = {
    create?: XOR<CalendarEventCreateWithoutTaskTemplateInput, CalendarEventUncheckedCreateWithoutTaskTemplateInput> | CalendarEventCreateWithoutTaskTemplateInput[] | CalendarEventUncheckedCreateWithoutTaskTemplateInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskTemplateInput | CalendarEventCreateOrConnectWithoutTaskTemplateInput[]
    createMany?: CalendarEventCreateManyTaskTemplateInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutTaskTemplateInput = {
    create?: XOR<CalendarEventCreateWithoutTaskTemplateInput, CalendarEventUncheckedCreateWithoutTaskTemplateInput> | CalendarEventCreateWithoutTaskTemplateInput[] | CalendarEventUncheckedCreateWithoutTaskTemplateInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskTemplateInput | CalendarEventCreateOrConnectWithoutTaskTemplateInput[]
    createMany?: CalendarEventCreateManyTaskTemplateInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTaskTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutTaskTemplatesInput, UserUncheckedCreateWithoutTaskTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskTemplatesInput
    upsert?: UserUpsertWithoutTaskTemplatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskTemplatesInput, UserUpdateWithoutTaskTemplatesInput>, UserUncheckedUpdateWithoutTaskTemplatesInput>
  }

  export type CalendarEventUpdateManyWithoutTaskTemplateNestedInput = {
    create?: XOR<CalendarEventCreateWithoutTaskTemplateInput, CalendarEventUncheckedCreateWithoutTaskTemplateInput> | CalendarEventCreateWithoutTaskTemplateInput[] | CalendarEventUncheckedCreateWithoutTaskTemplateInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskTemplateInput | CalendarEventCreateOrConnectWithoutTaskTemplateInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutTaskTemplateInput | CalendarEventUpsertWithWhereUniqueWithoutTaskTemplateInput[]
    createMany?: CalendarEventCreateManyTaskTemplateInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutTaskTemplateInput | CalendarEventUpdateWithWhereUniqueWithoutTaskTemplateInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutTaskTemplateInput | CalendarEventUpdateManyWithWhereWithoutTaskTemplateInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type CalendarEventUncheckedUpdateManyWithoutTaskTemplateNestedInput = {
    create?: XOR<CalendarEventCreateWithoutTaskTemplateInput, CalendarEventUncheckedCreateWithoutTaskTemplateInput> | CalendarEventCreateWithoutTaskTemplateInput[] | CalendarEventUncheckedCreateWithoutTaskTemplateInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskTemplateInput | CalendarEventCreateOrConnectWithoutTaskTemplateInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutTaskTemplateInput | CalendarEventUpsertWithWhereUniqueWithoutTaskTemplateInput[]
    createMany?: CalendarEventCreateManyTaskTemplateInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutTaskTemplateInput | CalendarEventUpdateWithWhereUniqueWithoutTaskTemplateInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutTaskTemplateInput | CalendarEventUpdateManyWithWhereWithoutTaskTemplateInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type TaskTemplateCreateNestedOneWithoutCalendarEventsInput = {
    create?: XOR<TaskTemplateCreateWithoutCalendarEventsInput, TaskTemplateUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCalendarEventsInput
    connect?: TaskTemplateWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCalendarEventsInput = {
    create?: XOR<UserCreateWithoutCalendarEventsInput, UserUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarEventsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskLogCreateNestedManyWithoutCalendarEventInput = {
    create?: XOR<TaskLogCreateWithoutCalendarEventInput, TaskLogUncheckedCreateWithoutCalendarEventInput> | TaskLogCreateWithoutCalendarEventInput[] | TaskLogUncheckedCreateWithoutCalendarEventInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutCalendarEventInput | TaskLogCreateOrConnectWithoutCalendarEventInput[]
    createMany?: TaskLogCreateManyCalendarEventInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutCalendarEventInput = {
    create?: XOR<TaskLogCreateWithoutCalendarEventInput, TaskLogUncheckedCreateWithoutCalendarEventInput> | TaskLogCreateWithoutCalendarEventInput[] | TaskLogUncheckedCreateWithoutCalendarEventInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutCalendarEventInput | TaskLogCreateOrConnectWithoutCalendarEventInput[]
    createMany?: TaskLogCreateManyCalendarEventInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type TaskTemplateUpdateOneRequiredWithoutCalendarEventsNestedInput = {
    create?: XOR<TaskTemplateCreateWithoutCalendarEventsInput, TaskTemplateUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCalendarEventsInput
    upsert?: TaskTemplateUpsertWithoutCalendarEventsInput
    connect?: TaskTemplateWhereUniqueInput
    update?: XOR<XOR<TaskTemplateUpdateToOneWithWhereWithoutCalendarEventsInput, TaskTemplateUpdateWithoutCalendarEventsInput>, TaskTemplateUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type UserUpdateOneRequiredWithoutCalendarEventsNestedInput = {
    create?: XOR<UserCreateWithoutCalendarEventsInput, UserUncheckedCreateWithoutCalendarEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarEventsInput
    upsert?: UserUpsertWithoutCalendarEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCalendarEventsInput, UserUpdateWithoutCalendarEventsInput>, UserUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type TaskLogUpdateManyWithoutCalendarEventNestedInput = {
    create?: XOR<TaskLogCreateWithoutCalendarEventInput, TaskLogUncheckedCreateWithoutCalendarEventInput> | TaskLogCreateWithoutCalendarEventInput[] | TaskLogUncheckedCreateWithoutCalendarEventInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutCalendarEventInput | TaskLogCreateOrConnectWithoutCalendarEventInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutCalendarEventInput | TaskLogUpsertWithWhereUniqueWithoutCalendarEventInput[]
    createMany?: TaskLogCreateManyCalendarEventInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutCalendarEventInput | TaskLogUpdateWithWhereUniqueWithoutCalendarEventInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutCalendarEventInput | TaskLogUpdateManyWithWhereWithoutCalendarEventInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutCalendarEventNestedInput = {
    create?: XOR<TaskLogCreateWithoutCalendarEventInput, TaskLogUncheckedCreateWithoutCalendarEventInput> | TaskLogCreateWithoutCalendarEventInput[] | TaskLogUncheckedCreateWithoutCalendarEventInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutCalendarEventInput | TaskLogCreateOrConnectWithoutCalendarEventInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutCalendarEventInput | TaskLogUpsertWithWhereUniqueWithoutCalendarEventInput[]
    createMany?: TaskLogCreateManyCalendarEventInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutCalendarEventInput | TaskLogUpdateWithWhereUniqueWithoutCalendarEventInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutCalendarEventInput | TaskLogUpdateManyWithWhereWithoutCalendarEventInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type CalendarEventCreateNestedOneWithoutTaskLogsInput = {
    create?: XOR<CalendarEventCreateWithoutTaskLogsInput, CalendarEventUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskLogsInput
    connect?: CalendarEventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskLogsInput = {
    create?: XOR<UserCreateWithoutTaskLogsInput, UserUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskLogsInput
    connect?: UserWhereUniqueInput
  }

  export type CalendarEventUpdateOneRequiredWithoutTaskLogsNestedInput = {
    create?: XOR<CalendarEventCreateWithoutTaskLogsInput, CalendarEventUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskLogsInput
    upsert?: CalendarEventUpsertWithoutTaskLogsInput
    connect?: CalendarEventWhereUniqueInput
    update?: XOR<XOR<CalendarEventUpdateToOneWithWhereWithoutTaskLogsInput, CalendarEventUpdateWithoutTaskLogsInput>, CalendarEventUncheckedUpdateWithoutTaskLogsInput>
  }

  export type UserUpdateOneRequiredWithoutTaskLogsNestedInput = {
    create?: XOR<UserCreateWithoutTaskLogsInput, UserUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskLogsInput
    upsert?: UserUpsertWithoutTaskLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskLogsInput, UserUpdateWithoutTaskLogsInput>, UserUncheckedUpdateWithoutTaskLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
  }

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
  }

  export type PlayerProfileCreateWithoutUserInput = {
    id?: string
    golfHandicap?: number | null
    coach?: UserCreateNestedOneWithoutCoachedPlayersInput
  }

  export type PlayerProfileUncheckedCreateWithoutUserInput = {
    id?: string
    golfHandicap?: number | null
    coachId?: string | null
  }

  export type PlayerProfileCreateOrConnectWithoutUserInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
  }

  export type PlayerProfileCreateWithoutCoachInput = {
    id?: string
    golfHandicap?: number | null
    user: UserCreateNestedOneWithoutPlayerProfileInput
  }

  export type PlayerProfileUncheckedCreateWithoutCoachInput = {
    id?: string
    userId: string
    golfHandicap?: number | null
  }

  export type PlayerProfileCreateOrConnectWithoutCoachInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutCoachInput, PlayerProfileUncheckedCreateWithoutCoachInput>
  }

  export type PlayerProfileCreateManyCoachInputEnvelope = {
    data: PlayerProfileCreateManyCoachInput | PlayerProfileCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type CoachPlayerLinkCreateWithoutCoachInput = {
    id?: string
    player: UserCreateNestedOneWithoutPlayerLinksInput
  }

  export type CoachPlayerLinkUncheckedCreateWithoutCoachInput = {
    id?: string
    playerId: string
  }

  export type CoachPlayerLinkCreateOrConnectWithoutCoachInput = {
    where: CoachPlayerLinkWhereUniqueInput
    create: XOR<CoachPlayerLinkCreateWithoutCoachInput, CoachPlayerLinkUncheckedCreateWithoutCoachInput>
  }

  export type CoachPlayerLinkCreateManyCoachInputEnvelope = {
    data: CoachPlayerLinkCreateManyCoachInput | CoachPlayerLinkCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type CoachPlayerLinkCreateWithoutPlayerInput = {
    id?: string
    coach: UserCreateNestedOneWithoutCoachLinksInput
  }

  export type CoachPlayerLinkUncheckedCreateWithoutPlayerInput = {
    id?: string
    coachId: string
  }

  export type CoachPlayerLinkCreateOrConnectWithoutPlayerInput = {
    where: CoachPlayerLinkWhereUniqueInput
    create: XOR<CoachPlayerLinkCreateWithoutPlayerInput, CoachPlayerLinkUncheckedCreateWithoutPlayerInput>
  }

  export type CoachPlayerLinkCreateManyPlayerInputEnvelope = {
    data: CoachPlayerLinkCreateManyPlayerInput | CoachPlayerLinkCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type TaskTemplateCreateWithoutCoachInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    calendarEvents?: CalendarEventCreateNestedManyWithoutTaskTemplateInput
  }

  export type TaskTemplateUncheckedCreateWithoutCoachInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutTaskTemplateInput
  }

  export type TaskTemplateCreateOrConnectWithoutCoachInput = {
    where: TaskTemplateWhereUniqueInput
    create: XOR<TaskTemplateCreateWithoutCoachInput, TaskTemplateUncheckedCreateWithoutCoachInput>
  }

  export type TaskTemplateCreateManyCoachInputEnvelope = {
    data: TaskTemplateCreateManyCoachInput | TaskTemplateCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type CalendarEventCreateWithoutPlayerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
    taskTemplate: TaskTemplateCreateNestedOneWithoutCalendarEventsInput
    taskLogs?: TaskLogCreateNestedManyWithoutCalendarEventInput
  }

  export type CalendarEventUncheckedCreateWithoutPlayerInput = {
    id?: string
    taskTemplateId: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutCalendarEventInput
  }

  export type CalendarEventCreateOrConnectWithoutPlayerInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput>
  }

  export type CalendarEventCreateManyPlayerInputEnvelope = {
    data: CalendarEventCreateManyPlayerInput | CalendarEventCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type TaskLogCreateWithoutPlayerInput = {
    id?: string
    value?: string | null
    loggedAt?: Date | string
    calendarEvent: CalendarEventCreateNestedOneWithoutTaskLogsInput
  }

  export type TaskLogUncheckedCreateWithoutPlayerInput = {
    id?: string
    calendarEventId: string
    value?: string | null
    loggedAt?: Date | string
  }

  export type TaskLogCreateOrConnectWithoutPlayerInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutPlayerInput, TaskLogUncheckedCreateWithoutPlayerInput>
  }

  export type TaskLogCreateManyPlayerInputEnvelope = {
    data: TaskLogCreateManyPlayerInput | TaskLogCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type PlayerProfileUpsertWithoutUserInput = {
    update: XOR<PlayerProfileUpdateWithoutUserInput, PlayerProfileUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    where?: PlayerProfileWhereInput
  }

  export type PlayerProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: PlayerProfileWhereInput
    data: XOR<PlayerProfileUpdateWithoutUserInput, PlayerProfileUncheckedUpdateWithoutUserInput>
  }

  export type PlayerProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
    coach?: UserUpdateOneWithoutCoachedPlayersNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
    coachId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerProfileUpsertWithWhereUniqueWithoutCoachInput = {
    where: PlayerProfileWhereUniqueInput
    update: XOR<PlayerProfileUpdateWithoutCoachInput, PlayerProfileUncheckedUpdateWithoutCoachInput>
    create: XOR<PlayerProfileCreateWithoutCoachInput, PlayerProfileUncheckedCreateWithoutCoachInput>
  }

  export type PlayerProfileUpdateWithWhereUniqueWithoutCoachInput = {
    where: PlayerProfileWhereUniqueInput
    data: XOR<PlayerProfileUpdateWithoutCoachInput, PlayerProfileUncheckedUpdateWithoutCoachInput>
  }

  export type PlayerProfileUpdateManyWithWhereWithoutCoachInput = {
    where: PlayerProfileScalarWhereInput
    data: XOR<PlayerProfileUpdateManyMutationInput, PlayerProfileUncheckedUpdateManyWithoutCoachInput>
  }

  export type PlayerProfileScalarWhereInput = {
    AND?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
    OR?: PlayerProfileScalarWhereInput[]
    NOT?: PlayerProfileScalarWhereInput | PlayerProfileScalarWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    userId?: StringFilter<"PlayerProfile"> | string
    golfHandicap?: FloatNullableFilter<"PlayerProfile"> | number | null
    coachId?: StringNullableFilter<"PlayerProfile"> | string | null
  }

  export type CoachPlayerLinkUpsertWithWhereUniqueWithoutCoachInput = {
    where: CoachPlayerLinkWhereUniqueInput
    update: XOR<CoachPlayerLinkUpdateWithoutCoachInput, CoachPlayerLinkUncheckedUpdateWithoutCoachInput>
    create: XOR<CoachPlayerLinkCreateWithoutCoachInput, CoachPlayerLinkUncheckedCreateWithoutCoachInput>
  }

  export type CoachPlayerLinkUpdateWithWhereUniqueWithoutCoachInput = {
    where: CoachPlayerLinkWhereUniqueInput
    data: XOR<CoachPlayerLinkUpdateWithoutCoachInput, CoachPlayerLinkUncheckedUpdateWithoutCoachInput>
  }

  export type CoachPlayerLinkUpdateManyWithWhereWithoutCoachInput = {
    where: CoachPlayerLinkScalarWhereInput
    data: XOR<CoachPlayerLinkUpdateManyMutationInput, CoachPlayerLinkUncheckedUpdateManyWithoutCoachInput>
  }

  export type CoachPlayerLinkScalarWhereInput = {
    AND?: CoachPlayerLinkScalarWhereInput | CoachPlayerLinkScalarWhereInput[]
    OR?: CoachPlayerLinkScalarWhereInput[]
    NOT?: CoachPlayerLinkScalarWhereInput | CoachPlayerLinkScalarWhereInput[]
    id?: StringFilter<"CoachPlayerLink"> | string
    coachId?: StringFilter<"CoachPlayerLink"> | string
    playerId?: StringFilter<"CoachPlayerLink"> | string
  }

  export type CoachPlayerLinkUpsertWithWhereUniqueWithoutPlayerInput = {
    where: CoachPlayerLinkWhereUniqueInput
    update: XOR<CoachPlayerLinkUpdateWithoutPlayerInput, CoachPlayerLinkUncheckedUpdateWithoutPlayerInput>
    create: XOR<CoachPlayerLinkCreateWithoutPlayerInput, CoachPlayerLinkUncheckedCreateWithoutPlayerInput>
  }

  export type CoachPlayerLinkUpdateWithWhereUniqueWithoutPlayerInput = {
    where: CoachPlayerLinkWhereUniqueInput
    data: XOR<CoachPlayerLinkUpdateWithoutPlayerInput, CoachPlayerLinkUncheckedUpdateWithoutPlayerInput>
  }

  export type CoachPlayerLinkUpdateManyWithWhereWithoutPlayerInput = {
    where: CoachPlayerLinkScalarWhereInput
    data: XOR<CoachPlayerLinkUpdateManyMutationInput, CoachPlayerLinkUncheckedUpdateManyWithoutPlayerInput>
  }

  export type TaskTemplateUpsertWithWhereUniqueWithoutCoachInput = {
    where: TaskTemplateWhereUniqueInput
    update: XOR<TaskTemplateUpdateWithoutCoachInput, TaskTemplateUncheckedUpdateWithoutCoachInput>
    create: XOR<TaskTemplateCreateWithoutCoachInput, TaskTemplateUncheckedCreateWithoutCoachInput>
  }

  export type TaskTemplateUpdateWithWhereUniqueWithoutCoachInput = {
    where: TaskTemplateWhereUniqueInput
    data: XOR<TaskTemplateUpdateWithoutCoachInput, TaskTemplateUncheckedUpdateWithoutCoachInput>
  }

  export type TaskTemplateUpdateManyWithWhereWithoutCoachInput = {
    where: TaskTemplateScalarWhereInput
    data: XOR<TaskTemplateUpdateManyMutationInput, TaskTemplateUncheckedUpdateManyWithoutCoachInput>
  }

  export type TaskTemplateScalarWhereInput = {
    AND?: TaskTemplateScalarWhereInput | TaskTemplateScalarWhereInput[]
    OR?: TaskTemplateScalarWhereInput[]
    NOT?: TaskTemplateScalarWhereInput | TaskTemplateScalarWhereInput[]
    id?: StringFilter<"TaskTemplate"> | string
    name?: StringFilter<"TaskTemplate"> | string
    description?: StringNullableFilter<"TaskTemplate"> | string | null
    coachId?: StringFilter<"TaskTemplate"> | string
    isActive?: BoolFilter<"TaskTemplate"> | boolean
    createdAt?: DateTimeFilter<"TaskTemplate"> | Date | string
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutPlayerInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutPlayerInput, CalendarEventUncheckedUpdateWithoutPlayerInput>
    create: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutPlayerInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutPlayerInput, CalendarEventUncheckedUpdateWithoutPlayerInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutPlayerInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutPlayerInput>
  }

  export type CalendarEventScalarWhereInput = {
    AND?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
    OR?: CalendarEventScalarWhereInput[]
    NOT?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
    id?: StringFilter<"CalendarEvent"> | string
    taskTemplateId?: StringFilter<"CalendarEvent"> | string
    playerId?: StringFilter<"CalendarEvent"> | string
    startDate?: DateTimeFilter<"CalendarEvent"> | Date | string
    endDate?: DateTimeFilter<"CalendarEvent"> | Date | string
    status?: EnumEventStatusFilter<"CalendarEvent"> | $Enums.EventStatus
  }

  export type TaskLogUpsertWithWhereUniqueWithoutPlayerInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutPlayerInput, TaskLogUncheckedUpdateWithoutPlayerInput>
    create: XOR<TaskLogCreateWithoutPlayerInput, TaskLogUncheckedCreateWithoutPlayerInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutPlayerInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutPlayerInput, TaskLogUncheckedUpdateWithoutPlayerInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutPlayerInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutPlayerInput>
  }

  export type TaskLogScalarWhereInput = {
    AND?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    OR?: TaskLogScalarWhereInput[]
    NOT?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    id?: StringFilter<"TaskLog"> | string
    calendarEventId?: StringFilter<"TaskLog"> | string
    playerId?: StringFilter<"TaskLog"> | string
    value?: StringNullableFilter<"TaskLog"> | string | null
    loggedAt?: DateTimeFilter<"TaskLog"> | Date | string
  }

  export type UserCreateWithoutPlayerProfileInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachedPlayers?: PlayerProfileCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutPlayerProfileInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachedPlayers?: PlayerProfileUncheckedCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutPlayerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
  }

  export type UserCreateWithoutCoachedPlayersInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutCoachedPlayersInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutCoachedPlayersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachedPlayersInput, UserUncheckedCreateWithoutCoachedPlayersInput>
  }

  export type UserUpsertWithoutPlayerProfileInput = {
    update: XOR<UserUpdateWithoutPlayerProfileInput, UserUncheckedUpdateWithoutPlayerProfileInput>
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerProfileInput, UserUncheckedUpdateWithoutPlayerProfileInput>
  }

  export type UserUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachedPlayers?: PlayerProfileUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachedPlayers?: PlayerProfileUncheckedUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUncheckedUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutCoachedPlayersInput = {
    update: XOR<UserUpdateWithoutCoachedPlayersInput, UserUncheckedUpdateWithoutCoachedPlayersInput>
    create: XOR<UserCreateWithoutCoachedPlayersInput, UserUncheckedCreateWithoutCoachedPlayersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachedPlayersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachedPlayersInput, UserUncheckedUpdateWithoutCoachedPlayersInput>
  }

  export type UserUpdateWithoutCoachedPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachedPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUncheckedUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserCreateWithoutCoachLinksInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutCoachLinksInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutCoachLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachLinksInput, UserUncheckedCreateWithoutCoachLinksInput>
  }

  export type UserCreateWithoutPlayerLinksInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    taskTemplates?: TaskTemplateCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutPlayerLinksInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileUncheckedCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    taskTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutPlayerLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerLinksInput, UserUncheckedCreateWithoutPlayerLinksInput>
  }

  export type UserUpsertWithoutCoachLinksInput = {
    update: XOR<UserUpdateWithoutCoachLinksInput, UserUncheckedUpdateWithoutCoachLinksInput>
    create: XOR<UserCreateWithoutCoachLinksInput, UserUncheckedCreateWithoutCoachLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachLinksInput, UserUncheckedUpdateWithoutCoachLinksInput>
  }

  export type UserUpdateWithoutCoachLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUncheckedUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutPlayerLinksInput = {
    update: XOR<UserUpdateWithoutPlayerLinksInput, UserUncheckedUpdateWithoutPlayerLinksInput>
    create: XOR<UserCreateWithoutPlayerLinksInput, UserUncheckedCreateWithoutPlayerLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerLinksInput, UserUncheckedUpdateWithoutPlayerLinksInput>
  }

  export type UserUpdateWithoutPlayerLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    taskTemplates?: TaskTemplateUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUncheckedUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    taskTemplates?: TaskTemplateUncheckedUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserCreateWithoutTaskTemplatesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutTaskTemplatesInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileUncheckedCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutTaskTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskTemplatesInput, UserUncheckedCreateWithoutTaskTemplatesInput>
  }

  export type CalendarEventCreateWithoutTaskTemplateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
    player: UserCreateNestedOneWithoutCalendarEventsInput
    taskLogs?: TaskLogCreateNestedManyWithoutCalendarEventInput
  }

  export type CalendarEventUncheckedCreateWithoutTaskTemplateInput = {
    id?: string
    playerId: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutCalendarEventInput
  }

  export type CalendarEventCreateOrConnectWithoutTaskTemplateInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutTaskTemplateInput, CalendarEventUncheckedCreateWithoutTaskTemplateInput>
  }

  export type CalendarEventCreateManyTaskTemplateInputEnvelope = {
    data: CalendarEventCreateManyTaskTemplateInput | CalendarEventCreateManyTaskTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTaskTemplatesInput = {
    update: XOR<UserUpdateWithoutTaskTemplatesInput, UserUncheckedUpdateWithoutTaskTemplatesInput>
    create: XOR<UserCreateWithoutTaskTemplatesInput, UserUncheckedCreateWithoutTaskTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskTemplatesInput, UserUncheckedUpdateWithoutTaskTemplatesInput>
  }

  export type UserUpdateWithoutTaskTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUncheckedUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutTaskTemplateInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutTaskTemplateInput, CalendarEventUncheckedUpdateWithoutTaskTemplateInput>
    create: XOR<CalendarEventCreateWithoutTaskTemplateInput, CalendarEventUncheckedCreateWithoutTaskTemplateInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutTaskTemplateInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutTaskTemplateInput, CalendarEventUncheckedUpdateWithoutTaskTemplateInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutTaskTemplateInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutTaskTemplateInput>
  }

  export type TaskTemplateCreateWithoutCalendarEventsInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    coach: UserCreateNestedOneWithoutTaskTemplatesInput
  }

  export type TaskTemplateUncheckedCreateWithoutCalendarEventsInput = {
    id?: string
    name: string
    description?: string | null
    coachId: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type TaskTemplateCreateOrConnectWithoutCalendarEventsInput = {
    where: TaskTemplateWhereUniqueInput
    create: XOR<TaskTemplateCreateWithoutCalendarEventsInput, TaskTemplateUncheckedCreateWithoutCalendarEventsInput>
  }

  export type UserCreateWithoutCalendarEventsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateCreateNestedManyWithoutCoachInput
    taskLogs?: TaskLogCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutCalendarEventsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileUncheckedCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCoachInput
    taskLogs?: TaskLogUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutCalendarEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarEventsInput, UserUncheckedCreateWithoutCalendarEventsInput>
  }

  export type TaskLogCreateWithoutCalendarEventInput = {
    id?: string
    value?: string | null
    loggedAt?: Date | string
    player: UserCreateNestedOneWithoutTaskLogsInput
  }

  export type TaskLogUncheckedCreateWithoutCalendarEventInput = {
    id?: string
    playerId: string
    value?: string | null
    loggedAt?: Date | string
  }

  export type TaskLogCreateOrConnectWithoutCalendarEventInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutCalendarEventInput, TaskLogUncheckedCreateWithoutCalendarEventInput>
  }

  export type TaskLogCreateManyCalendarEventInputEnvelope = {
    data: TaskLogCreateManyCalendarEventInput | TaskLogCreateManyCalendarEventInput[]
    skipDuplicates?: boolean
  }

  export type TaskTemplateUpsertWithoutCalendarEventsInput = {
    update: XOR<TaskTemplateUpdateWithoutCalendarEventsInput, TaskTemplateUncheckedUpdateWithoutCalendarEventsInput>
    create: XOR<TaskTemplateCreateWithoutCalendarEventsInput, TaskTemplateUncheckedCreateWithoutCalendarEventsInput>
    where?: TaskTemplateWhereInput
  }

  export type TaskTemplateUpdateToOneWithWhereWithoutCalendarEventsInput = {
    where?: TaskTemplateWhereInput
    data: XOR<TaskTemplateUpdateWithoutCalendarEventsInput, TaskTemplateUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type TaskTemplateUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUpdateOneRequiredWithoutTaskTemplatesNestedInput
  }

  export type TaskTemplateUncheckedUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coachId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCalendarEventsInput = {
    update: XOR<UserUpdateWithoutCalendarEventsInput, UserUncheckedUpdateWithoutCalendarEventsInput>
    create: XOR<UserCreateWithoutCalendarEventsInput, UserUncheckedCreateWithoutCalendarEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCalendarEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCalendarEventsInput, UserUncheckedUpdateWithoutCalendarEventsInput>
  }

  export type UserUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUpdateManyWithoutCoachNestedInput
    taskLogs?: TaskLogUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUncheckedUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUncheckedUpdateManyWithoutCoachNestedInput
    taskLogs?: TaskLogUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type TaskLogUpsertWithWhereUniqueWithoutCalendarEventInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutCalendarEventInput, TaskLogUncheckedUpdateWithoutCalendarEventInput>
    create: XOR<TaskLogCreateWithoutCalendarEventInput, TaskLogUncheckedCreateWithoutCalendarEventInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutCalendarEventInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutCalendarEventInput, TaskLogUncheckedUpdateWithoutCalendarEventInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutCalendarEventInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutCalendarEventInput>
  }

  export type CalendarEventCreateWithoutTaskLogsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
    taskTemplate: TaskTemplateCreateNestedOneWithoutCalendarEventsInput
    player: UserCreateNestedOneWithoutCalendarEventsInput
  }

  export type CalendarEventUncheckedCreateWithoutTaskLogsInput = {
    id?: string
    taskTemplateId: string
    playerId: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
  }

  export type CalendarEventCreateOrConnectWithoutTaskLogsInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutTaskLogsInput, CalendarEventUncheckedCreateWithoutTaskLogsInput>
  }

  export type UserCreateWithoutTaskLogsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutTaskLogsInput = {
    id?: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachedPlayers?: PlayerProfileUncheckedCreateNestedManyWithoutCoachInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    taskTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCoachInput
    calendarEvents?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutTaskLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskLogsInput, UserUncheckedCreateWithoutTaskLogsInput>
  }

  export type CalendarEventUpsertWithoutTaskLogsInput = {
    update: XOR<CalendarEventUpdateWithoutTaskLogsInput, CalendarEventUncheckedUpdateWithoutTaskLogsInput>
    create: XOR<CalendarEventCreateWithoutTaskLogsInput, CalendarEventUncheckedCreateWithoutTaskLogsInput>
    where?: CalendarEventWhereInput
  }

  export type CalendarEventUpdateToOneWithWhereWithoutTaskLogsInput = {
    where?: CalendarEventWhereInput
    data: XOR<CalendarEventUpdateWithoutTaskLogsInput, CalendarEventUncheckedUpdateWithoutTaskLogsInput>
  }

  export type CalendarEventUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    taskTemplate?: TaskTemplateUpdateOneRequiredWithoutCalendarEventsNestedInput
    player?: UserUpdateOneRequiredWithoutCalendarEventsNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskTemplateId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
  }

  export type UserUpsertWithoutTaskLogsInput = {
    update: XOR<UserUpdateWithoutTaskLogsInput, UserUncheckedUpdateWithoutTaskLogsInput>
    create: XOR<UserCreateWithoutTaskLogsInput, UserUncheckedCreateWithoutTaskLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskLogsInput, UserUncheckedUpdateWithoutTaskLogsInput>
  }

  export type UserUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachedPlayers?: PlayerProfileUncheckedUpdateManyWithoutCoachNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    taskTemplates?: TaskTemplateUncheckedUpdateManyWithoutCoachNestedInput
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerProfileCreateManyCoachInput = {
    id?: string
    userId: string
    golfHandicap?: number | null
  }

  export type CoachPlayerLinkCreateManyCoachInput = {
    id?: string
    playerId: string
  }

  export type CoachPlayerLinkCreateManyPlayerInput = {
    id?: string
    coachId: string
  }

  export type TaskTemplateCreateManyCoachInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type CalendarEventCreateManyPlayerInput = {
    id?: string
    taskTemplateId: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
  }

  export type TaskLogCreateManyPlayerInput = {
    id?: string
    calendarEventId: string
    value?: string | null
    loggedAt?: Date | string
  }

  export type PlayerProfileUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
  }

  export type PlayerProfileUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PlayerProfileUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    golfHandicap?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CoachPlayerLinkUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    player?: UserUpdateOneRequiredWithoutPlayerLinksNestedInput
  }

  export type CoachPlayerLinkUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type CoachPlayerLinkUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type CoachPlayerLinkUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    coach?: UserUpdateOneRequiredWithoutCoachLinksNestedInput
  }

  export type CoachPlayerLinkUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
  }

  export type CoachPlayerLinkUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskTemplateUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEvents?: CalendarEventUpdateManyWithoutTaskTemplateNestedInput
  }

  export type TaskTemplateUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEvents?: CalendarEventUncheckedUpdateManyWithoutTaskTemplateNestedInput
  }

  export type TaskTemplateUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    taskTemplate?: TaskTemplateUpdateOneRequiredWithoutCalendarEventsNestedInput
    taskLogs?: TaskLogUpdateManyWithoutCalendarEventNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskTemplateId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    taskLogs?: TaskLogUncheckedUpdateManyWithoutCalendarEventNestedInput
  }

  export type CalendarEventUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskTemplateId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
  }

  export type TaskLogUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    calendarEvent?: CalendarEventUpdateOneRequiredWithoutTaskLogsNestedInput
  }

  export type TaskLogUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarEventId?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    calendarEventId?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateManyTaskTemplateInput = {
    id?: string
    playerId: string
    startDate: Date | string
    endDate: Date | string
    status?: $Enums.EventStatus
  }

  export type CalendarEventUpdateWithoutTaskTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    player?: UserUpdateOneRequiredWithoutCalendarEventsNestedInput
    taskLogs?: TaskLogUpdateManyWithoutCalendarEventNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutTaskTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    taskLogs?: TaskLogUncheckedUpdateManyWithoutCalendarEventNestedInput
  }

  export type CalendarEventUncheckedUpdateManyWithoutTaskTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
  }

  export type TaskLogCreateManyCalendarEventInput = {
    id?: string
    playerId: string
    value?: string | null
    loggedAt?: Date | string
  }

  export type TaskLogUpdateWithoutCalendarEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutTaskLogsNestedInput
  }

  export type TaskLogUncheckedUpdateWithoutCalendarEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyWithoutCalendarEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}