import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockchainData: any;
  BroadcastId: any;
  ChainId: any;
  CollectModuleData: any;
  ContentEncryptionKey: any;
  ContractAddress: any;
  CreateHandle: any;
  Cursor: any;
  DateTime: any;
  EncryptedValueScalar: any;
  Ens: any;
  EthereumAddress: any;
  FollowModuleData: any;
  Handle: any;
  HandleClaimIdScalar: any;
  IfpsCid: any;
  InternalPublicationId: any;
  Jwt: any;
  LimitScalar: any;
  Locale: any;
  Markdown: any;
  MimeType: any;
  NftOwnershipId: any;
  Nonce: any;
  NotificationId: any;
  ProfileId: any;
  ProfileInterest: any;
  ProxyActionId: any;
  PublicationId: any;
  PublicationTag: any;
  PublicationUrl: any;
  ReactionId: any;
  ReferenceModuleData: any;
  Search: any;
  Signature: any;
  Sources: any;
  TimestampScalar: any;
  TokenId: any;
  TxHash: any;
  TxId: any;
  UnixTimestamp: any;
  Url: any;
  Void: any;
};

/** The access conditions for the publication */
export type AccessConditionInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

/** The access conditions for the publication */
export type AccessConditionOutput = {
  __typename?: 'AccessConditionOutput';
  /** AND condition */
  and?: Maybe<AndConditionOutput>;
  /** Profile follow condition */
  collect?: Maybe<CollectConditionOutput>;
  /** EOA ownership condition */
  eoa?: Maybe<EoaOwnershipOutput>;
  /** Profile follow condition */
  follow?: Maybe<FollowConditionOutput>;
  /** NFT ownership condition */
  nft?: Maybe<NftOwnershipOutput>;
  /** OR condition */
  or?: Maybe<OrConditionOutput>;
  /** Profile ownership condition */
  profile?: Maybe<ProfileOwnershipOutput>;
  /** ERC20 token ownership condition */
  token?: Maybe<Erc20OwnershipOutput>;
};

export type AchRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  freeTextHandle?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Scalars['CreateHandle']>;
  overrideAlreadyClaimed: Scalars['Boolean'];
  overrideTradeMark: Scalars['Boolean'];
  secret: Scalars['String'];
};

/** The request object to add interests to a profile */
export type AddProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars['ProfileInterest']>;
  /** The profileId to add interests to */
  profileId: Scalars['ProfileId'];
};

export type AllPublicationsTagsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sort: TagSortCriteria;
  /** The App Id */
  source?: InputMaybe<Scalars['Sources']>;
};

