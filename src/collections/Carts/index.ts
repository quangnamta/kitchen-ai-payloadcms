import type { CollectionConfig } from 'payload'

// Need validation for food adds on to only display product
// Validate the time and stuff

export const Carts: CollectionConfig = {
  slug: 'carts',
  fields: [
    {
      name: 'cartItems',
      type: 'array',
      fields: [
        {
          name: 'food',
          type: 'relationship',
          relationTo: 'foods',
          required: true,
        },
        {
          name: 'addOns',
          type: 'relationship',
          relationTo: 'food-add-ons',
          hasMany: true,
        },
        {
          name: 'quantity',
          type: 'number',
          required: true,
          defaultValue: 1,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
      ],
      minRows: 1,
    },

    {
      name: 'shippingInfo',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'receiverName',
              type: 'text',
              required: true,
            },
            {
              name: 'address',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'shippingTime',
          type: 'date',
          admin: {
            date: {
              pickerAppearance: 'dayAndTime',
            },
          },
        },
      ],
    },
  ],
}
