import type { CollectionBeforeDeleteHook } from 'payload'

export const deleteAddOnsHook: CollectionBeforeDeleteHook = async ({ req: { payload }, id }) => {
  await payload.delete({
    collection: 'food-add-ons',
    where: {
      food: { equals: id },
    },
  })
}

export const deleteImagesHook: CollectionBeforeDeleteHook = async ({ req: { payload }, id }) => {
  const food = await payload.findByID({
    collection: 'foods',
    id: id,
    depth: 0,
  })

  await payload.delete({
    collection: 'media',
    where: {
      id: { in: food.images },
    },
  })
}
