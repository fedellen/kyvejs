/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Valaccount } from "../../stakers/v1beta1/stakers";
import { FullStaker } from "./query";

export const protobufPackage = "kyve.query.v1beta1";

/** StakerStatus ... */
export enum StakerStatus {
  /** STAKER_STATUS_UNSPECIFIED - STAKER_STATUS_UNSPECIFIED ... */
  STAKER_STATUS_UNSPECIFIED = 0,
  /** STAKER_STATUS_ACTIVE - STAKER_STATUS_ACTIVE ... */
  STAKER_STATUS_ACTIVE = 1,
  /** STAKER_STATUS_INACTIVE - STAKER_STATUS_INACTIVE ... */
  STAKER_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function stakerStatusFromJSON(object: any): StakerStatus {
  switch (object) {
    case 0:
    case "STAKER_STATUS_UNSPECIFIED":
      return StakerStatus.STAKER_STATUS_UNSPECIFIED;
    case 1:
    case "STAKER_STATUS_ACTIVE":
      return StakerStatus.STAKER_STATUS_ACTIVE;
    case 2:
    case "STAKER_STATUS_INACTIVE":
      return StakerStatus.STAKER_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakerStatus.UNRECOGNIZED;
  }
}

export function stakerStatusToJSON(object: StakerStatus): string {
  switch (object) {
    case StakerStatus.STAKER_STATUS_UNSPECIFIED:
      return "STAKER_STATUS_UNSPECIFIED";
    case StakerStatus.STAKER_STATUS_ACTIVE:
      return "STAKER_STATUS_ACTIVE";
    case StakerStatus.STAKER_STATUS_INACTIVE:
      return "STAKER_STATUS_INACTIVE";
    case StakerStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** QueryStakersRequest is the request type for the Query/Stakers RPC method. */
export interface QueryStakersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?:
    | PageRequest
    | undefined;
  /** status looks whether a staker is participating in pools or not */
  status: StakerStatus;
  /** search searches for moniker OR address */
  search: string;
}

/** QueryStakersResponse is the response type for the Query/Stakers RPC method. */
export interface QueryStakersResponse {
  /** stakers ... */
  stakers: FullStaker[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}

/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequest {
  /** address ... */
  address: string;
}

/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponse {
  /** staker ... */
  staker?: FullStaker | undefined;
}

/** QueryStakersByPoolRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakersByPoolRequest {
  /** pool_id ... */
  pool_id: string;
}

/** QueryStakersByPoolResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakersByPoolResponse {
  /** stakers ... */
  stakers: StakerPoolResponse[];
}

/** StakerPoolResponse ... */
export interface StakerPoolResponse {
  /** staker ... */
  staker?:
    | FullStaker
    | undefined;
  /** valaccount ... */
  valaccount?: Valaccount | undefined;
}

/** QueryStakersByPoolCountRequest ... */
export interface QueryStakersByPoolCountRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}

/** QueryStakersByPoolCountResponse ... */
export interface QueryStakersByPoolCountResponse {
  /** stakers ... */
  stakers: FullStaker[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}

function createBaseQueryStakersRequest(): QueryStakersRequest {
  return { pagination: undefined, status: 0, search: "" };
}

export const QueryStakersRequest = {
  encode(message: QueryStakersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.search !== "") {
      writer.uint32(26).string(message.search);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.search = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      status: isSet(object.status) ? stakerStatusFromJSON(object.status) : 0,
      search: isSet(object.search) ? globalThis.String(object.search) : "",
    };
  },