export type AndConditionInput = {
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type AndConditionOutput = {
  __typename?: 'AndConditionOutput';
  /** The list of conditions to apply AND to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

export type ApprovedAllowanceAmount = {
  __typename?: 'ApprovedAllowanceAmount';
  allowance: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  currency: Scalars['ContractAddress'];
  module: Scalars['String'];
};

export type ApprovedModuleAllowanceAmountRequest = {
  collectModules?: InputMaybe<Array<CollectModules>>;
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars['ContractAddress']>;
  followModules?: InputMaybe<Array<FollowModules>>;
  referenceModules?: InputMaybe<Array<ReferenceModules>>;
  unknownCollectModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
  unknownFollowModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
  unknownReferenceModules?: InputMaybe<Array<Scalars['ContractAddress']>>;
};

/** The Profile */
export type Attribute = {
  __typename?: 'Attribute';
  /** The display type */
  displayType?: Maybe<Scalars['String']>;
  /** identifier of this attribute, we will update by this id  */
  key: Scalars['String'];
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>;
  /** Value attribute */
  value: Scalars['String'];
};

/** The auth challenge result */
export type AuthChallengeResult = {
  __typename?: 'AuthChallengeResult';
  /** The text to sign */
  text: Scalars['String'];
};

/** The authentication result */
export type AuthenticationResult = {
  __typename?: 'AuthenticationResult';
  /** The access token */
  accessToken: Scalars['Jwt'];
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type BroadcastRequest = {
  id: Scalars['BroadcastId'];
  signature: Scalars['Signature'];
};

export type BurnProfileRequest = {
  profileId: Scalars['ProfileId'];
};

export type CanCommentResponse = {
  __typename?: 'CanCommentResponse';
  result: Scalars['Boolean'];
};

export type CanDecryptResponse = {
  __typename?: 'CanDecryptResponse';
  reasons?: Maybe<DecryptFailReason>;
  result: Scalars['Boolean'];
};

export type CanMirrorResponse = {
  __typename?: 'CanMirrorResponse';
  result: Scalars['Boolean'];
};

/** The challenge request */
export type ChallengeRequest = {
  /** The ethereum address you want to login with */
  address: Scalars['EthereumAddress'];
};

export type ClaimHandleRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id?: InputMaybe<Scalars['HandleClaimIdScalar']>;
};

/** The claim status */
export enum ClaimStatus {
  AlreadyClaimed = 'ALREADY_CLAIMED',
  ClaimFailed = 'CLAIM_FAILED',
  NotClaimed = 'NOT_CLAIMED'
}

export type ClaimableHandles = {
  __typename?: 'ClaimableHandles';
  canClaimFreeTextHandle: Scalars['Boolean'];
  reservedHandles: Array<ReservedClaimableHandle>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionInput = {
  /** The publication id that has to be collected to unlock content */
  publicationId?: InputMaybe<Scalars['ProfileId']>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: InputMaybe<Scalars['Boolean']>;
};

/** Condition that signifies if address or profile has collected a publication */
export type CollectConditionOutput = {
  __typename?: 'CollectConditionOutput';
  /** The publication id that has to be collected to unlock content */
  publicationId?: Maybe<Scalars['ProfileId']>;
  /** True if the content will be unlocked for this specific publication */
  thisPublication?: Maybe<Scalars['Boolean']>;
};

export type CollectModule = FeeCollectModuleSettings | FreeCollectModuleSettings | LimitedFeeCollectModuleSettings | LimitedTimedFeeCollectModuleSettings | RevertCollectModuleSettings | TimedFeeCollectModuleSettings | UnknownCollectModuleSettings;

export type CollectModuleParams = {
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  /** The collect empty collect module */
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars['Boolean']>;
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
  /** A unknown collect module */
  unknownCollectModule?: InputMaybe<UnknownCollectModuleParams>;
};

/** The collect module types */
export enum CollectModules {
  FeeCollectModule = 'FeeCollectModule',
  FreeCollectModule = 'FreeCollectModule',
  LimitedFeeCollectModule = 'LimitedFeeCollectModule',
  LimitedTimedFeeCollectModule = 'LimitedTimedFeeCollectModule',
  RevertCollectModule = 'RevertCollectModule',
  TimedFeeCollectModule = 'TimedFeeCollectModule',
  UnknownCollectModule = 'UnknownCollectModule'
}

export type CollectProxyAction = {
  freeCollect?: InputMaybe<FreeCollectProxyAction>;
};

export type CollectedEvent = {
  __typename?: 'CollectedEvent';
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

/** The social comment */
export type Comment = {
  __typename?: 'Comment';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** Who collected it, this is used for timeline results and like this for better caching for the client */
  collectedBy?: Maybe<Wallet>;
  /** Which comment this points to if its null the pointer too deep so do another query to find it out */
  commentOn?: Maybe<Publication>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  /** This will bring back the first comment of a comment and only be defined if using `publication` query and `commentOf` */
  firstComment?: Maybe<Comment>;
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean'];
  /** The top level post/mirror this comment lives on */
  mainPost: MainPostReference;
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social comment */
export type CommentCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


/** The social comment */
export type CommentMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>;
};


/** The social comment */
export type CommentReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The gated publication access criteria contract types */
export enum ContractType {
  Erc20 = 'ERC20',
  Erc721 = 'ERC721',
  Erc1155 = 'ERC1155'
}

/** The create burn eip 712 typed data */
export type CreateBurnEip712TypedData = {
  __typename?: 'CreateBurnEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateBurnEip712TypedDataTypes;
  /** The values */
  value: CreateBurnEip712TypedDataValue;
};

/** The create burn eip 712 typed data types */
export type CreateBurnEip712TypedDataTypes = {
  __typename?: 'CreateBurnEIP712TypedDataTypes';
  BurnWithSig: Array<Eip712TypedDataField>;
};

/** The create burn eip 712 typed data value */
export type CreateBurnEip712TypedDataValue = {
  __typename?: 'CreateBurnEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  tokenId: Scalars['String'];
};

/** The broadcast item */
export type CreateBurnProfileBroadcastItemResult = {
  __typename?: 'CreateBurnProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

/** The broadcast item */
export type CreateCollectBroadcastItemResult = {
  __typename?: 'CreateCollectBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateCollectEip712TypedData;
};

/** The collect eip 712 typed data */
export type CreateCollectEip712TypedData = {
  __typename?: 'CreateCollectEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCollectEip712TypedDataTypes;
  /** The values */
  value: CreateCollectEip712TypedDataValue;
};

/** The collect eip 712 typed data types */
export type CreateCollectEip712TypedDataTypes = {
  __typename?: 'CreateCollectEIP712TypedDataTypes';
  CollectWithSig: Array<Eip712TypedDataField>;
};

/** The collect eip 712 typed data value */
export type CreateCollectEip712TypedDataValue = {
  __typename?: 'CreateCollectEIP712TypedDataValue';
  data: Scalars['BlockchainData'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  pubId: Scalars['PublicationId'];
};

export type CreateCollectRequest = {
  publicationId: Scalars['InternalPublicationId'];
  /** The encoded data to collect with if using an unknown module */
  unknownModuleData?: InputMaybe<Scalars['BlockchainData']>;
};

/** The broadcast item */
export type CreateCommentBroadcastItemResult = {
  __typename?: 'CreateCommentBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateCommentEip712TypedData;
};

/** The create comment eip 712 typed data */
export type CreateCommentEip712TypedData = {
  __typename?: 'CreateCommentEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateCommentEip712TypedDataTypes;
  /** The values */
  value: CreateCommentEip712TypedDataValue;
};

/** The create comment eip 712 typed data types */
export type CreateCommentEip712TypedDataTypes = {
  __typename?: 'CreateCommentEIP712TypedDataTypes';
  CommentWithSig: Array<Eip712TypedDataField>;
};

/** The create comment eip 712 typed data value */
export type CreateCommentEip712TypedDataValue = {
  __typename?: 'CreateCommentEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleInitData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

/** The broadcast item */
export type CreateFollowBroadcastItemResult = {
  __typename?: 'CreateFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateFollowEip712TypedData;
};

/** The create follow eip 712 typed data */
export type CreateFollowEip712TypedData = {
  __typename?: 'CreateFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateFollowEip712TypedDataTypes;
  /** The values */
  value: CreateFollowEip712TypedDataValue;
};

/** The create follow eip 712 typed data types */
export type CreateFollowEip712TypedDataTypes = {
  __typename?: 'CreateFollowEIP712TypedDataTypes';
  FollowWithSig: Array<Eip712TypedDataField>;
};

/** The create follow eip 712 typed data value */
export type CreateFollowEip712TypedDataValue = {
  __typename?: 'CreateFollowEIP712TypedDataValue';
  datas: Array<Scalars['BlockchainData']>;
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

/** The broadcast item */
export type CreateMirrorBroadcastItemResult = {
  __typename?: 'CreateMirrorBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateMirrorEip712TypedData;
};

/** The mirror eip 712 typed data */
export type CreateMirrorEip712TypedData = {
  __typename?: 'CreateMirrorEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateMirrorEip712TypedDataTypes;
  /** The values */
  value: CreateMirrorEip712TypedDataValue;
};

/** The mirror eip 712 typed data types */
export type CreateMirrorEip712TypedDataTypes = {
  __typename?: 'CreateMirrorEIP712TypedDataTypes';
  MirrorWithSig: Array<Eip712TypedDataField>;
};

/** The mirror eip 712 typed data value */
export type CreateMirrorEip712TypedDataValue = {
  __typename?: 'CreateMirrorEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  profileIdPointed: Scalars['ProfileId'];
  pubIdPointed: Scalars['PublicationId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleData: Scalars['ReferenceModuleData'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreateMirrorRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

/** The broadcast item */
export type CreatePostBroadcastItemResult = {
  __typename?: 'CreatePostBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreatePostEip712TypedData;
};

/** The create post eip 712 typed data */
export type CreatePostEip712TypedData = {
  __typename?: 'CreatePostEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreatePostEip712TypedDataTypes;
  /** The values */
  value: CreatePostEip712TypedDataValue;
};

/** The create post eip 712 typed data types */
export type CreatePostEip712TypedDataTypes = {
  __typename?: 'CreatePostEIP712TypedDataTypes';
  PostWithSig: Array<Eip712TypedDataField>;
};

/** The create post eip 712 typed data value */
export type CreatePostEip712TypedDataValue = {
  __typename?: 'CreatePostEIP712TypedDataValue';
  collectModule: Scalars['ContractAddress'];
  collectModuleInitData: Scalars['CollectModuleData'];
  contentURI: Scalars['PublicationUrl'];
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  referenceModule: Scalars['ContractAddress'];
  referenceModuleInitData: Scalars['ReferenceModuleData'];
};

export type CreateProfileRequest = {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  handle: Scalars['CreateHandle'];
  /** The profile picture uri */
  profilePictureUri?: InputMaybe<Scalars['Url']>;
};

export type CreatePublicCommentRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicPostRequest = {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** The criteria to access the publication data */
  gated?: InputMaybe<GatedPublicationParamsInput>;
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
};

export type CreatePublicSetProfileMetadataUriRequest = {
  /** The metadata uploaded somewhere passing in the url to reach it */
  metadata: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
};

export type CreateSetDefaultProfileRequest = {
  /** Profile id */
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetDispatcherBroadcastItemResult = {
  __typename?: 'CreateSetDispatcherBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetDispatcherEip712TypedData;
};

/** The set dispatcher eip 712 typed data */
export type CreateSetDispatcherEip712TypedData = {
  __typename?: 'CreateSetDispatcherEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetDispatcherEip712TypedDataTypes;
  /** The values */
  value: CreateSetDispatcherEip712TypedDataValue;
};

/** The set dispatcher eip 712 typed data types */
export type CreateSetDispatcherEip712TypedDataTypes = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataTypes';
  SetDispatcherWithSig: Array<Eip712TypedDataField>;
};

/** The set dispatcher eip 712 typed data value */
export type CreateSetDispatcherEip712TypedDataValue = {
  __typename?: 'CreateSetDispatcherEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  dispatcher: Scalars['EthereumAddress'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetFollowModuleBroadcastItemResult = {
  __typename?: 'CreateSetFollowModuleBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowModuleEip712TypedData;
};

/** The set follow module eip 712 typed data */
export type CreateSetFollowModuleEip712TypedData = {
  __typename?: 'CreateSetFollowModuleEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowModuleEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowModuleEip712TypedDataValue;
};

/** The set follow module eip 712 typed data types */
export type CreateSetFollowModuleEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataTypes';
  SetFollowModuleWithSig: Array<Eip712TypedDataField>;
};

/** The set follow module eip 712 typed data value */
export type CreateSetFollowModuleEip712TypedDataValue = {
  __typename?: 'CreateSetFollowModuleEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followModule: Scalars['ContractAddress'];
  followModuleInitData: Scalars['FollowModuleData'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowModuleRequest = {
  /** The follow module info */
  followModule: FollowModuleParams;
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetFollowNftUriBroadcastItemResult = {
  __typename?: 'CreateSetFollowNFTUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetFollowNftUriEip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetFollowNftUriEip712TypedData = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetFollowNftUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetFollowNftUriEip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetFollowNftUriEip712TypedDataTypes = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataTypes';
  SetFollowNFTURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetFollowNftUriEip712TypedDataValue = {
  __typename?: 'CreateSetFollowNFTUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  followNFTURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

export type CreateSetFollowNftUriRequest = {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetProfileImageUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileImageUriBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetProfileImageUriEip712TypedData;
};

/** The set profile uri eip 712 typed data */
export type CreateSetProfileImageUriEip712TypedData = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileImageUriEip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileImageUriEip712TypedDataValue;
};

/** The set profile image uri eip 712 typed data types */
export type CreateSetProfileImageUriEip712TypedDataTypes = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataTypes';
  SetProfileImageURIWithSig: Array<Eip712TypedDataField>;
};

/** The set profile uri eip 712 typed data value */
export type CreateSetProfileImageUriEip712TypedDataValue = {
  __typename?: 'CreateSetProfileImageUriEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  imageURI: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateSetProfileMetadataUriBroadcastItemResult = {
  __typename?: 'CreateSetProfileMetadataURIBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateSetProfileMetadataUrieip712TypedData;
};

/** The set follow nft uri eip 712 typed data */
export type CreateSetProfileMetadataUrieip712TypedData = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateSetProfileMetadataUrieip712TypedDataTypes;
  /** The values */
  value: CreateSetProfileMetadataUrieip712TypedDataValue;
};

/** The set follow nft uri eip 712 typed data types */
export type CreateSetProfileMetadataUrieip712TypedDataTypes = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataTypes';
  SetProfileMetadataURIWithSig: Array<Eip712TypedDataField>;
};

/** The set follow nft uri eip 712 typed data value */
export type CreateSetProfileMetadataUrieip712TypedDataValue = {
  __typename?: 'CreateSetProfileMetadataURIEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  metadata: Scalars['Url'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
};

/** The broadcast item */
export type CreateToggleFollowBroadcastItemResult = {
  __typename?: 'CreateToggleFollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateToggleFollowEip712TypedData;
};

/** The create toggle follows eip 712 typed data */
export type CreateToggleFollowEip712TypedData = {
  __typename?: 'CreateToggleFollowEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: CreateToggleFollowEip712TypedDataTypes;
  /** The values */
  value: CreateToggleFollowEip712TypedDataValue;
};

/** The create toggle follows eip 712 typed data types */
export type CreateToggleFollowEip712TypedDataTypes = {
  __typename?: 'CreateToggleFollowEIP712TypedDataTypes';
  ToggleFollowWithSig: Array<Eip712TypedDataField>;
};

/** The create toggle follow eip 712 typed data value */
export type CreateToggleFollowEip712TypedDataValue = {
  __typename?: 'CreateToggleFollowEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  enables: Array<Scalars['Boolean']>;
  nonce: Scalars['Nonce'];
  profileIds: Array<Scalars['ProfileId']>;
};

export type CreateToggleFollowRequest = {
  enables: Array<Scalars['Boolean']>;
  profileIds: Array<Scalars['ProfileId']>;
};

/** The broadcast item */
export type CreateUnfollowBroadcastItemResult = {
  __typename?: 'CreateUnfollowBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: CreateBurnEip712TypedData;
};

export type CurRequest = {
  secret: Scalars['String'];
};

/** The custom filters types */
export enum CustomFiltersTypes {
  Gardeners = 'GARDENERS'
}

/** The reason why a profile cannot decrypt a publication */
export enum DecryptFailReason {
  CollectNotFinalisedOnChain = 'COLLECT_NOT_FINALISED_ON_CHAIN',
  DoesNotFollowProfile = 'DOES_NOT_FOLLOW_PROFILE',
  DoesNotOwnNft = 'DOES_NOT_OWN_NFT',
  DoesNotOwnProfile = 'DOES_NOT_OWN_PROFILE',
  FollowNotFinalisedOnChain = 'FOLLOW_NOT_FINALISED_ON_CHAIN',
  HasNotCollectedPublication = 'HAS_NOT_COLLECTED_PUBLICATION',
  MissingEncryptionParams = 'MISSING_ENCRYPTION_PARAMS',
  ProfileDoesNotExist = 'PROFILE_DOES_NOT_EXIST',
  UnauthorizedAddress = 'UNAUTHORIZED_ADDRESS',
  UnauthorizedBalance = 'UNAUTHORIZED_BALANCE'
}

export type DefaultProfileRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
};

export type DegreesOfSeparationReferenceModuleParams = {
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
};

export type DegreesOfSeparationReferenceModuleSettings = {
  __typename?: 'DegreesOfSeparationReferenceModuleSettings';
  /** Applied to comments */
  commentsRestricted: Scalars['Boolean'];
  contractAddress: Scalars['ContractAddress'];
  /** Degrees of separation */
  degreesOfSeparation: Scalars['Int'];
  /** Applied to mirrors */
  mirrorsRestricted: Scalars['Boolean'];
  /** The reference modules enum */
  type: ReferenceModules;
};

/** The dispatcher */
export type Dispatcher = {
  __typename?: 'Dispatcher';
  /** The dispatcher address */
  address: Scalars['EthereumAddress'];
  /** If the dispatcher can use the relay */
  canUseRelay: Scalars['Boolean'];
};

export type DoesFollow = {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type DoesFollowRequest = {
  /** The follower infos */
  followInfos: Array<DoesFollow>;
};

/** The does follow response */
export type DoesFollowResponse = {
  __typename?: 'DoesFollowResponse';
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** If the user does follow */
  follows: Scalars['Boolean'];
  /** Is finalised on-chain */
  isFinalisedOnChain: Scalars['Boolean'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** The eip 712 typed data domain */
export type Eip712TypedDataDomain = {
  __typename?: 'EIP712TypedDataDomain';
  /** The chainId */
  chainId: Scalars['ChainId'];
  /** The name of the typed data domain */
  name: Scalars['String'];
  /** The verifying contract */
  verifyingContract: Scalars['ContractAddress'];
  /** The version */
  version: Scalars['String'];
};

/** The eip 712 typed data field */
export type Eip712TypedDataField = {
  __typename?: 'EIP712TypedDataField';
  /** The name of the typed data field */
  name: Scalars['String'];
  /** The type of the typed data field */
  type: Scalars['String'];
};

export type ElectedMirror = {
  __typename?: 'ElectedMirror';
  mirrorId: Scalars['InternalPublicationId'];
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type EnabledModule = {
  __typename?: 'EnabledModule';
  contractAddress: Scalars['ContractAddress'];
  inputParams: Array<ModuleInfo>;
  moduleName: Scalars['String'];
  redeemParams: Array<ModuleInfo>;
  returnDataParms: Array<ModuleInfo>;
};

/** The enabled modules */
export type EnabledModules = {
  __typename?: 'EnabledModules';
  collectModules: Array<EnabledModule>;
  followModules: Array<EnabledModule>;
  referenceModules: Array<EnabledModule>;
};

/** The encrypted fields */
export type EncryptedFieldsOutput = {
  __typename?: 'EncryptedFieldsOutput';
  /** The encrypted animation_url field */
  animation_url?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted content field */
  content?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted external_url field */
  external_url?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted image field */
  image?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted media field */
  media?: Maybe<Array<EncryptedMediaSet>>;
};

/** The Encrypted Media url and metadata */
export type EncryptedMedia = {
  __typename?: 'EncryptedMedia';
  /** The encrypted alt tags for accessibility */
  altTag?: Maybe<Scalars['EncryptedValueScalar']>;
  /** The encrypted cover for any video or audio you attached */
  cover?: Maybe<Scalars['EncryptedValueScalar']>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']>;
  /** The encrypted value for the URL */
  url: Scalars['Url'];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']>;
};

/** The encrypted media set */
export type EncryptedMediaSet = {
  __typename?: 'EncryptedMediaSet';
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<EncryptedMedia>;
  /** Original media */
  original: EncryptedMedia;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<EncryptedMedia>;
};

/** The metadata encryption params */
export type EncryptionParamsOutput = {
  __typename?: 'EncryptionParamsOutput';
  /** The access conditions */
  accessCondition: AccessConditionOutput;
  /** The encrypted fields */
  encryptedFields: EncryptedFieldsOutput;
  /** The encryption provider */
  encryptionProvider: EncryptionProvider;
  /** The provider-specific encryption params */
  providerSpecificParams: ProviderSpecificParamsOutput;
};

/** The gated publication encryption provider */
export enum EncryptionProvider {
  LitProtocol = 'LIT_PROTOCOL'
}

export type EnsOnChainIdentity = {
  __typename?: 'EnsOnChainIdentity';
  /** The default ens mapped to this address */
  name?: Maybe<Scalars['Ens']>;
};

export type EoaOwnershipInput = {
  /** The address that will have access to the content */
  address: Scalars['EthereumAddress'];
};

export type EoaOwnershipOutput = {
  __typename?: 'EoaOwnershipOutput';
  /** The address that will have access to the content */
  address: Scalars['EthereumAddress'];
};

/** The erc20 type */
export type Erc20 = {
  __typename?: 'Erc20';
  /** The erc20 address */
  address: Scalars['ContractAddress'];
  /** Decimal places for the token */
  decimals: Scalars['Int'];
  /** Name of the symbol */
  name: Scalars['String'];
  /** Symbol for the token */
  symbol: Scalars['String'];
};

export type Erc20Amount = {
  __typename?: 'Erc20Amount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type Erc20OwnershipInput = {
  /** The amount of tokens required to access the content */
  amount: Scalars['String'];
  /** The amount of tokens required to access the content */
  chainID: Scalars['ChainId'];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token's ethereum address */
  contractAddress: Scalars['ContractAddress'];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars['Float'];
};

export type Erc20OwnershipOutput = {
  __typename?: 'Erc20OwnershipOutput';
  /** The amount of tokens required to access the content */
  amount: Scalars['String'];
  /** The amount of tokens required to access the content */
  chainID: Scalars['ChainId'];
  /** The operator to use when comparing the amount of tokens */
  condition: ScalarOperator;
  /** The ERC20 token's ethereum address */
  contractAddress: Scalars['ContractAddress'];
  /** The amount of decimals of the ERC20 contract */
  decimals: Scalars['Float'];
};

/** The paginated publication result */
export type ExploreProfileResult = {
  __typename?: 'ExploreProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

export type ExploreProfilesRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sortCriteria: ProfileSortCriteria;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

export type ExplorePublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars['Boolean']>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  sortCriteria: PublicationSortCriteria;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
};

/** The paginated publication result */
export type ExplorePublicationResult = {
  __typename?: 'ExplorePublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

export type FeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type FeeCollectModuleSettings = {
  __typename?: 'FeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FeeFollowModuleParams = {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams;
  /** The follow module recipient address */
  recipient: Scalars['EthereumAddress'];
};

export type FeeFollowModuleRedeemParams = {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams;
};

export type FeeFollowModuleSettings = {
  __typename?: 'FeeFollowModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The follow modules enum */
  type: FollowModules;
};

/** The feed event item filter types */
export enum FeedEventItemType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type FeedHighlightsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type FeedItem = {
  __typename?: 'FeedItem';
  /** Sorted by most recent first. Resolves defaultProfile and if null omits the wallet collect event from the list. */
  collects: Array<CollectedEvent>;
  /** Sorted by most recent first. Up to page size - 1 comments. */
  comments?: Maybe<Array<Comment>>;
  /** The elected mirror will be the first Mirror publication within the page results set */
  electedMirror?: Maybe<ElectedMirror>;
  /** Sorted by most recent first. Up to page size - 1 mirrors */
  mirrors: Array<MirrorEvent>;
  /** Sorted by most recent first. Up to page size - 1 reactions */
  reactions: Array<ReactionEvent>;
  root: FeedItemRoot;
};

export type FeedItemRoot = Comment | Post;

export type FeedRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** Filter your feed to whatever you wish */
  feedEventItemTypes?: InputMaybe<Array<FeedEventItemType>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Follow = {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars['ProfileId'];
};

export type FollowConditionInput = {
  /** The profile id of the gated profile */
  profileId: Scalars['ProfileId'];
};

export type FollowConditionOutput = {
  __typename?: 'FollowConditionOutput';
  /** The profile id of the gated profile */
  profileId: Scalars['ProfileId'];
};

export type FollowModule = FeeFollowModuleSettings | ProfileFollowModuleSettings | RevertFollowModuleSettings | UnknownFollowModuleSettings;

export type FollowModuleParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  /** The empty follow module */
  freeFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The profile follow module */
  profileFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The revert follow module */
  revertFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleParams>;
};

export type FollowModuleRedeemParams = {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  /** The profile follower module */
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
  /** A unknown follow module */
  unknownFollowModule?: InputMaybe<UnknownFollowModuleRedeemParams>;
};

/** The follow module types */
export enum FollowModules {
  FeeFollowModule = 'FeeFollowModule',
  ProfileFollowModule = 'ProfileFollowModule',
  RevertFollowModule = 'RevertFollowModule',
  UnknownFollowModule = 'UnknownFollowModule'
}

export type FollowOnlyReferenceModuleSettings = {
  __typename?: 'FollowOnlyReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type FollowProxyAction = {
  freeFollow?: InputMaybe<FreeFollowProxyAction>;
};

export type FollowRequest = {
  follow: Array<Follow>;
};

export type FollowRevenueResult = {
  __typename?: 'FollowRevenueResult';
  revenues: Array<RevenueAggregate>;
};

export type Follower = {
  __typename?: 'Follower';
  totalAmountOfTimesFollowed: Scalars['Int'];
  wallet: Wallet;
};

export type FollowerNftOwnedTokenIds = {
  __typename?: 'FollowerNftOwnedTokenIds';
  followerNftAddress: Scalars['ContractAddress'];
  tokensIds: Array<Scalars['String']>;
};

export type FollowerNftOwnedTokenIdsRequest = {
  address: Scalars['EthereumAddress'];
  profileId: Scalars['ProfileId'];
};

export type FollowersRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  profileId: Scalars['ProfileId'];
};

export type Following = {
  __typename?: 'Following';
  profile: Profile;
  totalAmountOfTimesFollowing: Scalars['Int'];
};

export type FollowingRequest = {
  address: Scalars['EthereumAddress'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

export type FraudReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingFraudSubreason;
};

export type FreeCollectModuleParams = {
  /** Follower only */
  followerOnly: Scalars['Boolean'];
};

export type FreeCollectModuleSettings = {
  __typename?: 'FreeCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect modules enum */
  type: CollectModules;
};

export type FreeCollectProxyAction = {
  publicationId: Scalars['InternalPublicationId'];
};

export type FreeFollowProxyAction = {
  profileId: Scalars['ProfileId'];
};

/** The access conditions for the publication */
export type GatedPublicationParamsInput = {
  /** AND condition */
  and?: InputMaybe<AndConditionInput>;
  /** Profile follow condition */
  collect?: InputMaybe<CollectConditionInput>;
  /** The LIT Protocol encrypted symmetric key */
  encryptedSymmetricKey: Scalars['ContentEncryptionKey'];
  /** EOA ownership condition */
  eoa?: InputMaybe<EoaOwnershipInput>;
  /** Profile follow condition */
  follow?: InputMaybe<FollowConditionInput>;
  /** NFT ownership condition */
  nft?: InputMaybe<NftOwnershipInput>;
  /** OR condition */
  or?: InputMaybe<OrConditionInput>;
  /** Profile ownership condition */
  profile?: InputMaybe<ProfileOwnershipInput>;
  /** ERC20 token ownership condition */
  token?: InputMaybe<Erc20OwnershipInput>;
};

export type GenerateModuleCurrencyApproval = {
  __typename?: 'GenerateModuleCurrencyApproval';
  data: Scalars['BlockchainData'];
  from: Scalars['EthereumAddress'];
  to: Scalars['ContractAddress'];
};

export type GenerateModuleCurrencyApprovalDataRequest = {
  collectModule?: InputMaybe<CollectModules>;
  currency: Scalars['ContractAddress'];
  followModule?: InputMaybe<FollowModules>;
  referenceModule?: InputMaybe<ReferenceModules>;
  unknownCollectModule?: InputMaybe<Scalars['ContractAddress']>;
  unknownFollowModule?: InputMaybe<Scalars['ContractAddress']>;
  unknownReferenceModule?: InputMaybe<Scalars['ContractAddress']>;
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars['String'];
};

export type GetPublicationMetadataStatusRequest = {
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  txHash?: InputMaybe<Scalars['TxHash']>;
  txId?: InputMaybe<Scalars['TxId']>;
};

export type GlobalProtocolStats = {
  __typename?: 'GlobalProtocolStats';
  totalBurntProfiles: Scalars['Int'];
  totalCollects: Scalars['Int'];
  totalComments: Scalars['Int'];
  totalFollows: Scalars['Int'];
  totalMirrors: Scalars['Int'];
  totalPosts: Scalars['Int'];
  totalProfiles: Scalars['Int'];
  totalRevenue: Array<Erc20Amount>;
};

export type GlobalProtocolStatsRequest = {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
};

export type HasTxHashBeenIndexedRequest = {
  /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
  txHash?: InputMaybe<Scalars['TxHash']>;
  /** Tx id.. if your using the broadcaster you should always use this field */
  txId?: InputMaybe<Scalars['TxId']>;
};

export type HelRequest = {
  handle: Scalars['Handle'];
  remove: Scalars['Boolean'];
  secret: Scalars['String'];
};

export type HidePublicationRequest = {
  /** Publication id */
  publicationId: Scalars['InternalPublicationId'];
};

export type IllegalReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingIllegalSubreason;
};

export type InternalPublicationsFilterRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** must be DD/MM/YYYY */
  fromDate: Scalars['String'];
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The shared secret */
  secret: Scalars['String'];
  /** The App Id */
  source: Scalars['Sources'];
  /** must be DD/MM/YYYY */
  toDate: Scalars['String'];
};

export type LimitedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LimitedFeeCollectModuleSettings = {
  __typename?: 'LimitedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type LimitedTimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type LimitedTimedFeeCollectModuleSettings = {
  __typename?: 'LimitedTimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  contractAddress: Scalars['ContractAddress'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type Log = {
  __typename?: 'Log';
  address: Scalars['ContractAddress'];
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  data: Scalars['String'];
  logIndex: Scalars['Int'];
  removed: Scalars['Boolean'];
  topics: Array<Scalars['String']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
};

export type MainPostReference = Mirror | Post;

/** The Media url */
export type Media = {
  __typename?: 'Media';
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['Url']>;
  /** Height - will always be null on the public API */
  height?: Maybe<Scalars['Int']>;
  /** The image/audio/video mime type for the publication */
  mimeType?: Maybe<Scalars['MimeType']>;
  /** Size - will always be null on the public API */
  size?: Maybe<Scalars['Int']>;
  /** The token image nft */
  url: Scalars['Url'];
  /** Width - will always be null on the public API */
  width?: Maybe<Scalars['Int']>;
};

/** Media object output */
export type MediaOutput = {
  __typename?: 'MediaOutput';
  /** The alt tags for accessibility */
  altTag?: Maybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: Maybe<Scalars['Url']>;
  item: Scalars['Url'];
  source?: Maybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: Maybe<Scalars['MimeType']>;
};

/** The Media Set */
export type MediaSet = {
  __typename?: 'MediaSet';
  /**
   * Medium media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  medium?: Maybe<Media>;
  /** Original media */
  original: Media;
  /**
   * Small media - will always be null on the public API
   * @deprecated should not be used will always be null
   */
  small?: Maybe<Media>;
};

export type MentionPublication = Comment | Post;

/** The metadata attribute input */
export type MetadataAttributeInput = {
  /** The display type */
  displayType?: InputMaybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType: Scalars['String'];
  /** The value */
  value: Scalars['String'];
};

/** The metadata attribute output */
export type MetadataAttributeOutput = {
  __typename?: 'MetadataAttributeOutput';
  /** The display type */
  displayType?: Maybe<PublicationMetadataDisplayTypes>;
  /** The trait type - can be anything its the name it will render so include spaces */
  traitType?: Maybe<Scalars['String']>;
  /** The value */
  value?: Maybe<Scalars['String']>;
};

/** The metadata output */
export type MetadataOutput = {
  __typename?: 'MetadataOutput';
  /** The main focus of the publication */
  animatedUrl?: Maybe<Scalars['Url']>;
  /** The attributes */
  attributes: Array<MetadataAttributeOutput>;
  /** This is the metadata content for the publication, should be markdown */
  content?: Maybe<Scalars['Markdown']>;
  /** The content warning for the publication */
  contentWarning?: Maybe<PublicationContentWarning>;
  /** The image cover for video/music publications */
  cover?: Maybe<MediaSet>;
  /** This is the metadata description */
  description?: Maybe<Scalars['Markdown']>;
  /** The publication's encryption params in case it's encrypted */
  encryptionParams?: Maybe<EncryptionParamsOutput>;
  /** This is the image attached to the metadata and the property used to show the NFT! */
  image?: Maybe<Scalars['Url']>;
  /** The locale of the publication,  */
  locale?: Maybe<Scalars['Locale']>;
  /** The main focus of the publication */
  mainContentFocus: PublicationMainFocus;
  /** The images/audios/videos for the publication */
  media: Array<MediaSet>;
  /** The metadata name */
  name?: Maybe<Scalars['String']>;
  /** The tags for the publication */
  tags: Array<Scalars['String']>;
};

/** The social mirror */
export type Mirror = {
  __typename?: 'Mirror';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  /** The mirror publication */
  mirrorOf: MirrorablePublication;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social mirror */
export type MirrorCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social mirror */
export type MirrorCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social mirror */
export type MirrorCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social mirror */
export type MirrorHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


/** The social mirror */
export type MirrorReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

export type MirrorEvent = {
  __typename?: 'MirrorEvent';
  profile: Profile;
  timestamp: Scalars['DateTime'];
};

export type MirrorablePublication = Comment | Post;

export type ModuleFeeAmount = {
  __typename?: 'ModuleFeeAmount';
  /** The erc20 token info */
  asset: Erc20;
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ModuleFeeAmountParams = {
  /** The currency address */
  currency: Scalars['ContractAddress'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
};

export type ModuleInfo = {
  __typename?: 'ModuleInfo';
  name: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ach?: Maybe<Scalars['Void']>;
  /** Adds profile interests to the given profile */
  addProfileInterests?: Maybe<Scalars['Void']>;
  addReaction?: Maybe<Scalars['Void']>;
  authenticate: AuthenticationResult;
  broadcast: RelayResult;
  claim: RelayResult;
  createAttachMediaData: PublicMediaResults;
  createBurnProfileTypedData: CreateBurnProfileBroadcastItemResult;
  createCollectTypedData: CreateCollectBroadcastItemResult;
  createCommentTypedData: CreateCommentBroadcastItemResult;
  createCommentViaDispatcher: RelayResult;
  createFollowTypedData: CreateFollowBroadcastItemResult;
  createMirrorTypedData: CreateMirrorBroadcastItemResult;
  createMirrorViaDispatcher: RelayResult;
  createPostTypedData: CreatePostBroadcastItemResult;
  createPostViaDispatcher: RelayResult;
  createProfile: RelayResult;
  createSetDefaultProfileTypedData: SetDefaultProfileBroadcastItemResult;
  createSetDispatcherTypedData: CreateSetDispatcherBroadcastItemResult;
  createSetFollowModuleTypedData: CreateSetFollowModuleBroadcastItemResult;
  createSetFollowNFTUriTypedData: CreateSetFollowNftUriBroadcastItemResult;
  createSetProfileImageURITypedData: CreateSetProfileImageUriBroadcastItemResult;
  createSetProfileImageURIViaDispatcher: RelayResult;
  createSetProfileMetadataTypedData: CreateSetProfileMetadataUriBroadcastItemResult;
  createSetProfileMetadataViaDispatcher: RelayResult;
  createToggleFollowTypedData: CreateToggleFollowBroadcastItemResult;
  createUnfollowTypedData: CreateUnfollowBroadcastItemResult;
  hel?: Maybe<Scalars['Void']>;
  hidePublication?: Maybe<Scalars['Void']>;
  proxyAction: Scalars['ProxyActionId'];
  refresh: AuthenticationResult;
  /** Removes profile interests from the given profile */
  removeProfileInterests?: Maybe<Scalars['Void']>;
  removeReaction?: Maybe<Scalars['Void']>;
  reportPublication?: Maybe<Scalars['Void']>;
};


export type MutationAchArgs = {
  request: AchRequest;
};


export type MutationAddProfileInterestsArgs = {
  request: AddProfileInterestsRequest;
};


export type MutationAddReactionArgs = {
  request: ReactionRequest;
};


export type MutationAuthenticateArgs = {
  request: SignedAuthChallenge;
};


export type MutationBroadcastArgs = {
  request: BroadcastRequest;
};


export type MutationClaimArgs = {
  request: ClaimHandleRequest;
};


export type MutationCreateAttachMediaDataArgs = {
  request: PublicMediaRequest;
};


export type MutationCreateBurnProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: BurnProfileRequest;
};


export type MutationCreateCollectTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
};


export type MutationCreateCommentTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
};


export type MutationCreateCommentViaDispatcherArgs = {
  request: CreatePublicCommentRequest;
};


export type MutationCreateFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
};


export type MutationCreateMirrorTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateMirrorRequest;
};


export type MutationCreateMirrorViaDispatcherArgs = {
  request: CreateMirrorRequest;
};


export type MutationCreatePostTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicPostRequest;
};


export type MutationCreatePostViaDispatcherArgs = {
  request: CreatePublicPostRequest;
};


export type MutationCreateProfileArgs = {
  request: CreateProfileRequest;
};


export type MutationCreateSetDefaultProfileTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetDefaultProfileRequest;
};


export type MutationCreateSetDispatcherTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: SetDispatcherRequest;
};


export type MutationCreateSetFollowModuleTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowModuleRequest;
};


export type MutationCreateSetFollowNftUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateSetFollowNftUriRequest;
};


export type MutationCreateSetProfileImageUriTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileImageUriViaDispatcherArgs = {
  request: UpdateProfileImageRequest;
};


export type MutationCreateSetProfileMetadataTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateSetProfileMetadataViaDispatcherArgs = {
  request: CreatePublicSetProfileMetadataUriRequest;
};


export type MutationCreateToggleFollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: CreateToggleFollowRequest;
};


export type MutationCreateUnfollowTypedDataArgs = {
  options?: InputMaybe<TypedDataOptions>;
  request: UnfollowRequest;
};


export type MutationHelArgs = {
  request: HelRequest;
};


export type MutationHidePublicationArgs = {
  request: HidePublicationRequest;
};


export type MutationProxyActionArgs = {
  request: ProxyActionRequest;
};


export type MutationRefreshArgs = {
  request: RefreshRequest;
};


export type MutationRemoveProfileInterestsArgs = {
  request: RemoveProfileInterestsRequest;
};


export type MutationRemoveReactionArgs = {
  request: ReactionRequest;
};


export type MutationReportPublicationArgs = {
  request: ReportPublicationRequest;
};

export type MutualFollowersProfilesQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id your viewing */
  viewingProfileId: Scalars['ProfileId'];
  /** The profile id you want the result to come back as your viewing from */
  yourProfileId: Scalars['ProfileId'];
};

/** The nft type */
export type Nft = {
  __typename?: 'NFT';
  /** aka "1"  */
  chainId: Scalars['ChainId'];
  /** aka "CryptoKitties"  */
  collectionName: Scalars['String'];
  /** aka "https://api.criptokitt..."  */
  contentURI: Scalars['String'];
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  contractAddress: Scalars['ContractAddress'];
  /** aka us CryptoKitties */
  contractName: Scalars['String'];
  /** aka "Hey cutie! I m Beard Coffee. ....  */
  description: Scalars['String'];
  /** aka "ERC721"  */
  ercType: Scalars['String'];
  /** aka "Beard Coffee"  */
  name: Scalars['String'];
  /** aka "{ uri:"https://ipfs....", metaType:"image/png" }"  */
  originalContent: NftContent;
  /** aka { address: 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e, amount:"2" }  */
  owners: Array<Owner>;
  /** aka RARI */
  symbol: Scalars['String'];
  /** aka "13"  */
  tokenId: Scalars['String'];
};

/** The NFT content uri */
export type NftContent = {
  __typename?: 'NFTContent';
  /** The animated url */
  animatedUrl?: Maybe<Scalars['String']>;
  /** The meta type content */
  metaType: Scalars['String'];
  /** The token uri  nft */
  uri: Scalars['String'];
};

export type NftData = {
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type NfTsRequest = {
  /** Chain Ids */
  chainIds: Array<Scalars['ChainId']>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Filter by owner address */
  ownerAddress: Scalars['EthereumAddress'];
};

/** Paginated nft results */
export type NfTsResult = {
  __typename?: 'NFTsResult';
  items: Array<Nft>;
  pageInfo: PaginatedResultInfo;
};

export type NewCollectNotification = {
  __typename?: 'NewCollectNotification';
  collectedPublication: Publication;
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  wallet: Wallet;
};

export type NewCommentNotification = {
  __typename?: 'NewCommentNotification';
  comment: Comment;
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
};

export type NewFollowerNotification = {
  __typename?: 'NewFollowerNotification';
  createdAt: Scalars['DateTime'];
  isFollowedByMe: Scalars['Boolean'];
  notificationId: Scalars['NotificationId'];
  wallet: Wallet;
};

export type NewMentionNotification = {
  __typename?: 'NewMentionNotification';
  createdAt: Scalars['DateTime'];
  mentionPublication: MentionPublication;
  notificationId: Scalars['NotificationId'];
};

export type NewMirrorNotification = {
  __typename?: 'NewMirrorNotification';
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
  publication: MirrorablePublication;
};

export type NewReactionNotification = {
  __typename?: 'NewReactionNotification';
  createdAt: Scalars['DateTime'];
  notificationId: Scalars['NotificationId'];
  /** The profile */
  profile: Profile;
  publication: Publication;
  reaction: ReactionTypes;
};

/** The NFT image */
export type NftImage = {
  __typename?: 'NftImage';
  /** The token image nft */
  chainId: Scalars['Int'];
  /** The contract address */
  contractAddress: Scalars['ContractAddress'];
  /** The token id of the nft */
  tokenId: Scalars['String'];
  /** The token image nft */
  uri: Scalars['Url'];
  /** If the NFT is verified */
  verified: Scalars['Boolean'];
};

export type NftOwnershipChallenge = {
  /** Chain Id */
  chainId: Scalars['ChainId'];
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress'];
  /** Token id for NFT */
  tokenId: Scalars['String'];
};

export type NftOwnershipChallengeRequest = {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars['EthereumAddress'];
  nfts: Array<NftOwnershipChallenge>;
};

/** NFT ownership challenge result */
export type NftOwnershipChallengeResult = {
  __typename?: 'NftOwnershipChallengeResult';
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  text: Scalars['String'];
  /** Timeout of the validation */
  timeout: Scalars['TimestampScalar'];
};

export type NftOwnershipInput = {
  /** The NFT chain id */
  chainID: Scalars['ChainId'];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars['ContractAddress'];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: InputMaybe<Scalars['TokenId']>;
};

export type NftOwnershipOutput = {
  __typename?: 'NftOwnershipOutput';
  /** The NFT chain id */
  chainID: Scalars['ChainId'];
  /** The NFT collection's ethereum address */
  contractAddress: Scalars['ContractAddress'];
  /** The unlocker contract type */
  contractType: ContractType;
  /** The optional token ID(s) to check for ownership */
  tokenIds?: Maybe<Scalars['TokenId']>;
};

export type Notification = NewCollectNotification | NewCommentNotification | NewFollowerNotification | NewMentionNotification | NewMirrorNotification | NewReactionNotification;

export type NotificationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  notificationTypes?: InputMaybe<Array<NotificationTypes>>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

/** The notification filter types */
export enum NotificationTypes {
  CollectedComment = 'COLLECTED_COMMENT',
  CollectedPost = 'COLLECTED_POST',
  CommentedComment = 'COMMENTED_COMMENT',
  CommentedPost = 'COMMENTED_POST',
  Followed = 'FOLLOWED',
  MentionComment = 'MENTION_COMMENT',
  MentionPost = 'MENTION_POST',
  MirroredComment = 'MIRRORED_COMMENT',
  MirroredPost = 'MIRRORED_POST',
  ReactionComment = 'REACTION_COMMENT',
  ReactionPost = 'REACTION_POST'
}

export type OnChainIdentity = {
  __typename?: 'OnChainIdentity';
  /** The ens information */
  ens?: Maybe<EnsOnChainIdentity>;
  /** The POH status */
  proofOfHumanity: Scalars['Boolean'];
  /** The sybil dot org information */
  sybilDotOrg: SybilDotOrgIdentity;
  /** The worldcoin identity */
  worldcoin: WorldcoinIdentity;
};

export type OrConditionInput = {
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionInput>;
};

export type OrConditionOutput = {
  __typename?: 'OrConditionOutput';
  /** The list of conditions to apply OR to. You can only use nested boolean conditions at the root level. */
  criteria: Array<AccessConditionOutput>;
};

/** The nft type */
export type Owner = {
  __typename?: 'Owner';
  /** aka 0x057Ec652A4F150f7FF94f089A38008f49a0DF88e  */
  address: Scalars['EthereumAddress'];
  /** number of tokens owner */
  amount: Scalars['Float'];
};

/** The paginated wallet result */
export type PaginatedAllPublicationsTagsResult = {
  __typename?: 'PaginatedAllPublicationsTagsResult';
  items: Array<TagResult>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated feed result */
export type PaginatedFeedResult = {
  __typename?: 'PaginatedFeedResult';
  items: Array<FeedItem>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated followers result */
export type PaginatedFollowersResult = {
  __typename?: 'PaginatedFollowersResult';
  items: Array<Follower>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedFollowingResult = {
  __typename?: 'PaginatedFollowingResult';
  items: Array<Following>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated notification result */
export type PaginatedNotificationResult = {
  __typename?: 'PaginatedNotificationResult';
  items: Array<Notification>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedProfilePublicationsForSaleResult = {
  __typename?: 'PaginatedProfilePublicationsForSaleResult';
  items: Array<PublicationForSale>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated profile result */
export type PaginatedProfileResult = {
  __typename?: 'PaginatedProfileResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated publication result */
export type PaginatedPublicationResult = {
  __typename?: 'PaginatedPublicationResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated result info */
export type PaginatedResultInfo = {
  __typename?: 'PaginatedResultInfo';
  /** Cursor to query next results */
  next?: Maybe<Scalars['Cursor']>;
  /** Cursor to query the actual results */
  prev?: Maybe<Scalars['Cursor']>;
  /** The total number of entities the pagination iterates over. If null it means it can not work it out due to dynamic or aggregated query e.g. For a query that requests all nfts with more than 10 likes, this field gives the total amount of nfts with more than 10 likes, not the total amount of nfts */
  totalCount?: Maybe<Scalars['Int']>;
};

/** The paginated timeline result */
export type PaginatedTimelineResult = {
  __typename?: 'PaginatedTimelineResult';
  items: Array<Publication>;
  pageInfo: PaginatedResultInfo;
};

/** The paginated wallet result */
export type PaginatedWhoCollectedResult = {
  __typename?: 'PaginatedWhoCollectedResult';
  items: Array<Wallet>;
  pageInfo: PaginatedResultInfo;
};

export type PaginatedWhoReactedResult = {
  __typename?: 'PaginatedWhoReactedResult';
  items: Array<WhoReactedResult>;
  pageInfo: PaginatedResultInfo;
};

export type PendingApprovalFollowsRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
};

/** The paginated follow result */
export type PendingApproveFollowsResult = {
  __typename?: 'PendingApproveFollowsResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
};

/** The social post */
export type Post = {
  __typename?: 'Post';
  /** ID of the source */
  appId?: Maybe<Scalars['Sources']>;
  canComment: CanCommentResponse;
  canDecrypt: CanDecryptResponse;
  canMirror: CanMirrorResponse;
  /** The collect module */
  collectModule: CollectModule;
  /** The contract address for the collect nft.. if its null it means nobody collected yet as it lazy deployed */
  collectNftAddress?: Maybe<Scalars['ContractAddress']>;
  /**
   * Who collected it, this is used for timeline results and like this for better caching for the client
   * @deprecated use `feed` query, timeline query will be killed on the 15th November. This includes this field.
   */
  collectedBy?: Maybe<Wallet>;
  /** The date the post was created on */
  createdAt: Scalars['DateTime'];
  hasCollectedByMe: Scalars['Boolean'];
  /** If the publication has been hidden if it has then the content and media is not available */
  hidden: Scalars['Boolean'];
  /** The internal publication id */
  id: Scalars['InternalPublicationId'];
  /** Indicates if the publication is gated behind some access criteria */
  isGated: Scalars['Boolean'];
  /** The metadata for the post */
  metadata: MetadataOutput;
  mirrors: Array<Scalars['InternalPublicationId']>;
  /** The on chain content uri could be `ipfs://` or `https` */
  onChainContentURI: Scalars['String'];
  /** The profile ref */
  profile: Profile;
  reaction?: Maybe<ReactionTypes>;
  /** The reference module */
  referenceModule?: Maybe<ReferenceModule>;
  /** The publication stats */
  stats: PublicationStats;
};


/** The social post */
export type PostCanCommentArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostCanDecryptArgs = {
  address?: InputMaybe<Scalars['EthereumAddress']>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostCanMirrorArgs = {
  profileId?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostHasCollectedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


/** The social post */
export type PostMirrorsArgs = {
  by?: InputMaybe<Scalars['ProfileId']>;
};


/** The social post */
export type PostReactionArgs = {
  request?: InputMaybe<ReactionFieldResolverRequest>;
};

/** The Profile */
export type Profile = {
  __typename?: 'Profile';
  /** Optionals param to add extra attributes on the metadata */
  attributes?: Maybe<Array<Attribute>>;
  /** Bio of the profile */
  bio?: Maybe<Scalars['String']>;
  /** The cover picture for the profile */
  coverPicture?: Maybe<ProfileMedia>;
  /** The dispatcher */
  dispatcher?: Maybe<Dispatcher>;
  /** The follow module */
  followModule?: Maybe<FollowModule>;
  /** Follow nft address */
  followNftAddress?: Maybe<Scalars['ContractAddress']>;
  /** The profile handle */
  handle: Scalars['Handle'];
  /** The profile id */
  id: Scalars['ProfileId'];
  /** The profile interests */
  interests?: Maybe<Array<Scalars['ProfileInterest']>>;
  /** Is the profile default */
  isDefault: Scalars['Boolean'];
  isFollowedByMe: Scalars['Boolean'];
  isFollowing: Scalars['Boolean'];
  /** Metadata url */
  metadata?: Maybe<Scalars['Url']>;
  /** Name of the profile */
  name?: Maybe<Scalars['String']>;
  /** The on chain identity */
  onChainIdentity: OnChainIdentity;
  /** Who owns the profile */
  ownedBy: Scalars['EthereumAddress'];
  /** The picture for the profile */
  picture?: Maybe<ProfileMedia>;
  /** Profile stats */
  stats: ProfileStats;
};


/** The Profile */
export type ProfileIsFollowedByMeArgs = {
  isFinalisedOnChain?: InputMaybe<Scalars['Boolean']>;
};


/** The Profile */
export type ProfileIsFollowingArgs = {
  who?: InputMaybe<Scalars['ProfileId']>;
};

export type ProfileFollowModuleBeenRedeemedRequest = {
  followProfileId: Scalars['ProfileId'];
  redeemingProfileId: Scalars['ProfileId'];
};

export type ProfileFollowModuleRedeemParams = {
  /** The profile id to use to follow this profile */
  profileId: Scalars['ProfileId'];
};

export type ProfileFollowModuleSettings = {
  __typename?: 'ProfileFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The follow module enum */
  type: FollowModules;
};

export type ProfileFollowRevenueQueryRequest = {
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type ProfileMedia = MediaSet | NftImage;

export type ProfileOnChainIdentityRequest = {
  profileIds: Array<Scalars['ProfileId']>;
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipInput = {
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** Condition that signifies if address has access to profile */
export type ProfileOwnershipOutput = {
  __typename?: 'ProfileOwnershipOutput';
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

export type ProfilePublicationRevenueQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** The revenue types */
  types?: InputMaybe<Array<PublicationTypes>>;
};

/** The paginated revenue result */
export type ProfilePublicationRevenueResult = {
  __typename?: 'ProfilePublicationRevenueResult';
  items: Array<PublicationRevenue>;
  pageInfo: PaginatedResultInfo;
};

export type ProfilePublicationsForSaleRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type ProfileQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']>;
};

/** Profile search results */
export type ProfileSearchResult = {
  __typename?: 'ProfileSearchResult';
  items: Array<Profile>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

/** profile sort criteria */
export enum ProfileSortCriteria {
  CreatedOn = 'CREATED_ON',
  LatestCreated = 'LATEST_CREATED',
  MostCollects = 'MOST_COLLECTS',
  MostComments = 'MOST_COMMENTS',
  MostFollowers = 'MOST_FOLLOWERS',
  MostMirrors = 'MOST_MIRRORS',
  MostPosts = 'MOST_POSTS',
  MostPublication = 'MOST_PUBLICATION'
}

/** The Profile Stats */
export type ProfileStats = {
  __typename?: 'ProfileStats';
  commentsTotal: Scalars['Int'];
  id: Scalars['ProfileId'];
  mirrorsTotal: Scalars['Int'];
  postsTotal: Scalars['Int'];
  publicationsTotal: Scalars['Int'];
  /** Total collects count */
  totalCollects: Scalars['Int'];
  /** Total comment count */
  totalComments: Scalars['Int'];
  /** Total follower count */
  totalFollowers: Scalars['Int'];
  /** Total following count (remember the wallet follows not profile so will be same for every profile they own) */
  totalFollowing: Scalars['Int'];
  /** Total mirror count */
  totalMirrors: Scalars['Int'];
  /** Total post count */
  totalPosts: Scalars['Int'];
  /** Total publication count */
  totalPublications: Scalars['Int'];
};


/** The Profile Stats */
export type ProfileStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsMirrorsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsPostsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};


/** The Profile Stats */
export type ProfileStatsPublicationsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};

/** The provider-specific encryption params */
export type ProviderSpecificParamsOutput = {
  __typename?: 'ProviderSpecificParamsOutput';
  /** The encryption key */
  encryptionKey: Scalars['ContentEncryptionKey'];
};

export type ProxyActionError = {
  __typename?: 'ProxyActionError';
  lastKnownTxId?: Maybe<Scalars['TxId']>;
  reason: Scalars['String'];
};

export type ProxyActionQueued = {
  __typename?: 'ProxyActionQueued';
  queuedAt: Scalars['DateTime'];
};

export type ProxyActionRequest = {
  collect?: InputMaybe<CollectProxyAction>;
  follow?: InputMaybe<FollowProxyAction>;
};

export type ProxyActionStatusResult = {
  __typename?: 'ProxyActionStatusResult';
  status: ProxyActionStatusTypes;
  txHash: Scalars['TxHash'];
  txId: Scalars['TxId'];
};

export type ProxyActionStatusResultUnion = ProxyActionError | ProxyActionQueued | ProxyActionStatusResult;

/** The proxy action status */
export enum ProxyActionStatusTypes {
  Complete = 'COMPLETE',
  Minting = 'MINTING',
  Transferring = 'TRANSFERRING'
}

export type PublicMediaRequest = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['Url']>;
  /** Pre calculated cid of the file to push */
  itemCid: Scalars['IfpsCid'];
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']>;
};

/** The response to upload the attached file */
export type PublicMediaResults = {
  __typename?: 'PublicMediaResults';
  /** ipfs uri to add on the metadata */
  media: MediaOutput;
  /** Signed url to push the file */
  signedUrl: Scalars['String'];
};

export type Publication = Comment | Mirror | Post;

/** The publication content warning */
export enum PublicationContentWarning {
  Nsfw = 'NSFW',
  Sensitive = 'SENSITIVE',
  Spoiler = 'SPOILER'
}

export type PublicationForSale = Comment | Post;

/** The publication main focus */
export enum PublicationMainFocus {
  Article = 'ARTICLE',
  Audio = 'AUDIO',
  Embed = 'EMBED',
  Image = 'IMAGE',
  Link = 'LINK',
  TextOnly = 'TEXT_ONLY',
  Video = 'VIDEO'
}

/** The source of the media */
export enum PublicationMediaSource {
  Lens = 'LENS'
}

/** Publication metadata content waring filters */
export type PublicationMetadataContentWarningFilter = {
  /** By default all content warnings will be hidden you can include them in your query by adding them to this array. */
  includeOneOf?: InputMaybe<Array<PublicationContentWarning>>;
};

/** The publication metadata display types */
export enum PublicationMetadataDisplayTypes {
  Date = 'date',
  Number = 'number',
  String = 'string'
}

/** Publication metadata filters */
export type PublicationMetadataFilters = {
  contentWarning?: InputMaybe<PublicationMetadataContentWarningFilter>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT. You can just filter on language if you wish. */
  locale?: InputMaybe<Scalars['Locale']>;
  mainContentFocus?: InputMaybe<Array<PublicationMainFocus>>;
  tags?: InputMaybe<PublicationMetadataTagsFilter>;
};

/** The metadata attribute input */
export type PublicationMetadataMediaInput = {
  /** The alt tags for accessibility */
  altTag?: InputMaybe<Scalars['String']>;
  /** The cover for any video or audio you attached */
  cover?: InputMaybe<Scalars['Url']>;
  item: Scalars['Url'];
  source?: InputMaybe<PublicationMediaSource>;
  /** This is the mime type of media */
  type?: InputMaybe<Scalars['MimeType']>;
};

export type PublicationMetadataStatus = {
  __typename?: 'PublicationMetadataStatus';
  /** If metadata validation failed it will put a reason why here */
  reason?: Maybe<Scalars['String']>;
  status: PublicationMetadataStatusType;
};

/** publication metadata status type */
export enum PublicationMetadataStatusType {
  MetadataValidationFailed = 'METADATA_VALIDATION_FAILED',
  NotFound = 'NOT_FOUND',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

/** Publication metadata tag filter */
export type PublicationMetadataTagsFilter = {
  /** Needs to only match all */
  all?: InputMaybe<Array<Scalars['String']>>;
  /** Needs to only match one of */
  oneOf?: InputMaybe<Array<Scalars['String']>>;
};

export type PublicationMetadataV1Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']>;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String'];
  /** Name of the item. */
  name: Scalars['String'];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String'];
};

export type PublicationMetadataV2Input = {
  /**
   * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV,
   *       and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   *       Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas,
   *       WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
   */
  animation_url?: InputMaybe<Scalars['Url']>;
  /**  This is the appId the content belongs to */
  appId?: InputMaybe<Scalars['Sources']>;
  /**  These are the attributes for the item, which will show up on the OpenSea and others NFT trading websites on the item. */
  attributes: Array<MetadataAttributeInput>;
  /** The content of a publication. If this is blank `media` must be defined or its out of spec */
  content?: InputMaybe<Scalars['Markdown']>;
  /** Ability to add a content warning */
  contentWarning?: InputMaybe<PublicationContentWarning>;
  /** A human-readable description of the item. */
  description?: InputMaybe<Scalars['Markdown']>;
  /**
   * This is the URL that will appear below the asset's image on OpenSea and others etc
   *       and will allow users to leave OpenSea and view the item on the site.
   */
  external_url?: InputMaybe<Scalars['Url']>;
  /** legacy to support OpenSea will store any NFT image here. */
  image?: InputMaybe<Scalars['Url']>;
  /** This is the mime type of the image. This is used if your uploading more advanced cover images as sometimes ipfs does not emit the content header so this solves that */
  imageMimeType?: InputMaybe<Scalars['MimeType']>;
  /** IOS 639-1 language code aka en or it and ISO 3166-1 alpha-2 region code aka US or IT aka en-US or it-IT */
  locale: Scalars['Locale'];
  /** Main content focus that for this publication */
  mainContentFocus: PublicationMainFocus;
  /**  This is lens supported attached media items to the publication */
  media?: InputMaybe<Array<PublicationMetadataMediaInput>>;
  /** The metadata id can be anything but if your uploading to ipfs you will want it to be random.. using uuid could be an option! */
  metadata_id: Scalars['String'];
  /** Name of the item. */
  name: Scalars['String'];
  /** Signed metadata to validate the owner */
  signatureContext?: InputMaybe<PublicationSignatureContextInput>;
  /** Ability to tag your publication */
  tags?: InputMaybe<Array<Scalars['String']>>;
  /** The metadata version. (1.0.0 | 2.0.0) */
  version: Scalars['String'];
};

export type PublicationQueryRequest = {
  /** The publication id */
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  /** The tx hash */
  txHash?: InputMaybe<Scalars['TxHash']>;
};

/** Publication reporting fraud subreason */
export enum PublicationReportingFraudSubreason {
  Impersonation = 'IMPERSONATION',
  Scam = 'SCAM'
}

/** Publication reporting illegal subreason */
export enum PublicationReportingIllegalSubreason {
  AnimalAbuse = 'ANIMAL_ABUSE',
  DirectThreat = 'DIRECT_THREAT',
  HumanAbuse = 'HUMAN_ABUSE',
  ThreatIndividual = 'THREAT_INDIVIDUAL',
  Violence = 'VIOLENCE'
}

/** Publication reporting reason */
export enum PublicationReportingReason {
  Fraud = 'FRAUD',
  Illegal = 'ILLEGAL',
  Sensitive = 'SENSITIVE',
  Spam = 'SPAM'
}

/** Publication reporting sensitive subreason */
export enum PublicationReportingSensitiveSubreason {
  Nsfw = 'NSFW',
  Offensive = 'OFFENSIVE'
}

/** Publication reporting spam subreason */
export enum PublicationReportingSpamSubreason {
  FakeEngagement = 'FAKE_ENGAGEMENT',
  ManipulationAlgo = 'MANIPULATION_ALGO',
  Misleading = 'MISLEADING',
  MisuseHashtags = 'MISUSE_HASHTAGS',
  Repetitive = 'REPETITIVE',
  SomethingElse = 'SOMETHING_ELSE',
  Unrelated = 'UNRELATED'
}

/** The social comment */
export type PublicationRevenue = {
  __typename?: 'PublicationRevenue';
  publication: Publication;
  revenue: RevenueAggregate;
};

export type PublicationRevenueQueryRequest = {
  /** The publication id */
  publicationId: Scalars['InternalPublicationId'];
};

/** Publication search results */
export type PublicationSearchResult = {
  __typename?: 'PublicationSearchResult';
  items: Array<PublicationSearchResultItem>;
  pageInfo: PaginatedResultInfo;
  type: SearchRequestTypes;
};

export type PublicationSearchResultItem = Comment | Post;

export type PublicationSignatureContextInput = {
  signature: Scalars['String'];
};

/** Publication sort criteria */
export enum PublicationSortCriteria {
  CuratedProfiles = 'CURATED_PROFILES',
  Latest = 'LATEST',
  TopCollected = 'TOP_COLLECTED',
  TopCommented = 'TOP_COMMENTED',
  TopMirrored = 'TOP_MIRRORED'
}

/** The publication stats */
export type PublicationStats = {
  __typename?: 'PublicationStats';
  commentsTotal: Scalars['Int'];
  /** The publication id */
  id: Scalars['InternalPublicationId'];
  /** The total amount of collects */
  totalAmountOfCollects: Scalars['Int'];
  /** The total amount of comments */
  totalAmountOfComments: Scalars['Int'];
  /** The total amount of mirrors */
  totalAmountOfMirrors: Scalars['Int'];
  /** The total amount of upvotes */
  totalDownvotes: Scalars['Int'];
  /** The total amount of downvotes */
  totalUpvotes: Scalars['Int'];
};


/** The publication stats */
export type PublicationStatsCommentsTotalArgs = {
  forSources: Array<Scalars['Sources']>;
};

/** The publication types */
export enum PublicationTypes {
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type PublicationValidateMetadataResult = {
  __typename?: 'PublicationValidateMetadataResult';
  /** If `valid` is false it will put a reason why here */
  reason?: Maybe<Scalars['String']>;
  valid: Scalars['Boolean'];
};

export type PublicationsQueryRequest = {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars['EthereumAddress']>;
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars['InternalPublicationId']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** Profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']>>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes>>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
};

export type Query = {
  __typename?: 'Query';
  allPublicationsTags: PaginatedAllPublicationsTagsResult;
  approvedModuleAllowanceAmount: Array<ApprovedAllowanceAmount>;
  challenge: AuthChallengeResult;
  claimableHandles: ClaimableHandles;
  claimableStatus: ClaimStatus;
  cur: Array<Scalars['String']>;
  defaultProfile?: Maybe<Profile>;
  doesFollow: Array<DoesFollowResponse>;
  enabledModuleCurrencies: Array<Erc20>;
  enabledModules: EnabledModules;
  exploreProfiles: ExploreProfileResult;
  explorePublications: ExplorePublicationResult;
  feed: PaginatedFeedResult;
  feedHighlights: PaginatedTimelineResult;
  followerNftOwnedTokenIds?: Maybe<FollowerNftOwnedTokenIds>;
  followers: PaginatedFollowersResult;
  following: PaginatedFollowingResult;
  generateModuleCurrencyApprovalData: GenerateModuleCurrencyApproval;
  globalProtocolStats: GlobalProtocolStats;
  hasTxHashBeenIndexed: TransactionResult;
  internalPublicationFilter: PaginatedPublicationResult;
  mutualFollowersProfiles: PaginatedProfileResult;
  nftOwnershipChallenge: NftOwnershipChallengeResult;
  nfts: NfTsResult;
  notifications: PaginatedNotificationResult;
  pendingApprovalFollows: PendingApproveFollowsResult;
  ping: Scalars['String'];
  profile?: Maybe<Profile>;
  profileFollowModuleBeenRedeemed: Scalars['Boolean'];
  profileFollowRevenue: FollowRevenueResult;
  /** Get the list of profile interests */
  profileInterests: Array<Scalars['ProfileInterest']>;
  profileOnChainIdentity: Array<OnChainIdentity>;
  profilePublicationRevenue: ProfilePublicationRevenueResult;
  profilePublicationsForSale: PaginatedProfilePublicationsForSaleResult;
  profiles: PaginatedProfileResult;
  proxyActionStatus: ProxyActionStatusResultUnion;
  publication?: Maybe<Publication>;
  publicationMetadataStatus: PublicationMetadataStatus;
  publicationRevenue?: Maybe<PublicationRevenue>;
  publications: PaginatedPublicationResult;
  recommendedProfiles: Array<Profile>;
  rel?: Maybe<Scalars['Void']>;
  search: SearchResult;
  /** @deprecated You should be using feed, this will not be supported after 15th November 2021, please migrate. */
  timeline: PaginatedTimelineResult;
  txIdToTxHash: Scalars['TxHash'];
  unknownEnabledModules: EnabledModules;
  userSigNonces: UserSigNonces;
  validatePublicationMetadata: PublicationValidateMetadataResult;
  verify: Scalars['Boolean'];
  whoCollectedPublication: PaginatedWhoCollectedResult;
  whoReactedPublication: PaginatedWhoReactedResult;
};


export type QueryAllPublicationsTagsArgs = {
  request: AllPublicationsTagsRequest;
};


export type QueryApprovedModuleAllowanceAmountArgs = {
  request: ApprovedModuleAllowanceAmountRequest;
};


export type QueryChallengeArgs = {
  request: ChallengeRequest;
};


export type QueryCurArgs = {
  request: CurRequest;
};


export type QueryDefaultProfileArgs = {
  request: DefaultProfileRequest;
};


export type QueryDoesFollowArgs = {
  request: DoesFollowRequest;
};


export type QueryExploreProfilesArgs = {
  request: ExploreProfilesRequest;
};


export type QueryExplorePublicationsArgs = {
  request: ExplorePublicationRequest;
};


export type QueryFeedArgs = {
  request: FeedRequest;
};


export type QueryFeedHighlightsArgs = {
  request: FeedHighlightsRequest;
};


export type QueryFollowerNftOwnedTokenIdsArgs = {
  request: FollowerNftOwnedTokenIdsRequest;
};


export type QueryFollowersArgs = {
  request: FollowersRequest;
};


export type QueryFollowingArgs = {
  request: FollowingRequest;
};


export type QueryGenerateModuleCurrencyApprovalDataArgs = {
  request: GenerateModuleCurrencyApprovalDataRequest;
};


export type QueryGlobalProtocolStatsArgs = {
  request?: InputMaybe<GlobalProtocolStatsRequest>;
};


export type QueryHasTxHashBeenIndexedArgs = {
  request: HasTxHashBeenIndexedRequest;
};


export type QueryInternalPublicationFilterArgs = {
  request: InternalPublicationsFilterRequest;
};


export type QueryMutualFollowersProfilesArgs = {
  request: MutualFollowersProfilesQueryRequest;
};


export type QueryNftOwnershipChallengeArgs = {
  request: NftOwnershipChallengeRequest;
};


export type QueryNftsArgs = {
  request: NfTsRequest;
};


export type QueryNotificationsArgs = {
  request: NotificationRequest;
};


export type QueryPendingApprovalFollowsArgs = {
  request: PendingApprovalFollowsRequest;
};


export type QueryProfileArgs = {
  request: SingleProfileQueryRequest;
};


export type QueryProfileFollowModuleBeenRedeemedArgs = {
  request: ProfileFollowModuleBeenRedeemedRequest;
};


export type QueryProfileFollowRevenueArgs = {
  request: ProfileFollowRevenueQueryRequest;
};


export type QueryProfileOnChainIdentityArgs = {
  request: ProfileOnChainIdentityRequest;
};


export type QueryProfilePublicationRevenueArgs = {
  request: ProfilePublicationRevenueQueryRequest;
};


export type QueryProfilePublicationsForSaleArgs = {
  request: ProfilePublicationsForSaleRequest;
};


export type QueryProfilesArgs = {
  request: ProfileQueryRequest;
};


export type QueryProxyActionStatusArgs = {
  proxyActionId: Scalars['ProxyActionId'];
};


export type QueryPublicationArgs = {
  request: PublicationQueryRequest;
};


export type QueryPublicationMetadataStatusArgs = {
  request: GetPublicationMetadataStatusRequest;
};


export type QueryPublicationRevenueArgs = {
  request: PublicationRevenueQueryRequest;
};


export type QueryPublicationsArgs = {
  request: PublicationsQueryRequest;
};


export type QueryRecommendedProfilesArgs = {
  options?: InputMaybe<RecommendedProfileOptions>;
};


export type QueryRelArgs = {
  request: RelRequest;
};


export type QuerySearchArgs = {
  request: SearchQueryRequest;
};


export type QueryTimelineArgs = {
  request: TimelineRequest;
};


export type QueryTxIdToTxHashArgs = {
  txId: Scalars['TxId'];
};


export type QueryValidatePublicationMetadataArgs = {
  request: ValidatePublicationMetadataRequest;
};


export type QueryVerifyArgs = {
  request: VerifyRequest;
};


export type QueryWhoCollectedPublicationArgs = {
  request: WhoCollectedPublicationRequest;
};


export type QueryWhoReactedPublicationArgs = {
  request: WhoReactedPublicationRequest;
};

export type ReactionEvent = {
  __typename?: 'ReactionEvent';
  profile: Profile;
  reaction: ReactionTypes;
  timestamp: Scalars['DateTime'];
};

export type ReactionFieldResolverRequest = {
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type ReactionRequest = {
  /** Profile id to perform the action */
  profileId: Scalars['ProfileId'];
  /** The internal publication id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reaction */
  reaction: ReactionTypes;
};

/** Reaction types */
export enum ReactionTypes {
  Downvote = 'DOWNVOTE',
  Upvote = 'UPVOTE'
}

export type RecommendedProfileOptions = {
  /** If you wish to turn ML off */
  disableML?: InputMaybe<Scalars['Boolean']>;
  /** If you wish to shuffle the results */
  shuffle?: InputMaybe<Scalars['Boolean']>;
};

export type ReferenceModule = DegreesOfSeparationReferenceModuleSettings | FollowOnlyReferenceModuleSettings | UnknownReferenceModuleSettings;

export type ReferenceModuleParams = {
  /** The degrees of seperation reference module */
  degreesOfSeparationReferenceModule?: InputMaybe<DegreesOfSeparationReferenceModuleParams>;
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
  /** A unknown reference module */
  unknownReferenceModule?: InputMaybe<UnknownReferenceModuleParams>;
};

/** The reference module types */
export enum ReferenceModules {
  DegreesOfSeparationReferenceModule = 'DegreesOfSeparationReferenceModule',
  FollowerOnlyReferenceModule = 'FollowerOnlyReferenceModule',
  UnknownReferenceModule = 'UnknownReferenceModule'
}

/** The refresh request */
export type RefreshRequest = {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
};

export type RelRequest = {
  ethereumAddress: Scalars['EthereumAddress'];
  secret: Scalars['String'];
};

export type RelayError = {
  __typename?: 'RelayError';
  reason: RelayErrorReasons;
};

/** Relay error reason */
export enum RelayErrorReasons {
  Expired = 'EXPIRED',
  HandleTaken = 'HANDLE_TAKEN',
  NotAllowed = 'NOT_ALLOWED',
  Rejected = 'REJECTED',
  WrongWalletSigned = 'WRONG_WALLET_SIGNED'
}

export type RelayResult = RelayError | RelayerResult;

/** The relayer result */
export type RelayerResult = {
  __typename?: 'RelayerResult';
  /** The tx hash - you should use the `txId` as your identifier as gas prices can be upgraded meaning txHash will change */
  txHash: Scalars['TxHash'];
  /** The tx id */
  txId: Scalars['TxId'];
};

/** The request object to remove interests from a profile */
export type RemoveProfileInterestsRequest = {
  /** The profile interest to add */
  interests: Array<Scalars['ProfileInterest']>;
  /** The profileId to add interests to */
  profileId: Scalars['ProfileId'];
};

export type ReportPublicationRequest = {
  additionalComments?: InputMaybe<Scalars['String']>;
  publicationId: Scalars['InternalPublicationId'];
  reason: ReportingReasonInputParams;
};

export type ReportingReasonInputParams = {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
  spamReason?: InputMaybe<SpamReasonInputParams>;
};

export type ReservedClaimableHandle = {
  __typename?: 'ReservedClaimableHandle';
  expiry: Scalars['DateTime'];
  handle: Scalars['Handle'];
  id: Scalars['HandleClaimIdScalar'];
  source: Scalars['String'];
};

export type RevenueAggregate = {
  __typename?: 'RevenueAggregate';
  total: Erc20Amount;
};

export type RevertCollectModuleSettings = {
  __typename?: 'RevertCollectModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The collect modules enum */
  type: CollectModules;
};

export type RevertFollowModuleSettings = {
  __typename?: 'RevertFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The follow module enum */
  type: FollowModules;
};

/** The gated publication access criteria scalar operators */
export enum ScalarOperator {
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  LessThan = 'LESS_THAN',
  LessThanOrEqual = 'LESS_THAN_OR_EQUAL',
  NotEqual = 'NOT_EQUAL'
}

export type SearchQueryRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  customFilters?: InputMaybe<Array<CustomFiltersTypes>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The search term */
  query: Scalars['Search'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  type: SearchRequestTypes;
};

/** Search request types */
export enum SearchRequestTypes {
  Profile = 'PROFILE',
  Publication = 'PUBLICATION'
}

export type SearchResult = ProfileSearchResult | PublicationSearchResult;

export type SensitiveReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSensitiveSubreason;
};

/** The broadcast item */
export type SetDefaultProfileBroadcastItemResult = {
  __typename?: 'SetDefaultProfileBroadcastItemResult';
  /** The date the broadcast item expiries */
  expiresAt: Scalars['DateTime'];
  /** This broadcast item ID */
  id: Scalars['BroadcastId'];
  /** The typed data */
  typedData: SetDefaultProfileEip712TypedData;
};

/** The default profile eip 712 typed data */
export type SetDefaultProfileEip712TypedData = {
  __typename?: 'SetDefaultProfileEIP712TypedData';
  /** The typed data domain */
  domain: Eip712TypedDataDomain;
  /** The types */
  types: SetDefaultProfileEip712TypedDataTypes;
  /** The values */
  value: SetDefaultProfileEip712TypedDataValue;
};

/** The default profile eip 712 typed data types */
export type SetDefaultProfileEip712TypedDataTypes = {
  __typename?: 'SetDefaultProfileEIP712TypedDataTypes';
  SetDefaultProfileWithSig: Array<Eip712TypedDataField>;
};

/** The default profile eip 712 typed data value */
export type SetDefaultProfileEip712TypedDataValue = {
  __typename?: 'SetDefaultProfileEIP712TypedDataValue';
  deadline: Scalars['UnixTimestamp'];
  nonce: Scalars['Nonce'];
  profileId: Scalars['ProfileId'];
  wallet: Scalars['EthereumAddress'];
};

export type SetDispatcherRequest = {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf, if left as none it will use the built in dispatcher address. */
  dispatcher?: InputMaybe<Scalars['EthereumAddress']>;
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars['Boolean']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
};

/** The signed auth challenge */
export type SignedAuthChallenge = {
  /** The ethereum address you signed the signature with */
  address: Scalars['EthereumAddress'];
  /** The signature */
  signature: Scalars['Signature'];
};

export type SingleProfileQueryRequest = {
  /** The handle for the profile */
  handle?: InputMaybe<Scalars['Handle']>;
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
};

export type SpamReasonInputParams = {
  reason: PublicationReportingReason;
  subreason: PublicationReportingSpamSubreason;
};

export type SybilDotOrgIdentity = {
  __typename?: 'SybilDotOrgIdentity';
  source: SybilDotOrgIdentitySource;
  /** The sybil dot org status */
  verified: Scalars['Boolean'];
};

export type SybilDotOrgIdentitySource = {
  __typename?: 'SybilDotOrgIdentitySource';
  twitter: SybilDotOrgTwitterIdentity;
};

export type SybilDotOrgTwitterIdentity = {
  __typename?: 'SybilDotOrgTwitterIdentity';
  handle?: Maybe<Scalars['String']>;
};

/** The social comment */
export type TagResult = {
  __typename?: 'TagResult';
  /** The tag */
  tag: Scalars['PublicationTag'];
  /** The total amount of publication tagged */
  total: Scalars['Int'];
};

/** The publications tags sort criteria */
export enum TagSortCriteria {
  Alphabetical = 'ALPHABETICAL',
  MostPopular = 'MOST_POPULAR'
}

export type TimedFeeCollectModuleParams = {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
};

export type TimedFeeCollectModuleSettings = {
  __typename?: 'TimedFeeCollectModuleSettings';
  /** The collect module amount info */
  amount: ModuleFeeAmount;
  contractAddress: Scalars['ContractAddress'];
  /** The collect module end timestamp */
  endTimestamp: Scalars['DateTime'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
  /** The collect modules enum */
  type: CollectModules;
};

export type TimelineRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  metadata?: InputMaybe<PublicationMetadataFilters>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** The timeline types you wish to include, if nothing passed in will bring back all */
  timelineTypes?: InputMaybe<Array<TimelineType>>;
};

/** Timeline types */
export enum TimelineType {
  CollectComment = 'COLLECT_COMMENT',
  CollectPost = 'COLLECT_POST',
  Comment = 'COMMENT',
  Mirror = 'MIRROR',
  Post = 'POST'
}

export type TransactionError = {
  __typename?: 'TransactionError';
  reason: TransactionErrorReasons;
  txReceipt?: Maybe<TransactionReceipt>;
};

/** Transaction error reason */
export enum TransactionErrorReasons {
  Reverted = 'REVERTED'
}

export type TransactionIndexedResult = {
  __typename?: 'TransactionIndexedResult';
  indexed: Scalars['Boolean'];
  /** Publications can be indexed but the ipfs link for example not findable for x time. This allows you to work that out for publications. If its not a publication tx then it always be null. */
  metadataStatus?: Maybe<PublicationMetadataStatus>;
  txHash: Scalars['TxHash'];
  txReceipt?: Maybe<TransactionReceipt>;
};

export type TransactionReceipt = {
  __typename?: 'TransactionReceipt';
  blockHash: Scalars['String'];
  blockNumber: Scalars['Int'];
  byzantium: Scalars['Boolean'];
  confirmations: Scalars['Int'];
  contractAddress?: Maybe<Scalars['ContractAddress']>;
  cumulativeGasUsed: Scalars['String'];
  effectiveGasPrice: Scalars['String'];
  from: Scalars['EthereumAddress'];
  gasUsed: Scalars['String'];
  logs: Array<Log>;
  logsBloom: Scalars['String'];
  root?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['EthereumAddress']>;
  transactionHash: Scalars['TxHash'];
  transactionIndex: Scalars['Int'];
  type: Scalars['Int'];
};

export type TransactionResult = TransactionError | TransactionIndexedResult;

export type TypedDataOptions = {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce'];
};

export type UnfollowRequest = {
  profile: Scalars['ProfileId'];
};

export type UnknownCollectModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownCollectModuleSettings = {
  __typename?: 'UnknownCollectModuleSettings';
  /** The data used to setup the module which you can decode with your known ABI  */
  collectModuleReturnData: Scalars['CollectModuleData'];
  contractAddress: Scalars['ContractAddress'];
  /** The collect modules enum */
  type: CollectModules;
};

export type UnknownFollowModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleRedeemParams = {
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownFollowModuleSettings = {
  __typename?: 'UnknownFollowModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The data used to setup the module which you can decode with your known ABI  */
  followModuleReturnData: Scalars['FollowModuleData'];
  /** The follow modules enum */
  type: FollowModules;
};

export type UnknownReferenceModuleParams = {
  contractAddress: Scalars['ContractAddress'];
  /** The encoded data to submit with the module */
  data: Scalars['BlockchainData'];
};

export type UnknownReferenceModuleSettings = {
  __typename?: 'UnknownReferenceModuleSettings';
  contractAddress: Scalars['ContractAddress'];
  /** The data used to setup the module which you can decode with your known ABI  */
  referenceModuleReturnData: Scalars['ReferenceModuleData'];
  /** The reference modules enum */
  type: ReferenceModules;
};

export type UpdateProfileImageRequest = {
  /** The nft data */
  nftData?: InputMaybe<NftData>;
  profileId: Scalars['ProfileId'];
  /** The url to the image if offline */
  url?: InputMaybe<Scalars['Url']>;
};

export type UserSigNonces = {
  __typename?: 'UserSigNonces';
  lensHubOnChainSigNonce: Scalars['Nonce'];
  peripheryOnChainSigNonce: Scalars['Nonce'];
};

export type ValidatePublicationMetadataRequest = {
  metadatav1?: InputMaybe<PublicationMetadataV1Input>;
  metadatav2?: InputMaybe<PublicationMetadataV2Input>;
};

/** The access request */
export type VerifyRequest = {
  /** The access token */
  accessToken: Scalars['Jwt'];
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['EthereumAddress'];
  /** The default profile for the wallet for now it is just their first profile, this will be the default profile they picked soon enough */
  defaultProfile?: Maybe<Profile>;
};

export type WhoCollectedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId'];
};

export type WhoReactedPublicationRequest = {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId'];
};

/** The Profile */
export type WhoReactedResult = {
  __typename?: 'WhoReactedResult';
  profile: Profile;
  /** The reaction */
  reaction: ReactionTypes;
  /** The reaction */
  reactionAt: Scalars['DateTime'];
  /** The reaction id */
  reactionId: Scalars['ReactionId'];
};

export type WorldcoinIdentity = {
  __typename?: 'WorldcoinIdentity';
  /** If the profile has verified as a user */
  isHuman: Scalars['Boolean'];
};

export type AuthenticateMutationVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticate: { __typename?: 'AuthenticationResult', accessToken: any, refreshToken: any } };

export type GetChallengeQueryVariables = Exact<{
  request: ChallengeRequest;
}>;


export type GetChallengeQuery = { __typename?: 'Query', challenge: { __typename?: 'AuthChallengeResult', text: string } };

type CollectModuleFields_FeeCollectModuleSettings_Fragment = { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_FreeCollectModuleSettings_Fragment = { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any };

type CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment = { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment = { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_RevertCollectModuleSettings_Fragment = { __typename: 'RevertCollectModuleSettings', type: CollectModules };

type CollectModuleFields_TimedFeeCollectModuleSettings_Fragment = { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type CollectModuleFields_UnknownCollectModuleSettings_Fragment = { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any };

export type CollectModuleFieldsFragment = CollectModuleFields_FeeCollectModuleSettings_Fragment | CollectModuleFields_FreeCollectModuleSettings_Fragment | CollectModuleFields_LimitedFeeCollectModuleSettings_Fragment | CollectModuleFields_LimitedTimedFeeCollectModuleSettings_Fragment | CollectModuleFields_RevertCollectModuleSettings_Fragment | CollectModuleFields_TimedFeeCollectModuleSettings_Fragment | CollectModuleFields_UnknownCollectModuleSettings_Fragment;

export type CommentBaseFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type CommentFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type CommentMirrorOfFieldsFragment = { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type Erc20FieldsFragment = { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any };

type FollowModuleFields_FeeFollowModuleSettings_Fragment = { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } };

type FollowModuleFields_ProfileFollowModuleSettings_Fragment = { __typename?: 'ProfileFollowModuleSettings', type: FollowModules, contractAddress: any };

type FollowModuleFields_RevertFollowModuleSettings_Fragment = { __typename?: 'RevertFollowModuleSettings', type: FollowModules, contractAddress: any };

type FollowModuleFields_UnknownFollowModuleSettings_Fragment = { __typename?: 'UnknownFollowModuleSettings', type: FollowModules, contractAddress: any, followModuleReturnData: any };

export type FollowModuleFieldsFragment = FollowModuleFields_FeeFollowModuleSettings_Fragment | FollowModuleFields_ProfileFollowModuleSettings_Fragment | FollowModuleFields_RevertFollowModuleSettings_Fragment | FollowModuleFields_UnknownFollowModuleSettings_Fragment;

export type MediaFieldsFragment = { __typename?: 'Media', url: any, mimeType?: any | null };

export type MetadataOutputFieldsFragment = { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> };

export type MirrorBaseFieldsFragment = { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type MirrorFieldsFragment = { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type PostFieldsFragment = { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null };

export type ProfileFieldsFragment = { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null };

export type PublicationStatsFieldsFragment = { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number };

type ReferenceModuleFields_DegreesOfSeparationReferenceModuleSettings_Fragment = { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number };

type ReferenceModuleFields_FollowOnlyReferenceModuleSettings_Fragment = { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any };

type ReferenceModuleFields_UnknownReferenceModuleSettings_Fragment = { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any };

export type ReferenceModuleFieldsFragment = ReferenceModuleFields_DegreesOfSeparationReferenceModuleSettings_Fragment | ReferenceModuleFields_FollowOnlyReferenceModuleSettings_Fragment | ReferenceModuleFields_UnknownReferenceModuleSettings_Fragment;

type RelayerResultFields_RelayError_Fragment = { __typename?: 'RelayError', reason: RelayErrorReasons };

type RelayerResultFields_RelayerResult_Fragment = { __typename?: 'RelayerResult', txHash: any, txId: any };

export type RelayerResultFieldsFragment = RelayerResultFields_RelayError_Fragment | RelayerResultFields_RelayerResult_Fragment;

export type AddReactionMutationVariables = Exact<{
  request: ReactionRequest;
}>;


export type AddReactionMutation = { __typename?: 'Mutation', addReaction?: any | null };

export type BroadcastMutationVariables = Exact<{
  request: BroadcastRequest;
}>;


export type BroadcastMutation = { __typename?: 'Mutation', broadcast: { __typename?: 'RelayError', reason: RelayErrorReasons } | { __typename?: 'RelayerResult', txHash: any, txId: any } };

export type CreateCommentTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreatePublicCommentRequest;
}>;


export type CreateCommentTypedDataMutation = { __typename?: 'Mutation', createCommentTypedData: { __typename?: 'CreateCommentBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateCommentEIP712TypedData', types: { __typename?: 'CreateCommentEIP712TypedDataTypes', CommentWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateCommentEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, profileIdPointed: any, pubIdPointed: any, contentURI: any, collectModule: any, collectModuleInitData: any, referenceModule: any, referenceModuleData: any, referenceModuleInitData: any } } } };

export type CreateCommentViaDispatcherMutationVariables = Exact<{
  request: CreatePublicCommentRequest;
}>;


export type CreateCommentViaDispatcherMutation = { __typename?: 'Mutation', createCommentViaDispatcher: { __typename?: 'RelayError', reason: RelayErrorReasons } | { __typename?: 'RelayerResult', txHash: any, txId: any } };

export type CreateFollowTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: FollowRequest;
}>;


export type CreateFollowTypedDataMutation = { __typename?: 'Mutation', createFollowTypedData: { __typename?: 'CreateFollowBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateFollowEIP712TypedData', domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, types: { __typename?: 'CreateFollowEIP712TypedDataTypes', FollowWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, value: { __typename?: 'CreateFollowEIP712TypedDataValue', nonce: any, deadline: any, profileIds: Array<any>, datas: Array<any> } } } };

export type CreatePostTypedDataMutationVariables = Exact<{
  request: CreatePublicPostRequest;
}>;


export type CreatePostTypedDataMutation = { __typename?: 'Mutation', createPostTypedData: { __typename?: 'CreatePostBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreatePostEIP712TypedData', types: { __typename?: 'CreatePostEIP712TypedDataTypes', PostWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreatePostEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, contentURI: any, collectModule: any, collectModuleInitData: any, referenceModule: any, referenceModuleInitData: any } } } };

export type CreateUnfollowTypedDataMutationVariables = Exact<{
  request: UnfollowRequest;
}>;


export type CreateUnfollowTypedDataMutation = { __typename?: 'Mutation', createUnfollowTypedData: { __typename?: 'CreateUnfollowBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateBurnEIP712TypedData', domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, types: { __typename?: 'CreateBurnEIP712TypedDataTypes', BurnWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, value: { __typename?: 'CreateBurnEIP712TypedDataValue', nonce: any, deadline: any, tokenId: string } } } };

export type ProxyActionMutationVariables = Exact<{
  request: ProxyActionRequest;
}>;


export type ProxyActionMutation = { __typename?: 'Mutation', proxyAction: any };

export type RemoveReactionMutationVariables = Exact<{
  request: ReactionRequest;
}>;


export type RemoveReactionMutation = { __typename?: 'Mutation', removeReaction?: any | null };

export type ApprovedModuleAllowanceAmountQueryVariables = Exact<{
  request: ApprovedModuleAllowanceAmountRequest;
}>;


export type ApprovedModuleAllowanceAmountQuery = { __typename?: 'Query', approvedModuleAllowanceAmount: Array<{ __typename?: 'ApprovedAllowanceAmount', currency: any, module: string, allowance: string, contractAddress: any }>, enabledModuleCurrencies: Array<{ __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any }> };

export type CollectModuleQueryVariables = Exact<{
  request: PublicationQueryRequest;
}>;


export type CollectModuleQuery = { __typename?: 'Query', publication?: { __typename?: 'Comment', collectNftAddress?: any | null, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any } } | { __typename?: 'Mirror', collectNftAddress?: any | null, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any } } | { __typename?: 'Post', collectNftAddress?: any | null, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any } } | null };

export type CreateCollectTypedDataMutationVariables = Exact<{
  options?: InputMaybe<TypedDataOptions>;
  request: CreateCollectRequest;
}>;


export type CreateCollectTypedDataMutation = { __typename?: 'Mutation', createCollectTypedData: { __typename?: 'CreateCollectBroadcastItemResult', id: any, expiresAt: any, typedData: { __typename?: 'CreateCollectEIP712TypedData', types: { __typename?: 'CreateCollectEIP712TypedDataTypes', CollectWithSig: Array<{ __typename?: 'EIP712TypedDataField', name: string, type: string }> }, domain: { __typename?: 'EIP712TypedDataDomain', name: string, chainId: any, version: string, verifyingContract: any }, value: { __typename?: 'CreateCollectEIP712TypedDataValue', nonce: any, deadline: any, profileId: any, pubId: any, data: any } } } };

export type ExplorePublicationsQueryVariables = Exact<{
  request: ExplorePublicationRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
}>;


export type ExplorePublicationsQuery = { __typename?: 'Query', explorePublications: { __typename?: 'ExplorePublicationResult', items: Array<{ __typename?: 'Comment' } | { __typename?: 'Mirror' } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount?: number | null } } };

export type FollowingQueryVariables = Exact<{
  request: FollowingRequest;
}>;


export type FollowingQuery = { __typename?: 'Query', following: { __typename?: 'PaginatedFollowingResult', items: Array<{ __typename?: 'Following', totalAmountOfTimesFollowing: number, profile: { __typename?: 'Profile', isFollowedByMe: boolean, id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null } }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null, totalCount?: number | null } } };

export type HasTxHashBeenIndexedQueryVariables = Exact<{
  request: HasTxHashBeenIndexedRequest;
}>;


export type HasTxHashBeenIndexedQuery = { __typename?: 'Query', hasTxHashBeenIndexed: { __typename?: 'TransactionError', reason: TransactionErrorReasons } | { __typename?: 'TransactionIndexedResult', txHash: any, indexed: boolean, metadataStatus?: { __typename?: 'PublicationMetadataStatus', status: PublicationMetadataStatusType } | null } };

export type NftFeedQueryVariables = Exact<{
  request: NfTsRequest;
}>;


export type NftFeedQuery = { __typename?: 'Query', nfts: { __typename?: 'NFTsResult', items: Array<{ __typename?: 'NFT', name: string, collectionName: string, contractAddress: any, tokenId: string, chainId: any, originalContent: { __typename?: 'NFTContent', uri: string, animatedUrl?: string | null } }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null, totalCount?: number | null } } };

export type ProfileQueryVariables = Exact<{
  request: SingleProfileQueryRequest;
  who?: InputMaybe<Scalars['ProfileId']>;
}>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', id: any, name?: string | null, bio?: string | null, followNftAddress?: any | null, isFollowedByMe: boolean, isFollowing: boolean, metadata?: any | null, isDefault: boolean, handle: any, ownedBy: any, attributes?: Array<{ __typename?: 'Attribute', displayType?: string | null, traitType?: string | null, key: string, value: string }> | null, picture?: { __typename: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } } | { __typename: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, coverPicture?: { __typename: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } } | { __typename: 'NftImage', contractAddress: any, tokenId: string, uri: any, verified: boolean } | null, dispatcher?: { __typename?: 'Dispatcher', address: any, canUseRelay: boolean } | null, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number, totalPosts: number, totalComments: number, totalMirrors: number, totalPublications: number, totalCollects: number }, followModule?: { __typename?: 'FeeFollowModuleSettings', type: FollowModules, recipient: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', symbol: string, name: string, decimals: number, address: any } } } | { __typename?: 'ProfileFollowModuleSettings', type: FollowModules } | { __typename?: 'RevertFollowModuleSettings', type: FollowModules } | { __typename?: 'UnknownFollowModuleSettings' } | null } | null };

export type ProfilesQueryVariables = Exact<{
  request: ProfileQueryRequest;
}>;


export type ProfilesQuery = { __typename?: 'Query', profiles: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', isDefault: boolean, isFollowedByMe: boolean, id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null, totalCount?: number | null } } };

export type PublicationQueryVariables = Exact<{
  request: PublicationQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
}>;


export type PublicationQuery = { __typename?: 'Query', publication?: { __typename: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | null };

export type PublicationRevenueQueryVariables = Exact<{
  request: PublicationRevenueQueryRequest;
}>;


export type PublicationRevenueQuery = { __typename?: 'Query', publicationRevenue?: { __typename?: 'PublicationRevenue', revenue: { __typename?: 'RevenueAggregate', total: { __typename?: 'Erc20Amount', value: string } } } | null };

export type PublicationsQueryVariables = Exact<{
  request: PublicationsQueryRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
}>;


export type PublicationsQuery = { __typename?: 'Query', publications: { __typename?: 'PaginatedPublicationResult', items: Array<{ __typename: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', prev?: any | null, next?: any | null, totalCount?: number | null } } };

export type RecommendedProfilesQueryVariables = Exact<{
  options?: InputMaybe<RecommendedProfileOptions>;
}>;


export type RecommendedProfilesQuery = { __typename?: 'Query', recommendedProfiles: Array<{ __typename?: 'Profile', isFollowedByMe: boolean, id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }> };

export type TimelineQueryVariables = Exact<{
  request: FeedRequest;
  reactionRequest?: InputMaybe<ReactionFieldResolverRequest>;
  profileId?: InputMaybe<Scalars['ProfileId']>;
}>;


export type TimelineQuery = { __typename?: 'Query', feed: { __typename?: 'PaginatedFeedResult', items: Array<{ __typename?: 'FeedItem', root: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, electedMirror?: { __typename?: 'ElectedMirror', mirrorId: any, timestamp: any, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null } } | null, mirrors: Array<{ __typename?: 'MirrorEvent', timestamp: any, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null } }>, collects: Array<{ __typename?: 'CollectedEvent', timestamp: any, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null } }>, reactions: Array<{ __typename?: 'ReactionEvent', reaction: ReactionTypes, timestamp: any, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null } }>, comments?: Array<{ __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, mirrorOf: { __typename?: 'Comment', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, mainPost: { __typename?: 'Mirror', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null } | { __typename?: 'Post', id: any, createdAt: any, appId?: any | null, hidden: boolean, reaction?: ReactionTypes | null, mirrors: Array<any>, hasCollectedByMe: boolean, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }, profile: { __typename?: 'Profile', id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowers: number, totalFollowing: number }, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }, stats: { __typename?: 'PublicationStats', totalAmountOfMirrors: number, totalAmountOfCollects: number, totalAmountOfComments: number, totalUpvotes: number }, metadata: { __typename?: 'MetadataOutput', name?: string | null, description?: any | null, content?: any | null, media: Array<{ __typename?: 'MediaSet', original: { __typename?: 'Media', url: any, mimeType?: any | null } }>, attributes: Array<{ __typename?: 'MetadataAttributeOutput', displayType?: PublicationMetadataDisplayTypes | null, traitType?: string | null, value?: string | null }> }, collectModule: { __typename: 'FeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'FreeCollectModuleSettings', type: CollectModules, followerOnly: boolean, contractAddress: any } | { __typename: 'LimitedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'LimitedTimedFeeCollectModuleSettings', type: CollectModules, collectLimit: string, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'RevertCollectModuleSettings', type: CollectModules } | { __typename: 'TimedFeeCollectModuleSettings', type: CollectModules, recipient: any, referralFee: number, endTimestamp: any, amount: { __typename?: 'ModuleFeeAmount', value: string, asset: { __typename?: 'Erc20', name: string, symbol: string, decimals: number, address: any } } } | { __typename: 'UnknownCollectModuleSettings', type: CollectModules, contractAddress: any, collectModuleReturnData: any }, referenceModule?: { __typename?: 'DegreesOfSeparationReferenceModuleSettings', type: ReferenceModules, contractAddress: any, commentsRestricted: boolean, mirrorsRestricted: boolean, degreesOfSeparation: number } | { __typename?: 'FollowOnlyReferenceModuleSettings', type: ReferenceModules, contractAddress: any } | { __typename?: 'UnknownReferenceModuleSettings', type: ReferenceModules, contractAddress: any, referenceModuleReturnData: any } | null }> | null }>, pageInfo: { __typename?: 'PaginatedResultInfo', next?: any | null, totalCount?: number | null } } };

export type UserProfilesQueryVariables = Exact<{
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']> | Scalars['EthereumAddress']>;
}>;


export type UserProfilesQuery = { __typename?: 'Query', profiles: { __typename?: 'PaginatedProfileResult', items: Array<{ __typename?: 'Profile', isDefault: boolean, id: any, name?: string | null, handle: any, bio?: string | null, ownedBy: any, isFollowedByMe: boolean, stats: { __typename?: 'ProfileStats', totalFollowing: number, totalFollowers: number }, dispatcher?: { __typename?: 'Dispatcher', canUseRelay: boolean } | null, attributes?: Array<{ __typename?: 'Attribute', key: string, value: string }> | null, picture?: { __typename?: 'MediaSet', original: { __typename?: 'Media', url: any } } | { __typename?: 'NftImage', uri: any } | null, followModule?: { __typename: 'FeeFollowModuleSettings' } | { __typename: 'ProfileFollowModuleSettings' } | { __typename: 'RevertFollowModuleSettings' } | { __typename: 'UnknownFollowModuleSettings' } | null }> }, userSigNonces: { __typename?: 'UserSigNonces', lensHubOnChainSigNonce: any } };

export const FollowModuleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FollowModuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FollowModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeeFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RevertFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"followModuleReturnData"}}]}}]}}]} as unknown as DocumentNode<FollowModuleFieldsFragment, unknown>;
export const ProfileFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"totalFollowing"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaSet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NftImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"followModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]} as unknown as DocumentNode<ProfileFieldsFragment, unknown>;
export const PublicationStatsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PublicationStatsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalAmountOfMirrors"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmountOfCollects"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmountOfComments"}},{"kind":"Field","name":{"kind":"Name","value":"totalUpvotes"}}]}}]} as unknown as DocumentNode<PublicationStatsFieldsFragment, unknown>;
export const MediaFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]} as unknown as DocumentNode<MediaFieldsFragment, unknown>;
export const MetadataOutputFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MetadataOutputFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MetadataOutput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<MetadataOutputFieldsFragment, unknown>;
export const Erc20FieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Erc20Fields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Erc20"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]} as unknown as DocumentNode<Erc20FieldsFragment, unknown>;
export const CollectModuleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CollectModuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CollectModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FreeCollectModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"followerOnly"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeeCollectModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Erc20Fields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"referralFee"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LimitedFeeCollectModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"collectLimit"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Erc20Fields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"referralFee"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LimitedTimedFeeCollectModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"collectLimit"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Erc20Fields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"referralFee"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RevertCollectModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimedFeeCollectModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Erc20Fields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}},{"kind":"Field","name":{"kind":"Name","value":"referralFee"}},{"kind":"Field","name":{"kind":"Name","value":"endTimestamp"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownCollectModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"collectModuleReturnData"}}]}}]}}]} as unknown as DocumentNode<CollectModuleFieldsFragment, unknown>;
export const ReferenceModuleFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceModuleFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ReferenceModule"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FollowOnlyReferenceModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UnknownReferenceModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleReturnData"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DegreesOfSeparationReferenceModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"commentsRestricted"}},{"kind":"Field","name":{"kind":"Name","value":"mirrorsRestricted"}},{"kind":"Field","name":{"kind":"Name","value":"degreesOfSeparation"}}]}}]}}]} as unknown as DocumentNode<ReferenceModuleFieldsFragment, unknown>;
export const MirrorBaseFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MirrorBaseFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationStatsFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataOutputFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"collectModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CollectModuleFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceModuleFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"reaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"NullValue"}}]},{"kind":"Field","name":{"kind":"Name","value":"hasCollectedByMe"}}]}}]} as unknown as DocumentNode<MirrorBaseFieldsFragment, unknown>;
export const PostFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationStatsFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataOutputFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"collectModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CollectModuleFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceModuleFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"reaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reactionRequest"}}}]},{"kind":"Field","name":{"kind":"Name","value":"mirrors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"NullValue"}}]},{"kind":"Field","name":{"kind":"Name","value":"hasCollectedByMe"}}]}}]} as unknown as DocumentNode<PostFieldsFragment, unknown>;
export const CommentBaseFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentBaseFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PublicationStatsFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MetadataOutputFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"collectModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CollectModuleFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceModuleFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"appId"}},{"kind":"Field","name":{"kind":"Name","value":"hidden"}},{"kind":"Field","name":{"kind":"Name","value":"reaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"NullValue"}}]},{"kind":"Field","name":{"kind":"Name","value":"mirrors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"NullValue"}}]},{"kind":"Field","name":{"kind":"Name","value":"hasCollectedByMe"}}]}}]} as unknown as DocumentNode<CommentBaseFieldsFragment, unknown>;
export const CommentMirrorOfFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentMirrorOfFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentBaseFields"}},{"kind":"Field","name":{"kind":"Name","value":"mainPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorBaseFields"}}]}}]}}]}}]} as unknown as DocumentNode<CommentMirrorOfFieldsFragment, unknown>;
export const CommentFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentBaseFields"}},{"kind":"Field","name":{"kind":"Name","value":"mainPost"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorBaseFields"}},{"kind":"Field","name":{"kind":"Name","value":"mirrorOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentMirrorOfFields"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CommentFieldsFragment, unknown>;
export const MirrorFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MirrorFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorBaseFields"}},{"kind":"Field","name":{"kind":"Name","value":"mirrorOf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}}]}}]}}]} as unknown as DocumentNode<MirrorFieldsFragment, unknown>;
export const RelayerResultFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RelayerResultFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelayResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelayerResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]} as unknown as DocumentNode<RelayerResultFieldsFragment, unknown>;
export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignedAuthChallenge"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const GetChallengeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChallenge"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChallengeRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"challenge"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<GetChallengeQuery, GetChallengeQueryVariables>;
export const AddReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<AddReactionMutation, AddReactionMutationVariables>;
export const BroadcastDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Broadcast"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BroadcastRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"broadcast"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelayerResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RelayError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<BroadcastMutation, BroadcastMutationVariables>;
export const CreateCommentTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCommentTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypedDataOptions"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePublicCommentRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCommentTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}},{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CommentWithSig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"profileIdPointed"}},{"kind":"Field","name":{"kind":"Name","value":"pubIdPointed"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"collectModule"}},{"kind":"Field","name":{"kind":"Name","value":"collectModuleInitData"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleData"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleInitData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateCommentTypedDataMutation, CreateCommentTypedDataMutationVariables>;
export const CreateCommentViaDispatcherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCommentViaDispatcher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePublicCommentRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCommentViaDispatcher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RelayerResultFields"}}]}}]}},...RelayerResultFieldsFragmentDoc.definitions]} as unknown as DocumentNode<CreateCommentViaDispatcherMutation, CreateCommentViaDispatcherMutationVariables>;
export const CreateFollowTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFollowTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypedDataOptions"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFollowTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}},{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FollowWithSig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileIds"}},{"kind":"Field","name":{"kind":"Name","value":"datas"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateFollowTypedDataMutation, CreateFollowTypedDataMutationVariables>;
export const CreatePostTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePostTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePublicPostRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPostTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"PostWithSig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"contentURI"}},{"kind":"Field","name":{"kind":"Name","value":"collectModule"}},{"kind":"Field","name":{"kind":"Name","value":"collectModuleInitData"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModule"}},{"kind":"Field","name":{"kind":"Name","value":"referenceModuleInitData"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostTypedDataMutation, CreatePostTypedDataMutationVariables>;
export const CreateUnfollowTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUnfollowTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnfollowRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUnfollowTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BurnWithSig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateUnfollowTypedDataMutation, CreateUnfollowTypedDataMutationVariables>;
export const ProxyActionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ProxyAction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProxyActionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"proxyAction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<ProxyActionMutation, ProxyActionMutationVariables>;
export const RemoveReactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeReaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeReaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}]}]}}]} as unknown as DocumentNode<RemoveReactionMutation, RemoveReactionMutationVariables>;
export const ApprovedModuleAllowanceAmountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApprovedModuleAllowanceAmount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApprovedModuleAllowanceAmountRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"approvedModuleAllowanceAmount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"module"}},{"kind":"Field","name":{"kind":"Name","value":"allowance"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enabledModuleCurrencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<ApprovedModuleAllowanceAmountQuery, ApprovedModuleAllowanceAmountQueryVariables>;
export const CollectModuleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectModule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationQueryRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectNftAddress"}},{"kind":"Field","name":{"kind":"Name","value":"collectModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CollectModuleFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectNftAddress"}},{"kind":"Field","name":{"kind":"Name","value":"collectModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CollectModuleFields"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectNftAddress"}},{"kind":"Field","name":{"kind":"Name","value":"collectModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CollectModuleFields"}}]}}]}}]}}]}},...CollectModuleFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions]} as unknown as DocumentNode<CollectModuleQuery, CollectModuleQueryVariables>;
export const CreateCollectTypedDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCollectTypedData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypedDataOptions"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCollectRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCollectTypedData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}},{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"typedData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CollectWithSig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"domain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"verifyingContract"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"deadline"}},{"kind":"Field","name":{"kind":"Name","value":"profileId"}},{"kind":"Field","name":{"kind":"Name","value":"pubId"}},{"kind":"Field","name":{"kind":"Name","value":"data"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateCollectTypedDataMutation, CreateCollectTypedDataMutationVariables>;
export const ExplorePublicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ExplorePublications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ExplorePublicationRequest"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reactionRequest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionFieldResolverRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"explorePublications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...ProfileFieldsFragmentDoc.definitions,...PublicationStatsFieldsFragmentDoc.definitions,...MetadataOutputFieldsFragmentDoc.definitions,...MediaFieldsFragmentDoc.definitions,...CollectModuleFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ExplorePublicationsQuery, ExplorePublicationsQueryVariables>;
export const FollowingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Following"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FollowingRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"following"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalAmountOfTimesFollowing"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions]} as unknown as DocumentNode<FollowingQuery, FollowingQueryVariables>;
export const HasTxHashBeenIndexedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HasTxHashBeenIndexed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HasTxHashBeenIndexedRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasTxHashBeenIndexed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionIndexedResult"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metadataStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"txHash"}},{"kind":"Field","name":{"kind":"Name","value":"indexed"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reason"}}]}}]}}]}}]} as unknown as DocumentNode<HasTxHashBeenIndexedQuery, HasTxHashBeenIndexedQueryVariables>;
export const NftFeedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NFTFeed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NFTsRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nfts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"collectionName"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"originalContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"animatedUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<NftFeedQuery, NftFeedQueryVariables>;
export const ProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SingleProfileQueryRequest"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"who"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayType"}},{"kind":"Field","name":{"kind":"Name","value":"traitType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followNftAddress"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"who"},"value":{"kind":"Variable","name":{"kind":"Name","value":"who"}}}]},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"picture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NftImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaSet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NftImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractAddress"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"uri"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaSet"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ownedBy"}},{"kind":"Field","name":{"kind":"Name","value":"dispatcher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"canUseRelay"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalFollowers"}},{"kind":"Field","name":{"kind":"Name","value":"totalFollowing"}},{"kind":"Field","name":{"kind":"Name","value":"totalPosts"}},{"kind":"Field","name":{"kind":"Name","value":"totalComments"}},{"kind":"Field","name":{"kind":"Name","value":"totalMirrors"}},{"kind":"Field","name":{"kind":"Name","value":"totalPublications"}},{"kind":"Field","name":{"kind":"Name","value":"totalCollects"}}]}},{"kind":"Field","name":{"kind":"Name","value":"followModule"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeeFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"decimals"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RevertFollowModuleSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>;
export const ProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Profiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileQueryRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}},...ProfileFieldsFragmentDoc.definitions]} as unknown as DocumentNode<ProfilesQuery, ProfilesQueryVariables>;
export const PublicationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Publication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationQueryRequest"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reactionRequest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionFieldResolverRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorFields"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...ProfileFieldsFragmentDoc.definitions,...PublicationStatsFieldsFragmentDoc.definitions,...MetadataOutputFieldsFragmentDoc.definitions,...MediaFieldsFragmentDoc.definitions,...CollectModuleFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...CommentBaseFieldsFragmentDoc.definitions,...MirrorBaseFieldsFragmentDoc.definitions,...CommentMirrorOfFieldsFragmentDoc.definitions,...MirrorFieldsFragmentDoc.definitions]} as unknown as DocumentNode<PublicationQuery, PublicationQueryVariables>;
export const PublicationRevenueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PublicationRevenue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationRevenueQueryRequest"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicationRevenue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"revenue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PublicationRevenueQuery, PublicationRevenueQueryVariables>;
export const PublicationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Publications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationsQueryRequest"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reactionRequest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionFieldResolverRequest"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mirror"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MirrorFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"prev"}},{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...ProfileFieldsFragmentDoc.definitions,...PublicationStatsFieldsFragmentDoc.definitions,...MetadataOutputFieldsFragmentDoc.definitions,...MediaFieldsFragmentDoc.definitions,...CollectModuleFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...CommentBaseFieldsFragmentDoc.definitions,...MirrorBaseFieldsFragmentDoc.definitions,...CommentMirrorOfFieldsFragmentDoc.definitions,...MirrorFieldsFragmentDoc.definitions]} as unknown as DocumentNode<PublicationsQuery, PublicationsQueryVariables>;
export const RecommendedProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RecommendedProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RecommendedProfileOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recommendedProfiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}},{"kind":"Field","name":{"kind":"Name","value":"isFollowedByMe"}}]}}]}},...ProfileFieldsFragmentDoc.definitions]} as unknown as DocumentNode<RecommendedProfilesQuery, RecommendedProfilesQueryVariables>;
export const TimelineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Timeline"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FeedRequest"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reactionRequest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReactionFieldResolverRequest"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"root"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostFields"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"electedMirror"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mirrorId"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mirrors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"collects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reaction"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentFields"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}},...PostFieldsFragmentDoc.definitions,...ProfileFieldsFragmentDoc.definitions,...PublicationStatsFieldsFragmentDoc.definitions,...MetadataOutputFieldsFragmentDoc.definitions,...MediaFieldsFragmentDoc.definitions,...CollectModuleFieldsFragmentDoc.definitions,...Erc20FieldsFragmentDoc.definitions,...ReferenceModuleFieldsFragmentDoc.definitions,...CommentFieldsFragmentDoc.definitions,...CommentBaseFieldsFragmentDoc.definitions,...MirrorBaseFieldsFragmentDoc.definitions,...CommentMirrorOfFieldsFragmentDoc.definitions]} as unknown as DocumentNode<TimelineQuery, TimelineQueryVariables>;
export const UserProfilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserProfiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownedBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EthereumAddress"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ownedBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownedBy"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileFields"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalFollowing"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"dispatcher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"canUseRelay"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"userSigNonces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lensHubOnChainSigNonce"}}]}}]}},...ProfileFieldsFragmentDoc.definitions]} as unknown as DocumentNode<UserProfilesQuery, UserProfilesQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "CollectModule": [
      "FeeCollectModuleSettings",
      "FreeCollectModuleSettings",
      "LimitedFeeCollectModuleSettings",
      "LimitedTimedFeeCollectModuleSettings",
      "RevertCollectModuleSettings",
      "TimedFeeCollectModuleSettings",
      "UnknownCollectModuleSettings"
    ],
    "FeedItemRoot": [
      "Comment",
      "Post"
    ],
    "FollowModule": [
      "FeeFollowModuleSettings",
      "ProfileFollowModuleSettings",
      "RevertFollowModuleSettings",
      "UnknownFollowModuleSettings"
    ],
    "MainPostReference": [
      "Mirror",
      "Post"
    ],
    "MentionPublication": [
      "Comment",
      "Post"
    ],
    "MirrorablePublication": [
      "Comment",
      "Post"
    ],
    "Notification": [
      "NewCollectNotification",
      "NewCommentNotification",
      "NewFollowerNotification",
      "NewMentionNotification",
      "NewMirrorNotification",
      "NewReactionNotification"
    ],
    "ProfileMedia": [
      "MediaSet",
      "NftImage"
    ],
    "ProxyActionStatusResultUnion": [
      "ProxyActionError",
      "ProxyActionQueued",
      "ProxyActionStatusResult"
    ],
    "Publication": [
      "Comment",
      "Mirror",
      "Post"
    ],
    "PublicationForSale": [
      "Comment",
      "Post"
    ],
    "PublicationSearchResultItem": [
      "Comment",
      "Post"
    ],
    "ReferenceModule": [
      "DegreesOfSeparationReferenceModuleSettings",
      "FollowOnlyReferenceModuleSettings",
      "UnknownReferenceModuleSettings"
    ],
    "RelayResult": [
      "RelayError",
      "RelayerResult"
    ],
    "SearchResult": [
      "ProfileSearchResult",
      "PublicationSearchResult"
    ],
    "TransactionResult": [
      "TransactionError",
      "TransactionIndexedResult"
    ]
  }
};
      export default result;
    