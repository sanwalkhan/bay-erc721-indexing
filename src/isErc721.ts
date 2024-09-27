import * as ethers from 'ethers'
import * as erc721 from './abi/erc721'

export function isErc721(bytecode: string): boolean {
    for (let fname in erc721.functions) {
        let fsighash = erc721.functions[fname as keyof typeof erc721.functions].sighash.slice(2, 10)
        if (!bytecode.includes(fsighash)) {
            return false
        }
    }
    return true
}
