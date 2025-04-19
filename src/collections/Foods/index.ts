import type { CollectionConfig } from 'payload'
import { deleteImagesHook, deleteAddOnsHook } from './hooks/beforeDelete'

// Need an ondelete cascade on foodAddOns
// Delete image
export const Foods: CollectionConfig = {
  slug: 'foods',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    beforeDelete: [deleteImagesHook, deleteAddOnsHook],
  },
  fields: [
    {
      label: 'General Info',
      type: 'collapsible',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'price',
              type: 'number',
              required: true,
            },
          ],
        },
        {
          name: 'images',
          type: 'upload',
          relationTo: 'media',
          hasMany: true,
        },
        {
          name: 'shortDescription',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'nutritionalValue',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
      ],
    },
    {
      label: 'Join',
      type: 'collapsible',
      fields: [
        {
          name: 'relatedFoodAddOns',
          type: 'join',
          collection: 'food-add-ons',
          on: 'food',
          admin: {
            allowCreate: true,
          },
        },
      ],
    },
    {
      label: 'Relationship',
      type: 'collapsible',
      fields: [
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'food-categories',
        },
      ],
    },
  ],
}
