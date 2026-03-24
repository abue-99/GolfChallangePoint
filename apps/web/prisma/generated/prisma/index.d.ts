
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
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model CoachAssignment
 * 
 */
export type CoachAssignment = $Result.DefaultSelection<Prisma.$CoachAssignmentPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TaskCategory: {
  APPROACH: 'APPROACH',
  OTT: 'OTT',
  ARG: 'ARG',
  PUTTING: 'PUTTING'
};

export type TaskCategory = (typeof TaskCategory)[keyof typeof TaskCategory]


export const InputSchema: {
  numeric_success: 'numeric_success',
  numeric_score: 'numeric_score',
  text_reflection: 'text_reflection'
};

export type InputSchema = (typeof InputSchema)[keyof typeof InputSchema]


export const Role: {
  PLAYER: 'PLAYER',
  COACH: 'COACH',
  CLUBADMIN: 'CLUBADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type TaskCategory = $Enums.TaskCategory

export const TaskCategory: typeof $Enums.TaskCategory

export type InputSchema = $Enums.InputSchema

export const InputSchema: typeof $Enums.InputSchema

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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

  /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coachAssignment`: Exposes CRUD operations for the **CoachAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachAssignments
    * const coachAssignments = await prisma.coachAssignment.findMany()
    * ```
    */
  get coachAssignment(): Prisma.CoachAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
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
    TaskLog: 'TaskLog',
    Club: 'Club',
    CoachAssignment: 'CoachAssignment',
    PasswordResetToken: 'PasswordResetToken'
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
      modelProps: "user" | "playerProfile" | "coachPlayerLink" | "taskTemplate" | "calendarEvent" | "taskLog" | "club" | "coachAssignment" | "passwordResetToken"
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
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      CoachAssignment: {
        payload: Prisma.$CoachAssignmentPayload<ExtArgs>
        fields: Prisma.CoachAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>
          }
          findFirst: {
            args: Prisma.CoachAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>
          }
          findMany: {
            args: Prisma.CoachAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>[]
          }
          create: {
            args: Prisma.CoachAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>
          }
          createMany: {
            args: Prisma.CoachAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>[]
          }
          delete: {
            args: Prisma.CoachAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>
          }
          update: {
            args: Prisma.CoachAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.CoachAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.CoachAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachAssignmentPayload>
          }
          aggregate: {
            args: Prisma.CoachAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachAssignment>
          }
          groupBy: {
            args: Prisma.CoachAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<CoachAssignmentCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
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
    club?: ClubOmit
    coachAssignment?: CoachAssignmentOmit
    passwordResetToken?: PasswordResetTokenOmit
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
    coachLinks: number
    playerLinks: number
    createdTemplates: number
    calendarEventsAsPlayer: number
    calendarEventsAsCreator: number
    clubsAsCoach: number
    clubsAsAdmin: number
    coachAssignmentsPlayer: number
    coachAssignmentsCoach: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coachLinks?: boolean | UserCountOutputTypeCountCoachLinksArgs
    playerLinks?: boolean | UserCountOutputTypeCountPlayerLinksArgs
    createdTemplates?: boolean | UserCountOutputTypeCountCreatedTemplatesArgs
    calendarEventsAsPlayer?: boolean | UserCountOutputTypeCountCalendarEventsAsPlayerArgs
    calendarEventsAsCreator?: boolean | UserCountOutputTypeCountCalendarEventsAsCreatorArgs
    clubsAsCoach?: boolean | UserCountOutputTypeCountClubsAsCoachArgs
    clubsAsAdmin?: boolean | UserCountOutputTypeCountClubsAsAdminArgs
    coachAssignmentsPlayer?: boolean | UserCountOutputTypeCountCoachAssignmentsPlayerArgs
    coachAssignmentsCoach?: boolean | UserCountOutputTypeCountCoachAssignmentsCoachArgs
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
  export type UserCountOutputTypeCountCreatedTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskTemplateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCalendarEventsAsPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCalendarEventsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClubsAsCoachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClubsAsAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoachAssignmentsPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoachAssignmentsCoachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachAssignmentWhereInput
  }


  /**
   * Count Type TaskTemplateCountOutputType
   */

  export type TaskTemplateCountOutputType = {
    events: number
  }

  export type TaskTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TaskTemplateCountOutputTypeCountEventsArgs
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
  export type TaskTemplateCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
  }


  /**
   * Count Type CalendarEventCountOutputType
   */

  export type CalendarEventCountOutputType = {
    TaskLogs: number
  }

  export type CalendarEventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TaskLogs?: boolean | CalendarEventCountOutputTypeCountTaskLogsArgs
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
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    members: number
    coaches: number
    admins: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ClubCountOutputTypeCountMembersArgs
    coaches?: boolean | ClubCountOutputTypeCountCoachesArgs
    admins?: boolean | ClubCountOutputTypeCountAdminsArgs
  }

  // Custom InputTypes
  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubCountOutputType
     */
    select?: ClubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountCoachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountAdminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    role: $Enums.Role | null
    clubId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    role: $Enums.Role | null
    clubId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    profileImage: number
    role: number
    clubId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    role?: true
    clubId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    role?: true
    clubId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    role?: true
    clubId?: true
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
    firstName: string
    lastName: string
    profileImage: string | null
    role: $Enums.Role
    clubId: string | null
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
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    role?: boolean
    clubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playerProfile?: boolean | User$playerProfileArgs<ExtArgs>
    coachLinks?: boolean | User$coachLinksArgs<ExtArgs>
    playerLinks?: boolean | User$playerLinksArgs<ExtArgs>
    createdTemplates?: boolean | User$createdTemplatesArgs<ExtArgs>
    calendarEventsAsPlayer?: boolean | User$calendarEventsAsPlayerArgs<ExtArgs>
    calendarEventsAsCreator?: boolean | User$calendarEventsAsCreatorArgs<ExtArgs>
    club?: boolean | User$clubArgs<ExtArgs>
    clubsAsCoach?: boolean | User$clubsAsCoachArgs<ExtArgs>
    clubsAsAdmin?: boolean | User$clubsAsAdminArgs<ExtArgs>
    coachAssignmentsPlayer?: boolean | User$coachAssignmentsPlayerArgs<ExtArgs>
    coachAssignmentsCoach?: boolean | User$coachAssignmentsCoachArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    role?: boolean
    clubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | User$clubArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    role?: boolean
    clubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    club?: boolean | User$clubArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    role?: boolean
    clubId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "firstName" | "lastName" | "profileImage" | "role" | "clubId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playerProfile?: boolean | User$playerProfileArgs<ExtArgs>
    coachLinks?: boolean | User$coachLinksArgs<ExtArgs>
    playerLinks?: boolean | User$playerLinksArgs<ExtArgs>
    createdTemplates?: boolean | User$createdTemplatesArgs<ExtArgs>
    calendarEventsAsPlayer?: boolean | User$calendarEventsAsPlayerArgs<ExtArgs>
    calendarEventsAsCreator?: boolean | User$calendarEventsAsCreatorArgs<ExtArgs>
    club?: boolean | User$clubArgs<ExtArgs>
    clubsAsCoach?: boolean | User$clubsAsCoachArgs<ExtArgs>
    clubsAsAdmin?: boolean | User$clubsAsAdminArgs<ExtArgs>
    coachAssignmentsPlayer?: boolean | User$coachAssignmentsPlayerArgs<ExtArgs>
    coachAssignmentsCoach?: boolean | User$coachAssignmentsCoachArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | User$clubArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | User$clubArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      playerProfile: Prisma.$PlayerProfilePayload<ExtArgs> | null
      coachLinks: Prisma.$CoachPlayerLinkPayload<ExtArgs>[]
      playerLinks: Prisma.$CoachPlayerLinkPayload<ExtArgs>[]
      createdTemplates: Prisma.$TaskTemplatePayload<ExtArgs>[]
      calendarEventsAsPlayer: Prisma.$CalendarEventPayload<ExtArgs>[]
      calendarEventsAsCreator: Prisma.$CalendarEventPayload<ExtArgs>[]
      club: Prisma.$ClubPayload<ExtArgs> | null
      clubsAsCoach: Prisma.$ClubPayload<ExtArgs>[]
      clubsAsAdmin: Prisma.$ClubPayload<ExtArgs>[]
      coachAssignmentsPlayer: Prisma.$CoachAssignmentPayload<ExtArgs>[]
      coachAssignmentsCoach: Prisma.$CoachAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string
      profileImage: string | null
      role: $Enums.Role
      clubId: string | null
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
    coachLinks<T extends User$coachLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$coachLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playerLinks<T extends User$playerLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$playerLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPlayerLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTemplates<T extends User$createdTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendarEventsAsPlayer<T extends User$calendarEventsAsPlayerArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarEventsAsPlayerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    calendarEventsAsCreator<T extends User$calendarEventsAsCreatorArgs<ExtArgs> = {}>(args?: Subset<T, User$calendarEventsAsCreatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    club<T extends User$clubArgs<ExtArgs> = {}>(args?: Subset<T, User$clubArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clubsAsCoach<T extends User$clubsAsCoachArgs<ExtArgs> = {}>(args?: Subset<T, User$clubsAsCoachArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clubsAsAdmin<T extends User$clubsAsAdminArgs<ExtArgs> = {}>(args?: Subset<T, User$clubsAsAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coachAssignmentsPlayer<T extends User$coachAssignmentsPlayerArgs<ExtArgs> = {}>(args?: Subset<T, User$coachAssignmentsPlayerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coachAssignmentsCoach<T extends User$coachAssignmentsCoachArgs<ExtArgs> = {}>(args?: Subset<T, User$coachAssignmentsCoachArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly clubId: FieldRef<"User", 'String'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.createdTemplates
   */
  export type User$createdTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.calendarEventsAsPlayer
   */
  export type User$calendarEventsAsPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.calendarEventsAsCreator
   */
  export type User$calendarEventsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.club
   */
  export type User$clubArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
  }

  /**
   * User.clubsAsCoach
   */
  export type User$clubsAsCoachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    cursor?: ClubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * User.clubsAsAdmin
   */
  export type User$clubsAsAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    cursor?: ClubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * User.coachAssignmentsPlayer
   */
  export type User$coachAssignmentsPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    where?: CoachAssignmentWhereInput
    orderBy?: CoachAssignmentOrderByWithRelationInput | CoachAssignmentOrderByWithRelationInput[]
    cursor?: CoachAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachAssignmentScalarFieldEnum | CoachAssignmentScalarFieldEnum[]
  }

  /**
   * User.coachAssignmentsCoach
   */
  export type User$coachAssignmentsCoachArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    where?: CoachAssignmentWhereInput
    orderBy?: CoachAssignmentOrderByWithRelationInput | CoachAssignmentOrderByWithRelationInput[]
    cursor?: CoachAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachAssignmentScalarFieldEnum | CoachAssignmentScalarFieldEnum[]
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
    _min: PlayerProfileMinAggregateOutputType | null
    _max: PlayerProfileMaxAggregateOutputType | null
  }

  export type PlayerProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type PlayerProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type PlayerProfileCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type PlayerProfileMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PlayerProfileMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PlayerProfileCountAggregateInputType = {
    id?: true
    userId?: true
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
    _min?: PlayerProfileMinAggregateInputType
    _max?: PlayerProfileMaxAggregateInputType
  }

  export type PlayerProfileGroupByOutputType = {
    id: string
    userId: string
    _count: PlayerProfileCountAggregateOutputType | null
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
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerProfile"]>

  export type PlayerProfileSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type PlayerProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["playerProfile"]>
  export type PlayerProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayerProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlayerProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlayerProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
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
    title: string | null
    category: $Enums.TaskCategory | null
    inputSchema: $Enums.InputSchema | null
    createdById: string | null
  }

  export type TaskTemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: $Enums.TaskCategory | null
    inputSchema: $Enums.InputSchema | null
    createdById: string | null
  }

  export type TaskTemplateCountAggregateOutputType = {
    id: number
    title: number
    category: number
    inputSchema: number
    createdById: number
    _all: number
  }


  export type TaskTemplateMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    inputSchema?: true
    createdById?: true
  }

  export type TaskTemplateMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    inputSchema?: true
    createdById?: true
  }

  export type TaskTemplateCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    inputSchema?: true
    createdById?: true
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
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
    createdById: string | null
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
    title?: boolean
    category?: boolean
    inputSchema?: boolean
    createdById?: boolean
    createdBy?: boolean | TaskTemplate$createdByArgs<ExtArgs>
    events?: boolean | TaskTemplate$eventsArgs<ExtArgs>
    _count?: boolean | TaskTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskTemplate"]>

  export type TaskTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    inputSchema?: boolean
    createdById?: boolean
    createdBy?: boolean | TaskTemplate$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["taskTemplate"]>

  export type TaskTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    inputSchema?: boolean
    createdById?: boolean
    createdBy?: boolean | TaskTemplate$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["taskTemplate"]>

  export type TaskTemplateSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    inputSchema?: boolean
    createdById?: boolean
  }

  export type TaskTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "inputSchema" | "createdById", ExtArgs["result"]["taskTemplate"]>
  export type TaskTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | TaskTemplate$createdByArgs<ExtArgs>
    events?: boolean | TaskTemplate$eventsArgs<ExtArgs>
    _count?: boolean | TaskTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | TaskTemplate$createdByArgs<ExtArgs>
  }
  export type TaskTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | TaskTemplate$createdByArgs<ExtArgs>
  }

  export type $TaskTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskTemplate"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      events: Prisma.$CalendarEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: $Enums.TaskCategory
      inputSchema: $Enums.InputSchema
      createdById: string | null
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
    createdBy<T extends TaskTemplate$createdByArgs<ExtArgs> = {}>(args?: Subset<T, TaskTemplate$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events<T extends TaskTemplate$eventsArgs<ExtArgs> = {}>(args?: Subset<T, TaskTemplate$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly title: FieldRef<"TaskTemplate", 'String'>
    readonly category: FieldRef<"TaskTemplate", 'TaskCategory'>
    readonly inputSchema: FieldRef<"TaskTemplate", 'InputSchema'>
    readonly createdById: FieldRef<"TaskTemplate", 'String'>
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
   * TaskTemplate.createdBy
   */
  export type TaskTemplate$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * TaskTemplate.events
   */
  export type TaskTemplate$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    playerId: string | null
    templateId: string | null
    start: Date | null
    end: Date | null
    createdById: string | null
  }

  export type CalendarEventMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    templateId: string | null
    start: Date | null
    end: Date | null
    createdById: string | null
  }

  export type CalendarEventCountAggregateOutputType = {
    id: number
    playerId: number
    templateId: number
    start: number
    end: number
    createdById: number
    _all: number
  }


  export type CalendarEventMinAggregateInputType = {
    id?: true
    playerId?: true
    templateId?: true
    start?: true
    end?: true
    createdById?: true
  }

  export type CalendarEventMaxAggregateInputType = {
    id?: true
    playerId?: true
    templateId?: true
    start?: true
    end?: true
    createdById?: true
  }

  export type CalendarEventCountAggregateInputType = {
    id?: true
    playerId?: true
    templateId?: true
    start?: true
    end?: true
    createdById?: true
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
    playerId: string
    templateId: string
    start: Date
    end: Date
    createdById: string
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
    playerId?: boolean
    templateId?: boolean
    start?: boolean
    end?: boolean
    createdById?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TaskTemplateDefaultArgs<ExtArgs>
    TaskLogs?: boolean | CalendarEvent$TaskLogsArgs<ExtArgs>
    _count?: boolean | CalendarEventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    templateId?: boolean
    start?: boolean
    end?: boolean
    createdById?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TaskTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    templateId?: boolean
    start?: boolean
    end?: boolean
    createdById?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TaskTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectScalar = {
    id?: boolean
    playerId?: boolean
    templateId?: boolean
    start?: boolean
    end?: boolean
    createdById?: boolean
  }

  export type CalendarEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "templateId" | "start" | "end" | "createdById", ExtArgs["result"]["calendarEvent"]>
  export type CalendarEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TaskTemplateDefaultArgs<ExtArgs>
    TaskLogs?: boolean | CalendarEvent$TaskLogsArgs<ExtArgs>
    _count?: boolean | CalendarEventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CalendarEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TaskTemplateDefaultArgs<ExtArgs>
  }
  export type CalendarEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    template?: boolean | TaskTemplateDefaultArgs<ExtArgs>
  }

  export type $CalendarEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarEvent"
    objects: {
      player: Prisma.$UserPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      template: Prisma.$TaskTemplatePayload<ExtArgs>
      TaskLogs: Prisma.$TaskLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      templateId: string
      start: Date
      end: Date
      createdById: string
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
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    template<T extends TaskTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskTemplateDefaultArgs<ExtArgs>>): Prisma__TaskTemplateClient<$Result.GetResult<Prisma.$TaskTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TaskLogs<T extends CalendarEvent$TaskLogsArgs<ExtArgs> = {}>(args?: Subset<T, CalendarEvent$TaskLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly playerId: FieldRef<"CalendarEvent", 'String'>
    readonly templateId: FieldRef<"CalendarEvent", 'String'>
    readonly start: FieldRef<"CalendarEvent", 'DateTime'>
    readonly end: FieldRef<"CalendarEvent", 'DateTime'>
    readonly createdById: FieldRef<"CalendarEvent", 'String'>
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
   * CalendarEvent.TaskLogs
   */
  export type CalendarEvent$TaskLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    _avg: TaskLogAvgAggregateOutputType | null
    _sum: TaskLogSumAggregateOutputType | null
    _min: TaskLogMinAggregateOutputType | null
    _max: TaskLogMaxAggregateOutputType | null
  }

  export type TaskLogAvgAggregateOutputType = {
    attempts: number | null
    successes: number | null
    score: number | null
  }

  export type TaskLogSumAggregateOutputType = {
    attempts: number | null
    successes: number | null
    score: number | null
  }

  export type TaskLogMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    type: $Enums.InputSchema | null
    attempts: number | null
    successes: number | null
    score: number | null
    text: string | null
    createdAt: Date | null
  }

  export type TaskLogMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    type: $Enums.InputSchema | null
    attempts: number | null
    successes: number | null
    score: number | null
    text: string | null
    createdAt: Date | null
  }

  export type TaskLogCountAggregateOutputType = {
    id: number
    eventId: number
    type: number
    attempts: number
    successes: number
    score: number
    text: number
    createdAt: number
    _all: number
  }


  export type TaskLogAvgAggregateInputType = {
    attempts?: true
    successes?: true
    score?: true
  }

  export type TaskLogSumAggregateInputType = {
    attempts?: true
    successes?: true
    score?: true
  }

  export type TaskLogMinAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    attempts?: true
    successes?: true
    score?: true
    text?: true
    createdAt?: true
  }

  export type TaskLogMaxAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    attempts?: true
    successes?: true
    score?: true
    text?: true
    createdAt?: true
  }

  export type TaskLogCountAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    attempts?: true
    successes?: true
    score?: true
    text?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: TaskLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskLogSumAggregateInputType
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
    _avg?: TaskLogAvgAggregateInputType
    _sum?: TaskLogSumAggregateInputType
    _min?: TaskLogMinAggregateInputType
    _max?: TaskLogMaxAggregateInputType
  }

  export type TaskLogGroupByOutputType = {
    id: string
    eventId: string
    type: $Enums.InputSchema
    attempts: number | null
    successes: number | null
    score: number | null
    text: string | null
    createdAt: Date
    _count: TaskLogCountAggregateOutputType | null
    _avg: TaskLogAvgAggregateOutputType | null
    _sum: TaskLogSumAggregateOutputType | null
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
    eventId?: boolean
    type?: boolean
    attempts?: boolean
    successes?: boolean
    score?: boolean
    text?: boolean
    createdAt?: boolean
    event?: boolean | CalendarEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    attempts?: boolean
    successes?: boolean
    score?: boolean
    text?: boolean
    createdAt?: boolean
    event?: boolean | CalendarEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    attempts?: boolean
    successes?: boolean
    score?: boolean
    text?: boolean
    createdAt?: boolean
    event?: boolean | CalendarEventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLog"]>

  export type TaskLogSelectScalar = {
    id?: boolean
    eventId?: boolean
    type?: boolean
    attempts?: boolean
    successes?: boolean
    score?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type TaskLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "type" | "attempts" | "successes" | "score" | "text" | "createdAt", ExtArgs["result"]["taskLog"]>
  export type TaskLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | CalendarEventDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | CalendarEventDefaultArgs<ExtArgs>
  }
  export type TaskLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | CalendarEventDefaultArgs<ExtArgs>
  }

  export type $TaskLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskLog"
    objects: {
      event: Prisma.$CalendarEventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      type: $Enums.InputSchema
      attempts: number | null
      successes: number | null
      score: number | null
      text: string | null
      createdAt: Date
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
    event<T extends CalendarEventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CalendarEventDefaultArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly eventId: FieldRef<"TaskLog", 'String'>
    readonly type: FieldRef<"TaskLog", 'InputSchema'>
    readonly attempts: FieldRef<"TaskLog", 'Int'>
    readonly successes: FieldRef<"TaskLog", 'Int'>
    readonly score: FieldRef<"TaskLog", 'Float'>
    readonly text: FieldRef<"TaskLog", 'String'>
    readonly createdAt: FieldRef<"TaskLog", 'DateTime'>
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
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClubMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClubMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClubCountAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Club$membersArgs<ExtArgs>
    coaches?: boolean | Club$coachesArgs<ExtArgs>
    admins?: boolean | Club$adminsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "createdAt" | "updatedAt", ExtArgs["result"]["club"]>
  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Club$membersArgs<ExtArgs>
    coaches?: boolean | Club$coachesArgs<ExtArgs>
    admins?: boolean | Club$adminsArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      members: Prisma.$UserPayload<ExtArgs>[]
      coaches: Prisma.$UserPayload<ExtArgs>[]
      admins: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
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
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Club$membersArgs<ExtArgs> = {}>(args?: Subset<T, Club$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coaches<T extends Club$coachesArgs<ExtArgs> = {}>(args?: Subset<T, Club$coachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    admins<T extends Club$adminsArgs<ExtArgs> = {}>(args?: Subset<T, Club$adminsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'String'>
    readonly name: FieldRef<"Club", 'String'>
    readonly logo: FieldRef<"Club", 'String'>
    readonly createdAt: FieldRef<"Club", 'DateTime'>
    readonly updatedAt: FieldRef<"Club", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club.members
   */
  export type Club$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Club.coaches
   */
  export type Club$coachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Club.admins
   */
  export type Club$adminsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
  }


  /**
   * Model CoachAssignment
   */

  export type AggregateCoachAssignment = {
    _count: CoachAssignmentCountAggregateOutputType | null
    _min: CoachAssignmentMinAggregateOutputType | null
    _max: CoachAssignmentMaxAggregateOutputType | null
  }

  export type CoachAssignmentMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    coachId: string | null
    createdAt: Date | null
  }

  export type CoachAssignmentMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    coachId: string | null
    createdAt: Date | null
  }

  export type CoachAssignmentCountAggregateOutputType = {
    id: number
    playerId: number
    coachId: number
    createdAt: number
    _all: number
  }


  export type CoachAssignmentMinAggregateInputType = {
    id?: true
    playerId?: true
    coachId?: true
    createdAt?: true
  }

  export type CoachAssignmentMaxAggregateInputType = {
    id?: true
    playerId?: true
    coachId?: true
    createdAt?: true
  }

  export type CoachAssignmentCountAggregateInputType = {
    id?: true
    playerId?: true
    coachId?: true
    createdAt?: true
    _all?: true
  }

  export type CoachAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachAssignment to aggregate.
     */
    where?: CoachAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachAssignments to fetch.
     */
    orderBy?: CoachAssignmentOrderByWithRelationInput | CoachAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachAssignments
    **/
    _count?: true | CoachAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachAssignmentMaxAggregateInputType
  }

  export type GetCoachAssignmentAggregateType<T extends CoachAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachAssignment[P]>
      : GetScalarType<T[P], AggregateCoachAssignment[P]>
  }




  export type CoachAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachAssignmentWhereInput
    orderBy?: CoachAssignmentOrderByWithAggregationInput | CoachAssignmentOrderByWithAggregationInput[]
    by: CoachAssignmentScalarFieldEnum[] | CoachAssignmentScalarFieldEnum
    having?: CoachAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachAssignmentCountAggregateInputType | true
    _min?: CoachAssignmentMinAggregateInputType
    _max?: CoachAssignmentMaxAggregateInputType
  }

  export type CoachAssignmentGroupByOutputType = {
    id: string
    playerId: string
    coachId: string
    createdAt: Date
    _count: CoachAssignmentCountAggregateOutputType | null
    _min: CoachAssignmentMinAggregateOutputType | null
    _max: CoachAssignmentMaxAggregateOutputType | null
  }

  type GetCoachAssignmentGroupByPayload<T extends CoachAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], CoachAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type CoachAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    coachId?: boolean
    createdAt?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachAssignment"]>

  export type CoachAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    coachId?: boolean
    createdAt?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachAssignment"]>

  export type CoachAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    coachId?: boolean
    createdAt?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachAssignment"]>

  export type CoachAssignmentSelectScalar = {
    id?: boolean
    playerId?: boolean
    coachId?: boolean
    createdAt?: boolean
  }

  export type CoachAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "coachId" | "createdAt", ExtArgs["result"]["coachAssignment"]>
  export type CoachAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoachAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    coach?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoachAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachAssignment"
    objects: {
      player: Prisma.$UserPayload<ExtArgs>
      coach: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      coachId: string
      createdAt: Date
    }, ExtArgs["result"]["coachAssignment"]>
    composites: {}
  }

  type CoachAssignmentGetPayload<S extends boolean | null | undefined | CoachAssignmentDefaultArgs> = $Result.GetResult<Prisma.$CoachAssignmentPayload, S>

  type CoachAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachAssignmentCountAggregateInputType | true
    }

  export interface CoachAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachAssignment'], meta: { name: 'CoachAssignment' } }
    /**
     * Find zero or one CoachAssignment that matches the filter.
     * @param {CoachAssignmentFindUniqueArgs} args - Arguments to find a CoachAssignment
     * @example
     * // Get one CoachAssignment
     * const coachAssignment = await prisma.coachAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachAssignmentFindUniqueArgs>(args: SelectSubset<T, CoachAssignmentFindUniqueArgs<ExtArgs>>): Prisma__CoachAssignmentClient<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoachAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachAssignmentFindUniqueOrThrowArgs} args - Arguments to find a CoachAssignment
     * @example
     * // Get one CoachAssignment
     * const coachAssignment = await prisma.coachAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachAssignmentClient<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAssignmentFindFirstArgs} args - Arguments to find a CoachAssignment
     * @example
     * // Get one CoachAssignment
     * const coachAssignment = await prisma.coachAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachAssignmentFindFirstArgs>(args?: SelectSubset<T, CoachAssignmentFindFirstArgs<ExtArgs>>): Prisma__CoachAssignmentClient<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoachAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAssignmentFindFirstOrThrowArgs} args - Arguments to find a CoachAssignment
     * @example
     * // Get one CoachAssignment
     * const coachAssignment = await prisma.coachAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachAssignmentClient<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoachAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachAssignments
     * const coachAssignments = await prisma.coachAssignment.findMany()
     * 
     * // Get first 10 CoachAssignments
     * const coachAssignments = await prisma.coachAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachAssignmentWithIdOnly = await prisma.coachAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachAssignmentFindManyArgs>(args?: SelectSubset<T, CoachAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoachAssignment.
     * @param {CoachAssignmentCreateArgs} args - Arguments to create a CoachAssignment.
     * @example
     * // Create one CoachAssignment
     * const CoachAssignment = await prisma.coachAssignment.create({
     *   data: {
     *     // ... data to create a CoachAssignment
     *   }
     * })
     * 
     */
    create<T extends CoachAssignmentCreateArgs>(args: SelectSubset<T, CoachAssignmentCreateArgs<ExtArgs>>): Prisma__CoachAssignmentClient<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoachAssignments.
     * @param {CoachAssignmentCreateManyArgs} args - Arguments to create many CoachAssignments.
     * @example
     * // Create many CoachAssignments
     * const coachAssignment = await prisma.coachAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachAssignmentCreateManyArgs>(args?: SelectSubset<T, CoachAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachAssignments and returns the data saved in the database.
     * @param {CoachAssignmentCreateManyAndReturnArgs} args - Arguments to create many CoachAssignments.
     * @example
     * // Create many CoachAssignments
     * const coachAssignment = await prisma.coachAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachAssignments and only return the `id`
     * const coachAssignmentWithIdOnly = await prisma.coachAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoachAssignment.
     * @param {CoachAssignmentDeleteArgs} args - Arguments to delete one CoachAssignment.
     * @example
     * // Delete one CoachAssignment
     * const CoachAssignment = await prisma.coachAssignment.delete({
     *   where: {
     *     // ... filter to delete one CoachAssignment
     *   }
     * })
     * 
     */
    delete<T extends CoachAssignmentDeleteArgs>(args: SelectSubset<T, CoachAssignmentDeleteArgs<ExtArgs>>): Prisma__CoachAssignmentClient<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoachAssignment.
     * @param {CoachAssignmentUpdateArgs} args - Arguments to update one CoachAssignment.
     * @example
     * // Update one CoachAssignment
     * const coachAssignment = await prisma.coachAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachAssignmentUpdateArgs>(args: SelectSubset<T, CoachAssignmentUpdateArgs<ExtArgs>>): Prisma__CoachAssignmentClient<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoachAssignments.
     * @param {CoachAssignmentDeleteManyArgs} args - Arguments to filter CoachAssignments to delete.
     * @example
     * // Delete a few CoachAssignments
     * const { count } = await prisma.coachAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachAssignmentDeleteManyArgs>(args?: SelectSubset<T, CoachAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachAssignments
     * const coachAssignment = await prisma.coachAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachAssignmentUpdateManyArgs>(args: SelectSubset<T, CoachAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachAssignments and returns the data updated in the database.
     * @param {CoachAssignmentUpdateManyAndReturnArgs} args - Arguments to update many CoachAssignments.
     * @example
     * // Update many CoachAssignments
     * const coachAssignment = await prisma.coachAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoachAssignments and only return the `id`
     * const coachAssignmentWithIdOnly = await prisma.coachAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoachAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoachAssignment.
     * @param {CoachAssignmentUpsertArgs} args - Arguments to update or create a CoachAssignment.
     * @example
     * // Update or create a CoachAssignment
     * const coachAssignment = await prisma.coachAssignment.upsert({
     *   create: {
     *     // ... data to create a CoachAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachAssignment we want to update
     *   }
     * })
     */
    upsert<T extends CoachAssignmentUpsertArgs>(args: SelectSubset<T, CoachAssignmentUpsertArgs<ExtArgs>>): Prisma__CoachAssignmentClient<$Result.GetResult<Prisma.$CoachAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoachAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAssignmentCountArgs} args - Arguments to filter CoachAssignments to count.
     * @example
     * // Count the number of CoachAssignments
     * const count = await prisma.coachAssignment.count({
     *   where: {
     *     // ... the filter for the CoachAssignments we want to count
     *   }
     * })
    **/
    count<T extends CoachAssignmentCountArgs>(
      args?: Subset<T, CoachAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachAssignmentAggregateArgs>(args: Subset<T, CoachAssignmentAggregateArgs>): Prisma.PrismaPromise<GetCoachAssignmentAggregateType<T>>

    /**
     * Group by CoachAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAssignmentGroupByArgs} args - Group by arguments.
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
      T extends CoachAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: CoachAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoachAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachAssignment model
   */
  readonly fields: CoachAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coach<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CoachAssignment model
   */
  interface CoachAssignmentFieldRefs {
    readonly id: FieldRef<"CoachAssignment", 'String'>
    readonly playerId: FieldRef<"CoachAssignment", 'String'>
    readonly coachId: FieldRef<"CoachAssignment", 'String'>
    readonly createdAt: FieldRef<"CoachAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachAssignment findUnique
   */
  export type CoachAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CoachAssignment to fetch.
     */
    where: CoachAssignmentWhereUniqueInput
  }

  /**
   * CoachAssignment findUniqueOrThrow
   */
  export type CoachAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CoachAssignment to fetch.
     */
    where: CoachAssignmentWhereUniqueInput
  }

  /**
   * CoachAssignment findFirst
   */
  export type CoachAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CoachAssignment to fetch.
     */
    where?: CoachAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachAssignments to fetch.
     */
    orderBy?: CoachAssignmentOrderByWithRelationInput | CoachAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachAssignments.
     */
    cursor?: CoachAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachAssignments.
     */
    distinct?: CoachAssignmentScalarFieldEnum | CoachAssignmentScalarFieldEnum[]
  }

  /**
   * CoachAssignment findFirstOrThrow
   */
  export type CoachAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CoachAssignment to fetch.
     */
    where?: CoachAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachAssignments to fetch.
     */
    orderBy?: CoachAssignmentOrderByWithRelationInput | CoachAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachAssignments.
     */
    cursor?: CoachAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachAssignments.
     */
    distinct?: CoachAssignmentScalarFieldEnum | CoachAssignmentScalarFieldEnum[]
  }

  /**
   * CoachAssignment findMany
   */
  export type CoachAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which CoachAssignments to fetch.
     */
    where?: CoachAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachAssignments to fetch.
     */
    orderBy?: CoachAssignmentOrderByWithRelationInput | CoachAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachAssignments.
     */
    cursor?: CoachAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachAssignments.
     */
    distinct?: CoachAssignmentScalarFieldEnum | CoachAssignmentScalarFieldEnum[]
  }

  /**
   * CoachAssignment create
   */
  export type CoachAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachAssignment.
     */
    data: XOR<CoachAssignmentCreateInput, CoachAssignmentUncheckedCreateInput>
  }

  /**
   * CoachAssignment createMany
   */
  export type CoachAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachAssignments.
     */
    data: CoachAssignmentCreateManyInput | CoachAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachAssignment createManyAndReturn
   */
  export type CoachAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many CoachAssignments.
     */
    data: CoachAssignmentCreateManyInput | CoachAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachAssignment update
   */
  export type CoachAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachAssignment.
     */
    data: XOR<CoachAssignmentUpdateInput, CoachAssignmentUncheckedUpdateInput>
    /**
     * Choose, which CoachAssignment to update.
     */
    where: CoachAssignmentWhereUniqueInput
  }

  /**
   * CoachAssignment updateMany
   */
  export type CoachAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachAssignments.
     */
    data: XOR<CoachAssignmentUpdateManyMutationInput, CoachAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which CoachAssignments to update
     */
    where?: CoachAssignmentWhereInput
    /**
     * Limit how many CoachAssignments to update.
     */
    limit?: number
  }

  /**
   * CoachAssignment updateManyAndReturn
   */
  export type CoachAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update CoachAssignments.
     */
    data: XOR<CoachAssignmentUpdateManyMutationInput, CoachAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which CoachAssignments to update
     */
    where?: CoachAssignmentWhereInput
    /**
     * Limit how many CoachAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachAssignment upsert
   */
  export type CoachAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachAssignment to update in case it exists.
     */
    where: CoachAssignmentWhereUniqueInput
    /**
     * In case the CoachAssignment found by the `where` argument doesn't exist, create a new CoachAssignment with this data.
     */
    create: XOR<CoachAssignmentCreateInput, CoachAssignmentUncheckedCreateInput>
    /**
     * In case the CoachAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachAssignmentUpdateInput, CoachAssignmentUncheckedUpdateInput>
  }

  /**
   * CoachAssignment delete
   */
  export type CoachAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
    /**
     * Filter which CoachAssignment to delete.
     */
    where: CoachAssignmentWhereUniqueInput
  }

  /**
   * CoachAssignment deleteMany
   */
  export type CoachAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachAssignments to delete
     */
    where?: CoachAssignmentWhereInput
    /**
     * Limit how many CoachAssignments to delete.
     */
    limit?: number
  }

  /**
   * CoachAssignment without action
   */
  export type CoachAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachAssignment
     */
    select?: CoachAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoachAssignment
     */
    omit?: CoachAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly email: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
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
    firstName: 'firstName',
    lastName: 'lastName',
    profileImage: 'profileImage',
    role: 'role',
    clubId: 'clubId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PlayerProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
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
    title: 'title',
    category: 'category',
    inputSchema: 'inputSchema',
    createdById: 'createdById'
  };

  export type TaskTemplateScalarFieldEnum = (typeof TaskTemplateScalarFieldEnum)[keyof typeof TaskTemplateScalarFieldEnum]


  export const CalendarEventScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    templateId: 'templateId',
    start: 'start',
    end: 'end',
    createdById: 'createdById'
  };

  export type CalendarEventScalarFieldEnum = (typeof CalendarEventScalarFieldEnum)[keyof typeof CalendarEventScalarFieldEnum]


  export const TaskLogScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    type: 'type',
    attempts: 'attempts',
    successes: 'successes',
    score: 'score',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type TaskLogScalarFieldEnum = (typeof TaskLogScalarFieldEnum)[keyof typeof TaskLogScalarFieldEnum]


  export const ClubScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const CoachAssignmentScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    coachId: 'coachId',
    createdAt: 'createdAt'
  };

  export type CoachAssignmentScalarFieldEnum = (typeof CoachAssignmentScalarFieldEnum)[keyof typeof CoachAssignmentScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


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
   * Reference to a field of type 'TaskCategory'
   */
  export type EnumTaskCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskCategory'>
    


  /**
   * Reference to a field of type 'TaskCategory[]'
   */
  export type ListEnumTaskCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskCategory[]'>
    


  /**
   * Reference to a field of type 'InputSchema'
   */
  export type EnumInputSchemaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InputSchema'>
    


  /**
   * Reference to a field of type 'InputSchema[]'
   */
  export type ListEnumInputSchemaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InputSchema[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
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
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    clubId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playerProfile?: XOR<PlayerProfileNullableScalarRelationFilter, PlayerProfileWhereInput> | null
    coachLinks?: CoachPlayerLinkListRelationFilter
    playerLinks?: CoachPlayerLinkListRelationFilter
    createdTemplates?: TaskTemplateListRelationFilter
    calendarEventsAsPlayer?: CalendarEventListRelationFilter
    calendarEventsAsCreator?: CalendarEventListRelationFilter
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    clubsAsCoach?: ClubListRelationFilter
    clubsAsAdmin?: ClubListRelationFilter
    coachAssignmentsPlayer?: CoachAssignmentListRelationFilter
    coachAssignmentsCoach?: CoachAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    clubId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playerProfile?: PlayerProfileOrderByWithRelationInput
    coachLinks?: CoachPlayerLinkOrderByRelationAggregateInput
    playerLinks?: CoachPlayerLinkOrderByRelationAggregateInput
    createdTemplates?: TaskTemplateOrderByRelationAggregateInput
    calendarEventsAsPlayer?: CalendarEventOrderByRelationAggregateInput
    calendarEventsAsCreator?: CalendarEventOrderByRelationAggregateInput
    club?: ClubOrderByWithRelationInput
    clubsAsCoach?: ClubOrderByRelationAggregateInput
    clubsAsAdmin?: ClubOrderByRelationAggregateInput
    coachAssignmentsPlayer?: CoachAssignmentOrderByRelationAggregateInput
    coachAssignmentsCoach?: CoachAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    clubId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    playerProfile?: XOR<PlayerProfileNullableScalarRelationFilter, PlayerProfileWhereInput> | null
    coachLinks?: CoachPlayerLinkListRelationFilter
    playerLinks?: CoachPlayerLinkListRelationFilter
    createdTemplates?: TaskTemplateListRelationFilter
    calendarEventsAsPlayer?: CalendarEventListRelationFilter
    calendarEventsAsCreator?: CalendarEventListRelationFilter
    club?: XOR<ClubNullableScalarRelationFilter, ClubWhereInput> | null
    clubsAsCoach?: ClubListRelationFilter
    clubsAsAdmin?: ClubListRelationFilter
    coachAssignmentsPlayer?: CoachAssignmentListRelationFilter
    coachAssignmentsCoach?: CoachAssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    role?: SortOrder
    clubId?: SortOrderInput | SortOrder
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
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    clubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PlayerProfileWhereInput = {
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    id?: StringFilter<"PlayerProfile"> | string
    userId?: StringFilter<"PlayerProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PlayerProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PlayerProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    OR?: PlayerProfileWhereInput[]
    NOT?: PlayerProfileWhereInput | PlayerProfileWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PlayerProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: PlayerProfileCountOrderByAggregateInput
    _max?: PlayerProfileMaxOrderByAggregateInput
    _min?: PlayerProfileMinOrderByAggregateInput
  }

  export type PlayerProfileScalarWhereWithAggregatesInput = {
    AND?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    OR?: PlayerProfileScalarWhereWithAggregatesInput[]
    NOT?: PlayerProfileScalarWhereWithAggregatesInput | PlayerProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerProfile"> | string
    userId?: StringWithAggregatesFilter<"PlayerProfile"> | string
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
    title?: StringFilter<"TaskTemplate"> | string
    category?: EnumTaskCategoryFilter<"TaskTemplate"> | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFilter<"TaskTemplate"> | $Enums.InputSchema
    createdById?: StringNullableFilter<"TaskTemplate"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    events?: CalendarEventListRelationFilter
  }

  export type TaskTemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    inputSchema?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    events?: CalendarEventOrderByRelationAggregateInput
  }

  export type TaskTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskTemplateWhereInput | TaskTemplateWhereInput[]
    OR?: TaskTemplateWhereInput[]
    NOT?: TaskTemplateWhereInput | TaskTemplateWhereInput[]
    title?: StringFilter<"TaskTemplate"> | string
    category?: EnumTaskCategoryFilter<"TaskTemplate"> | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFilter<"TaskTemplate"> | $Enums.InputSchema
    createdById?: StringNullableFilter<"TaskTemplate"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    events?: CalendarEventListRelationFilter
  }, "id">

  export type TaskTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    inputSchema?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: TaskTemplateCountOrderByAggregateInput
    _max?: TaskTemplateMaxOrderByAggregateInput
    _min?: TaskTemplateMinOrderByAggregateInput
  }

  export type TaskTemplateScalarWhereWithAggregatesInput = {
    AND?: TaskTemplateScalarWhereWithAggregatesInput | TaskTemplateScalarWhereWithAggregatesInput[]
    OR?: TaskTemplateScalarWhereWithAggregatesInput[]
    NOT?: TaskTemplateScalarWhereWithAggregatesInput | TaskTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskTemplate"> | string
    title?: StringWithAggregatesFilter<"TaskTemplate"> | string
    category?: EnumTaskCategoryWithAggregatesFilter<"TaskTemplate"> | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaWithAggregatesFilter<"TaskTemplate"> | $Enums.InputSchema
    createdById?: StringNullableWithAggregatesFilter<"TaskTemplate"> | string | null
  }

  export type CalendarEventWhereInput = {
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    id?: StringFilter<"CalendarEvent"> | string
    playerId?: StringFilter<"CalendarEvent"> | string
    templateId?: StringFilter<"CalendarEvent"> | string
    start?: DateTimeFilter<"CalendarEvent"> | Date | string
    end?: DateTimeFilter<"CalendarEvent"> | Date | string
    createdById?: StringFilter<"CalendarEvent"> | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TaskTemplateScalarRelationFilter, TaskTemplateWhereInput>
    TaskLogs?: TaskLogListRelationFilter
  }

  export type CalendarEventOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    templateId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
    player?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    template?: TaskTemplateOrderByWithRelationInput
    TaskLogs?: TaskLogOrderByRelationAggregateInput
  }

  export type CalendarEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    playerId?: StringFilter<"CalendarEvent"> | string
    templateId?: StringFilter<"CalendarEvent"> | string
    start?: DateTimeFilter<"CalendarEvent"> | Date | string
    end?: DateTimeFilter<"CalendarEvent"> | Date | string
    createdById?: StringFilter<"CalendarEvent"> | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    template?: XOR<TaskTemplateScalarRelationFilter, TaskTemplateWhereInput>
    TaskLogs?: TaskLogListRelationFilter
  }, "id">

  export type CalendarEventOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    templateId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
    _count?: CalendarEventCountOrderByAggregateInput
    _max?: CalendarEventMaxOrderByAggregateInput
    _min?: CalendarEventMinOrderByAggregateInput
  }

  export type CalendarEventScalarWhereWithAggregatesInput = {
    AND?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    OR?: CalendarEventScalarWhereWithAggregatesInput[]
    NOT?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalendarEvent"> | string
    playerId?: StringWithAggregatesFilter<"CalendarEvent"> | string
    templateId?: StringWithAggregatesFilter<"CalendarEvent"> | string
    start?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
    end?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
    createdById?: StringWithAggregatesFilter<"CalendarEvent"> | string
  }

  export type TaskLogWhereInput = {
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    id?: StringFilter<"TaskLog"> | string
    eventId?: StringFilter<"TaskLog"> | string
    type?: EnumInputSchemaFilter<"TaskLog"> | $Enums.InputSchema
    attempts?: IntNullableFilter<"TaskLog"> | number | null
    successes?: IntNullableFilter<"TaskLog"> | number | null
    score?: FloatNullableFilter<"TaskLog"> | number | null
    text?: StringNullableFilter<"TaskLog"> | string | null
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
    event?: XOR<CalendarEventScalarRelationFilter, CalendarEventWhereInput>
  }

  export type TaskLogOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    attempts?: SortOrderInput | SortOrder
    successes?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    event?: CalendarEventOrderByWithRelationInput
  }

  export type TaskLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskLogWhereInput | TaskLogWhereInput[]
    OR?: TaskLogWhereInput[]
    NOT?: TaskLogWhereInput | TaskLogWhereInput[]
    eventId?: StringFilter<"TaskLog"> | string
    type?: EnumInputSchemaFilter<"TaskLog"> | $Enums.InputSchema
    attempts?: IntNullableFilter<"TaskLog"> | number | null
    successes?: IntNullableFilter<"TaskLog"> | number | null
    score?: FloatNullableFilter<"TaskLog"> | number | null
    text?: StringNullableFilter<"TaskLog"> | string | null
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
    event?: XOR<CalendarEventScalarRelationFilter, CalendarEventWhereInput>
  }, "id">

  export type TaskLogOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    attempts?: SortOrderInput | SortOrder
    successes?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskLogCountOrderByAggregateInput
    _avg?: TaskLogAvgOrderByAggregateInput
    _max?: TaskLogMaxOrderByAggregateInput
    _min?: TaskLogMinOrderByAggregateInput
    _sum?: TaskLogSumOrderByAggregateInput
  }

  export type TaskLogScalarWhereWithAggregatesInput = {
    AND?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    OR?: TaskLogScalarWhereWithAggregatesInput[]
    NOT?: TaskLogScalarWhereWithAggregatesInput | TaskLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskLog"> | string
    eventId?: StringWithAggregatesFilter<"TaskLog"> | string
    type?: EnumInputSchemaWithAggregatesFilter<"TaskLog"> | $Enums.InputSchema
    attempts?: IntNullableWithAggregatesFilter<"TaskLog"> | number | null
    successes?: IntNullableWithAggregatesFilter<"TaskLog"> | number | null
    score?: FloatNullableWithAggregatesFilter<"TaskLog"> | number | null
    text?: StringNullableWithAggregatesFilter<"TaskLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaskLog"> | Date | string
  }

  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: StringFilter<"Club"> | string
    name?: StringFilter<"Club"> | string
    logo?: StringNullableFilter<"Club"> | string | null
    createdAt?: DateTimeFilter<"Club"> | Date | string
    updatedAt?: DateTimeFilter<"Club"> | Date | string
    members?: UserListRelationFilter
    coaches?: UserListRelationFilter
    admins?: UserListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: UserOrderByRelationAggregateInput
    coaches?: UserOrderByRelationAggregateInput
    admins?: UserOrderByRelationAggregateInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    name?: StringFilter<"Club"> | string
    logo?: StringNullableFilter<"Club"> | string | null
    createdAt?: DateTimeFilter<"Club"> | Date | string
    updatedAt?: DateTimeFilter<"Club"> | Date | string
    members?: UserListRelationFilter
    coaches?: UserListRelationFilter
    admins?: UserListRelationFilter
  }, "id">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClubCountOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Club"> | string
    name?: StringWithAggregatesFilter<"Club"> | string
    logo?: StringNullableWithAggregatesFilter<"Club"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Club"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Club"> | Date | string
  }

  export type CoachAssignmentWhereInput = {
    AND?: CoachAssignmentWhereInput | CoachAssignmentWhereInput[]
    OR?: CoachAssignmentWhereInput[]
    NOT?: CoachAssignmentWhereInput | CoachAssignmentWhereInput[]
    id?: StringFilter<"CoachAssignment"> | string
    playerId?: StringFilter<"CoachAssignment"> | string
    coachId?: StringFilter<"CoachAssignment"> | string
    createdAt?: DateTimeFilter<"CoachAssignment"> | Date | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    coach?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoachAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    coachId?: SortOrder
    createdAt?: SortOrder
    player?: UserOrderByWithRelationInput
    coach?: UserOrderByWithRelationInput
  }

  export type CoachAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId_coachId?: CoachAssignmentPlayerIdCoachIdCompoundUniqueInput
    AND?: CoachAssignmentWhereInput | CoachAssignmentWhereInput[]
    OR?: CoachAssignmentWhereInput[]
    NOT?: CoachAssignmentWhereInput | CoachAssignmentWhereInput[]
    playerId?: StringFilter<"CoachAssignment"> | string
    coachId?: StringFilter<"CoachAssignment"> | string
    createdAt?: DateTimeFilter<"CoachAssignment"> | Date | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    coach?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "playerId_coachId">

  export type CoachAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    coachId?: SortOrder
    createdAt?: SortOrder
    _count?: CoachAssignmentCountOrderByAggregateInput
    _max?: CoachAssignmentMaxOrderByAggregateInput
    _min?: CoachAssignmentMinOrderByAggregateInput
  }

  export type CoachAssignmentScalarWhereWithAggregatesInput = {
    AND?: CoachAssignmentScalarWhereWithAggregatesInput | CoachAssignmentScalarWhereWithAggregatesInput[]
    OR?: CoachAssignmentScalarWhereWithAggregatesInput[]
    NOT?: CoachAssignmentScalarWhereWithAggregatesInput | CoachAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachAssignment"> | string
    playerId?: StringWithAggregatesFilter<"CoachAssignment"> | string
    coachId?: StringWithAggregatesFilter<"CoachAssignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoachAssignment"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    email?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    email?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    email?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerProfileCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutPlayerProfileInput
  }

  export type PlayerProfileUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type PlayerProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPlayerProfileNestedInput
  }

  export type PlayerProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerProfileCreateManyInput = {
    id?: string
    userId: string
  }

  export type PlayerProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
    createdBy?: UserCreateNestedOneWithoutCreatedTemplatesInput
    events?: CalendarEventCreateNestedManyWithoutTemplateInput
  }

  export type TaskTemplateUncheckedCreateInput = {
    id?: string
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
    createdById?: string | null
    events?: CalendarEventUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TaskTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    createdBy?: UserUpdateOneWithoutCreatedTemplatesNestedInput
    events?: CalendarEventUpdateManyWithoutTemplateNestedInput
  }

  export type TaskTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    events?: CalendarEventUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TaskTemplateCreateManyInput = {
    id?: string
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
    createdById?: string | null
  }

  export type TaskTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
  }

  export type TaskTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CalendarEventCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    player: UserCreateNestedOneWithoutCalendarEventsAsPlayerInput
    createdBy: UserCreateNestedOneWithoutCalendarEventsAsCreatorInput
    template: TaskTemplateCreateNestedOneWithoutEventsInput
    TaskLogs?: TaskLogCreateNestedManyWithoutEventInput
  }

  export type CalendarEventUncheckedCreateInput = {
    id?: string
    playerId: string
    templateId: string
    start: Date | string
    end: Date | string
    createdById: string
    TaskLogs?: TaskLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type CalendarEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutCalendarEventsAsPlayerNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCalendarEventsAsCreatorNestedInput
    template?: TaskTemplateUpdateOneRequiredWithoutEventsNestedInput
    TaskLogs?: TaskLogUpdateManyWithoutEventNestedInput
  }

  export type CalendarEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    TaskLogs?: TaskLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type CalendarEventCreateManyInput = {
    id?: string
    playerId: string
    templateId: string
    start: Date | string
    end: Date | string
    createdById: string
  }

  export type CalendarEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type TaskLogCreateInput = {
    id?: string
    type: $Enums.InputSchema
    attempts?: number | null
    successes?: number | null
    score?: number | null
    text?: string | null
    createdAt?: Date | string
    event: CalendarEventCreateNestedOneWithoutTaskLogsInput
  }

  export type TaskLogUncheckedCreateInput = {
    id?: string
    eventId: string
    type: $Enums.InputSchema
    attempts?: number | null
    successes?: number | null
    score?: number | null
    text?: string | null
    createdAt?: Date | string
  }

  export type TaskLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    successes?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: CalendarEventUpdateOneRequiredWithoutTaskLogsNestedInput
  }

  export type TaskLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    successes?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogCreateManyInput = {
    id?: string
    eventId: string
    type: $Enums.InputSchema
    attempts?: number | null
    successes?: number | null
    score?: number | null
    text?: string | null
    createdAt?: Date | string
  }

  export type TaskLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    successes?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    successes?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubCreateInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutClubInput
    coaches?: UserCreateNestedManyWithoutClubsAsCoachInput
    admins?: UserCreateNestedManyWithoutClubsAsAdminInput
  }

  export type ClubUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutClubInput
    coaches?: UserUncheckedCreateNestedManyWithoutClubsAsCoachInput
    admins?: UserUncheckedCreateNestedManyWithoutClubsAsAdminInput
  }

  export type ClubUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutClubNestedInput
    coaches?: UserUpdateManyWithoutClubsAsCoachNestedInput
    admins?: UserUpdateManyWithoutClubsAsAdminNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutClubNestedInput
    coaches?: UserUncheckedUpdateManyWithoutClubsAsCoachNestedInput
    admins?: UserUncheckedUpdateManyWithoutClubsAsAdminNestedInput
  }

  export type ClubCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClubUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachAssignmentCreateInput = {
    id?: string
    createdAt?: Date | string
    player: UserCreateNestedOneWithoutCoachAssignmentsPlayerInput
    coach: UserCreateNestedOneWithoutCoachAssignmentsCoachInput
  }

  export type CoachAssignmentUncheckedCreateInput = {
    id?: string
    playerId: string
    coachId: string
    createdAt?: Date | string
  }

  export type CoachAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutCoachAssignmentsPlayerNestedInput
    coach?: UserUpdateOneRequiredWithoutCoachAssignmentsCoachNestedInput
  }

  export type CoachAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachAssignmentCreateManyInput = {
    id?: string
    playerId: string
    coachId: string
    createdAt?: Date | string
  }

  export type CoachAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ClubNullableScalarRelationFilter = {
    is?: ClubWhereInput | null
    isNot?: ClubWhereInput | null
  }

  export type ClubListRelationFilter = {
    every?: ClubWhereInput
    some?: ClubWhereInput
    none?: ClubWhereInput
  }

  export type CoachAssignmentListRelationFilter = {
    every?: CoachAssignmentWhereInput
    some?: CoachAssignmentWhereInput
    none?: CoachAssignmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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

  export type ClubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    clubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    clubId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    role?: SortOrder
    clubId?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlayerProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PlayerProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PlayerProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type EnumTaskCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskCategory | EnumTaskCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TaskCategory[] | ListEnumTaskCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskCategory[] | ListEnumTaskCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskCategoryFilter<$PrismaModel> | $Enums.TaskCategory
  }

  export type EnumInputSchemaFilter<$PrismaModel = never> = {
    equals?: $Enums.InputSchema | EnumInputSchemaFieldRefInput<$PrismaModel>
    in?: $Enums.InputSchema[] | ListEnumInputSchemaFieldRefInput<$PrismaModel>
    notIn?: $Enums.InputSchema[] | ListEnumInputSchemaFieldRefInput<$PrismaModel>
    not?: NestedEnumInputSchemaFilter<$PrismaModel> | $Enums.InputSchema
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TaskTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    inputSchema?: SortOrder
    createdById?: SortOrder
  }

  export type TaskTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    inputSchema?: SortOrder
    createdById?: SortOrder
  }

  export type TaskTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    inputSchema?: SortOrder
    createdById?: SortOrder
  }

  export type EnumTaskCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskCategory | EnumTaskCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TaskCategory[] | ListEnumTaskCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskCategory[] | ListEnumTaskCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TaskCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskCategoryFilter<$PrismaModel>
    _max?: NestedEnumTaskCategoryFilter<$PrismaModel>
  }

  export type EnumInputSchemaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InputSchema | EnumInputSchemaFieldRefInput<$PrismaModel>
    in?: $Enums.InputSchema[] | ListEnumInputSchemaFieldRefInput<$PrismaModel>
    notIn?: $Enums.InputSchema[] | ListEnumInputSchemaFieldRefInput<$PrismaModel>
    not?: NestedEnumInputSchemaWithAggregatesFilter<$PrismaModel> | $Enums.InputSchema
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInputSchemaFilter<$PrismaModel>
    _max?: NestedEnumInputSchemaFilter<$PrismaModel>
  }

  export type TaskTemplateScalarRelationFilter = {
    is?: TaskTemplateWhereInput
    isNot?: TaskTemplateWhereInput
  }

  export type TaskLogListRelationFilter = {
    every?: TaskLogWhereInput
    some?: TaskLogWhereInput
    none?: TaskLogWhereInput
  }

  export type TaskLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CalendarEventCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    templateId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
  }

  export type CalendarEventMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    templateId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
  }

  export type CalendarEventMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    templateId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type CalendarEventScalarRelationFilter = {
    is?: CalendarEventWhereInput
    isNot?: CalendarEventWhereInput
  }

  export type TaskLogCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    attempts?: SortOrder
    successes?: SortOrder
    score?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskLogAvgOrderByAggregateInput = {
    attempts?: SortOrder
    successes?: SortOrder
    score?: SortOrder
  }

  export type TaskLogMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    attempts?: SortOrder
    successes?: SortOrder
    score?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskLogMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    attempts?: SortOrder
    successes?: SortOrder
    score?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskLogSumOrderByAggregateInput = {
    attempts?: SortOrder
    successes?: SortOrder
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachAssignmentPlayerIdCoachIdCompoundUniqueInput = {
    playerId: string
    coachId: string
  }

  export type CoachAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    coachId?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    coachId?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    coachId?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    connect?: PlayerProfileWhereUniqueInput
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

  export type TaskTemplateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskTemplateCreateWithoutCreatedByInput, TaskTemplateUncheckedCreateWithoutCreatedByInput> | TaskTemplateCreateWithoutCreatedByInput[] | TaskTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCreatedByInput | TaskTemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskTemplateCreateManyCreatedByInputEnvelope
    connect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
  }

  export type CalendarEventCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput> | CalendarEventCreateWithoutPlayerInput[] | CalendarEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPlayerInput | CalendarEventCreateOrConnectWithoutPlayerInput[]
    createMany?: CalendarEventCreateManyPlayerInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type CalendarEventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CalendarEventCreateWithoutCreatedByInput, CalendarEventUncheckedCreateWithoutCreatedByInput> | CalendarEventCreateWithoutCreatedByInput[] | CalendarEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutCreatedByInput | CalendarEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: CalendarEventCreateManyCreatedByInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type ClubCreateNestedOneWithoutMembersInput = {
    create?: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput
    connect?: ClubWhereUniqueInput
  }

  export type ClubCreateNestedManyWithoutCoachesInput = {
    create?: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput> | ClubCreateWithoutCoachesInput[] | ClubUncheckedCreateWithoutCoachesInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutCoachesInput | ClubCreateOrConnectWithoutCoachesInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type ClubCreateNestedManyWithoutAdminsInput = {
    create?: XOR<ClubCreateWithoutAdminsInput, ClubUncheckedCreateWithoutAdminsInput> | ClubCreateWithoutAdminsInput[] | ClubUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutAdminsInput | ClubCreateOrConnectWithoutAdminsInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type CoachAssignmentCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CoachAssignmentCreateWithoutPlayerInput, CoachAssignmentUncheckedCreateWithoutPlayerInput> | CoachAssignmentCreateWithoutPlayerInput[] | CoachAssignmentUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CoachAssignmentCreateOrConnectWithoutPlayerInput | CoachAssignmentCreateOrConnectWithoutPlayerInput[]
    createMany?: CoachAssignmentCreateManyPlayerInputEnvelope
    connect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
  }

  export type CoachAssignmentCreateNestedManyWithoutCoachInput = {
    create?: XOR<CoachAssignmentCreateWithoutCoachInput, CoachAssignmentUncheckedCreateWithoutCoachInput> | CoachAssignmentCreateWithoutCoachInput[] | CoachAssignmentUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachAssignmentCreateOrConnectWithoutCoachInput | CoachAssignmentCreateOrConnectWithoutCoachInput[]
    createMany?: CoachAssignmentCreateManyCoachInputEnvelope
    connect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
  }

  export type PlayerProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerProfileCreateOrConnectWithoutUserInput
    connect?: PlayerProfileWhereUniqueInput
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

  export type TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskTemplateCreateWithoutCreatedByInput, TaskTemplateUncheckedCreateWithoutCreatedByInput> | TaskTemplateCreateWithoutCreatedByInput[] | TaskTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCreatedByInput | TaskTemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskTemplateCreateManyCreatedByInputEnvelope
    connect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput> | CalendarEventCreateWithoutPlayerInput[] | CalendarEventUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutPlayerInput | CalendarEventCreateOrConnectWithoutPlayerInput[]
    createMany?: CalendarEventCreateManyPlayerInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CalendarEventCreateWithoutCreatedByInput, CalendarEventUncheckedCreateWithoutCreatedByInput> | CalendarEventCreateWithoutCreatedByInput[] | CalendarEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutCreatedByInput | CalendarEventCreateOrConnectWithoutCreatedByInput[]
    createMany?: CalendarEventCreateManyCreatedByInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type ClubUncheckedCreateNestedManyWithoutCoachesInput = {
    create?: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput> | ClubCreateWithoutCoachesInput[] | ClubUncheckedCreateWithoutCoachesInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutCoachesInput | ClubCreateOrConnectWithoutCoachesInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type ClubUncheckedCreateNestedManyWithoutAdminsInput = {
    create?: XOR<ClubCreateWithoutAdminsInput, ClubUncheckedCreateWithoutAdminsInput> | ClubCreateWithoutAdminsInput[] | ClubUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutAdminsInput | ClubCreateOrConnectWithoutAdminsInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CoachAssignmentCreateWithoutPlayerInput, CoachAssignmentUncheckedCreateWithoutPlayerInput> | CoachAssignmentCreateWithoutPlayerInput[] | CoachAssignmentUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CoachAssignmentCreateOrConnectWithoutPlayerInput | CoachAssignmentCreateOrConnectWithoutPlayerInput[]
    createMany?: CoachAssignmentCreateManyPlayerInputEnvelope
    connect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
  }

  export type CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<CoachAssignmentCreateWithoutCoachInput, CoachAssignmentUncheckedCreateWithoutCoachInput> | CoachAssignmentCreateWithoutCoachInput[] | CoachAssignmentUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachAssignmentCreateOrConnectWithoutCoachInput | CoachAssignmentCreateOrConnectWithoutCoachInput[]
    createMany?: CoachAssignmentCreateManyCoachInputEnvelope
    connect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
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

  export type TaskTemplateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskTemplateCreateWithoutCreatedByInput, TaskTemplateUncheckedCreateWithoutCreatedByInput> | TaskTemplateCreateWithoutCreatedByInput[] | TaskTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCreatedByInput | TaskTemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput | TaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskTemplateCreateManyCreatedByInputEnvelope
    set?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    disconnect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    delete?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    connect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    update?: TaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput | TaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskTemplateUpdateManyWithWhereWithoutCreatedByInput | TaskTemplateUpdateManyWithWhereWithoutCreatedByInput[]
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

  export type CalendarEventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CalendarEventCreateWithoutCreatedByInput, CalendarEventUncheckedCreateWithoutCreatedByInput> | CalendarEventCreateWithoutCreatedByInput[] | CalendarEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutCreatedByInput | CalendarEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutCreatedByInput | CalendarEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CalendarEventCreateManyCreatedByInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutCreatedByInput | CalendarEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutCreatedByInput | CalendarEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type ClubUpdateOneWithoutMembersNestedInput = {
    create?: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ClubCreateOrConnectWithoutMembersInput
    upsert?: ClubUpsertWithoutMembersInput
    disconnect?: ClubWhereInput | boolean
    delete?: ClubWhereInput | boolean
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutMembersInput, ClubUpdateWithoutMembersInput>, ClubUncheckedUpdateWithoutMembersInput>
  }

  export type ClubUpdateManyWithoutCoachesNestedInput = {
    create?: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput> | ClubCreateWithoutCoachesInput[] | ClubUncheckedCreateWithoutCoachesInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutCoachesInput | ClubCreateOrConnectWithoutCoachesInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutCoachesInput | ClubUpsertWithWhereUniqueWithoutCoachesInput[]
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutCoachesInput | ClubUpdateWithWhereUniqueWithoutCoachesInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutCoachesInput | ClubUpdateManyWithWhereWithoutCoachesInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type ClubUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<ClubCreateWithoutAdminsInput, ClubUncheckedCreateWithoutAdminsInput> | ClubCreateWithoutAdminsInput[] | ClubUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutAdminsInput | ClubCreateOrConnectWithoutAdminsInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutAdminsInput | ClubUpsertWithWhereUniqueWithoutAdminsInput[]
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutAdminsInput | ClubUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutAdminsInput | ClubUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type CoachAssignmentUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<CoachAssignmentCreateWithoutPlayerInput, CoachAssignmentUncheckedCreateWithoutPlayerInput> | CoachAssignmentCreateWithoutPlayerInput[] | CoachAssignmentUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CoachAssignmentCreateOrConnectWithoutPlayerInput | CoachAssignmentCreateOrConnectWithoutPlayerInput[]
    upsert?: CoachAssignmentUpsertWithWhereUniqueWithoutPlayerInput | CoachAssignmentUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: CoachAssignmentCreateManyPlayerInputEnvelope
    set?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    disconnect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    delete?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    connect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    update?: CoachAssignmentUpdateWithWhereUniqueWithoutPlayerInput | CoachAssignmentUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: CoachAssignmentUpdateManyWithWhereWithoutPlayerInput | CoachAssignmentUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: CoachAssignmentScalarWhereInput | CoachAssignmentScalarWhereInput[]
  }

  export type CoachAssignmentUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CoachAssignmentCreateWithoutCoachInput, CoachAssignmentUncheckedCreateWithoutCoachInput> | CoachAssignmentCreateWithoutCoachInput[] | CoachAssignmentUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachAssignmentCreateOrConnectWithoutCoachInput | CoachAssignmentCreateOrConnectWithoutCoachInput[]
    upsert?: CoachAssignmentUpsertWithWhereUniqueWithoutCoachInput | CoachAssignmentUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CoachAssignmentCreateManyCoachInputEnvelope
    set?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    disconnect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    delete?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    connect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    update?: CoachAssignmentUpdateWithWhereUniqueWithoutCoachInput | CoachAssignmentUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CoachAssignmentUpdateManyWithWhereWithoutCoachInput | CoachAssignmentUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CoachAssignmentScalarWhereInput | CoachAssignmentScalarWhereInput[]
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

  export type TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskTemplateCreateWithoutCreatedByInput, TaskTemplateUncheckedCreateWithoutCreatedByInput> | TaskTemplateCreateWithoutCreatedByInput[] | TaskTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutCreatedByInput | TaskTemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput | TaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskTemplateCreateManyCreatedByInputEnvelope
    set?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    disconnect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    delete?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    connect?: TaskTemplateWhereUniqueInput | TaskTemplateWhereUniqueInput[]
    update?: TaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput | TaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskTemplateUpdateManyWithWhereWithoutCreatedByInput | TaskTemplateUpdateManyWithWhereWithoutCreatedByInput[]
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

  export type CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CalendarEventCreateWithoutCreatedByInput, CalendarEventUncheckedCreateWithoutCreatedByInput> | CalendarEventCreateWithoutCreatedByInput[] | CalendarEventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutCreatedByInput | CalendarEventCreateOrConnectWithoutCreatedByInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutCreatedByInput | CalendarEventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CalendarEventCreateManyCreatedByInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutCreatedByInput | CalendarEventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutCreatedByInput | CalendarEventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type ClubUncheckedUpdateManyWithoutCoachesNestedInput = {
    create?: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput> | ClubCreateWithoutCoachesInput[] | ClubUncheckedCreateWithoutCoachesInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutCoachesInput | ClubCreateOrConnectWithoutCoachesInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutCoachesInput | ClubUpsertWithWhereUniqueWithoutCoachesInput[]
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutCoachesInput | ClubUpdateWithWhereUniqueWithoutCoachesInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutCoachesInput | ClubUpdateManyWithWhereWithoutCoachesInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type ClubUncheckedUpdateManyWithoutAdminsNestedInput = {
    create?: XOR<ClubCreateWithoutAdminsInput, ClubUncheckedCreateWithoutAdminsInput> | ClubCreateWithoutAdminsInput[] | ClubUncheckedCreateWithoutAdminsInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutAdminsInput | ClubCreateOrConnectWithoutAdminsInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutAdminsInput | ClubUpsertWithWhereUniqueWithoutAdminsInput[]
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutAdminsInput | ClubUpdateWithWhereUniqueWithoutAdminsInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutAdminsInput | ClubUpdateManyWithWhereWithoutAdminsInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<CoachAssignmentCreateWithoutPlayerInput, CoachAssignmentUncheckedCreateWithoutPlayerInput> | CoachAssignmentCreateWithoutPlayerInput[] | CoachAssignmentUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CoachAssignmentCreateOrConnectWithoutPlayerInput | CoachAssignmentCreateOrConnectWithoutPlayerInput[]
    upsert?: CoachAssignmentUpsertWithWhereUniqueWithoutPlayerInput | CoachAssignmentUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: CoachAssignmentCreateManyPlayerInputEnvelope
    set?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    disconnect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    delete?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    connect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    update?: CoachAssignmentUpdateWithWhereUniqueWithoutPlayerInput | CoachAssignmentUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: CoachAssignmentUpdateManyWithWhereWithoutPlayerInput | CoachAssignmentUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: CoachAssignmentScalarWhereInput | CoachAssignmentScalarWhereInput[]
  }

  export type CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CoachAssignmentCreateWithoutCoachInput, CoachAssignmentUncheckedCreateWithoutCoachInput> | CoachAssignmentCreateWithoutCoachInput[] | CoachAssignmentUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachAssignmentCreateOrConnectWithoutCoachInput | CoachAssignmentCreateOrConnectWithoutCoachInput[]
    upsert?: CoachAssignmentUpsertWithWhereUniqueWithoutCoachInput | CoachAssignmentUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CoachAssignmentCreateManyCoachInputEnvelope
    set?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    disconnect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    delete?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    connect?: CoachAssignmentWhereUniqueInput | CoachAssignmentWhereUniqueInput[]
    update?: CoachAssignmentUpdateWithWhereUniqueWithoutCoachInput | CoachAssignmentUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CoachAssignmentUpdateManyWithWhereWithoutCoachInput | CoachAssignmentUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CoachAssignmentScalarWhereInput | CoachAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPlayerProfileInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPlayerProfileNestedInput = {
    create?: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerProfileInput
    upsert?: UserUpsertWithoutPlayerProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerProfileInput, UserUpdateWithoutPlayerProfileInput>, UserUncheckedUpdateWithoutPlayerProfileInput>
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

  export type UserCreateNestedOneWithoutCreatedTemplatesInput = {
    create?: XOR<UserCreateWithoutCreatedTemplatesInput, UserUncheckedCreateWithoutCreatedTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTemplatesInput
    connect?: UserWhereUniqueInput
  }

  export type CalendarEventCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CalendarEventCreateWithoutTemplateInput, CalendarEventUncheckedCreateWithoutTemplateInput> | CalendarEventCreateWithoutTemplateInput[] | CalendarEventUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTemplateInput | CalendarEventCreateOrConnectWithoutTemplateInput[]
    createMany?: CalendarEventCreateManyTemplateInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type CalendarEventUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<CalendarEventCreateWithoutTemplateInput, CalendarEventUncheckedCreateWithoutTemplateInput> | CalendarEventCreateWithoutTemplateInput[] | CalendarEventUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTemplateInput | CalendarEventCreateOrConnectWithoutTemplateInput[]
    createMany?: CalendarEventCreateManyTemplateInputEnvelope
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
  }

  export type EnumTaskCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TaskCategory
  }

  export type EnumInputSchemaFieldUpdateOperationsInput = {
    set?: $Enums.InputSchema
  }

  export type UserUpdateOneWithoutCreatedTemplatesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTemplatesInput, UserUncheckedCreateWithoutCreatedTemplatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTemplatesInput
    upsert?: UserUpsertWithoutCreatedTemplatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTemplatesInput, UserUpdateWithoutCreatedTemplatesInput>, UserUncheckedUpdateWithoutCreatedTemplatesInput>
  }

  export type CalendarEventUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CalendarEventCreateWithoutTemplateInput, CalendarEventUncheckedCreateWithoutTemplateInput> | CalendarEventCreateWithoutTemplateInput[] | CalendarEventUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTemplateInput | CalendarEventCreateOrConnectWithoutTemplateInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutTemplateInput | CalendarEventUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CalendarEventCreateManyTemplateInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutTemplateInput | CalendarEventUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutTemplateInput | CalendarEventUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type CalendarEventUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<CalendarEventCreateWithoutTemplateInput, CalendarEventUncheckedCreateWithoutTemplateInput> | CalendarEventCreateWithoutTemplateInput[] | CalendarEventUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTemplateInput | CalendarEventCreateOrConnectWithoutTemplateInput[]
    upsert?: CalendarEventUpsertWithWhereUniqueWithoutTemplateInput | CalendarEventUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: CalendarEventCreateManyTemplateInputEnvelope
    set?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    disconnect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    delete?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    connect?: CalendarEventWhereUniqueInput | CalendarEventWhereUniqueInput[]
    update?: CalendarEventUpdateWithWhereUniqueWithoutTemplateInput | CalendarEventUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: CalendarEventUpdateManyWithWhereWithoutTemplateInput | CalendarEventUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: CalendarEventScalarWhereInput | CalendarEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCalendarEventsAsPlayerInput = {
    create?: XOR<UserCreateWithoutCalendarEventsAsPlayerInput, UserUncheckedCreateWithoutCalendarEventsAsPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarEventsAsPlayerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCalendarEventsAsCreatorInput = {
    create?: XOR<UserCreateWithoutCalendarEventsAsCreatorInput, UserUncheckedCreateWithoutCalendarEventsAsCreatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarEventsAsCreatorInput
    connect?: UserWhereUniqueInput
  }

  export type TaskTemplateCreateNestedOneWithoutEventsInput = {
    create?: XOR<TaskTemplateCreateWithoutEventsInput, TaskTemplateUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutEventsInput
    connect?: TaskTemplateWhereUniqueInput
  }

  export type TaskLogCreateNestedManyWithoutEventInput = {
    create?: XOR<TaskLogCreateWithoutEventInput, TaskLogUncheckedCreateWithoutEventInput> | TaskLogCreateWithoutEventInput[] | TaskLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutEventInput | TaskLogCreateOrConnectWithoutEventInput[]
    createMany?: TaskLogCreateManyEventInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type TaskLogUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TaskLogCreateWithoutEventInput, TaskLogUncheckedCreateWithoutEventInput> | TaskLogCreateWithoutEventInput[] | TaskLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutEventInput | TaskLogCreateOrConnectWithoutEventInput[]
    createMany?: TaskLogCreateManyEventInputEnvelope
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCalendarEventsAsPlayerNestedInput = {
    create?: XOR<UserCreateWithoutCalendarEventsAsPlayerInput, UserUncheckedCreateWithoutCalendarEventsAsPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarEventsAsPlayerInput
    upsert?: UserUpsertWithoutCalendarEventsAsPlayerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCalendarEventsAsPlayerInput, UserUpdateWithoutCalendarEventsAsPlayerInput>, UserUncheckedUpdateWithoutCalendarEventsAsPlayerInput>
  }

  export type UserUpdateOneRequiredWithoutCalendarEventsAsCreatorNestedInput = {
    create?: XOR<UserCreateWithoutCalendarEventsAsCreatorInput, UserUncheckedCreateWithoutCalendarEventsAsCreatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCalendarEventsAsCreatorInput
    upsert?: UserUpsertWithoutCalendarEventsAsCreatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCalendarEventsAsCreatorInput, UserUpdateWithoutCalendarEventsAsCreatorInput>, UserUncheckedUpdateWithoutCalendarEventsAsCreatorInput>
  }

  export type TaskTemplateUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TaskTemplateCreateWithoutEventsInput, TaskTemplateUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TaskTemplateCreateOrConnectWithoutEventsInput
    upsert?: TaskTemplateUpsertWithoutEventsInput
    connect?: TaskTemplateWhereUniqueInput
    update?: XOR<XOR<TaskTemplateUpdateToOneWithWhereWithoutEventsInput, TaskTemplateUpdateWithoutEventsInput>, TaskTemplateUncheckedUpdateWithoutEventsInput>
  }

  export type TaskLogUpdateManyWithoutEventNestedInput = {
    create?: XOR<TaskLogCreateWithoutEventInput, TaskLogUncheckedCreateWithoutEventInput> | TaskLogCreateWithoutEventInput[] | TaskLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutEventInput | TaskLogCreateOrConnectWithoutEventInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutEventInput | TaskLogUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TaskLogCreateManyEventInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutEventInput | TaskLogUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutEventInput | TaskLogUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type TaskLogUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TaskLogCreateWithoutEventInput, TaskLogUncheckedCreateWithoutEventInput> | TaskLogCreateWithoutEventInput[] | TaskLogUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TaskLogCreateOrConnectWithoutEventInput | TaskLogCreateOrConnectWithoutEventInput[]
    upsert?: TaskLogUpsertWithWhereUniqueWithoutEventInput | TaskLogUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TaskLogCreateManyEventInputEnvelope
    set?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    disconnect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    delete?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    connect?: TaskLogWhereUniqueInput | TaskLogWhereUniqueInput[]
    update?: TaskLogUpdateWithWhereUniqueWithoutEventInput | TaskLogUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TaskLogUpdateManyWithWhereWithoutEventInput | TaskLogUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
  }

  export type CalendarEventCreateNestedOneWithoutTaskLogsInput = {
    create?: XOR<CalendarEventCreateWithoutTaskLogsInput, CalendarEventUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskLogsInput
    connect?: CalendarEventWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CalendarEventUpdateOneRequiredWithoutTaskLogsNestedInput = {
    create?: XOR<CalendarEventCreateWithoutTaskLogsInput, CalendarEventUncheckedCreateWithoutTaskLogsInput>
    connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskLogsInput
    upsert?: CalendarEventUpsertWithoutTaskLogsInput
    connect?: CalendarEventWhereUniqueInput
    update?: XOR<XOR<CalendarEventUpdateToOneWithWhereWithoutTaskLogsInput, CalendarEventUpdateWithoutTaskLogsInput>, CalendarEventUncheckedUpdateWithoutTaskLogsInput>
  }

  export type UserCreateNestedManyWithoutClubInput = {
    create?: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput> | UserCreateWithoutClubInput[] | UserUncheckedCreateWithoutClubInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubInput | UserCreateOrConnectWithoutClubInput[]
    createMany?: UserCreateManyClubInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClubsAsCoachInput = {
    create?: XOR<UserCreateWithoutClubsAsCoachInput, UserUncheckedCreateWithoutClubsAsCoachInput> | UserCreateWithoutClubsAsCoachInput[] | UserUncheckedCreateWithoutClubsAsCoachInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsAsCoachInput | UserCreateOrConnectWithoutClubsAsCoachInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutClubsAsAdminInput = {
    create?: XOR<UserCreateWithoutClubsAsAdminInput, UserUncheckedCreateWithoutClubsAsAdminInput> | UserCreateWithoutClubsAsAdminInput[] | UserUncheckedCreateWithoutClubsAsAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsAsAdminInput | UserCreateOrConnectWithoutClubsAsAdminInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput> | UserCreateWithoutClubInput[] | UserUncheckedCreateWithoutClubInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubInput | UserCreateOrConnectWithoutClubInput[]
    createMany?: UserCreateManyClubInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClubsAsCoachInput = {
    create?: XOR<UserCreateWithoutClubsAsCoachInput, UserUncheckedCreateWithoutClubsAsCoachInput> | UserCreateWithoutClubsAsCoachInput[] | UserUncheckedCreateWithoutClubsAsCoachInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsAsCoachInput | UserCreateOrConnectWithoutClubsAsCoachInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutClubsAsAdminInput = {
    create?: XOR<UserCreateWithoutClubsAsAdminInput, UserUncheckedCreateWithoutClubsAsAdminInput> | UserCreateWithoutClubsAsAdminInput[] | UserUncheckedCreateWithoutClubsAsAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsAsAdminInput | UserCreateOrConnectWithoutClubsAsAdminInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutClubNestedInput = {
    create?: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput> | UserCreateWithoutClubInput[] | UserUncheckedCreateWithoutClubInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubInput | UserCreateOrConnectWithoutClubInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubInput | UserUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: UserCreateManyClubInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubInput | UserUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubInput | UserUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClubsAsCoachNestedInput = {
    create?: XOR<UserCreateWithoutClubsAsCoachInput, UserUncheckedCreateWithoutClubsAsCoachInput> | UserCreateWithoutClubsAsCoachInput[] | UserUncheckedCreateWithoutClubsAsCoachInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsAsCoachInput | UserCreateOrConnectWithoutClubsAsCoachInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubsAsCoachInput | UserUpsertWithWhereUniqueWithoutClubsAsCoachInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubsAsCoachInput | UserUpdateWithWhereUniqueWithoutClubsAsCoachInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubsAsCoachInput | UserUpdateManyWithWhereWithoutClubsAsCoachInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutClubsAsAdminNestedInput = {
    create?: XOR<UserCreateWithoutClubsAsAdminInput, UserUncheckedCreateWithoutClubsAsAdminInput> | UserCreateWithoutClubsAsAdminInput[] | UserUncheckedCreateWithoutClubsAsAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsAsAdminInput | UserCreateOrConnectWithoutClubsAsAdminInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubsAsAdminInput | UserUpsertWithWhereUniqueWithoutClubsAsAdminInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubsAsAdminInput | UserUpdateWithWhereUniqueWithoutClubsAsAdminInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubsAsAdminInput | UserUpdateManyWithWhereWithoutClubsAsAdminInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput> | UserCreateWithoutClubInput[] | UserUncheckedCreateWithoutClubInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubInput | UserCreateOrConnectWithoutClubInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubInput | UserUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: UserCreateManyClubInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubInput | UserUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubInput | UserUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClubsAsCoachNestedInput = {
    create?: XOR<UserCreateWithoutClubsAsCoachInput, UserUncheckedCreateWithoutClubsAsCoachInput> | UserCreateWithoutClubsAsCoachInput[] | UserUncheckedCreateWithoutClubsAsCoachInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsAsCoachInput | UserCreateOrConnectWithoutClubsAsCoachInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubsAsCoachInput | UserUpsertWithWhereUniqueWithoutClubsAsCoachInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubsAsCoachInput | UserUpdateWithWhereUniqueWithoutClubsAsCoachInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubsAsCoachInput | UserUpdateManyWithWhereWithoutClubsAsCoachInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutClubsAsAdminNestedInput = {
    create?: XOR<UserCreateWithoutClubsAsAdminInput, UserUncheckedCreateWithoutClubsAsAdminInput> | UserCreateWithoutClubsAsAdminInput[] | UserUncheckedCreateWithoutClubsAsAdminInput[]
    connectOrCreate?: UserCreateOrConnectWithoutClubsAsAdminInput | UserCreateOrConnectWithoutClubsAsAdminInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutClubsAsAdminInput | UserUpsertWithWhereUniqueWithoutClubsAsAdminInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutClubsAsAdminInput | UserUpdateWithWhereUniqueWithoutClubsAsAdminInput[]
    updateMany?: UserUpdateManyWithWhereWithoutClubsAsAdminInput | UserUpdateManyWithWhereWithoutClubsAsAdminInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCoachAssignmentsPlayerInput = {
    create?: XOR<UserCreateWithoutCoachAssignmentsPlayerInput, UserUncheckedCreateWithoutCoachAssignmentsPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachAssignmentsPlayerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCoachAssignmentsCoachInput = {
    create?: XOR<UserCreateWithoutCoachAssignmentsCoachInput, UserUncheckedCreateWithoutCoachAssignmentsCoachInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachAssignmentsCoachInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCoachAssignmentsPlayerNestedInput = {
    create?: XOR<UserCreateWithoutCoachAssignmentsPlayerInput, UserUncheckedCreateWithoutCoachAssignmentsPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachAssignmentsPlayerInput
    upsert?: UserUpsertWithoutCoachAssignmentsPlayerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachAssignmentsPlayerInput, UserUpdateWithoutCoachAssignmentsPlayerInput>, UserUncheckedUpdateWithoutCoachAssignmentsPlayerInput>
  }

  export type UserUpdateOneRequiredWithoutCoachAssignmentsCoachNestedInput = {
    create?: XOR<UserCreateWithoutCoachAssignmentsCoachInput, UserUncheckedCreateWithoutCoachAssignmentsCoachInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoachAssignmentsCoachInput
    upsert?: UserUpsertWithoutCoachAssignmentsCoachInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoachAssignmentsCoachInput, UserUpdateWithoutCoachAssignmentsCoachInput>, UserUncheckedUpdateWithoutCoachAssignmentsCoachInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumTaskCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskCategory | EnumTaskCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TaskCategory[] | ListEnumTaskCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskCategory[] | ListEnumTaskCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskCategoryFilter<$PrismaModel> | $Enums.TaskCategory
  }

  export type NestedEnumInputSchemaFilter<$PrismaModel = never> = {
    equals?: $Enums.InputSchema | EnumInputSchemaFieldRefInput<$PrismaModel>
    in?: $Enums.InputSchema[] | ListEnumInputSchemaFieldRefInput<$PrismaModel>
    notIn?: $Enums.InputSchema[] | ListEnumInputSchemaFieldRefInput<$PrismaModel>
    not?: NestedEnumInputSchemaFilter<$PrismaModel> | $Enums.InputSchema
  }

  export type NestedEnumTaskCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskCategory | EnumTaskCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TaskCategory[] | ListEnumTaskCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskCategory[] | ListEnumTaskCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TaskCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskCategoryFilter<$PrismaModel>
    _max?: NestedEnumTaskCategoryFilter<$PrismaModel>
  }

  export type NestedEnumInputSchemaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InputSchema | EnumInputSchemaFieldRefInput<$PrismaModel>
    in?: $Enums.InputSchema[] | ListEnumInputSchemaFieldRefInput<$PrismaModel>
    notIn?: $Enums.InputSchema[] | ListEnumInputSchemaFieldRefInput<$PrismaModel>
    not?: NestedEnumInputSchemaWithAggregatesFilter<$PrismaModel> | $Enums.InputSchema
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInputSchemaFilter<$PrismaModel>
    _max?: NestedEnumInputSchemaFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type PlayerProfileCreateWithoutUserInput = {
    id?: string
  }

  export type PlayerProfileUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type PlayerProfileCreateOrConnectWithoutUserInput = {
    where: PlayerProfileWhereUniqueInput
    create: XOR<PlayerProfileCreateWithoutUserInput, PlayerProfileUncheckedCreateWithoutUserInput>
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

  export type TaskTemplateCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
    events?: CalendarEventCreateNestedManyWithoutTemplateInput
  }

  export type TaskTemplateUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
    events?: CalendarEventUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TaskTemplateCreateOrConnectWithoutCreatedByInput = {
    where: TaskTemplateWhereUniqueInput
    create: XOR<TaskTemplateCreateWithoutCreatedByInput, TaskTemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskTemplateCreateManyCreatedByInputEnvelope = {
    data: TaskTemplateCreateManyCreatedByInput | TaskTemplateCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type CalendarEventCreateWithoutPlayerInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdBy: UserCreateNestedOneWithoutCalendarEventsAsCreatorInput
    template: TaskTemplateCreateNestedOneWithoutEventsInput
    TaskLogs?: TaskLogCreateNestedManyWithoutEventInput
  }

  export type CalendarEventUncheckedCreateWithoutPlayerInput = {
    id?: string
    templateId: string
    start: Date | string
    end: Date | string
    createdById: string
    TaskLogs?: TaskLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type CalendarEventCreateOrConnectWithoutPlayerInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutPlayerInput, CalendarEventUncheckedCreateWithoutPlayerInput>
  }

  export type CalendarEventCreateManyPlayerInputEnvelope = {
    data: CalendarEventCreateManyPlayerInput | CalendarEventCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type CalendarEventCreateWithoutCreatedByInput = {
    id?: string
    start: Date | string
    end: Date | string
    player: UserCreateNestedOneWithoutCalendarEventsAsPlayerInput
    template: TaskTemplateCreateNestedOneWithoutEventsInput
    TaskLogs?: TaskLogCreateNestedManyWithoutEventInput
  }

  export type CalendarEventUncheckedCreateWithoutCreatedByInput = {
    id?: string
    playerId: string
    templateId: string
    start: Date | string
    end: Date | string
    TaskLogs?: TaskLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type CalendarEventCreateOrConnectWithoutCreatedByInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutCreatedByInput, CalendarEventUncheckedCreateWithoutCreatedByInput>
  }

  export type CalendarEventCreateManyCreatedByInputEnvelope = {
    data: CalendarEventCreateManyCreatedByInput | CalendarEventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ClubCreateWithoutMembersInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coaches?: UserCreateNestedManyWithoutClubsAsCoachInput
    admins?: UserCreateNestedManyWithoutClubsAsAdminInput
  }

  export type ClubUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coaches?: UserUncheckedCreateNestedManyWithoutClubsAsCoachInput
    admins?: UserUncheckedCreateNestedManyWithoutClubsAsAdminInput
  }

  export type ClubCreateOrConnectWithoutMembersInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput>
  }

  export type ClubCreateWithoutCoachesInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutClubInput
    admins?: UserCreateNestedManyWithoutClubsAsAdminInput
  }

  export type ClubUncheckedCreateWithoutCoachesInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutClubInput
    admins?: UserUncheckedCreateNestedManyWithoutClubsAsAdminInput
  }

  export type ClubCreateOrConnectWithoutCoachesInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput>
  }

  export type ClubCreateWithoutAdminsInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserCreateNestedManyWithoutClubInput
    coaches?: UserCreateNestedManyWithoutClubsAsCoachInput
  }

  export type ClubUncheckedCreateWithoutAdminsInput = {
    id?: string
    name: string
    logo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: UserUncheckedCreateNestedManyWithoutClubInput
    coaches?: UserUncheckedCreateNestedManyWithoutClubsAsCoachInput
  }

  export type ClubCreateOrConnectWithoutAdminsInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutAdminsInput, ClubUncheckedCreateWithoutAdminsInput>
  }

  export type CoachAssignmentCreateWithoutPlayerInput = {
    id?: string
    createdAt?: Date | string
    coach: UserCreateNestedOneWithoutCoachAssignmentsCoachInput
  }

  export type CoachAssignmentUncheckedCreateWithoutPlayerInput = {
    id?: string
    coachId: string
    createdAt?: Date | string
  }

  export type CoachAssignmentCreateOrConnectWithoutPlayerInput = {
    where: CoachAssignmentWhereUniqueInput
    create: XOR<CoachAssignmentCreateWithoutPlayerInput, CoachAssignmentUncheckedCreateWithoutPlayerInput>
  }

  export type CoachAssignmentCreateManyPlayerInputEnvelope = {
    data: CoachAssignmentCreateManyPlayerInput | CoachAssignmentCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type CoachAssignmentCreateWithoutCoachInput = {
    id?: string
    createdAt?: Date | string
    player: UserCreateNestedOneWithoutCoachAssignmentsPlayerInput
  }

  export type CoachAssignmentUncheckedCreateWithoutCoachInput = {
    id?: string
    playerId: string
    createdAt?: Date | string
  }

  export type CoachAssignmentCreateOrConnectWithoutCoachInput = {
    where: CoachAssignmentWhereUniqueInput
    create: XOR<CoachAssignmentCreateWithoutCoachInput, CoachAssignmentUncheckedCreateWithoutCoachInput>
  }

  export type CoachAssignmentCreateManyCoachInputEnvelope = {
    data: CoachAssignmentCreateManyCoachInput | CoachAssignmentCreateManyCoachInput[]
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
  }

  export type PlayerProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
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

  export type TaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TaskTemplateWhereUniqueInput
    update: XOR<TaskTemplateUpdateWithoutCreatedByInput, TaskTemplateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TaskTemplateCreateWithoutCreatedByInput, TaskTemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskTemplateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TaskTemplateWhereUniqueInput
    data: XOR<TaskTemplateUpdateWithoutCreatedByInput, TaskTemplateUncheckedUpdateWithoutCreatedByInput>
  }

  export type TaskTemplateUpdateManyWithWhereWithoutCreatedByInput = {
    where: TaskTemplateScalarWhereInput
    data: XOR<TaskTemplateUpdateManyMutationInput, TaskTemplateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TaskTemplateScalarWhereInput = {
    AND?: TaskTemplateScalarWhereInput | TaskTemplateScalarWhereInput[]
    OR?: TaskTemplateScalarWhereInput[]
    NOT?: TaskTemplateScalarWhereInput | TaskTemplateScalarWhereInput[]
    id?: StringFilter<"TaskTemplate"> | string
    title?: StringFilter<"TaskTemplate"> | string
    category?: EnumTaskCategoryFilter<"TaskTemplate"> | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFilter<"TaskTemplate"> | $Enums.InputSchema
    createdById?: StringNullableFilter<"TaskTemplate"> | string | null
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
    playerId?: StringFilter<"CalendarEvent"> | string
    templateId?: StringFilter<"CalendarEvent"> | string
    start?: DateTimeFilter<"CalendarEvent"> | Date | string
    end?: DateTimeFilter<"CalendarEvent"> | Date | string
    createdById?: StringFilter<"CalendarEvent"> | string
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutCreatedByInput, CalendarEventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CalendarEventCreateWithoutCreatedByInput, CalendarEventUncheckedCreateWithoutCreatedByInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutCreatedByInput, CalendarEventUncheckedUpdateWithoutCreatedByInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutCreatedByInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ClubUpsertWithoutMembersInput = {
    update: XOR<ClubUpdateWithoutMembersInput, ClubUncheckedUpdateWithoutMembersInput>
    create: XOR<ClubCreateWithoutMembersInput, ClubUncheckedCreateWithoutMembersInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutMembersInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutMembersInput, ClubUncheckedUpdateWithoutMembersInput>
  }

  export type ClubUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coaches?: UserUpdateManyWithoutClubsAsCoachNestedInput
    admins?: UserUpdateManyWithoutClubsAsAdminNestedInput
  }

  export type ClubUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coaches?: UserUncheckedUpdateManyWithoutClubsAsCoachNestedInput
    admins?: UserUncheckedUpdateManyWithoutClubsAsAdminNestedInput
  }

  export type ClubUpsertWithWhereUniqueWithoutCoachesInput = {
    where: ClubWhereUniqueInput
    update: XOR<ClubUpdateWithoutCoachesInput, ClubUncheckedUpdateWithoutCoachesInput>
    create: XOR<ClubCreateWithoutCoachesInput, ClubUncheckedCreateWithoutCoachesInput>
  }

  export type ClubUpdateWithWhereUniqueWithoutCoachesInput = {
    where: ClubWhereUniqueInput
    data: XOR<ClubUpdateWithoutCoachesInput, ClubUncheckedUpdateWithoutCoachesInput>
  }

  export type ClubUpdateManyWithWhereWithoutCoachesInput = {
    where: ClubScalarWhereInput
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyWithoutCoachesInput>
  }

  export type ClubScalarWhereInput = {
    AND?: ClubScalarWhereInput | ClubScalarWhereInput[]
    OR?: ClubScalarWhereInput[]
    NOT?: ClubScalarWhereInput | ClubScalarWhereInput[]
    id?: StringFilter<"Club"> | string
    name?: StringFilter<"Club"> | string
    logo?: StringNullableFilter<"Club"> | string | null
    createdAt?: DateTimeFilter<"Club"> | Date | string
    updatedAt?: DateTimeFilter<"Club"> | Date | string
  }

  export type ClubUpsertWithWhereUniqueWithoutAdminsInput = {
    where: ClubWhereUniqueInput
    update: XOR<ClubUpdateWithoutAdminsInput, ClubUncheckedUpdateWithoutAdminsInput>
    create: XOR<ClubCreateWithoutAdminsInput, ClubUncheckedCreateWithoutAdminsInput>
  }

  export type ClubUpdateWithWhereUniqueWithoutAdminsInput = {
    where: ClubWhereUniqueInput
    data: XOR<ClubUpdateWithoutAdminsInput, ClubUncheckedUpdateWithoutAdminsInput>
  }

  export type ClubUpdateManyWithWhereWithoutAdminsInput = {
    where: ClubScalarWhereInput
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyWithoutAdminsInput>
  }

  export type CoachAssignmentUpsertWithWhereUniqueWithoutPlayerInput = {
    where: CoachAssignmentWhereUniqueInput
    update: XOR<CoachAssignmentUpdateWithoutPlayerInput, CoachAssignmentUncheckedUpdateWithoutPlayerInput>
    create: XOR<CoachAssignmentCreateWithoutPlayerInput, CoachAssignmentUncheckedCreateWithoutPlayerInput>
  }

  export type CoachAssignmentUpdateWithWhereUniqueWithoutPlayerInput = {
    where: CoachAssignmentWhereUniqueInput
    data: XOR<CoachAssignmentUpdateWithoutPlayerInput, CoachAssignmentUncheckedUpdateWithoutPlayerInput>
  }

  export type CoachAssignmentUpdateManyWithWhereWithoutPlayerInput = {
    where: CoachAssignmentScalarWhereInput
    data: XOR<CoachAssignmentUpdateManyMutationInput, CoachAssignmentUncheckedUpdateManyWithoutPlayerInput>
  }

  export type CoachAssignmentScalarWhereInput = {
    AND?: CoachAssignmentScalarWhereInput | CoachAssignmentScalarWhereInput[]
    OR?: CoachAssignmentScalarWhereInput[]
    NOT?: CoachAssignmentScalarWhereInput | CoachAssignmentScalarWhereInput[]
    id?: StringFilter<"CoachAssignment"> | string
    playerId?: StringFilter<"CoachAssignment"> | string
    coachId?: StringFilter<"CoachAssignment"> | string
    createdAt?: DateTimeFilter<"CoachAssignment"> | Date | string
  }

  export type CoachAssignmentUpsertWithWhereUniqueWithoutCoachInput = {
    where: CoachAssignmentWhereUniqueInput
    update: XOR<CoachAssignmentUpdateWithoutCoachInput, CoachAssignmentUncheckedUpdateWithoutCoachInput>
    create: XOR<CoachAssignmentCreateWithoutCoachInput, CoachAssignmentUncheckedCreateWithoutCoachInput>
  }

  export type CoachAssignmentUpdateWithWhereUniqueWithoutCoachInput = {
    where: CoachAssignmentWhereUniqueInput
    data: XOR<CoachAssignmentUpdateWithoutCoachInput, CoachAssignmentUncheckedUpdateWithoutCoachInput>
  }

  export type CoachAssignmentUpdateManyWithWhereWithoutCoachInput = {
    where: CoachAssignmentScalarWhereInput
    data: XOR<CoachAssignmentUpdateManyMutationInput, CoachAssignmentUncheckedUpdateManyWithoutCoachInput>
  }

  export type UserCreateWithoutPlayerProfileInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutPlayerProfileInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutPlayerProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerProfileInput, UserUncheckedCreateWithoutPlayerProfileInput>
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
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserCreateWithoutCoachLinksInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutCoachLinksInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutCoachLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachLinksInput, UserUncheckedCreateWithoutCoachLinksInput>
  }

  export type UserCreateWithoutPlayerLinksInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutPlayerLinksInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
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
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
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
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserCreateWithoutCreatedTemplatesInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutCreatedTemplatesInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutCreatedTemplatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTemplatesInput, UserUncheckedCreateWithoutCreatedTemplatesInput>
  }

  export type CalendarEventCreateWithoutTemplateInput = {
    id?: string
    start: Date | string
    end: Date | string
    player: UserCreateNestedOneWithoutCalendarEventsAsPlayerInput
    createdBy: UserCreateNestedOneWithoutCalendarEventsAsCreatorInput
    TaskLogs?: TaskLogCreateNestedManyWithoutEventInput
  }

  export type CalendarEventUncheckedCreateWithoutTemplateInput = {
    id?: string
    playerId: string
    start: Date | string
    end: Date | string
    createdById: string
    TaskLogs?: TaskLogUncheckedCreateNestedManyWithoutEventInput
  }

  export type CalendarEventCreateOrConnectWithoutTemplateInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutTemplateInput, CalendarEventUncheckedCreateWithoutTemplateInput>
  }

  export type CalendarEventCreateManyTemplateInputEnvelope = {
    data: CalendarEventCreateManyTemplateInput | CalendarEventCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedTemplatesInput = {
    update: XOR<UserUpdateWithoutCreatedTemplatesInput, UserUncheckedUpdateWithoutCreatedTemplatesInput>
    create: XOR<UserCreateWithoutCreatedTemplatesInput, UserUncheckedCreateWithoutCreatedTemplatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTemplatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTemplatesInput, UserUncheckedUpdateWithoutCreatedTemplatesInput>
  }

  export type UserUpdateWithoutCreatedTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTemplatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type CalendarEventUpsertWithWhereUniqueWithoutTemplateInput = {
    where: CalendarEventWhereUniqueInput
    update: XOR<CalendarEventUpdateWithoutTemplateInput, CalendarEventUncheckedUpdateWithoutTemplateInput>
    create: XOR<CalendarEventCreateWithoutTemplateInput, CalendarEventUncheckedCreateWithoutTemplateInput>
  }

  export type CalendarEventUpdateWithWhereUniqueWithoutTemplateInput = {
    where: CalendarEventWhereUniqueInput
    data: XOR<CalendarEventUpdateWithoutTemplateInput, CalendarEventUncheckedUpdateWithoutTemplateInput>
  }

  export type CalendarEventUpdateManyWithWhereWithoutTemplateInput = {
    where: CalendarEventScalarWhereInput
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyWithoutTemplateInput>
  }

  export type UserCreateWithoutCalendarEventsAsPlayerInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutCalendarEventsAsPlayerInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutCalendarEventsAsPlayerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarEventsAsPlayerInput, UserUncheckedCreateWithoutCalendarEventsAsPlayerInput>
  }

  export type UserCreateWithoutCalendarEventsAsCreatorInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutCalendarEventsAsCreatorInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutCalendarEventsAsCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCalendarEventsAsCreatorInput, UserUncheckedCreateWithoutCalendarEventsAsCreatorInput>
  }

  export type TaskTemplateCreateWithoutEventsInput = {
    id?: string
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
    createdBy?: UserCreateNestedOneWithoutCreatedTemplatesInput
  }

  export type TaskTemplateUncheckedCreateWithoutEventsInput = {
    id?: string
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
    createdById?: string | null
  }

  export type TaskTemplateCreateOrConnectWithoutEventsInput = {
    where: TaskTemplateWhereUniqueInput
    create: XOR<TaskTemplateCreateWithoutEventsInput, TaskTemplateUncheckedCreateWithoutEventsInput>
  }

  export type TaskLogCreateWithoutEventInput = {
    id?: string
    type: $Enums.InputSchema
    attempts?: number | null
    successes?: number | null
    score?: number | null
    text?: string | null
    createdAt?: Date | string
  }

  export type TaskLogUncheckedCreateWithoutEventInput = {
    id?: string
    type: $Enums.InputSchema
    attempts?: number | null
    successes?: number | null
    score?: number | null
    text?: string | null
    createdAt?: Date | string
  }

  export type TaskLogCreateOrConnectWithoutEventInput = {
    where: TaskLogWhereUniqueInput
    create: XOR<TaskLogCreateWithoutEventInput, TaskLogUncheckedCreateWithoutEventInput>
  }

  export type TaskLogCreateManyEventInputEnvelope = {
    data: TaskLogCreateManyEventInput | TaskLogCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCalendarEventsAsPlayerInput = {
    update: XOR<UserUpdateWithoutCalendarEventsAsPlayerInput, UserUncheckedUpdateWithoutCalendarEventsAsPlayerInput>
    create: XOR<UserCreateWithoutCalendarEventsAsPlayerInput, UserUncheckedCreateWithoutCalendarEventsAsPlayerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCalendarEventsAsPlayerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCalendarEventsAsPlayerInput, UserUncheckedUpdateWithoutCalendarEventsAsPlayerInput>
  }

  export type UserUpdateWithoutCalendarEventsAsPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarEventsAsPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserUpsertWithoutCalendarEventsAsCreatorInput = {
    update: XOR<UserUpdateWithoutCalendarEventsAsCreatorInput, UserUncheckedUpdateWithoutCalendarEventsAsCreatorInput>
    create: XOR<UserCreateWithoutCalendarEventsAsCreatorInput, UserUncheckedCreateWithoutCalendarEventsAsCreatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCalendarEventsAsCreatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCalendarEventsAsCreatorInput, UserUncheckedUpdateWithoutCalendarEventsAsCreatorInput>
  }

  export type UserUpdateWithoutCalendarEventsAsCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutCalendarEventsAsCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type TaskTemplateUpsertWithoutEventsInput = {
    update: XOR<TaskTemplateUpdateWithoutEventsInput, TaskTemplateUncheckedUpdateWithoutEventsInput>
    create: XOR<TaskTemplateCreateWithoutEventsInput, TaskTemplateUncheckedCreateWithoutEventsInput>
    where?: TaskTemplateWhereInput
  }

  export type TaskTemplateUpdateToOneWithWhereWithoutEventsInput = {
    where?: TaskTemplateWhereInput
    data: XOR<TaskTemplateUpdateWithoutEventsInput, TaskTemplateUncheckedUpdateWithoutEventsInput>
  }

  export type TaskTemplateUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    createdBy?: UserUpdateOneWithoutCreatedTemplatesNestedInput
  }

  export type TaskTemplateUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskLogUpsertWithWhereUniqueWithoutEventInput = {
    where: TaskLogWhereUniqueInput
    update: XOR<TaskLogUpdateWithoutEventInput, TaskLogUncheckedUpdateWithoutEventInput>
    create: XOR<TaskLogCreateWithoutEventInput, TaskLogUncheckedCreateWithoutEventInput>
  }

  export type TaskLogUpdateWithWhereUniqueWithoutEventInput = {
    where: TaskLogWhereUniqueInput
    data: XOR<TaskLogUpdateWithoutEventInput, TaskLogUncheckedUpdateWithoutEventInput>
  }

  export type TaskLogUpdateManyWithWhereWithoutEventInput = {
    where: TaskLogScalarWhereInput
    data: XOR<TaskLogUpdateManyMutationInput, TaskLogUncheckedUpdateManyWithoutEventInput>
  }

  export type TaskLogScalarWhereInput = {
    AND?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    OR?: TaskLogScalarWhereInput[]
    NOT?: TaskLogScalarWhereInput | TaskLogScalarWhereInput[]
    id?: StringFilter<"TaskLog"> | string
    eventId?: StringFilter<"TaskLog"> | string
    type?: EnumInputSchemaFilter<"TaskLog"> | $Enums.InputSchema
    attempts?: IntNullableFilter<"TaskLog"> | number | null
    successes?: IntNullableFilter<"TaskLog"> | number | null
    score?: FloatNullableFilter<"TaskLog"> | number | null
    text?: StringNullableFilter<"TaskLog"> | string | null
    createdAt?: DateTimeFilter<"TaskLog"> | Date | string
  }

  export type CalendarEventCreateWithoutTaskLogsInput = {
    id?: string
    start: Date | string
    end: Date | string
    player: UserCreateNestedOneWithoutCalendarEventsAsPlayerInput
    createdBy: UserCreateNestedOneWithoutCalendarEventsAsCreatorInput
    template: TaskTemplateCreateNestedOneWithoutEventsInput
  }

  export type CalendarEventUncheckedCreateWithoutTaskLogsInput = {
    id?: string
    playerId: string
    templateId: string
    start: Date | string
    end: Date | string
    createdById: string
  }

  export type CalendarEventCreateOrConnectWithoutTaskLogsInput = {
    where: CalendarEventWhereUniqueInput
    create: XOR<CalendarEventCreateWithoutTaskLogsInput, CalendarEventUncheckedCreateWithoutTaskLogsInput>
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
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutCalendarEventsAsPlayerNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCalendarEventsAsCreatorNestedInput
    template?: TaskTemplateUpdateOneRequiredWithoutEventsNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutTaskLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutClubInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutClubInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutClubInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput>
  }

  export type UserCreateManyClubInputEnvelope = {
    data: UserCreateManyClubInput | UserCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutClubsAsCoachInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutClubsAsCoachInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutClubsAsCoachInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClubsAsCoachInput, UserUncheckedCreateWithoutClubsAsCoachInput>
  }

  export type UserCreateWithoutClubsAsAdminInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutClubsAsAdminInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutClubsAsAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClubsAsAdminInput, UserUncheckedCreateWithoutClubsAsAdminInput>
  }

  export type UserUpsertWithWhereUniqueWithoutClubInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClubInput, UserUncheckedUpdateWithoutClubInput>
    create: XOR<UserCreateWithoutClubInput, UserUncheckedCreateWithoutClubInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClubInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClubInput, UserUncheckedUpdateWithoutClubInput>
  }

  export type UserUpdateManyWithWhereWithoutClubInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClubInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    clubId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutClubsAsCoachInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClubsAsCoachInput, UserUncheckedUpdateWithoutClubsAsCoachInput>
    create: XOR<UserCreateWithoutClubsAsCoachInput, UserUncheckedCreateWithoutClubsAsCoachInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClubsAsCoachInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClubsAsCoachInput, UserUncheckedUpdateWithoutClubsAsCoachInput>
  }

  export type UserUpdateManyWithWhereWithoutClubsAsCoachInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClubsAsCoachInput>
  }

  export type UserUpsertWithWhereUniqueWithoutClubsAsAdminInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutClubsAsAdminInput, UserUncheckedUpdateWithoutClubsAsAdminInput>
    create: XOR<UserCreateWithoutClubsAsAdminInput, UserUncheckedCreateWithoutClubsAsAdminInput>
  }

  export type UserUpdateWithWhereUniqueWithoutClubsAsAdminInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutClubsAsAdminInput, UserUncheckedUpdateWithoutClubsAsAdminInput>
  }

  export type UserUpdateManyWithWhereWithoutClubsAsAdminInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutClubsAsAdminInput>
  }

  export type UserCreateWithoutCoachAssignmentsPlayerInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsCoach?: CoachAssignmentCreateNestedManyWithoutCoachInput
  }

  export type UserUncheckedCreateWithoutCoachAssignmentsPlayerInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedCreateNestedManyWithoutCoachInput
  }

  export type UserCreateOrConnectWithoutCoachAssignmentsPlayerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachAssignmentsPlayerInput, UserUncheckedCreateWithoutCoachAssignmentsPlayerInput>
  }

  export type UserCreateWithoutCoachAssignmentsCoachInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventCreateNestedManyWithoutCreatedByInput
    club?: ClubCreateNestedOneWithoutMembersInput
    clubsAsCoach?: ClubCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentCreateNestedManyWithoutPlayerInput
  }

  export type UserUncheckedCreateWithoutCoachAssignmentsCoachInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    clubId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playerProfile?: PlayerProfileUncheckedCreateNestedOneWithoutUserInput
    coachLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutCoachInput
    playerLinks?: CoachPlayerLinkUncheckedCreateNestedManyWithoutPlayerInput
    createdTemplates?: TaskTemplateUncheckedCreateNestedManyWithoutCreatedByInput
    calendarEventsAsPlayer?: CalendarEventUncheckedCreateNestedManyWithoutPlayerInput
    calendarEventsAsCreator?: CalendarEventUncheckedCreateNestedManyWithoutCreatedByInput
    clubsAsCoach?: ClubUncheckedCreateNestedManyWithoutCoachesInput
    clubsAsAdmin?: ClubUncheckedCreateNestedManyWithoutAdminsInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type UserCreateOrConnectWithoutCoachAssignmentsCoachInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoachAssignmentsCoachInput, UserUncheckedCreateWithoutCoachAssignmentsCoachInput>
  }

  export type UserUpsertWithoutCoachAssignmentsPlayerInput = {
    update: XOR<UserUpdateWithoutCoachAssignmentsPlayerInput, UserUncheckedUpdateWithoutCoachAssignmentsPlayerInput>
    create: XOR<UserCreateWithoutCoachAssignmentsPlayerInput, UserUncheckedCreateWithoutCoachAssignmentsPlayerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachAssignmentsPlayerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachAssignmentsPlayerInput, UserUncheckedUpdateWithoutCoachAssignmentsPlayerInput>
  }

  export type UserUpdateWithoutCoachAssignmentsPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachAssignmentsPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserUpsertWithoutCoachAssignmentsCoachInput = {
    update: XOR<UserUpdateWithoutCoachAssignmentsCoachInput, UserUncheckedUpdateWithoutCoachAssignmentsCoachInput>
    create: XOR<UserCreateWithoutCoachAssignmentsCoachInput, UserUncheckedCreateWithoutCoachAssignmentsCoachInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoachAssignmentsCoachInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoachAssignmentsCoachInput, UserUncheckedUpdateWithoutCoachAssignmentsCoachInput>
  }

  export type UserUpdateWithoutCoachAssignmentsCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutCoachAssignmentsCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type CoachPlayerLinkCreateManyCoachInput = {
    id?: string
    playerId: string
  }

  export type CoachPlayerLinkCreateManyPlayerInput = {
    id?: string
    coachId: string
  }

  export type TaskTemplateCreateManyCreatedByInput = {
    id?: string
    title: string
    category: $Enums.TaskCategory
    inputSchema: $Enums.InputSchema
  }

  export type CalendarEventCreateManyPlayerInput = {
    id?: string
    templateId: string
    start: Date | string
    end: Date | string
    createdById: string
  }

  export type CalendarEventCreateManyCreatedByInput = {
    id?: string
    playerId: string
    templateId: string
    start: Date | string
    end: Date | string
  }

  export type CoachAssignmentCreateManyPlayerInput = {
    id?: string
    coachId: string
    createdAt?: Date | string
  }

  export type CoachAssignmentCreateManyCoachInput = {
    id?: string
    playerId: string
    createdAt?: Date | string
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

  export type TaskTemplateUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    events?: CalendarEventUpdateManyWithoutTemplateNestedInput
  }

  export type TaskTemplateUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    events?: CalendarEventUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TaskTemplateUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: EnumTaskCategoryFieldUpdateOperationsInput | $Enums.TaskCategory
    inputSchema?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
  }

  export type CalendarEventUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCalendarEventsAsCreatorNestedInput
    template?: TaskTemplateUpdateOneRequiredWithoutEventsNestedInput
    TaskLogs?: TaskLogUpdateManyWithoutEventNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    TaskLogs?: TaskLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type CalendarEventUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type CalendarEventUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutCalendarEventsAsPlayerNestedInput
    template?: TaskTemplateUpdateOneRequiredWithoutEventsNestedInput
    TaskLogs?: TaskLogUpdateManyWithoutEventNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    TaskLogs?: TaskLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type CalendarEventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubUpdateWithoutCoachesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutClubNestedInput
    admins?: UserUpdateManyWithoutClubsAsAdminNestedInput
  }

  export type ClubUncheckedUpdateWithoutCoachesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutClubNestedInput
    admins?: UserUncheckedUpdateManyWithoutClubsAsAdminNestedInput
  }

  export type ClubUncheckedUpdateManyWithoutCoachesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClubUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUpdateManyWithoutClubNestedInput
    coaches?: UserUpdateManyWithoutClubsAsCoachNestedInput
  }

  export type ClubUncheckedUpdateWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: UserUncheckedUpdateManyWithoutClubNestedInput
    coaches?: UserUncheckedUpdateManyWithoutClubsAsCoachNestedInput
  }

  export type ClubUncheckedUpdateManyWithoutAdminsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachAssignmentUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: UserUpdateOneRequiredWithoutCoachAssignmentsCoachNestedInput
  }

  export type CoachAssignmentUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachAssignmentUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachAssignmentUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutCoachAssignmentsPlayerNestedInput
  }

  export type CoachAssignmentUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachAssignmentUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateManyTemplateInput = {
    id?: string
    playerId: string
    start: Date | string
    end: Date | string
    createdById: string
  }

  export type CalendarEventUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutCalendarEventsAsPlayerNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCalendarEventsAsCreatorNestedInput
    TaskLogs?: TaskLogUpdateManyWithoutEventNestedInput
  }

  export type CalendarEventUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    TaskLogs?: TaskLogUncheckedUpdateManyWithoutEventNestedInput
  }

  export type CalendarEventUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type TaskLogCreateManyEventInput = {
    id?: string
    type: $Enums.InputSchema
    attempts?: number | null
    successes?: number | null
    score?: number | null
    text?: string | null
    createdAt?: Date | string
  }

  export type TaskLogUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    successes?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    successes?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLogUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInputSchemaFieldUpdateOperationsInput | $Enums.InputSchema
    attempts?: NullableIntFieldUpdateOperationsInput | number | null
    successes?: NullableIntFieldUpdateOperationsInput | number | null
    score?: NullableFloatFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyClubInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string
    profileImage?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClubInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutClubsAsCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsAdmin?: ClubUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutClubsAsCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsAdmin?: ClubUncheckedUpdateManyWithoutAdminsNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClubsAsCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutClubsAsAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUpdateManyWithoutCreatedByNestedInput
    club?: ClubUpdateOneWithoutMembersNestedInput
    clubsAsCoach?: ClubUpdateManyWithoutCoachesNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateWithoutClubsAsAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerProfile?: PlayerProfileUncheckedUpdateOneWithoutUserNestedInput
    coachLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutCoachNestedInput
    playerLinks?: CoachPlayerLinkUncheckedUpdateManyWithoutPlayerNestedInput
    createdTemplates?: TaskTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
    calendarEventsAsPlayer?: CalendarEventUncheckedUpdateManyWithoutPlayerNestedInput
    calendarEventsAsCreator?: CalendarEventUncheckedUpdateManyWithoutCreatedByNestedInput
    clubsAsCoach?: ClubUncheckedUpdateManyWithoutCoachesNestedInput
    coachAssignmentsPlayer?: CoachAssignmentUncheckedUpdateManyWithoutPlayerNestedInput
    coachAssignmentsCoach?: CoachAssignmentUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type UserUncheckedUpdateManyWithoutClubsAsAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clubId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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