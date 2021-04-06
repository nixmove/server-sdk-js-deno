/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { TrackInfo, Room, ParticipantInfo } from './livekit_models';

export const protobufPackage = 'livekit';

export interface CreateRoomRequest {
  name: string;
  /** number of seconds the room should cleanup after being empty */
  emptyTimeout: number;
  maxParticipants: number;
  /** override the node room is allocated to, for debugging */
  nodeId: string;
}

export interface ListRoomsRequest {}

export interface ListRoomsResponse {
  rooms: Room[];
}

export interface DeleteRoomRequest {
  room: string;
}

export interface DeleteRoomResponse {}

export interface ListParticipantsRequest {
  room: string;
}

export interface ListParticipantsResponse {
  participants: ParticipantInfo[];
}

export interface RoomParticipantIdentity {
  room: string;
  identity: string;
}

export interface RemoveParticipantResponse {}

export interface MuteRoomTrackRequest {
  room: string;
  identity: string;
  trackSid: string;
  muted: boolean;
}

export interface MuteRoomTrackResponse {
  track?: TrackInfo;
}

export interface ParticipantPermission {
  canSubscribe: boolean;
  canPublish: boolean;
}

export interface UpdateParticipantRequest {
  room: string;
  identity: string;
  metadata: string;
  permission?: ParticipantPermission;
}

const baseCreateRoomRequest: object = {
  name: '',
  emptyTimeout: 0,
  maxParticipants: 0,
  nodeId: '',
};

export const CreateRoomRequest = {
  encode(
    message: CreateRoomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name);
    }
    if (message.emptyTimeout !== 0) {
      writer.uint32(16).uint32(message.emptyTimeout);
    }
    if (message.maxParticipants !== 0) {
      writer.uint32(24).uint32(message.maxParticipants);
    }
    if (message.nodeId !== '') {
      writer.uint32(34).string(message.nodeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateRoomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateRoomRequest } as CreateRoomRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.emptyTimeout = reader.uint32();
          break;
        case 3:
          message.maxParticipants = reader.uint32();
          break;
        case 4:
          message.nodeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateRoomRequest {
    const message = { ...baseCreateRoomRequest } as CreateRoomRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = '';
    }
    if (object.emptyTimeout !== undefined && object.emptyTimeout !== null) {
      message.emptyTimeout = Number(object.emptyTimeout);
    } else {
      message.emptyTimeout = 0;
    }
    if (
      object.maxParticipants !== undefined &&
      object.maxParticipants !== null
    ) {
      message.maxParticipants = Number(object.maxParticipants);
    } else {
      message.maxParticipants = 0;
    }
    if (object.nodeId !== undefined && object.nodeId !== null) {
      message.nodeId = String(object.nodeId);
    } else {
      message.nodeId = '';
    }
    return message;
  },

  toJSON(message: CreateRoomRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.emptyTimeout !== undefined &&
      (obj.emptyTimeout = message.emptyTimeout);
    message.maxParticipants !== undefined &&
      (obj.maxParticipants = message.maxParticipants);
    message.nodeId !== undefined && (obj.nodeId = message.nodeId);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateRoomRequest>): CreateRoomRequest {
    const message = { ...baseCreateRoomRequest } as CreateRoomRequest;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = '';
    }
    if (object.emptyTimeout !== undefined && object.emptyTimeout !== null) {
      message.emptyTimeout = object.emptyTimeout;
    } else {
      message.emptyTimeout = 0;
    }
    if (
      object.maxParticipants !== undefined &&
      object.maxParticipants !== null
    ) {
      message.maxParticipants = object.maxParticipants;
    } else {
      message.maxParticipants = 0;
    }
    if (object.nodeId !== undefined && object.nodeId !== null) {
      message.nodeId = object.nodeId;
    } else {
      message.nodeId = '';
    }
    return message;
  },
};

const baseListRoomsRequest: object = {};

