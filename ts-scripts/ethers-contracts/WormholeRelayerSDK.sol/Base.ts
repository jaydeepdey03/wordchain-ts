/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface BaseInterface extends utils.Interface {
  functions: {
    "seenDeliveryVaaHashes(bytes32)": FunctionFragment;
    "setRegisteredSender(uint16,bytes32)": FunctionFragment;
    "wormhole()": FunctionFragment;
    "wormholeRelayer()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "seenDeliveryVaaHashes"
      | "setRegisteredSender"
      | "wormhole"
      | "wormholeRelayer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "seenDeliveryVaaHashes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRegisteredSender",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "wormhole", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wormholeRelayer",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "seenDeliveryVaaHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegisteredSender",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wormhole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wormholeRelayer",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Base extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    seenDeliveryVaaHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    wormhole(overrides?: CallOverrides): Promise<[string]>;

    wormholeRelayer(overrides?: CallOverrides): Promise<[string]>;
  };

  seenDeliveryVaaHashes(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setRegisteredSender(
    sourceChain: BigNumberish,
    sourceAddress: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  wormhole(overrides?: CallOverrides): Promise<string>;

  wormholeRelayer(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    seenDeliveryVaaHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    wormhole(overrides?: CallOverrides): Promise<string>;

    wormholeRelayer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    seenDeliveryVaaHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    wormhole(overrides?: CallOverrides): Promise<BigNumber>;

    wormholeRelayer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    seenDeliveryVaaHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRegisteredSender(
      sourceChain: BigNumberish,
      sourceAddress: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wormholeRelayer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
