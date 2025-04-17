import type { CollectionConfig } from 'payload'

export const FoodCategories: CollectionConfig = {
  slug: 'food-categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      label: 'General Info',
      type: 'collapsible',
      fields: [
        {
          name: 'name',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
    },
    {
      label: 'Join',
      type: 'collapsible',
      fields: [
        {
          name: 'relatedFoods',
          type: 'join',
          collection: 'foods',
          on: 'category',
        },
      ],
    },
  ],
}
