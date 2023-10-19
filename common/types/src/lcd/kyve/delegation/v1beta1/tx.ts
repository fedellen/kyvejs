/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.delegation.v1beta1";

/** MsgDelegate ... */
export interface MsgDelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: string;
}

/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegateResponse {
}

/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawRewards {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
}

/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawRewardsResponse {
}

/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  staker: string;
  /** amount ... */
  amount: string;
}

/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegateResponse {
}

/**
 * MsgRedelegatePool defines a SDK message for redelegating from a
 * staker in a pool to another staker in the same or another pool
 */
export interface MsgRedelegate {
  /** creator ... */
  creator: string;
  /** staker ... */
  from_staker: string;
  /** staker ... */
  to_staker: string;
  /** amount ... */
  amount: string;
}

/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgRedelegateResponse {
}

/** MsgUpdateParams defines a SDK message for updating the module parameters. */
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /** payload defines the x/delegation parameters to update. */
  payload: string;
}

/** MsgUpdateParamsResponse defines the Msg/UpdateParams response type. */
export interface MsgUpdateParamsResponse {
}

function createBaseMsgDelegate(): MsgDelegate {
  return { creator: "", staker: "", amount: "0" };
}

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDelegate {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDelegate>, I>>(base?: I): MsgDelegate {
    return MsgDelegate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegate>, I>>(object: I): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}

export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDelegateResponse>, I>>(base?: I): MsgDelegateResponse {
    return MsgDelegateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDelegateResponse>, I>>(_: I): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
};

function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return { creator: "", staker: "" };
}

export const MsgWithdrawRewards = {
  encode(message: MsgWithdrawRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewards {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawRewards {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
    };
  },

  toJSON(message: MsgWithdrawRewards): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawRewards>, I>>(base?: I): MsgWithdrawRewards {
    return MsgWithdrawRewards.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewards>, I>>(object: I): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    return message;
  },
};

function createBaseMsgWithdrawRewardsResponse(): MsgWithdrawRewardsResponse {
  return {};
}

export const MsgWithdrawRewardsResponse = {
  encode(_: MsgWithdrawRewardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawRewardsResponse {
    return {};
  },

  toJSON(_: MsgWithdrawRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgWithdrawRewardsResponse>, I>>(base?: I): MsgWithdrawRewardsResponse {
    return MsgWithdrawRewardsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewardsResponse>, I>>(_: I): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    return message;
  },
};

function createBaseMsgUndelegate(): MsgUndelegate {
  return { creator: "", staker: "", amount: "0" };
}

export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staker = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      staker: isSet(object.staker) ? globalThis.String(object.staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.staker !== "") {
      obj.staker = message.staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUndelegate>, I>>(base?: I): MsgUndelegate {
    return MsgUndelegate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUndelegate>, I>>(object: I): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.creator = object.creator ?? "";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return {};
}

export const MsgUndelegateResponse = {
  encode(_: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUndelegateResponse {
    return {};
  },

  toJSON(_: MsgUndelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(base?: I): MsgUndelegateResponse {
    return MsgUndelegateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(_: I): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    return message;
  },
};

function createBaseMsgRedelegate(): MsgRedelegate {
  return { creator: "", from_staker: "", to_staker: "", amount: "0" };
}

export const MsgRedelegate = {
  encode(message: MsgRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.from_staker !== "") {
      writer.uint32(18).string(message.from_staker);
    }
    if (message.to_staker !== "") {
      writer.uint32(26).string(message.to_staker);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.from_staker = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to_staker = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.amount = longToString(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRedelegate {
    return {
      creator: isSet(object.creator) ? globalThis.String(object.creator) : "",
      from_staker: isSet(object.from_staker) ? globalThis.String(object.from_staker) : "",
      to_staker: isSet(object.to_staker) ? globalThis.String(object.to_staker) : "",
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "0",
    };
  },

  toJSON(message: MsgRedelegate): unknown {
    const obj: any = {};
    if (message.creator !== "") {
      obj.creator = message.creator;
    }
    if (message.from_staker !== "") {
      obj.from_staker = message.from_staker;
    }
    if (message.to_staker !== "") {
      obj.to_staker = message.to_staker;
    }
    if (message.amount !== "0") {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRedelegate>, I>>(base?: I): MsgRedelegate {
    return MsgRedelegate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRedelegate>, I>>(object: I): MsgRedelegate {
    const message = createBaseMsgRedelegate();
    message.creator = object.creator ?? "";
    message.from_staker = object.from_staker ?? "";
    message.to_staker = object.to_staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgRedelegateResponse(): MsgRedelegateResponse {
  return {};
}

export const MsgRedelegateResponse = {
  encode(_: MsgRedelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgRedelegateResponse {
    return {};
  },

  toJSON(_: MsgRedelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRedelegateResponse>, I>>(base?: I): MsgRedelegateResponse {
    return MsgRedelegateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRedelegateResponse>, I>>(_: I): MsgRedelegateResponse {
    const message = createBaseMsgRedelegateResponse();
    return message;
  },
};

function createBaseMsgUpdateParams(): MsgUpdateParams {
  return { authority: "", payload: "" };
}

export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.payload !== "") {
      writer.uint32(18).string(message.payload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.authority = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payload = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
    };
  },

  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    if (message.authority !== "") {
      obj.authority = message.authority;
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(base?: I): MsgUpdateParams {
    return MsgUpdateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(object: I): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.payload = object.payload ?? "";
    return message;
  },
};

function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}

export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(base?: I): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(_: I): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** Delegate ... */
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /** Withdraw ... */
  WithdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
  /** Undelegate ... */
  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /** Redelegate ... */
  Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/delegation module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}

export const MsgServiceName = "kyve.delegation.v1beta1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.Delegate = this.Delegate.bind(this);
    this.WithdrawRewards = this.WithdrawRewards.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
    this.Redelegate = this.Redelegate.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request(this.service, "Delegate", data);
    return promise.then((data) => MsgDelegateResponse.decode(_m0.Reader.create(data)));
  }

  WithdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse> {
    const data = MsgWithdrawRewards.encode(request).finish();
    const promise = this.rpc.request(this.service, "WithdrawRewards", data);
    return promise.then((data) => MsgWithdrawRewardsResponse.decode(_m0.Reader.create(data)));
  }

  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request(this.service, "Undelegate", data);
    return promise.then((data) => MsgUndelegateResponse.decode(_m0.Reader.create(data)));
  }

  Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse> {
    const data = MsgRedelegate.encode(request).finish();
    const promise = this.rpc.request(this.service, "Redelegate", data);
    return promise.then((data) => MsgRedelegateResponse.decode(_m0.Reader.create(data)));
  }

  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(_m0.Reader.create(data)));
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
