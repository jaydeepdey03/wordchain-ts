/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HelloWormhole, HelloWormholeInterface } from "../HelloWormhole";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wormholeRelayer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "greeting",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "senderChain",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "GreetingReceived",
    type: "event",
  },
  {
    inputs: [],
    name: "latestGreeting",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "quoteCrossChainGreeting",
    outputs: [
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "sourceChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "deliveryHash",
        type: "bytes32",
      },
    ],
    name: "receiveWormholeMessages",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "seenDeliveryVaaHashes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "greeting",
        type: "string",
      },
    ],
    name: "sendCrossChainGreeting",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "wormholeRelayer",
    outputs: [
      {
        internalType: "contract IWormholeRelayer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610bb7380380610bb783398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051610b176100a0600039600081816101290152818161017e0152818161026a01526102ee0152610b176000f3fe6080604052600436106100555760003560e01c80630f4b629a1461005a578063180f6cc21461006f57806328bd75ce146100b4578063529dca32146100e2578063921b58a9146100f5578063da25b72514610117575b600080fd5b61006d610068366004610647565b610163565b005b34801561007b57600080fd5b5061009f61008a3660046106bb565b60016020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156100c057600080fd5b506100d46100cf3660046106d4565b61023f565b6040519081526020016100ab565b61006d6100f0366004610716565b6102e3565b34801561010157600080fd5b5061010a610444565b6040516100ab919061087b565b34801561012357600080fd5b5061014b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ab565b600061016e8461023f565b905080341461017c57600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638fecdd0282868686336040516020016101c192919061088e565b604051602081830303815290604052600061c3506040518763ffffffff1660e01b81526004016101f59594939291906108b8565b60206040518083038185885af1158015610213573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061023891906108fa565b5050505050565b60405163c23ee3c360e01b815261ffff8216600482015260006024820181905261c3506044830152907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c23ee3c3906064016040805180830381865afa1580156102b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102dc9190610924565b5092915050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103575760405162461bcd60e51b815260206004820152601460248201527313db9b1e481c995b185e595c88185b1b1bddd95960621b60448201526064015b60405180910390fd5b60008181526001602052604090205460ff16156103b65760405162461bcd60e51b815260206004820152601960248201527f4d65737361676520616c72656164792070726f63657373656400000000000000604482015260640161034e565b60008181526001602081815260408320805460ff1916909217909155865182916103e69189018101908901610948565b815191935091506103fe9060009060208501906104d2565b507f5c4ab0cfb98525b63324629eb8c98352dec2bece203410170311b784050546766000858360405161043393929190610a10565b60405180910390a150505050505050565b60008054610451906109d6565b80601f016020809104026020016040519081016040528092919081815260200182805461047d906109d6565b80156104ca5780601f1061049f576101008083540402835291602001916104ca565b820191906000526020600020905b8154815290600101906020018083116104ad57829003601f168201915b505050505081565b8280546104de906109d6565b90600052602060002090601f0160209004810192826105005760008555610546565b82601f1061051957805160ff1916838001178555610546565b82800160010185558215610546579182015b8281111561054657825182559160200191906001019061052b565b50610552929150610556565b5090565b5b808211156105525760008155600101610557565b803561ffff8116811461057d57600080fd5b919050565b6001600160a01b038116811461059757600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156105d9576105d961059a565b604052919050565b600067ffffffffffffffff8211156105fb576105fb61059a565b50601f01601f191660200190565b600061061c610617846105e1565b6105b0565b905082815283838301111561063057600080fd5b828260208301376000602084830101529392505050565b60008060006060848603121561065c57600080fd5b6106658461056b565b9250602084013561067581610582565b9150604084013567ffffffffffffffff81111561069157600080fd5b8401601f810186136106a257600080fd5b6106b186823560208401610609565b9150509250925092565b6000602082840312156106cd57600080fd5b5035919050565b6000602082840312156106e657600080fd5b6106ef8261056b565b9392505050565b600082601f83011261070757600080fd5b6106ef83833560208501610609565b600080600080600060a0868803121561072e57600080fd5b853567ffffffffffffffff8082111561074657600080fd5b61075289838a016106f6565b965060209150818801358181111561076957600080fd5b8801601f81018a1361077a57600080fd5b80358281111561078c5761078c61059a565b8060051b61079b8582016105b0565b918252828101850191858101908d8411156107b557600080fd5b86850192505b838310156107f1578235868111156107d35760008081fd5b6107e18f89838901016106f6565b83525091860191908601906107bb565b809a50505050505050506040860135925061080e6060870161056b565b949793965091946080013592915050565b60005b8381101561083a578181015183820152602001610822565b83811115610849576000848401525b50505050565b6000815180845261086781602086016020860161081f565b601f01601f19169290920160200192915050565b6020815260006106ef602083018461084f565b6040815260006108a1604083018561084f565b905060018060a01b03831660208301529392505050565b61ffff861681526001600160a01b038516602082015260a0604082018190526000906108e69083018661084f565b606083019490945250608001529392505050565b60006020828403121561090c57600080fd5b815167ffffffffffffffff811681146106ef57600080fd5b6000806040838503121561093757600080fd5b505080516020909101519092909150565b6000806040838503121561095b57600080fd5b825167ffffffffffffffff81111561097257600080fd5b8301601f8101851361098357600080fd5b8051610991610617826105e1565b8181528660208385010111156109a657600080fd5b6109b782602083016020860161081f565b80945050505060208301516109cb81610582565b809150509250929050565b600181811c908216806109ea57607f821691505b602082108103610a0a57634e487b7160e01b600052602260045260246000fd5b50919050565b60608152600080855481600182811c915080831680610a3057607f831692505b60208084108203610a4f57634e487b7160e01b86526022600452602486fd5b6060880184905260808801828015610a6e5760018114610a7f57610aaa565b60ff19871682528282019750610aaa565b60008d81526020902060005b87811015610aa457815484820152908601908401610a8b565b83019850505b5050859650610abe8189018b61ffff169052565b505050505050610ad960408301846001600160a01b03169052565b94935050505056fea26469706673582212204a11f25adede96378cc4e56860a1ffde0715f2833fb4663236815edba4e22f0264736f6c634300080d0033";

type HelloWormholeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWormholeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWormhole__factory extends ContractFactory {
  constructor(...args: HelloWormholeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _wormholeRelayer: string,
    overrides?: Overrides & { from?: string }
  ): Promise<HelloWormhole> {
    return super.deploy(
      _wormholeRelayer,
      overrides || {}
    ) as Promise<HelloWormhole>;
  }
  override getDeployTransaction(
    _wormholeRelayer: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_wormholeRelayer, overrides || {});
  }
  override attach(address: string): HelloWormhole {
    return super.attach(address) as HelloWormhole;
  }
  override connect(signer: Signer): HelloWormhole__factory {
    return super.connect(signer) as HelloWormhole__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWormholeInterface {
    return new utils.Interface(_abi) as HelloWormholeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWormhole {
    return new Contract(address, _abi, signerOrProvider) as HelloWormhole;
  }
}
