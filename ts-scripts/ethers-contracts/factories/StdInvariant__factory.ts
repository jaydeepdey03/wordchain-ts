/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StdInvariant, StdInvariantInterface } from "../StdInvariant";

const _abi = [
  {
    inputs: [],
    name: "excludeArtifacts",
    outputs: [
      {
        internalType: "string[]",
        name: "excludedArtifacts_",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "excludeContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "excludedContracts_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "excludeSenders",
    outputs: [
      {
        internalType: "address[]",
        name: "excludedSenders_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetArtifactSelectors",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct StdInvariant.FuzzSelector[]",
        name: "targetedArtifactSelectors_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetArtifacts",
    outputs: [
      {
        internalType: "string[]",
        name: "targetedArtifacts_",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "targetedContracts_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetSelectors",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "selectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct StdInvariant.FuzzSelector[]",
        name: "targetedSelectors_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "targetSenders",
    outputs: [
      {
        internalType: "address[]",
        name: "targetedSenders_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506107ff806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806385226c811161005b57806385226c81146100d0578063916a17c6146100e5578063b5508aa9146100ed578063e20c9f71146100f557600080fd5b80631ed7831c1461008d5780633e5e3c23146100ab5780633f7286f4146100b357806366d9a9a0146100bb575b600080fd5b6100956100fd565b6040516100a291906105f4565b60405180910390f35b61009561015f565b6100956101bf565b6100c361021f565b6040516100a29190610641565b6100d861030e565b6040516100a291906106f4565b6100c36103de565b6100d86104c4565b610095610594565b6060600180548060200260200160405190810160405280929190818152602001828054801561015557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610137575b5050505050905090565b60606003805480602002602001604051908101604052809291908181526020018280548015610155576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610137575050505050905090565b60606002805480602002602001604051908101604052809291908181526020018280548015610155576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610137575050505050905090565b60606006805480602002602001604051908101604052809291908181526020016000905b828210156103055760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156102ed57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116102af5790505b50505050508152505081526020019060010190610243565b50505050905090565b60606005805480602002602001604051908101604052809291908181526020016000905b828210156103055783829060005260206000200180546103519061078f565b80601f016020809104026020016040519081016040528092919081815260200182805461037d9061078f565b80156103ca5780601f1061039f576101008083540402835291602001916103ca565b820191906000526020600020905b8154815290600101906020018083116103ad57829003601f168201915b505050505081526020019060010190610332565b60606007805480602002602001604051908101604052809291908181526020016000905b828210156103055760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156104ac57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841161046e5790505b50505050508152505081526020019060010190610402565b60606004805480602002602001604051908101604052809291908181526020016000905b828210156103055783829060005260206000200180546105079061078f565b80601f01602080910402602001604051908101604052809291908181526020018280546105339061078f565b80156105805780601f1061055557610100808354040283529160200191610580565b820191906000526020600020905b81548152906001019060200180831161056357829003601f168201915b5050505050815260200190600101906104e8565b60606000805480602002602001604051908101604052809291908181526020018280548015610155576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610137575050505050905090565b6020808252825182820181905260009190848201906040850190845b818110156106355783516001600160a01b031683529284019291840191600101610610565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156106e557898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b808310156106d05783516001600160e01b0319168252928b019260019290920191908b01906106a6565b50978a01979550505091870191600101610669565b50919998505050505050505050565b6000602080830181845280855180835260408601915060408160051b87010192508387016000805b8381101561078157888603603f1901855282518051808852835b81811015610751578281018a01518982018b01528901610736565b8181111561076157848a838b0101525b50601f01601f19169690960187019550938601939186019160010161071c565b509398975050505050505050565b600181811c908216806107a357607f821691505b6020821081036107c357634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212204de7af538bfc9b1db920f6c37519abf55e1bb90719d079c09a8a8923914ff57e64736f6c634300080d0033";

type StdInvariantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdInvariantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdInvariant__factory extends ContractFactory {
  constructor(...args: StdInvariantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<StdInvariant> {
    return super.deploy(overrides || {}) as Promise<StdInvariant>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdInvariant {
    return super.attach(address) as StdInvariant;
  }
  override connect(signer: Signer): StdInvariant__factory {
    return super.connect(signer) as StdInvariant__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdInvariantInterface {
    return new utils.Interface(_abi) as StdInvariantInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdInvariant {
    return new Contract(address, _abi, signerOrProvider) as StdInvariant;
  }
}
