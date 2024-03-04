import { registerEnumType } from '@nestjs/graphql';

export enum NeuralEngine {
  SixTeenCores,
  ThirtyCores,
}
registerEnumType(NeuralEngine, { name: 'NeuralEngine' });
