// LIBS
import * as yup from "yup";

// ABSTRACT
import Validator from "../../../common/abstract/validator.abstract";

// TYPES
import type ChainModelInterface from "../../../common/interface/model/chain.model.interface";

type EntityType = ChainModelInterface;

export default class ChainCreateValidator extends Validator<EntityType> {
  constructor(entity: EntityType) {
    super({
      context: '[Domain][Block] validation',
      entity,
      schema: {
        id: yup.string().required(),
        name: yup.string().required(),
        blocks: yup.array().of(yup.object().required())
      }
    });
  }
}