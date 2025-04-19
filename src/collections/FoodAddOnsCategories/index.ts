import type { CollectionConfig } from 'payload'

export const FoodAddOnsCategories: CollectionConfig = {
  slug: 'food-add-ons-categories',
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
        {
          name: 'choiceLimit',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}
