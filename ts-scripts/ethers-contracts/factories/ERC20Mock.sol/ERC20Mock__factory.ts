/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20Mock,
  ERC20MockInterface,
} from "../../ERC20Mock.sol/ERC20Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162000f5838038062000f5883398101604081905262000034916200029a565b8181601282600090805190602001906200005092919062000127565b5081516200006690600190602085019062000127565b5060ff81166080524660a0526200007c6200008b565b60c05250620003e39350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000bf919062000340565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b828054620001359062000304565b90600052602060002090601f016020900481019282620001595760008555620001a4565b82601f106200017457805160ff1916838001178555620001a4565b82800160010185558215620001a4579182015b82811115620001a457825182559160200191906001019062000187565b50620001b2929150620001b6565b5090565b5b80821115620001b25760008155600101620001b7565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001f557600080fd5b81516001600160401b0380821115620002125762000212620001cd565b604051601f8301601f19908116603f011681019082821181831017156200023d576200023d620001cd565b816040528381526020925086838588010111156200025a57600080fd5b600091505b838210156200027e57858201830151818301840152908201906200025f565b83821115620002905760008385830101525b9695505050505050565b60008060408385031215620002ae57600080fd5b82516001600160401b0380821115620002c657600080fd5b620002d486838701620001e3565b93506020850151915080821115620002eb57600080fd5b50620002fa85828601620001e3565b9150509250929050565b600181811c908216806200031957607f821691505b6020821081036200033a57634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c9150808316806200035d57607f831692505b602080841082036200037d57634e487b7160e01b86526022600452602486fd5b818015620003945760018114620003a657620003d5565b60ff19861689528489019650620003d5565b60008a81526020902060005b86811015620003cd5781548b820152908501908301620003b2565b505084890196505b509498975050505050505050565b60805160a05160c051610b456200041360003960006104530152600061041e015260006101440152610b456000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806340c10f191161008c57806395d89b411161006657806395d89b41146101d5578063a9059cbb146101dd578063d505accf146101f0578063dd62ed3e1461020357600080fd5b806340c10f191461018057806370a08231146101955780637ecebe00146101b557600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd1461012c578063313ce5671461013f5780633644e51514610178575b600080fd5b6100dc61022e565b6040516100e99190610856565b60405180910390f35b6101056101003660046108c7565b6102bc565b60405190151581526020016100e9565b61011e60025481565b6040519081526020016100e9565b61010561013a3660046108f1565b610328565b6101667f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016100e9565b61011e61041a565b61019361018e3660046108c7565b610475565b005b61011e6101a336600461092d565b60036020526000908152604090205481565b61011e6101c336600461092d565b60056020526000908152604090205481565b6100dc610483565b6101056101eb3660046108c7565b610490565b6101936101fe36600461094f565b610508565b61011e6102113660046109c2565b600460209081526000928352604080842090915290825290205481565b6000805461023b906109f5565b80601f0160208091040260200160405190810160405280929190818152602001828054610267906109f5565b80156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103179086815260200190565b60405180910390a350600192915050565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146103845761035f8382610a45565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906103ac908490610a45565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104079087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146104505761044b610751565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b61047f82826107eb565b5050565b6001805461023b906109f5565b336000908152600360205260408120805483919083906104b1908490610a45565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906103179086815260200190565b4284101561055d5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b6000600161056961041a565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610675573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906106ab5750876001600160a01b0316816001600160a01b0316145b6106e85760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610554565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516107839190610a5c565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b80600260008282546107fd9190610af7565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b8181101561088357858101830151858201604001528201610867565b81811115610895576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146108c257600080fd5b919050565b600080604083850312156108da57600080fd5b6108e3836108ab565b946020939093013593505050565b60008060006060848603121561090657600080fd5b61090f846108ab565b925061091d602085016108ab565b9150604084013590509250925092565b60006020828403121561093f57600080fd5b610948826108ab565b9392505050565b600080600080600080600060e0888a03121561096a57600080fd5b610973886108ab565b9650610981602089016108ab565b95506040880135945060608801359350608088013560ff811681146109a557600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156109d557600080fd5b6109de836108ab565b91506109ec602084016108ab565b90509250929050565b600181811c90821680610a0957607f821691505b602082108103610a2957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610a5757610a57610a2f565b500390565b600080835481600182811c915080831680610a7857607f831692505b60208084108203610a9757634e487b7160e01b86526022600452602486fd5b818015610aab5760018114610abc57610ae9565b60ff19861689528489019650610ae9565b60008a81526020902060005b86811015610ae15781548b820152908501908301610ac8565b505084890196505b509498975050505050505050565b60008219821115610b0a57610b0a610a2f565b50019056fea264697066735822122090357fa2dc11e4c54cfbd57561587aae84bf482b86fe0692443de6b9da7b91a364736f6c634300080d0033";

type ERC20MockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Mock__factory extends ContractFactory {
  constructor(...args: ERC20MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ERC20Mock> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC20Mock>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC20Mock {
    return super.attach(address) as ERC20Mock;
  }
  override connect(signer: Signer): ERC20Mock__factory {
    return super.connect(signer) as ERC20Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MockInterface {
    return new utils.Interface(_abi) as ERC20MockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Mock {
    return new Contract(address, _abi, signerOrProvider) as ERC20Mock;
  }
}
