
import { BlueprintNode, BlueprintNodeId, BlueprintNodeType } from './blueprint'
import { ImplicitTypedValue, TypedValue } from './value'

export type ControlValueChoice<ValueType> = {
  /**
   * Value
   */
  value: ValueType

  /**
   * Label
   */
  label: string
}

/**
 * Control entity
 * Controls are the building blocks of operation and program interfaces.
 */
export interface Control {
  /**
   * Control name unique within the enclosing operation or program
   */
  name: string

  /**
   * Control label
   */
  label?: string

  /**
   * Accepted control value types
   */
  types: string[]

  /**
   * Initial control value
   */
  initialValue: ImplicitTypedValue

  /**
   * Control value choices
   * Defaults to an empty array
   */
  choices?: ControlValueChoice<ImplicitTypedValue>[]

  /**
   * Wether the value is restricted to the given options (if not empty)
   * Defaults to true
   */
  enforceChoices?: boolean

  /**
   * Control enabled state
   * Defaults to true
   */
  enabled?: boolean

  /**
   * Wether a new value can be set from outside the enclosing operation or program
   * Defaults to true
   */
  writable?: boolean
}

/**
 * Structured changes targeted to a control node
 */
export interface ControlChange {
  /**
   * New label
   */
  label?: string

  /**
   * New value
   */
  value?: ImplicitTypedValue

  /**
   * New control value choices
   */
  choices?: ControlValueChoice<ImplicitTypedValue>[]

  /**
   * New enabled state
   */
  enabled?: boolean
}

/**
 * Structured changes targeted to a control node identified by name
 */
export interface NamedControlChange extends ControlChange {
  /**
   * Target control name
   */
  name: string
}

/**
 * Control change source
 */
export enum ControlChangeSource {
  Parent,
  UserInput,
  Variable,
}

/**
 * Control view state
 */
export enum ControlViewState {
  Collapsed,
  Expanded,
  Hidden,
}

/**
 * Control node
 * Controls are the building blocks of operation and program interfaces.
 */
export interface ControlNode extends BlueprintNode {
  /**
   * Node type
   */
  type: BlueprintNodeType.Control

  /**
   * Control name unique within the enclosing operation or program
   */
  name: string

  /**
   * Control label
   */
  label: string

  /**
   * Accepted control value types
   */
  types: string[]

  /**
   * Initial control value
   */
  initialValue?: ImplicitTypedValue

  /**
   * Current value
   */
  value: TypedValue

  /**
   * Index of the currently selected choice
   */
  selectedChoiceIndex?: number

  /**
   * Control value choices
   */
  choices: ControlValueChoice<TypedValue>[]

  /**
   * Wether the value is restricted to control choices (if not empty)
   */
  enforceChoices: boolean

  /**
   * Control view state
   */
  viewState: ControlViewState

  /**
   * Control enabled state
   */
  enabled: boolean

  /**
   * Wether a new value can be set from outside the enclosing operation or program
   */
  writable: boolean

  /**
   * Name of program/operation extern variable node attached to this control
   */
  attachedVariableId?: BlueprintNodeId

  /**
   * Name of program intern variable node attached to this program control
   */
  attachedInternVariableId?: BlueprintNodeId
}