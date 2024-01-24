// TYPES
import type BlockModelInterface from "../../../common/interface/model/block.model.interface";
import type ChainModelInterface from "../../../common/interface/model/chain.model.interface";
import type { BlockDataType } from "../../../common/type/block.data.type";

type BlockType = BlockModelInterface<BlockDataType>

export default interface ChainInterface {
  get name(): ChainModelInterface["name"]
  get blocks(): ChainModelInterface["blocks"]

  validate(): void

  getLatestBlock():BlockType
  addBlock(newBlock:BlockType): void
}
