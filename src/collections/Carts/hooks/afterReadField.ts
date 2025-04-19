import { Cart } from '@/payload-types'
import type { FieldHook } from 'payload'

type SiblingDataType = NonNullable<Cart['cartItems']>[number]

export const calculateSubTotalHook: FieldHook<Cart, number, SiblingDataType> = ({
  siblingData,
}) => {
  if (siblingData.foodPrice && siblingData.quantity) {
    return (siblingData.foodPrice + siblingData.addOnsPrice!) * siblingData.quantity
  }
  return 0
}

export const calculateGrandTotalHook: FieldHook<Cart, number, Cart> = ({ siblingData }) => {
  let totalBeforeDiscount = 0
  for (let i = 0; i < siblingData.cartItems!.length; i++) {
    if (siblingData.cartItems![i].foodPrice && siblingData.cartItems![i].quantity) {
      totalBeforeDiscount +=
        (siblingData.cartItems![i].foodPrice + siblingData.cartItems![i].addOnsPrice) *
        siblingData.cartItems![i].quantity
    }
  }
  return totalBeforeDiscount - siblingData.discount!
}
