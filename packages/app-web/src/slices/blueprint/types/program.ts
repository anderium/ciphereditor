
import { Rect } from '../../../lib/utils/2d'
import { BlueprintNodeState, BlueprintNodeType } from './blueprint'

/**
 * Program node
 * A program contains operations, controls and variables connecting all of
 * them together.
 */
export interface ProgramNodeState extends BlueprintNodeState {
  /**
   * Node type
   */
  type: BlueprintNodeType.Program

  /**
   * Size and position of the node
   */
  frame: Rect

  /**
   * Program label
   */
  label: string

  /**
   * Position and size of the boundary that includes all layed out child nodes.
   * Set to `undefined` if no layed out child nodes are present.
   */
  contentBounds?: Rect
}