  toJSON(message: QueryStakersRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    if (message.status !== 0) {
      obj.status = stakerStatusToJSON(message.status);
    }
    if (message.search !== "") {
      obj.search = message.search;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakersRequest>, I>>(base?: I): QueryStakersRequest {
    return QueryStakersRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakersRequest>, I>>(object: I): QueryStakersRequest {
    const message = createBaseQueryStakersRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    message.status = object.status ?? 0;
    message.search = object.search ?? "";
    return message;
  },
};

function createBaseQueryStakersResponse(): QueryStakersResponse {
  return { stakers: [], pagination: undefined };
}

export const QueryStakersResponse = {
  encode(message: QueryStakersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakers) {
      FullStaker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakers.push(FullStaker.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakersResponse {
    return {
      stakers: globalThis.Array.isArray(object?.stakers) ? object.stakers.map((e: any) => FullStaker.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryStakersResponse): unknown {
    const obj: any = {};
    if (message.stakers?.length) {
      obj.stakers = message.stakers.map((e) => FullStaker.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakersResponse>, I>>(base?: I): QueryStakersResponse {
    return QueryStakersResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakersResponse>, I>>(object: I): QueryStakersResponse {
    const message = createBaseQueryStakersResponse();
    message.stakers = object.stakers?.map((e) => FullStaker.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryStakerRequest(): QueryStakerRequest {
  return { address: "" };
}

export const QueryStakerRequest = {
  encode(message: QueryStakerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakerRequest {
    return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
  },

  toJSON(message: QueryStakerRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakerRequest>, I>>(base?: I): QueryStakerRequest {
    return QueryStakerRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakerRequest>, I>>(object: I): QueryStakerRequest {
    const message = createBaseQueryStakerRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryStakerResponse(): QueryStakerResponse {
  return { staker: undefined };
}

export const QueryStakerResponse = {
  encode(message: QueryStakerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staker = FullStaker.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakerResponse {
    return { staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined };
  },

  toJSON(message: QueryStakerResponse): unknown {
    const obj: any = {};
    if (message.staker !== undefined) {
      obj.staker = FullStaker.toJSON(message.staker);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakerResponse>, I>>(base?: I): QueryStakerResponse {
    return QueryStakerResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakerResponse>, I>>(object: I): QueryStakerResponse {
    const message = createBaseQueryStakerResponse();
    message.staker = (object.staker !== undefined && object.staker !== null)
      ? FullStaker.fromPartial(object.staker)
      : undefined;
    return message;
  },
};

function createBaseQueryStakersByPoolRequest(): QueryStakersByPoolRequest {
  return { pool_id: "0" };
}

export const QueryStakersByPoolRequest = {
  encode(message: QueryStakersByPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool_id !== "0") {
      writer.uint32(8).uint64(message.pool_id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.pool_id = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByPoolRequest {
    return { pool_id: isSet(object.pool_id) ? globalThis.String(object.pool_id) : "0" };
  },

  toJSON(message: QueryStakersByPoolRequest): unknown {
    const obj: any = {};
    if (message.pool_id !== "0") {
      obj.pool_id = message.pool_id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakersByPoolRequest>, I>>(base?: I): QueryStakersByPoolRequest {
    return QueryStakersByPoolRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakersByPoolRequest>, I>>(object: I): QueryStakersByPoolRequest {
    const message = createBaseQueryStakersByPoolRequest();
    message.pool_id = object.pool_id ?? "0";
    return message;
  },
};

function createBaseQueryStakersByPoolResponse(): QueryStakersByPoolResponse {
  return { stakers: [] };
}

export const QueryStakersByPoolResponse = {
  encode(message: QueryStakersByPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakers) {
      StakerPoolResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakers.push(StakerPoolResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByPoolResponse {
    return {
      stakers: globalThis.Array.isArray(object?.stakers)
        ? object.stakers.map((e: any) => StakerPoolResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryStakersByPoolResponse): unknown {
    const obj: any = {};
    if (message.stakers?.length) {
      obj.stakers = message.stakers.map((e) => StakerPoolResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakersByPoolResponse>, I>>(base?: I): QueryStakersByPoolResponse {
    return QueryStakersByPoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakersByPoolResponse>, I>>(object: I): QueryStakersByPoolResponse {
    const message = createBaseQueryStakersByPoolResponse();
    message.stakers = object.stakers?.map((e) => StakerPoolResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStakerPoolResponse(): StakerPoolResponse {
  return { staker: undefined, valaccount: undefined };
}

export const StakerPoolResponse = {
  encode(message: StakerPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.staker !== undefined) {
      FullStaker.encode(message.staker, writer.uint32(10).fork()).ldelim();
    }
    if (message.valaccount !== undefined) {
      Valaccount.encode(message.valaccount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakerPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakerPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.staker = FullStaker.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.valaccount = Valaccount.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakerPoolResponse {
    return {
      staker: isSet(object.staker) ? FullStaker.fromJSON(object.staker) : undefined,
      valaccount: isSet(object.valaccount) ? Valaccount.fromJSON(object.valaccount) : undefined,
    };
  },

  toJSON(message: StakerPoolResponse): unknown {
    const obj: any = {};
    if (message.staker !== undefined) {
      obj.staker = FullStaker.toJSON(message.staker);
    }
    if (message.valaccount !== undefined) {
      obj.valaccount = Valaccount.toJSON(message.valaccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakerPoolResponse>, I>>(base?: I): StakerPoolResponse {
    return StakerPoolResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakerPoolResponse>, I>>(object: I): StakerPoolResponse {
    const message = createBaseStakerPoolResponse();
    message.staker = (object.staker !== undefined && object.staker !== null)
      ? FullStaker.fromPartial(object.staker)
      : undefined;
    message.valaccount = (object.valaccount !== undefined && object.valaccount !== null)
      ? Valaccount.fromPartial(object.valaccount)
      : undefined;
    return message;
  },
};

function createBaseQueryStakersByPoolCountRequest(): QueryStakersByPoolCountRequest {
  return { pagination: undefined };
}

export const QueryStakersByPoolCountRequest = {
  encode(message: QueryStakersByPoolCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByPoolCountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByPoolCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByPoolCountRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryStakersByPoolCountRequest): unknown {
    const obj: any = {};
    if (message.pagination !== undefined) {
      obj.pagination = PageRequest.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakersByPoolCountRequest>, I>>(base?: I): QueryStakersByPoolCountRequest {
    return QueryStakersByPoolCountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakersByPoolCountRequest>, I>>(
    object: I,
  ): QueryStakersByPoolCountRequest {
    const message = createBaseQueryStakersByPoolCountRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryStakersByPoolCountResponse(): QueryStakersByPoolCountResponse {
  return { stakers: [], pagination: undefined };
}

export const QueryStakersByPoolCountResponse = {
  encode(message: QueryStakersByPoolCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stakers) {
      FullStaker.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByPoolCountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByPoolCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stakers.push(FullStaker.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByPoolCountResponse {
    return {
      stakers: globalThis.Array.isArray(object?.stakers) ? object.stakers.map((e: any) => FullStaker.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryStakersByPoolCountResponse): unknown {
    const obj: any = {};
    if (message.stakers?.length) {
      obj.stakers = message.stakers.map((e) => FullStaker.toJSON(e));
    }
    if (message.pagination !== undefined) {
      obj.pagination = PageResponse.toJSON(message.pagination);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryStakersByPoolCountResponse>, I>>(base?: I): QueryStakersByPoolCountResponse {
    return QueryStakersByPoolCountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryStakersByPoolCountResponse>, I>>(
    object: I,
  ): QueryStakersByPoolCountResponse {
    const message = createBaseQueryStakersByPoolCountResponse();
    message.stakers = object.stakers?.map((e) => FullStaker.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** QueryStakers ... */
export interface QueryStakers {
  /** Stakers queries for all stakers. */
  Stakers(request: QueryStakersRequest): Promise<QueryStakersResponse>;
  /** Staker queries for all stakers. */
  Staker(request: QueryStakerRequest): Promise<QueryStakerResponse>;
  /** StakersByPool queries for all stakers that are currently participating in the given pool */
  StakersByPool(request: QueryStakersByPoolRequest): Promise<QueryStakersByPoolResponse>;
  /**
   * StakersByPool queries for all stakers and sorted them first by number of pools participating and
   * then by delegation
   */
  StakersByPoolCount(request: QueryStakersByPoolCountRequest): Promise<QueryStakersByPoolCountResponse>;
}

export const QueryStakersServiceName = "kyve.query.v1beta1.QueryStakers";
export class QueryStakersClientImpl implements QueryStakers {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryStakersServiceName;
    this.rpc = rpc;
    this.Stakers = this.Stakers.bind(this);
    this.Staker = this.Staker.bind(this);
    this.StakersByPool = this.StakersByPool.bind(this);
    this.StakersByPoolCount = this.StakersByPoolCount.bind(this);
  }
  Stakers(request: QueryStakersRequest): Promise<QueryStakersResponse> {
    const data = QueryStakersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Stakers", data);
    return promise.then((data) => QueryStakersResponse.decode(_m0.Reader.create(data)));
  }

  Staker(request: QueryStakerRequest): Promise<QueryStakerResponse> {
    const data = QueryStakerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Staker", data);
    return promise.then((data) => QueryStakerResponse.decode(_m0.Reader.create(data)));
  }

  StakersByPool(request: QueryStakersByPoolRequest): Promise<QueryStakersByPoolResponse> {
    const data = QueryStakersByPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StakersByPool", data);
    return promise.then((data) => QueryStakersByPoolResponse.decode(_m0.Reader.create(data)));
  }

  StakersByPoolCount(request: QueryStakersByPoolCountRequest): Promise<QueryStakersByPoolCountResponse> {
    const data = QueryStakersByPoolCountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StakersByPoolCount", data);
    return promise.then((data) => QueryStakersByPoolCountResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
