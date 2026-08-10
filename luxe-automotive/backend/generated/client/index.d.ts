/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model importados
 *
 */
export type importados = $Result.DefaultSelection<Prisma.$importadosPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Importados
 * const importados = await prisma.importados.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
	ClientOptions extends Prisma.PrismaClientOptions =
		Prisma.PrismaClientOptions,
	const U = "log" extends keyof ClientOptions
		? ClientOptions["log"] extends Array<
				Prisma.LogLevel | Prisma.LogDefinition
			>
			? Prisma.GetEvents<ClientOptions["log"]>
			: never
		: never,
	ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
	[K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

	/**
	 * ##  Prisma Client ʲˢ
	 *
	 * Type-safe database client for TypeScript & Node.js
	 * @example
	 * ```
	 * const prisma = new PrismaClient()
	 * // Fetch zero or more Importados
	 * const importados = await prisma.importados.findMany()
	 * ```
	 *
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
	 */

	constructor(
		optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
	);
	$on<V extends U>(
		eventType: V,
		callback: (
			event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
		) => void,
	): PrismaClient;

	/**
	 * Connect with the database
	 */
	$connect(): $Utils.JsPromise<void>;

	/**
	 * Disconnect from the database
	 */
	$disconnect(): $Utils.JsPromise<void>;

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
	 * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
	 */
	$transaction<P extends Prisma.PrismaPromise<any>[]>(
		arg: [...P],
	): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

	$transaction<R>(
		fn: (
			prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
		) => $Utils.JsPromise<R>,
		options?: { maxWait?: number; timeout?: number },
	): $Utils.JsPromise<R>;

	/**
	 * Executes a raw MongoDB command and returns the result of it.
	 * @example
	 * ```
	 * const user = await prisma.$runCommandRaw({
	 *   aggregate: 'User',
	 *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
	 *   explain: false,
	 * })
	 * ```
	 *
	 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
	 */
	$runCommandRaw(
		command: Prisma.InputJsonObject,
	): Prisma.PrismaPromise<Prisma.JsonObject>;

	$extends: $Extensions.ExtendsHook<
		"extends",
		Prisma.TypeMapCb<ClientOptions>,
		ExtArgs,
		$Utils.Call<
			Prisma.TypeMapCb<ClientOptions>,
			{
				extArgs: ExtArgs;
			}
		>
	>;

	/**
	 * `prisma.importados`: Exposes CRUD operations for the **importados** model.
	 * Example usage:
	 * ```ts
	 * // Fetch zero or more Importados
	 * const importados = await prisma.importados.findMany()
	 * ```
	 */
	get importados(): Prisma.importadosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
	export import DMMF = runtime.DMMF;

	export type PrismaPromise<T> = $Public.PrismaPromise<T>;

	/**
	 * Validator
	 */
	export import validator = runtime.Public.validator;

	/**
	 * Prisma Errors
	 */
	export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
	export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
	export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
	export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
	export import PrismaClientValidationError = runtime.PrismaClientValidationError;

	/**
	 * Re-export of sql-template-tag
	 */
	export import sql = runtime.sqltag;
	export import empty = runtime.empty;
	export import join = runtime.join;
	export import raw = runtime.raw;
	export import Sql = runtime.Sql;

	/**
	 * Decimal.js
	 */
	export import Decimal = runtime.Decimal;

	export type DecimalJsLike = runtime.DecimalJsLike;

	/**
	 * Metrics
	 */
	export type Metrics = runtime.Metrics;
	export type Metric<T> = runtime.Metric<T>;
	export type MetricHistogram = runtime.MetricHistogram;
	export type MetricHistogramBucket = runtime.MetricHistogramBucket;

	/**
	 * Extensions
	 */
	export import Extension = $Extensions.UserArgs;
	export import getExtensionContext = runtime.Extensions.getExtensionContext;
	export import Args = $Public.Args;
	export import Payload = $Public.Payload;
	export import Result = $Public.Result;
	export import Exact = $Public.Exact;

	/**
	 * Prisma Client JS version: 6.19.3
	 * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
	 */
	export type PrismaVersion = {
		client: string;
	};

	export const prismaVersion: PrismaVersion;

	/**
	 * Utility Types
	 */

	export import Bytes = runtime.Bytes;
	export import JsonObject = runtime.JsonObject;
	export import JsonArray = runtime.JsonArray;
	export import JsonValue = runtime.JsonValue;
	export import InputJsonObject = runtime.InputJsonObject;
	export import InputJsonArray = runtime.InputJsonArray;
	export import InputJsonValue = runtime.InputJsonValue;

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
			private DbNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.JsonNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class JsonNull {
			private JsonNull: never;
			private constructor();
		}

		/**
		 * Type of `Prisma.AnyNull`.
		 *
		 * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
		 *
		 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
		 */
		class AnyNull {
			private AnyNull: never;
			private constructor();
		}
	}

	/**
	 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const DbNull: NullTypes.DbNull;

	/**
	 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const JsonNull: NullTypes.JsonNull;

	/**
	 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
	 *
	 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
	 */
	export const AnyNull: NullTypes.AnyNull;

	type SelectAndInclude = {
		select: any;
		include: any;
	};

	type SelectAndOmit = {
		select: any;
		omit: any;
	};

	/**
	 * Get the type of the value, that the Promise holds.
	 */
	export type PromiseType<T extends PromiseLike<any>> =
		T extends PromiseLike<infer U> ? U : T;

	/**
	 * Get the return type of a function which returns a Promise.
	 */
	export type PromiseReturnType<
		T extends (...args: any) => $Utils.JsPromise<any>,
	> = PromiseType<ReturnType<T>>;

	/**
	 * From T, pick a set of properties whose keys are in the union K
	 */
	type Prisma__Pick<T, K extends keyof T> = {
		[P in K]: T[P];
	};

	export type Enumerable<T> = T | Array<T>;

	export type RequiredKeys<T> = {
		[K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
	}[keyof T];

	export type TruthyKeys<T> = keyof {
		[K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
	};

	export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & (T extends SelectAndInclude
		? "Please either choose `select` or `include`."
		: T extends SelectAndOmit
			? "Please either choose `select` or `omit`."
			: {});

	/**
	 * Subset + Intersection
	 * @desc From `T` pick properties that exist in `U` and intersect `K`
	 */
	export type SubsetIntersection<T, U, K> = {
		[key in keyof T]: key extends keyof U ? T[key] : never;
	} & K;

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

	/**
	 * XOR is needed to have a real mutually exclusive union type
	 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
	 */
	type XOR<T, U> = T extends object
		? U extends object
			? (Without<T, U> & U) | (Without<U, T> & T)
			: U
		: T;

	/**
	 * Is T a Record?
	 */
	type IsObject<T extends any> =
		T extends Array<any>
			? False
			: T extends Date
				? False
				: T extends Uint8Array
					? False
					: T extends BigInt
						? False
						: T extends object
							? True
							: False;

	/**
	 * If it's T[], return T
	 */
	export type UnEnumerate<T extends unknown> =
		T extends Array<infer U> ? U : T;

	/**
	 * From ts-toolbelt
	 */

	type __Either<O extends object, K extends Key> = Omit<O, K> &
		{
			// Merge all but K
			[P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
		}[K];

	type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

	type EitherLoose<O extends object, K extends Key> = ComputeRaw<
		__Either<O, K>
	>;

	type _Either<O extends object, K extends Key, strict extends Boolean> = {
		1: EitherStrict<O, K>;
		0: EitherLoose<O, K>;
	}[strict];

	type Either<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = O extends unknown ? _Either<O, K, strict> : never;

	export type Union = any;

	type PatchUndefined<O extends object, O1 extends object> = {
		[K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
	} & {};

	/** Helper Types for "Merge" **/
	export type IntersectOf<U extends Union> = (
		U extends unknown ? (k: U) => void : never
	) extends (k: infer I) => void
		? I
		: never;

	export type Overwrite<O extends object, O1 extends object> = {
		[K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
	} & {};

	type _Merge<U extends object> = IntersectOf<
		Overwrite<
			U,
			{
				[K in keyof U]-?: At<U, K>;
			}
		>
	>;

	type Key = string | number | symbol;
	type AtBasic<O extends object, K extends Key> = K extends keyof O
		? O[K]
		: never;
	type AtStrict<O extends object, K extends Key> = O[K & keyof O];
	type AtLoose<O extends object, K extends Key> = O extends unknown
		? AtStrict<O, K>
		: never;
	export type At<
		O extends object,
		K extends Key,
		strict extends Boolean = 1,
	> = {
		1: AtStrict<O, K>;
		0: AtLoose<O, K>;
	}[strict];

	export type ComputeRaw<A extends any> = A extends Function
		? A
		: {
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
			?
					| (K extends keyof O ? { [P in K]: O[P] } & O : O)
					| ({
							[P in keyof O as P extends K ? P : never]-?: O[P];
					  } & O)
			: never
	>;

	type _Strict<U, _U = U> = U extends unknown
		? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
		: never;

	export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
	/** End Helper Types for "Merge" **/

	export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

	/**
  A [[Boolean]]
  */
	export type Boolean = True | False;

	// /**
	// 1
	// */
	export type True = 1;

	/**
  0
  */
	export type False = 0;

	export type Not<B extends Boolean> = {
		0: 1;
		1: 0;
	}[B];

	export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
		? 0 // anything `never` is false
		: A1 extends A2
			? 1
			: 0;

	export type Has<U extends Union, U1 extends Union> = Not<
		Extends<Exclude<U1, U>, U1>
	>;

	export type Or<B1 extends Boolean, B2 extends Boolean> = {
		0: {
			0: 0;
			1: 1;
		};
		1: {
			0: 1;
			1: 1;
		};
	}[B1][B2];

	export type Keys<U extends Union> = U extends unknown ? keyof U : never;

	type Cast<A, B> = A extends B ? A : B;

	export const type: unique symbol;

	/**
	 * Used by group by
	 */

	export type GetScalarType<T, O> = O extends object
		? {
				[P in keyof T]: P extends keyof O ? O[P] : never;
			}
		: never;

	type FieldPaths<
		T,
		U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
	> = IsObject<T> extends True ? U : T;

	type GetHavingFields<T> = {
		[K in keyof T]: Or<
			Or<Extends<"OR", K>, Extends<"AND", K>>,
			Extends<"NOT", K>
		> extends True
			? // infer is only needed to not hit TS limit
				// based on the brilliant idea of Pierre-Antoine Mills
				// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
				T[K] extends infer TK
				? GetHavingFields<
						UnEnumerate<TK> extends object
							? Merge<UnEnumerate<TK>>
							: never
					>
				: never
			: {} extends FieldPaths<T[K]>
				? never
				: K;
	}[keyof T];

	/**
	 * Convert tuple to union
	 */
	type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
	type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
	type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

	/**
	 * Like `Pick`, but additionally can also accept an array of keys
	 */
	type PickEnumerable<
		T,
		K extends Enumerable<keyof T> | keyof T,
	> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

	/**
	 * Exclude all keys with underscores
	 */
	type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
		? never
		: T;

	export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

	type FieldRefInputType<Model, FieldType> = Model extends never
		? never
		: FieldRef<Model, FieldType>;

	export const ModelName: {
		importados: "importados";
	};

	export type ModelName = (typeof ModelName)[keyof typeof ModelName];

	export type Datasources = {
		db?: Datasource;
	};

	interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
		{ extArgs: $Extensions.InternalArgs },
		$Utils.Record<string, any>
	> {
		returns: Prisma.TypeMap<
			this["params"]["extArgs"],
			ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
		>;
	}

	export type TypeMap<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> = {
		globalOmitOptions: {
			omit: GlobalOmitOptions;
		};
		meta: {
			modelProps: "importados";
			txIsolationLevel: never;
		};
		model: {
			importados: {
				payload: Prisma.$importadosPayload<ExtArgs>;
				fields: Prisma.importadosFieldRefs;
				operations: {
					findUnique: {
						args: Prisma.importadosFindUniqueArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload> | null;
					};
					findUniqueOrThrow: {
						args: Prisma.importadosFindUniqueOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload>;
					};
					findFirst: {
						args: Prisma.importadosFindFirstArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload> | null;
					};
					findFirstOrThrow: {
						args: Prisma.importadosFindFirstOrThrowArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload>;
					};
					findMany: {
						args: Prisma.importadosFindManyArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload>[];
					};
					create: {
						args: Prisma.importadosCreateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload>;
					};
					createMany: {
						args: Prisma.importadosCreateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					delete: {
						args: Prisma.importadosDeleteArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload>;
					};
					update: {
						args: Prisma.importadosUpdateArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload>;
					};
					deleteMany: {
						args: Prisma.importadosDeleteManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					updateMany: {
						args: Prisma.importadosUpdateManyArgs<ExtArgs>;
						result: BatchPayload;
					};
					upsert: {
						args: Prisma.importadosUpsertArgs<ExtArgs>;
						result: $Utils.PayloadToResult<Prisma.$importadosPayload>;
					};
					aggregate: {
						args: Prisma.ImportadosAggregateArgs<ExtArgs>;
						result: $Utils.Optional<AggregateImportados>;
					};
					groupBy: {
						args: Prisma.importadosGroupByArgs<ExtArgs>;
						result: $Utils.Optional<ImportadosGroupByOutputType>[];
					};
					findRaw: {
						args: Prisma.importadosFindRawArgs<ExtArgs>;
						result: JsonObject;
					};
					aggregateRaw: {
						args: Prisma.importadosAggregateRawArgs<ExtArgs>;
						result: JsonObject;
					};
					count: {
						args: Prisma.importadosCountArgs<ExtArgs>;
						result:
							| $Utils.Optional<ImportadosCountAggregateOutputType>
							| number;
					};
				};
			};
		};
	} & {
		other: {
			payload: any;
			operations: {
				$runCommandRaw: {
					args: Prisma.InputJsonObject;
					result: Prisma.JsonObject;
				};
			};
		};
	};
	export const defineExtension: $Extensions.ExtendsHook<
		"define",
		Prisma.TypeMapCb,
		$Extensions.DefaultArgs
	>;
	export type DefaultPrismaClient = PrismaClient;
	export type ErrorFormat = "pretty" | "colorless" | "minimal";
	export interface PrismaClientOptions {
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasources?: Datasources;
		/**
		 * Overwrites the datasource url from your schema.prisma file
		 */
		datasourceUrl?: string;
		/**
		 * @default "colorless"
		 */
		errorFormat?: ErrorFormat;
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
		 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
		 */
		log?: (LogLevel | LogDefinition)[];
		/**
		 * The default values for transactionOptions
		 * maxWait ?= 2000
		 * timeout ?= 5000
		 */
		transactionOptions?: {
			maxWait?: number;
			timeout?: number;
		};
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
		omit?: Prisma.GlobalOmitConfig;
	}
	export type GlobalOmitConfig = {
		importados?: importadosOmit;
	};

	/* Types for Logging */
	export type LogLevel = "info" | "query" | "warn" | "error";
	export type LogDefinition = {
		level: LogLevel;
		emit: "stdout" | "event";
	};

	export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

	export type GetLogType<T> = CheckIsLogLevel<
		T extends LogDefinition ? T["level"] : T
	>;

	export type GetEvents<T extends any[]> =
		T extends Array<LogLevel | LogDefinition>
			? GetLogType<T[number]>
			: never;

	export type QueryEvent = {
		timestamp: Date;
		query: string;
		params: string;
		duration: number;
		target: string;
	};

	export type LogEvent = {
		timestamp: Date;
		message: string;
		target: string;
	};
	/* End Types for Logging */

	export type PrismaAction =
		| "findUnique"
		| "findUniqueOrThrow"
		| "findMany"
		| "findFirst"
		| "findFirstOrThrow"
		| "create"
		| "createMany"
		| "createManyAndReturn"
		| "update"
		| "updateMany"
		| "updateManyAndReturn"
		| "upsert"
		| "delete"
		| "deleteMany"
		| "executeRaw"
		| "queryRaw"
		| "aggregate"
		| "count"
		| "runCommandRaw"
		| "findRaw"
		| "groupBy";

	// tested in getLogLevel.test.ts
	export function getLogLevel(
		log: Array<LogLevel | LogDefinition>,
	): LogLevel | undefined;

	/**
	 * `PrismaClient` proxy available in interactive transactions.
	 */
	export type TransactionClient = Omit<
		Prisma.DefaultPrismaClient,
		runtime.ITXClientDenyList
	>;

	export type Datasource = {
		url?: string;
	};

	/**
	 * Count Types
	 */

	/**
	 * Models
	 */

	/**
	 * Model importados
	 */

	export type AggregateImportados = {
		_count: ImportadosCountAggregateOutputType | null;
		_avg: ImportadosAvgAggregateOutputType | null;
		_sum: ImportadosSumAggregateOutputType | null;
		_min: ImportadosMinAggregateOutputType | null;
		_max: ImportadosMaxAggregateOutputType | null;
	};

	export type ImportadosAvgAggregateOutputType = {
		power: number | null;
		year: number | null;
	};

	export type ImportadosSumAggregateOutputType = {
		power: number | null;
		year: number | null;
	};

	export type ImportadosMinAggregateOutputType = {
		id: string | null;
		brand: string | null;
		color: string | null;
		description: string | null;
		engine: string | null;
		fuel: string | null;
		image: string | null;
		model: string | null;
		name: string | null;
		power: number | null;
		price: string | null;
		transmission: string | null;
		year: number | null;
	};

	export type ImportadosMaxAggregateOutputType = {
		id: string | null;
		brand: string | null;
		color: string | null;
		description: string | null;
		engine: string | null;
		fuel: string | null;
		image: string | null;
		model: string | null;
		name: string | null;
		power: number | null;
		price: string | null;
		transmission: string | null;
		year: number | null;
	};

	export type ImportadosCountAggregateOutputType = {
		id: number;
		brand: number;
		color: number;
		description: number;
		engine: number;
		fuel: number;
		image: number;
		model: number;
		name: number;
		power: number;
		price: number;
		transmission: number;
		year: number;
		_all: number;
	};

	export type ImportadosAvgAggregateInputType = {
		power?: true;
		year?: true;
	};

	export type ImportadosSumAggregateInputType = {
		power?: true;
		year?: true;
	};

	export type ImportadosMinAggregateInputType = {
		id?: true;
		brand?: true;
		color?: true;
		description?: true;
		engine?: true;
		fuel?: true;
		image?: true;
		model?: true;
		name?: true;
		power?: true;
		price?: true;
		transmission?: true;
		year?: true;
	};

	export type ImportadosMaxAggregateInputType = {
		id?: true;
		brand?: true;
		color?: true;
		description?: true;
		engine?: true;
		fuel?: true;
		image?: true;
		model?: true;
		name?: true;
		power?: true;
		price?: true;
		transmission?: true;
		year?: true;
	};

	export type ImportadosCountAggregateInputType = {
		id?: true;
		brand?: true;
		color?: true;
		description?: true;
		engine?: true;
		fuel?: true;
		image?: true;
		model?: true;
		name?: true;
		power?: true;
		price?: true;
		transmission?: true;
		year?: true;
		_all?: true;
	};

	export type ImportadosAggregateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which importados to aggregate.
		 */
		where?: importadosWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of importados to fetch.
		 */
		orderBy?:
			| importadosOrderByWithRelationInput
			| importadosOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the start position
		 */
		cursor?: importadosWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` importados from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` importados.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Count returned importados
		 **/
		_count?: true | ImportadosCountAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to average
		 **/
		_avg?: ImportadosAvgAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to sum
		 **/
		_sum?: ImportadosSumAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the minimum value
		 **/
		_min?: ImportadosMinAggregateInputType;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
		 *
		 * Select which fields to find the maximum value
		 **/
		_max?: ImportadosMaxAggregateInputType;
	};

	export type GetImportadosAggregateType<T extends ImportadosAggregateArgs> =
		{
			[P in keyof T & keyof AggregateImportados]: P extends
				| "_count"
				| "count"
				? T[P] extends true
					? number
					: GetScalarType<T[P], AggregateImportados[P]>
				: GetScalarType<T[P], AggregateImportados[P]>;
		};

	export type importadosGroupByArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		where?: importadosWhereInput;
		orderBy?:
			| importadosOrderByWithAggregationInput
			| importadosOrderByWithAggregationInput[];
		by: ImportadosScalarFieldEnum[] | ImportadosScalarFieldEnum;
		having?: importadosScalarWhereWithAggregatesInput;
		take?: number;
		skip?: number;
		_count?: ImportadosCountAggregateInputType | true;
		_avg?: ImportadosAvgAggregateInputType;
		_sum?: ImportadosSumAggregateInputType;
		_min?: ImportadosMinAggregateInputType;
		_max?: ImportadosMaxAggregateInputType;
	};

	export type ImportadosGroupByOutputType = {
		id: string;
		brand: string;
		color: string;
		description: string;
		engine: string;
		fuel: string;
		image: string;
		model: string;
		name: string;
		power: number;
		price: string;
		transmission: string;
		year: number;
		_count: ImportadosCountAggregateOutputType | null;
		_avg: ImportadosAvgAggregateOutputType | null;
		_sum: ImportadosSumAggregateOutputType | null;
		_min: ImportadosMinAggregateOutputType | null;
		_max: ImportadosMaxAggregateOutputType | null;
	};

	type GetImportadosGroupByPayload<T extends importadosGroupByArgs> =
		Prisma.PrismaPromise<
			Array<
				PickEnumerable<ImportadosGroupByOutputType, T["by"]> & {
					[P in keyof T &
						keyof ImportadosGroupByOutputType]: P extends "_count"
						? T[P] extends boolean
							? number
							: GetScalarType<
									T[P],
									ImportadosGroupByOutputType[P]
								>
						: GetScalarType<T[P], ImportadosGroupByOutputType[P]>;
				}
			>
		>;

	export type importadosSelect<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetSelect<
		{
			id?: boolean;
			brand?: boolean;
			color?: boolean;
			description?: boolean;
			engine?: boolean;
			fuel?: boolean;
			image?: boolean;
			model?: boolean;
			name?: boolean;
			power?: boolean;
			price?: boolean;
			transmission?: boolean;
			year?: boolean;
		},
		ExtArgs["result"]["importados"]
	>;

	export type importadosSelectScalar = {
		id?: boolean;
		brand?: boolean;
		color?: boolean;
		description?: boolean;
		engine?: boolean;
		fuel?: boolean;
		image?: boolean;
		model?: boolean;
		name?: boolean;
		power?: boolean;
		price?: boolean;
		transmission?: boolean;
		year?: boolean;
	};

	export type importadosOmit<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = $Extensions.GetOmit<
		| "id"
		| "brand"
		| "color"
		| "description"
		| "engine"
		| "fuel"
		| "image"
		| "model"
		| "name"
		| "power"
		| "price"
		| "transmission"
		| "year",
		ExtArgs["result"]["importados"]
	>;

	export type $importadosPayload<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		name: "importados";
		objects: {};
		scalars: $Extensions.GetPayloadResult<
			{
				id: string;
				brand: string;
				color: string;
				description: string;
				engine: string;
				fuel: string;
				image: string;
				model: string;
				name: string;
				power: number;
				price: string;
				transmission: string;
				year: number;
			},
			ExtArgs["result"]["importados"]
		>;
		composites: {};
	};

	type importadosGetPayload<
		S extends boolean | null | undefined | importadosDefaultArgs,
	> = $Result.GetResult<Prisma.$importadosPayload, S>;

	type importadosCountArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = Omit<
		importadosFindManyArgs,
		"select" | "include" | "distinct" | "omit"
	> & {
		select?: ImportadosCountAggregateInputType | true;
	};

	export interface importadosDelegate<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> {
		[K: symbol]: {
			types: Prisma.TypeMap<ExtArgs>["model"]["importados"];
			meta: { name: "importados" };
		};
		/**
		 * Find zero or one Importados that matches the filter.
		 * @param {importadosFindUniqueArgs} args - Arguments to find a Importados
		 * @example
		 * // Get one Importados
		 * const importados = await prisma.importados.findUnique({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUnique<T extends importadosFindUniqueArgs>(
			args: SelectSubset<T, importadosFindUniqueArgs<ExtArgs>>,
		): Prisma__importadosClient<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"findUnique",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find one Importados that matches the filter or throw an error with `error.code='P2025'`
		 * if no matches were found.
		 * @param {importadosFindUniqueOrThrowArgs} args - Arguments to find a Importados
		 * @example
		 * // Get one Importados
		 * const importados = await prisma.importados.findUniqueOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findUniqueOrThrow<T extends importadosFindUniqueOrThrowArgs>(
			args: SelectSubset<T, importadosFindUniqueOrThrowArgs<ExtArgs>>,
		): Prisma__importadosClient<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"findUniqueOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Importados that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {importadosFindFirstArgs} args - Arguments to find a Importados
		 * @example
		 * // Get one Importados
		 * const importados = await prisma.importados.findFirst({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirst<T extends importadosFindFirstArgs>(
			args?: SelectSubset<T, importadosFindFirstArgs<ExtArgs>>,
		): Prisma__importadosClient<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"findFirst",
				GlobalOmitOptions
			> | null,
			null,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find the first Importados that matches the filter or
		 * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {importadosFindFirstOrThrowArgs} args - Arguments to find a Importados
		 * @example
		 * // Get one Importados
		 * const importados = await prisma.importados.findFirstOrThrow({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 */
		findFirstOrThrow<T extends importadosFindFirstOrThrowArgs>(
			args?: SelectSubset<T, importadosFindFirstOrThrowArgs<ExtArgs>>,
		): Prisma__importadosClient<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"findFirstOrThrow",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Importados that matches the filter.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {importadosFindManyArgs} args - Arguments to filter and select certain fields only.
		 * @example
		 * // Get all Importados
		 * const importados = await prisma.importados.findMany()
		 *
		 * // Get first 10 Importados
		 * const importados = await prisma.importados.findMany({ take: 10 })
		 *
		 * // Only select the `id`
		 * const importadosWithIdOnly = await prisma.importados.findMany({ select: { id: true } })
		 *
		 */
		findMany<T extends importadosFindManyArgs>(
			args?: SelectSubset<T, importadosFindManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"findMany",
				GlobalOmitOptions
			>
		>;

		/**
		 * Create a Importados.
		 * @param {importadosCreateArgs} args - Arguments to create a Importados.
		 * @example
		 * // Create one Importados
		 * const Importados = await prisma.importados.create({
		 *   data: {
		 *     // ... data to create a Importados
		 *   }
		 * })
		 *
		 */
		create<T extends importadosCreateArgs>(
			args: SelectSubset<T, importadosCreateArgs<ExtArgs>>,
		): Prisma__importadosClient<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"create",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Create many Importados.
		 * @param {importadosCreateManyArgs} args - Arguments to create many Importados.
		 * @example
		 * // Create many Importados
		 * const importados = await prisma.importados.createMany({
		 *   data: [
		 *     // ... provide data here
		 *   ]
		 * })
		 *
		 */
		createMany<T extends importadosCreateManyArgs>(
			args?: SelectSubset<T, importadosCreateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Delete a Importados.
		 * @param {importadosDeleteArgs} args - Arguments to delete one Importados.
		 * @example
		 * // Delete one Importados
		 * const Importados = await prisma.importados.delete({
		 *   where: {
		 *     // ... filter to delete one Importados
		 *   }
		 * })
		 *
		 */
		delete<T extends importadosDeleteArgs>(
			args: SelectSubset<T, importadosDeleteArgs<ExtArgs>>,
		): Prisma__importadosClient<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"delete",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Update one Importados.
		 * @param {importadosUpdateArgs} args - Arguments to update one Importados.
		 * @example
		 * // Update one Importados
		 * const importados = await prisma.importados.update({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		update<T extends importadosUpdateArgs>(
			args: SelectSubset<T, importadosUpdateArgs<ExtArgs>>,
		): Prisma__importadosClient<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"update",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Delete zero or more Importados.
		 * @param {importadosDeleteManyArgs} args - Arguments to filter Importados to delete.
		 * @example
		 * // Delete a few Importados
		 * const { count } = await prisma.importados.deleteMany({
		 *   where: {
		 *     // ... provide filter here
		 *   }
		 * })
		 *
		 */
		deleteMany<T extends importadosDeleteManyArgs>(
			args?: SelectSubset<T, importadosDeleteManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Update zero or more Importados.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {importadosUpdateManyArgs} args - Arguments to update one or more rows.
		 * @example
		 * // Update many Importados
		 * const importados = await prisma.importados.updateMany({
		 *   where: {
		 *     // ... provide filter here
		 *   },
		 *   data: {
		 *     // ... provide data here
		 *   }
		 * })
		 *
		 */
		updateMany<T extends importadosUpdateManyArgs>(
			args: SelectSubset<T, importadosUpdateManyArgs<ExtArgs>>,
		): Prisma.PrismaPromise<BatchPayload>;

		/**
		 * Create or update one Importados.
		 * @param {importadosUpsertArgs} args - Arguments to update or create a Importados.
		 * @example
		 * // Update or create a Importados
		 * const importados = await prisma.importados.upsert({
		 *   create: {
		 *     // ... data to create a Importados
		 *   },
		 *   update: {
		 *     // ... in case it already exists, update
		 *   },
		 *   where: {
		 *     // ... the filter for the Importados we want to update
		 *   }
		 * })
		 */
		upsert<T extends importadosUpsertArgs>(
			args: SelectSubset<T, importadosUpsertArgs<ExtArgs>>,
		): Prisma__importadosClient<
			$Result.GetResult<
				Prisma.$importadosPayload<ExtArgs>,
				T,
				"upsert",
				GlobalOmitOptions
			>,
			never,
			ExtArgs,
			GlobalOmitOptions
		>;

		/**
		 * Find zero or more Importados that matches the filter.
		 * @param {importadosFindRawArgs} args - Select which filters you would like to apply.
		 * @example
		 * const importados = await prisma.importados.findRaw({
		 *   filter: { age: { $gt: 25 } }
		 * })
		 */
		findRaw(args?: importadosFindRawArgs): Prisma.PrismaPromise<JsonObject>;

		/**
		 * Perform aggregation operations on a Importados.
		 * @param {importadosAggregateRawArgs} args - Select which aggregations you would like to apply.
		 * @example
		 * const importados = await prisma.importados.aggregateRaw({
		 *   pipeline: [
		 *     { $match: { status: "registered" } },
		 *     { $group: { _id: "$country", total: { $sum: 1 } } }
		 *   ]
		 * })
		 */
		aggregateRaw(
			args?: importadosAggregateRawArgs,
		): Prisma.PrismaPromise<JsonObject>;

		/**
		 * Count the number of Importados.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {importadosCountArgs} args - Arguments to filter Importados to count.
		 * @example
		 * // Count the number of Importados
		 * const count = await prisma.importados.count({
		 *   where: {
		 *     // ... the filter for the Importados we want to count
		 *   }
		 * })
		 **/
		count<T extends importadosCountArgs>(
			args?: Subset<T, importadosCountArgs>,
		): Prisma.PrismaPromise<
			T extends $Utils.Record<"select", any>
				? T["select"] extends true
					? number
					: GetScalarType<
							T["select"],
							ImportadosCountAggregateOutputType
						>
				: number
		>;

		/**
		 * Allows you to perform aggregations operations on a Importados.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {ImportadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
		aggregate<T extends ImportadosAggregateArgs>(
			args: Subset<T, ImportadosAggregateArgs>,
		): Prisma.PrismaPromise<GetImportadosAggregateType<T>>;

		/**
		 * Group by Importados.
		 * Note, that providing `undefined` is treated as the value not being there.
		 * Read more here: https://pris.ly/d/null-undefined
		 * @param {importadosGroupByArgs} args - Group by arguments.
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
			T extends importadosGroupByArgs,
			HasSelectOrTake extends Or<
				Extends<"skip", Keys<T>>,
				Extends<"take", Keys<T>>
			>,
			OrderByArg extends True extends HasSelectOrTake
				? { orderBy: importadosGroupByArgs["orderBy"] }
				: { orderBy?: importadosGroupByArgs["orderBy"] },
			OrderFields extends ExcludeUnderscoreKeys<
				Keys<MaybeTupleToUnion<T["orderBy"]>>
			>,
			ByFields extends MaybeTupleToUnion<T["by"]>,
			ByValid extends Has<ByFields, OrderFields>,
			HavingFields extends GetHavingFields<T["having"]>,
			HavingValid extends Has<ByFields, HavingFields>,
			ByEmpty extends T["by"] extends never[] ? True : False,
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
											"Field ",
											P,
											` in "having" needs to be provided in "by"`,
										];
						}[HavingFields]
					: "take" extends Keys<T>
						? "orderBy" extends Keys<T>
							? ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields]
							: 'Error: If you provide "take", you also need to provide "orderBy"'
						: "skip" extends Keys<T>
							? "orderBy" extends Keys<T>
								? ByValid extends True
									? {}
									: {
											[P in OrderFields]: P extends ByFields
												? never
												: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
										}[OrderFields]
								: 'Error: If you provide "skip", you also need to provide "orderBy"'
							: ByValid extends True
								? {}
								: {
										[P in OrderFields]: P extends ByFields
											? never
											: `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
									}[OrderFields],
		>(
			args: SubsetIntersection<T, importadosGroupByArgs, OrderByArg> &
				InputErrors,
		): {} extends InputErrors
			? GetImportadosGroupByPayload<T>
			: Prisma.PrismaPromise<InputErrors>;
		/**
		 * Fields of the importados model
		 */
		readonly fields: importadosFieldRefs;
	}

	/**
	 * The delegate class that acts as a "Promise-like" for importados.
	 * Why is this prefixed with `Prisma__`?
	 * Because we want to prevent naming conflicts as mentioned in
	 * https://github.com/prisma/prisma-client-js/issues/707
	 */
	export interface Prisma__importadosClient<
		T,
		Null = never,
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
		GlobalOmitOptions = {},
	> extends Prisma.PrismaPromise<T> {
		readonly [Symbol.toStringTag]: "PrismaPromise";
		/**
		 * Attaches callbacks for the resolution and/or rejection of the Promise.
		 * @param onfulfilled The callback to execute when the Promise is resolved.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of which ever callback is executed.
		 */
		then<TResult1 = T, TResult2 = never>(
			onfulfilled?:
				| ((value: T) => TResult1 | PromiseLike<TResult1>)
				| undefined
				| null,
			onrejected?:
				| ((reason: any) => TResult2 | PromiseLike<TResult2>)
				| undefined
				| null,
		): $Utils.JsPromise<TResult1 | TResult2>;
		/**
		 * Attaches a callback for only the rejection of the Promise.
		 * @param onrejected The callback to execute when the Promise is rejected.
		 * @returns A Promise for the completion of the callback.
		 */
		catch<TResult = never>(
			onrejected?:
				| ((reason: any) => TResult | PromiseLike<TResult>)
				| undefined
				| null,
		): $Utils.JsPromise<T | TResult>;
		/**
		 * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
		 * resolved value cannot be modified from the callback.
		 * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
		 * @returns A Promise for the completion of the callback.
		 */
		finally(
			onfinally?: (() => void) | undefined | null,
		): $Utils.JsPromise<T>;
	}

	/**
	 * Fields of the importados model
	 */
	interface importadosFieldRefs {
		readonly id: FieldRef<"importados", "String">;
		readonly brand: FieldRef<"importados", "String">;
		readonly color: FieldRef<"importados", "String">;
		readonly description: FieldRef<"importados", "String">;
		readonly engine: FieldRef<"importados", "String">;
		readonly fuel: FieldRef<"importados", "String">;
		readonly image: FieldRef<"importados", "String">;
		readonly model: FieldRef<"importados", "String">;
		readonly name: FieldRef<"importados", "String">;
		readonly power: FieldRef<"importados", "Int">;
		readonly price: FieldRef<"importados", "String">;
		readonly transmission: FieldRef<"importados", "String">;
		readonly year: FieldRef<"importados", "Int">;
	}

	// Custom InputTypes
	/**
	 * importados findUnique
	 */
	export type importadosFindUniqueArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * Filter, which importados to fetch.
		 */
		where: importadosWhereUniqueInput;
	};

	/**
	 * importados findUniqueOrThrow
	 */
	export type importadosFindUniqueOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * Filter, which importados to fetch.
		 */
		where: importadosWhereUniqueInput;
	};

	/**
	 * importados findFirst
	 */
	export type importadosFindFirstArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * Filter, which importados to fetch.
		 */
		where?: importadosWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of importados to fetch.
		 */
		orderBy?:
			| importadosOrderByWithRelationInput
			| importadosOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for importados.
		 */
		cursor?: importadosWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` importados from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` importados.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of importados.
		 */
		distinct?: ImportadosScalarFieldEnum | ImportadosScalarFieldEnum[];
	};

	/**
	 * importados findFirstOrThrow
	 */
	export type importadosFindFirstOrThrowArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * Filter, which importados to fetch.
		 */
		where?: importadosWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of importados to fetch.
		 */
		orderBy?:
			| importadosOrderByWithRelationInput
			| importadosOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for searching for importados.
		 */
		cursor?: importadosWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` importados from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` importados.
		 */
		skip?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
		 *
		 * Filter by unique combinations of importados.
		 */
		distinct?: ImportadosScalarFieldEnum | ImportadosScalarFieldEnum[];
	};

	/**
	 * importados findMany
	 */
	export type importadosFindManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * Filter, which importados to fetch.
		 */
		where?: importadosWhereInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
		 *
		 * Determine the order of importados to fetch.
		 */
		orderBy?:
			| importadosOrderByWithRelationInput
			| importadosOrderByWithRelationInput[];
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
		 *
		 * Sets the position for listing importados.
		 */
		cursor?: importadosWhereUniqueInput;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Take `±n` importados from the position of the cursor.
		 */
		take?: number;
		/**
		 * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
		 *
		 * Skip the first `n` importados.
		 */
		skip?: number;
		distinct?: ImportadosScalarFieldEnum | ImportadosScalarFieldEnum[];
	};

	/**
	 * importados create
	 */
	export type importadosCreateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * The data needed to create a importados.
		 */
		data: XOR<importadosCreateInput, importadosUncheckedCreateInput>;
	};

	/**
	 * importados createMany
	 */
	export type importadosCreateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to create many importados.
		 */
		data: importadosCreateManyInput | importadosCreateManyInput[];
	};

	/**
	 * importados update
	 */
	export type importadosUpdateArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * The data needed to update a importados.
		 */
		data: XOR<importadosUpdateInput, importadosUncheckedUpdateInput>;
		/**
		 * Choose, which importados to update.
		 */
		where: importadosWhereUniqueInput;
	};

	/**
	 * importados updateMany
	 */
	export type importadosUpdateManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The data used to update importados.
		 */
		data: XOR<
			importadosUpdateManyMutationInput,
			importadosUncheckedUpdateManyInput
		>;
		/**
		 * Filter which importados to update
		 */
		where?: importadosWhereInput;
		/**
		 * Limit how many importados to update.
		 */
		limit?: number;
	};

	/**
	 * importados upsert
	 */
	export type importadosUpsertArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * The filter to search for the importados to update in case it exists.
		 */
		where: importadosWhereUniqueInput;
		/**
		 * In case the importados found by the `where` argument doesn't exist, create a new importados with this data.
		 */
		create: XOR<importadosCreateInput, importadosUncheckedCreateInput>;
		/**
		 * In case the importados was found with the provided `where` argument, update it with this data.
		 */
		update: XOR<importadosUpdateInput, importadosUncheckedUpdateInput>;
	};

	/**
	 * importados delete
	 */
	export type importadosDeleteArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
		/**
		 * Filter which importados to delete.
		 */
		where: importadosWhereUniqueInput;
	};

	/**
	 * importados deleteMany
	 */
	export type importadosDeleteManyArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Filter which importados to delete
		 */
		where?: importadosWhereInput;
		/**
		 * Limit how many importados to delete.
		 */
		limit?: number;
	};

	/**
	 * importados findRaw
	 */
	export type importadosFindRawArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
		 */
		filter?: InputJsonValue;
		/**
		 * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
		 */
		options?: InputJsonValue;
	};

	/**
	 * importados aggregateRaw
	 */
	export type importadosAggregateRawArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
		 */
		pipeline?: InputJsonValue[];
		/**
		 * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
		 */
		options?: InputJsonValue;
	};

	/**
	 * importados without action
	 */
	export type importadosDefaultArgs<
		ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
	> = {
		/**
		 * Select specific fields to fetch from the importados
		 */
		select?: importadosSelect<ExtArgs> | null;
		/**
		 * Omit specific fields from the importados
		 */
		omit?: importadosOmit<ExtArgs> | null;
	};

	/**
	 * Enums
	 */

	export const ImportadosScalarFieldEnum: {
		id: "id";
		brand: "brand";
		color: "color";
		description: "description";
		engine: "engine";
		fuel: "fuel";
		image: "image";
		model: "model";
		name: "name";
		power: "power";
		price: "price";
		transmission: "transmission";
		year: "year";
	};

	export type ImportadosScalarFieldEnum =
		(typeof ImportadosScalarFieldEnum)[keyof typeof ImportadosScalarFieldEnum];

	export const SortOrder: {
		asc: "asc";
		desc: "desc";
	};

	export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

	export const QueryMode: {
		default: "default";
		insensitive: "insensitive";
	};

	export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

	/**
	 * Field references
	 */

	/**
	 * Reference to a field of type 'String'
	 */
	export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String"
	>;

	/**
	 * Reference to a field of type 'String[]'
	 */
	export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"String[]"
	>;

	/**
	 * Reference to a field of type 'Int'
	 */
	export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int"
	>;

	/**
	 * Reference to a field of type 'Int[]'
	 */
	export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Int[]"
	>;

	/**
	 * Reference to a field of type 'Float'
	 */
	export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float"
	>;

	/**
	 * Reference to a field of type 'Float[]'
	 */
	export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
		$PrismaModel,
		"Float[]"
	>;

	/**
	 * Deep Input Types
	 */

	export type importadosWhereInput = {
		AND?: importadosWhereInput | importadosWhereInput[];
		OR?: importadosWhereInput[];
		NOT?: importadosWhereInput | importadosWhereInput[];
		id?: StringFilter<"importados"> | string;
		brand?: StringFilter<"importados"> | string;
		color?: StringFilter<"importados"> | string;
		description?: StringFilter<"importados"> | string;
		engine?: StringFilter<"importados"> | string;
		fuel?: StringFilter<"importados"> | string;
		image?: StringFilter<"importados"> | string;
		model?: StringFilter<"importados"> | string;
		name?: StringFilter<"importados"> | string;
		power?: IntFilter<"importados"> | number;
		price?: StringFilter<"importados"> | string;
		transmission?: StringFilter<"importados"> | string;
		year?: IntFilter<"importados"> | number;
	};

	export type importadosOrderByWithRelationInput = {
		id?: SortOrder;
		brand?: SortOrder;
		color?: SortOrder;
		description?: SortOrder;
		engine?: SortOrder;
		fuel?: SortOrder;
		image?: SortOrder;
		model?: SortOrder;
		name?: SortOrder;
		power?: SortOrder;
		price?: SortOrder;
		transmission?: SortOrder;
		year?: SortOrder;
	};

	export type importadosWhereUniqueInput = Prisma.AtLeast<
		{
			id?: string | null;
			AND?: importadosWhereInput | importadosWhereInput[];
			OR?: importadosWhereInput[];
			NOT?: importadosWhereInput | importadosWhereInput[];
			brand?: StringFilter<"importados"> | string;
			color?: StringFilter<"importados"> | string;
			description?: StringFilter<"importados"> | string;
			engine?: StringFilter<"importados"> | string;
			fuel?: StringFilter<"importados"> | string;
			image?: StringFilter<"importados"> | string;
			model?: StringFilter<"importados"> | string;
			name?: StringFilter<"importados"> | string;
			power?: IntFilter<"importados"> | number;
			price?: StringFilter<"importados"> | string;
			transmission?: StringFilter<"importados"> | string;
			year?: IntFilter<"importados"> | number;
		},
		"id"
	>;

	export type importadosOrderByWithAggregationInput = {
		id?: SortOrder;
		brand?: SortOrder;
		color?: SortOrder;
		description?: SortOrder;
		engine?: SortOrder;
		fuel?: SortOrder;
		image?: SortOrder;
		model?: SortOrder;
		name?: SortOrder;
		power?: SortOrder;
		price?: SortOrder;
		transmission?: SortOrder;
		year?: SortOrder;
		_count?: importadosCountOrderByAggregateInput;
		_avg?: importadosAvgOrderByAggregateInput;
		_max?: importadosMaxOrderByAggregateInput;
		_min?: importadosMinOrderByAggregateInput;
		_sum?: importadosSumOrderByAggregateInput;
	};

	export type importadosScalarWhereWithAggregatesInput = {
		AND?:
			| importadosScalarWhereWithAggregatesInput
			| importadosScalarWhereWithAggregatesInput[];
		OR?: importadosScalarWhereWithAggregatesInput[];
		NOT?:
			| importadosScalarWhereWithAggregatesInput
			| importadosScalarWhereWithAggregatesInput[];
		id?: StringWithAggregatesFilter<"importados"> | string;
		brand?: StringWithAggregatesFilter<"importados"> | string;
		color?: StringWithAggregatesFilter<"importados"> | string;
		description?: StringWithAggregatesFilter<"importados"> | string;
		engine?: StringWithAggregatesFilter<"importados"> | string;
		fuel?: StringWithAggregatesFilter<"importados"> | string;
		image?: StringWithAggregatesFilter<"importados"> | string;
		model?: StringWithAggregatesFilter<"importados"> | string;
		name?: StringWithAggregatesFilter<"importados"> | string;
		power?: IntWithAggregatesFilter<"importados"> | number;
		price?: StringWithAggregatesFilter<"importados"> | string;
		transmission?: StringWithAggregatesFilter<"importados"> | string;
		year?: IntWithAggregatesFilter<"importados"> | number;
	};

	export type importadosCreateInput = {
		id?: string;
		brand: string;
		color: string;
		description: string;
		engine: string;
		fuel: string;
		image: string;
		model: string;
		name: string;
		power: number;
		price: string;
		transmission: string;
		year: number;
	};

	export type importadosUncheckedCreateInput = {
		id?: string;
		brand: string;
		color: string;
		description: string;
		engine: string;
		fuel: string;
		image: string;
		model: string;
		name: string;
		power: number;
		price: string;
		transmission: string;
		year: number;
	};

	export type importadosUpdateInput = {
		brand?: StringFieldUpdateOperationsInput | string;
		color?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		engine?: StringFieldUpdateOperationsInput | string;
		fuel?: StringFieldUpdateOperationsInput | string;
		image?: StringFieldUpdateOperationsInput | string;
		model?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		power?: IntFieldUpdateOperationsInput | number;
		price?: StringFieldUpdateOperationsInput | string;
		transmission?: StringFieldUpdateOperationsInput | string;
		year?: IntFieldUpdateOperationsInput | number;
	};

	export type importadosUncheckedUpdateInput = {
		brand?: StringFieldUpdateOperationsInput | string;
		color?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		engine?: StringFieldUpdateOperationsInput | string;
		fuel?: StringFieldUpdateOperationsInput | string;
		image?: StringFieldUpdateOperationsInput | string;
		model?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		power?: IntFieldUpdateOperationsInput | number;
		price?: StringFieldUpdateOperationsInput | string;
		transmission?: StringFieldUpdateOperationsInput | string;
		year?: IntFieldUpdateOperationsInput | number;
	};

	export type importadosCreateManyInput = {
		id?: string;
		brand: string;
		color: string;
		description: string;
		engine: string;
		fuel: string;
		image: string;
		model: string;
		name: string;
		power: number;
		price: string;
		transmission: string;
		year: number;
	};

	export type importadosUpdateManyMutationInput = {
		brand?: StringFieldUpdateOperationsInput | string;
		color?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		engine?: StringFieldUpdateOperationsInput | string;
		fuel?: StringFieldUpdateOperationsInput | string;
		image?: StringFieldUpdateOperationsInput | string;
		model?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		power?: IntFieldUpdateOperationsInput | number;
		price?: StringFieldUpdateOperationsInput | string;
		transmission?: StringFieldUpdateOperationsInput | string;
		year?: IntFieldUpdateOperationsInput | number;
	};

	export type importadosUncheckedUpdateManyInput = {
		brand?: StringFieldUpdateOperationsInput | string;
		color?: StringFieldUpdateOperationsInput | string;
		description?: StringFieldUpdateOperationsInput | string;
		engine?: StringFieldUpdateOperationsInput | string;
		fuel?: StringFieldUpdateOperationsInput | string;
		image?: StringFieldUpdateOperationsInput | string;
		model?: StringFieldUpdateOperationsInput | string;
		name?: StringFieldUpdateOperationsInput | string;
		power?: IntFieldUpdateOperationsInput | number;
		price?: StringFieldUpdateOperationsInput | string;
		transmission?: StringFieldUpdateOperationsInput | string;
		year?: IntFieldUpdateOperationsInput | number;
	};

	export type StringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type IntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type importadosCountOrderByAggregateInput = {
		id?: SortOrder;
		brand?: SortOrder;
		color?: SortOrder;
		description?: SortOrder;
		engine?: SortOrder;
		fuel?: SortOrder;
		image?: SortOrder;
		model?: SortOrder;
		name?: SortOrder;
		power?: SortOrder;
		price?: SortOrder;
		transmission?: SortOrder;
		year?: SortOrder;
	};

	export type importadosAvgOrderByAggregateInput = {
		power?: SortOrder;
		year?: SortOrder;
	};

	export type importadosMaxOrderByAggregateInput = {
		id?: SortOrder;
		brand?: SortOrder;
		color?: SortOrder;
		description?: SortOrder;
		engine?: SortOrder;
		fuel?: SortOrder;
		image?: SortOrder;
		model?: SortOrder;
		name?: SortOrder;
		power?: SortOrder;
		price?: SortOrder;
		transmission?: SortOrder;
		year?: SortOrder;
	};

	export type importadosMinOrderByAggregateInput = {
		id?: SortOrder;
		brand?: SortOrder;
		color?: SortOrder;
		description?: SortOrder;
		engine?: SortOrder;
		fuel?: SortOrder;
		image?: SortOrder;
		model?: SortOrder;
		name?: SortOrder;
		power?: SortOrder;
		price?: SortOrder;
		transmission?: SortOrder;
		year?: SortOrder;
	};

	export type importadosSumOrderByAggregateInput = {
		power?: SortOrder;
		year?: SortOrder;
	};

	export type StringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		mode?: QueryMode;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type IntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type StringFieldUpdateOperationsInput = {
		set?: string;
	};

	export type IntFieldUpdateOperationsInput = {
		set?: number;
		increment?: number;
		decrement?: number;
		multiply?: number;
		divide?: number;
	};

	export type NestedStringFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringFilter<$PrismaModel> | string;
	};

	export type NestedIntFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntFilter<$PrismaModel> | number;
	};

	export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
		equals?: string | StringFieldRefInput<$PrismaModel>;
		in?: string[] | ListStringFieldRefInput<$PrismaModel>;
		notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
		lt?: string | StringFieldRefInput<$PrismaModel>;
		lte?: string | StringFieldRefInput<$PrismaModel>;
		gt?: string | StringFieldRefInput<$PrismaModel>;
		gte?: string | StringFieldRefInput<$PrismaModel>;
		contains?: string | StringFieldRefInput<$PrismaModel>;
		startsWith?: string | StringFieldRefInput<$PrismaModel>;
		endsWith?: string | StringFieldRefInput<$PrismaModel>;
		not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
		_count?: NestedIntFilter<$PrismaModel>;
		_min?: NestedStringFilter<$PrismaModel>;
		_max?: NestedStringFilter<$PrismaModel>;
	};

	export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
		equals?: number | IntFieldRefInput<$PrismaModel>;
		in?: number[] | ListIntFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
		lt?: number | IntFieldRefInput<$PrismaModel>;
		lte?: number | IntFieldRefInput<$PrismaModel>;
		gt?: number | IntFieldRefInput<$PrismaModel>;
		gte?: number | IntFieldRefInput<$PrismaModel>;
		not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
		_count?: NestedIntFilter<$PrismaModel>;
		_avg?: NestedFloatFilter<$PrismaModel>;
		_sum?: NestedIntFilter<$PrismaModel>;
		_min?: NestedIntFilter<$PrismaModel>;
		_max?: NestedIntFilter<$PrismaModel>;
	};

	export type NestedFloatFilter<$PrismaModel = never> = {
		equals?: number | FloatFieldRefInput<$PrismaModel>;
		in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
		lt?: number | FloatFieldRefInput<$PrismaModel>;
		lte?: number | FloatFieldRefInput<$PrismaModel>;
		gt?: number | FloatFieldRefInput<$PrismaModel>;
		gte?: number | FloatFieldRefInput<$PrismaModel>;
		not?: NestedFloatFilter<$PrismaModel> | number;
	};

	/**
	 * Batch Payload for updateMany & deleteMany & createMany
	 */

	export type BatchPayload = {
		count: number;
	};

	/**
	 * DMMF
	 */
	export const dmmf: runtime.BaseDMMF;
}
import * as multer from "multer";
declare global {
	namespace Express {
		interface Request {
			file?: Express.Multer.file;
			files?:
				| Express.Multer.file[]
				| { [fieldname: string]: Express.Multer.file[] };
		}
	}
}
