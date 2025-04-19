import type { CollectionConfig } from 'payload'

export const FoodAddOns: CollectionConfig = {
  slug: 'food-add-ons',
  admin: {
    useAsTitle: 'name',
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
      ],
    },
    {
      label: 'Relationship',
      type: 'collapsible',
      fields: [
        {
          name: 'category',
          type: 'relationship',
          relationTo: 'food-add-ons-categories',
          required: true,
        },
        {
          name: 'food',
          type: 'relationship',
          relationTo: 'foods',
          required: true,
        },
      ],
    },
  ],
}
