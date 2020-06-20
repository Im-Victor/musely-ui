/*
 * @Author: Victor wang
 * @Date: 2020-06-20 02:25:44
 * @LastEditors: Victor.wang
 * @LastEditTime: 2020-06-20 02:26:37
 * @Description:
 */
import { MuselyUIComponent } from './common'
import { ButtonType } from './button'

export type DropdownMenuAlignment = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
export type DropdownMenuTrigger = 'hover' | 'click'

/** Toggleable menu for displaying lists of links and actions */
export declare class MuDropdown extends MuselyUIComponent {
  /** Menu button type. only works when split-button is true */
  type: ButtonType

  /** Whether a button group is displayed */
  splitButton: boolean

  /** Placement of the menu */
  placement: DropdownMenuAlignment

  /** How to trigger */
  trigger: DropdownMenuTrigger

  /** Whether to hide menu after clicking menu-item */
  hideOnClick: boolean

  /** Delay time before show a dropdown */
  showTimeout: number

  /** Delay time before hide a dropdown */
  hideTimeout: number

  /** Dropdown tabindex */
  tabindex: number
}
