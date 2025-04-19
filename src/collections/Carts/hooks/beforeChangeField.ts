import { Cart } from '@/payload-types'
import type { FieldHook } from 'payload'

type SiblingDataType = NonNullable<Cart['cartItems']>[number]

export const changingFoodPriceHook: FieldHook<Cart, number, SiblingDataType> = async ({
  value,
  siblingData,
  data,
  req: { payload },
}) => {
  if (value && data?.isLocked == 'yes') {
    return value
  }
  const foodData = await payload.findByID({
    collection: 'foods',
    id: siblingData.food as string,
  })
  return foodData.price
}

export const changingAddOnsPriceHook: FieldHook<Cart, number, SiblingDataType> = async ({
  value,
  siblingData,
  data,
  req: { payload },
}) => {
  if (value && data?.isLocked == 'yes') {
    return value
  }
  let totalPrice = 0
  const foodAddOnsData = await payload.find({
    collection: 'food-add-ons',
    where: {
      id: { in: siblingData.addOns },
    },
    limit: 9999,
    pagination: false,
  })
  for (let i = 0; i < foodAddOnsData.docs.length; i++) {
    totalPrice += foodAddOnsData.docs[i].price
  }
  return totalPrice
}