export const ListRoomsRequest = {
  encode(
    _: ListRoomsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRoomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListRoomsRequest } as ListRoomsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ListRoomsRequest {
    const message = { ...baseListRoomsRequest } as ListRoomsRequest;
    return message;
  },

  toJSON(_: ListRoomsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListRoomsRequest>): ListRoomsRequest {
    const message = { ...baseListRoomsRequest } as ListRoomsRequest;
    return message;
  },
};

const baseListRoomsResponse: object = {};

export const ListRoomsResponse = {
  encode(
    message: ListRoomsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rooms) {
      Room.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRoomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseListRoomsResponse } as ListRoomsResponse;
    message.rooms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rooms.push(Room.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListRoomsResponse {
    const message = { ...baseListRoomsResponse } as ListRoomsResponse;
    message.rooms = [];
    if (object.rooms !== undefined && object.rooms !== null) {
      for (const e of object.rooms) {
        message.rooms.push(Room.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListRoomsResponse): unknown {
    const obj: any = {};
    if (message.rooms) {
      obj.rooms = message.rooms.map((e) => (e ? Room.toJSON(e) : undefined));
    } else {
      obj.rooms = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ListRoomsResponse>): ListRoomsResponse {
    const message = { ...baseListRoomsResponse } as ListRoomsResponse;
    message.rooms = [];
    if (object.rooms !== undefined && object.rooms !== null) {
      for (const e of object.rooms) {
        message.rooms.push(Room.fromPartial(e));
      }
    }
    return message;
  },
};

const baseDeleteRoomRequest: object = { room: '' };

export const DeleteRoomRequest = {
  encode(
    message: DeleteRoomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.room !== '') {
      writer.uint32(10).string(message.room);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRoomRequest } as DeleteRoomRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.room = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteRoomRequest {
    const message = { ...baseDeleteRoomRequest } as DeleteRoomRequest;
    if (object.room !== undefined && object.room !== null) {
      message.room = String(object.room);
    } else {
      message.room = '';
    }
    return message;
  },

  toJSON(message: DeleteRoomRequest): unknown {
    const obj: any = {};
    message.room !== undefined && (obj.room = message.room);
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteRoomRequest>): DeleteRoomRequest {
    const message = { ...baseDeleteRoomRequest } as DeleteRoomRequest;
    if (object.room !== undefined && object.room !== null) {
      message.room = object.room;
    } else {
      message.room = '';
    }
    return message;
  },
};

const baseDeleteRoomResponse: object = {};

export const DeleteRoomResponse = {
  encode(
    _: DeleteRoomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteRoomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteRoomResponse } as DeleteRoomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteRoomResponse {
    const message = { ...baseDeleteRoomResponse } as DeleteRoomResponse;
    return message;
  },

  toJSON(_: DeleteRoomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeleteRoomResponse>): DeleteRoomResponse {
    const message = { ...baseDeleteRoomResponse } as DeleteRoomResponse;
    return message;
  },
};

const baseListParticipantsRequest: object = { room: '' };

export const ListParticipantsRequest = {
  encode(
    message: ListParticipantsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.room !== '') {
      writer.uint32(10).string(message.room);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListParticipantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListParticipantsRequest,
    } as ListParticipantsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.room = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListParticipantsRequest {
    const message = {
      ...baseListParticipantsRequest,
    } as ListParticipantsRequest;
    if (object.room !== undefined && object.room !== null) {
      message.room = String(object.room);
    } else {
      message.room = '';
    }
    return message;
  },

  toJSON(message: ListParticipantsRequest): unknown {
    const obj: any = {};
    message.room !== undefined && (obj.room = message.room);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListParticipantsRequest>
  ): ListParticipantsRequest {
    const message = {
      ...baseListParticipantsRequest,
    } as ListParticipantsRequest;
    if (object.room !== undefined && object.room !== null) {
      message.room = object.room;
    } else {
      message.room = '';
    }
    return message;
  },
};

const baseListParticipantsResponse: object = {};

export const ListParticipantsResponse = {
  encode(
    message: ListParticipantsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.participants) {
      ParticipantInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListParticipantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseListParticipantsResponse,
    } as ListParticipantsResponse;
    message.participants = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participants.push(
            ParticipantInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListParticipantsResponse {
    const message = {
      ...baseListParticipantsResponse,
    } as ListParticipantsResponse;
    message.participants = [];
    if (object.participants !== undefined && object.participants !== null) {
      for (const e of object.participants) {
        message.participants.push(ParticipantInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ListParticipantsResponse): unknown {
    const obj: any = {};
    if (message.participants) {
      obj.participants = message.participants.map((e) =>
        e ? ParticipantInfo.toJSON(e) : undefined
      );
    } else {
      obj.participants = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<ListParticipantsResponse>
  ): ListParticipantsResponse {
    const message = {
      ...baseListParticipantsResponse,
    } as ListParticipantsResponse;
    message.participants = [];
    if (object.participants !== undefined && object.participants !== null) {
      for (const e of object.participants) {
        message.participants.push(ParticipantInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseRoomParticipantIdentity: object = { room: '', identity: '' };

export const RoomParticipantIdentity = {
  encode(
    message: RoomParticipantIdentity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.room !== '') {
      writer.uint32(10).string(message.room);
    }
    if (message.identity !== '') {
      writer.uint32(18).string(message.identity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RoomParticipantIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRoomParticipantIdentity,
    } as RoomParticipantIdentity;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.room = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RoomParticipantIdentity {
    const message = {
      ...baseRoomParticipantIdentity,
    } as RoomParticipantIdentity;
    if (object.room !== undefined && object.room !== null) {
      message.room = String(object.room);
    } else {
      message.room = '';
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = String(object.identity);
    } else {
      message.identity = '';
    }
    return message;
  },

  toJSON(message: RoomParticipantIdentity): unknown {
    const obj: any = {};
    message.room !== undefined && (obj.room = message.room);
    message.identity !== undefined && (obj.identity = message.identity);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RoomParticipantIdentity>
  ): RoomParticipantIdentity {
    const message = {
      ...baseRoomParticipantIdentity,
    } as RoomParticipantIdentity;
    if (object.room !== undefined && object.room !== null) {
      message.room = object.room;
    } else {
      message.room = '';
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    } else {
      message.identity = '';
    }
    return message;
  },
};

const baseRemoveParticipantResponse: object = {};

export const RemoveParticipantResponse = {
  encode(
    _: RemoveParticipantResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RemoveParticipantResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRemoveParticipantResponse,
    } as RemoveParticipantResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RemoveParticipantResponse {
    const message = {
      ...baseRemoveParticipantResponse,
    } as RemoveParticipantResponse;
    return message;
  },

  toJSON(_: RemoveParticipantResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<RemoveParticipantResponse>
  ): RemoveParticipantResponse {
    const message = {
      ...baseRemoveParticipantResponse,
    } as RemoveParticipantResponse;
    return message;
  },
};

const baseMuteRoomTrackRequest: object = {
  room: '',
  identity: '',
  trackSid: '',
  muted: false,
};

export const MuteRoomTrackRequest = {
  encode(
    message: MuteRoomTrackRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.room !== '') {
      writer.uint32(10).string(message.room);
    }
    if (message.identity !== '') {
      writer.uint32(18).string(message.identity);
    }
    if (message.trackSid !== '') {
      writer.uint32(26).string(message.trackSid);
    }
    if (message.muted === true) {
      writer.uint32(32).bool(message.muted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MuteRoomTrackRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMuteRoomTrackRequest } as MuteRoomTrackRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.room = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.trackSid = reader.string();
          break;
        case 4:
          message.muted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MuteRoomTrackRequest {
    const message = { ...baseMuteRoomTrackRequest } as MuteRoomTrackRequest;
    if (object.room !== undefined && object.room !== null) {
      message.room = String(object.room);
    } else {
      message.room = '';
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = String(object.identity);
    } else {
      message.identity = '';
    }
    if (object.trackSid !== undefined && object.trackSid !== null) {
      message.trackSid = String(object.trackSid);
    } else {
      message.trackSid = '';
    }
    if (object.muted !== undefined && object.muted !== null) {
      message.muted = Boolean(object.muted);
    } else {
      message.muted = false;
    }
    return message;
  },

  toJSON(message: MuteRoomTrackRequest): unknown {
    const obj: any = {};
    message.room !== undefined && (obj.room = message.room);
    message.identity !== undefined && (obj.identity = message.identity);
    message.trackSid !== undefined && (obj.trackSid = message.trackSid);
    message.muted !== undefined && (obj.muted = message.muted);
    return obj;
  },

  fromPartial(object: DeepPartial<MuteRoomTrackRequest>): MuteRoomTrackRequest {
    const message = { ...baseMuteRoomTrackRequest } as MuteRoomTrackRequest;
    if (object.room !== undefined && object.room !== null) {
      message.room = object.room;
    } else {
      message.room = '';
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    } else {
      message.identity = '';
    }
    if (object.trackSid !== undefined && object.trackSid !== null) {
      message.trackSid = object.trackSid;
    } else {
      message.trackSid = '';
    }
    if (object.muted !== undefined && object.muted !== null) {
      message.muted = object.muted;
    } else {
      message.muted = false;
    }
    return message;
  },
};

const baseMuteRoomTrackResponse: object = {};

export const MuteRoomTrackResponse = {
  encode(
    message: MuteRoomTrackResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.track !== undefined) {
      TrackInfo.encode(message.track, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MuteRoomTrackResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMuteRoomTrackResponse } as MuteRoomTrackResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.track = TrackInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MuteRoomTrackResponse {
    const message = { ...baseMuteRoomTrackResponse } as MuteRoomTrackResponse;
    if (object.track !== undefined && object.track !== null) {
      message.track = TrackInfo.fromJSON(object.track);
    } else {
      message.track = undefined;
    }
    return message;
  },

  toJSON(message: MuteRoomTrackResponse): unknown {
    const obj: any = {};
    message.track !== undefined &&
      (obj.track = message.track ? TrackInfo.toJSON(message.track) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MuteRoomTrackResponse>
  ): MuteRoomTrackResponse {
    const message = { ...baseMuteRoomTrackResponse } as MuteRoomTrackResponse;
    if (object.track !== undefined && object.track !== null) {
      message.track = TrackInfo.fromPartial(object.track);
    } else {
      message.track = undefined;
    }
    return message;
  },
};

const baseParticipantPermission: object = {
  canSubscribe: false,
  canPublish: false,
};

export const ParticipantPermission = {
  encode(
    message: ParticipantPermission,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.canSubscribe === true) {
      writer.uint32(8).bool(message.canSubscribe);
    }
    if (message.canPublish === true) {
      writer.uint32(16).bool(message.canPublish);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ParticipantPermission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParticipantPermission } as ParticipantPermission;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.canSubscribe = reader.bool();
          break;
        case 2:
          message.canPublish = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParticipantPermission {
    const message = { ...baseParticipantPermission } as ParticipantPermission;
    if (object.canSubscribe !== undefined && object.canSubscribe !== null) {
      message.canSubscribe = Boolean(object.canSubscribe);
    } else {
      message.canSubscribe = false;
    }
    if (object.canPublish !== undefined && object.canPublish !== null) {
      message.canPublish = Boolean(object.canPublish);
    } else {
      message.canPublish = false;
    }
    return message;
  },

  toJSON(message: ParticipantPermission): unknown {
    const obj: any = {};
    message.canSubscribe !== undefined &&
      (obj.canSubscribe = message.canSubscribe);
    message.canPublish !== undefined && (obj.canPublish = message.canPublish);
    return obj;
  },

  fromPartial(
    object: DeepPartial<ParticipantPermission>
  ): ParticipantPermission {
    const message = { ...baseParticipantPermission } as ParticipantPermission;
    if (object.canSubscribe !== undefined && object.canSubscribe !== null) {
      message.canSubscribe = object.canSubscribe;
    } else {
      message.canSubscribe = false;
    }
    if (object.canPublish !== undefined && object.canPublish !== null) {
      message.canPublish = object.canPublish;
    } else {
      message.canPublish = false;
    }
    return message;
  },
};

const baseUpdateParticipantRequest: object = {
  room: '',
  identity: '',
  metadata: '',
};

export const UpdateParticipantRequest = {
  encode(
    message: UpdateParticipantRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.room !== '') {
      writer.uint32(10).string(message.room);
    }
    if (message.identity !== '') {
      writer.uint32(18).string(message.identity);
    }
    if (message.metadata !== '') {
      writer.uint32(26).string(message.metadata);
    }
    if (message.permission !== undefined) {
      ParticipantPermission.encode(
        message.permission,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateParticipantRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseUpdateParticipantRequest,
    } as UpdateParticipantRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.room = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.permission = ParticipantPermission.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateParticipantRequest {
    const message = {
      ...baseUpdateParticipantRequest,
    } as UpdateParticipantRequest;
    if (object.room !== undefined && object.room !== null) {
      message.room = String(object.room);
    } else {
      message.room = '';
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = String(object.identity);
    } else {
      message.identity = '';
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata);
    } else {
      message.metadata = '';
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = ParticipantPermission.fromJSON(object.permission);
    } else {
      message.permission = undefined;
    }
    return message;
  },

  toJSON(message: UpdateParticipantRequest): unknown {
    const obj: any = {};
    message.room !== undefined && (obj.room = message.room);
    message.identity !== undefined && (obj.identity = message.identity);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.permission !== undefined &&
      (obj.permission = message.permission
        ? ParticipantPermission.toJSON(message.permission)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdateParticipantRequest>
  ): UpdateParticipantRequest {
    const message = {
      ...baseUpdateParticipantRequest,
    } as UpdateParticipantRequest;
    if (object.room !== undefined && object.room !== null) {
      message.room = object.room;
    } else {
      message.room = '';
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    } else {
      message.identity = '';
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = '';
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = ParticipantPermission.fromPartial(object.permission);
    } else {
      message.permission = undefined;
    }
    return message;
  },
};

/**
 * Room service that can be performed on any node
 * they are Twirp-based HTTP req/responses
 */
export interface RoomService {
  /** should be accessible to only internal servers, not external */
  CreateRoom(request: CreateRoomRequest): Promise<Room>;
  ListRooms(request: ListRoomsRequest): Promise<ListRoomsResponse>;
  DeleteRoom(request: DeleteRoomRequest): Promise<DeleteRoomResponse>;
  /** lists participants in a room, requires RoomAdmin */
  ListParticipants(
    request: ListParticipantsRequest
  ): Promise<ListParticipantsResponse>;
  /** get information on a specific participant, requires RoomAdmin */
  GetParticipant(request: RoomParticipantIdentity): Promise<ParticipantInfo>;
  /** removes a participant from room, requires RoomAdmin */
  RemoveParticipant(
    request: RoomParticipantIdentity
  ): Promise<RemoveParticipantResponse>;
  /** mute/unmute a participant, requires RoomAdmin */
  MutePublishedTrack(
    request: MuteRoomTrackRequest
  ): Promise<MuteRoomTrackResponse>;
  /** update participant metadata */
  UpdateParticipant(
    request: UpdateParticipantRequest
  ): Promise<ParticipantInfo>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}