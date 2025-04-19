import type { CollectionConfig } from 'payload'
import { changingFoodPriceHook, changingAddOnsPriceHook } from './hooks/beforeChangeField'
import { calculateGrandTotalHook, calculateSubTotalHook } from './hooks/afterReadField'
import { recalculateButton } from './component/recalculateButton'

// Need validation for food adds on to only display product
// Validate the time and stuff
// If the foodPrice / addOns in beforeChange is not specified then using the current
// Create a recalculate for price

const IS_LOCKED_OPTIONS = [
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
]

const STATUS_OPTIONS = [
  {
    label: 'Processing',
    value: 'processing',
  },
  {
    label: 'Paid',
    value: 'paid',
  },
  {
    label: 'Delivered',
    value: 'delivered',
  },
  {
    label: 'Canceled',
    value: 'canceled',
  },
]

export const Carts: CollectionConfig = {
  slug: 'carts',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Cart Info',
          fields: [
            {
              name: 'isLocked',
              type: 'radio',
              options: IS_LOCKED_OPTIONS,
              defaultValue: 'no',
            },
            {
              name: 'status',
              type: 'radio',
              options: STATUS_OPTIONS,
              defaultValue: 'processing',
            },
            {
              name: 'cartItems',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'food',
                      type: 'relationship',
                      relationTo: 'foods',
                      required: true,
                    },
                    {
                      name: 'foodPrice',
                      type: 'number',
                      required: true,
                      admin: {
                        readOnly: true,
                      },
                      hooks: {
                        beforeChange: [changingFoodPriceHook],
                      },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'addOns',
                      type: 'relationship',
                      relationTo: 'food-add-ons',
                      hasMany: true,
                      admin: {
                        isSortable: true,
                        allowCreate: false,
                        allowEdit: false,
                      },
                      filterOptions: ({ siblingData }: { siblingData: any }) => {
                        return {
                          food: { equals: siblingData.food },
                        }
                      },
                    },
                    {
                      name: 'addOnsPrice',
                      type: 'number',
                      required: true,
                      admin: {
                        readOnly: true,
                      },
                      hooks: {
                        beforeChange: [changingAddOnsPriceHook],
                      },
                    },
                  ],
                },
                {
                  name: 'quantity',
                  type: 'number',
                  required: true,
                  defaultValue: 1,
                },
                {
                  name: 'subTotal',
                  type: 'number',
                  admin: {
                    readOnly: true,
                  },
                  hooks: {
                    afterRead: [calculateSubTotalHook],
                  },
                  virtual: true,
                },
              ],
              minRows: 1,
            },
            {
              name: 'discount',
              type: 'number',
              required: true,
              defaultValue: 0,
            },
            {
              name: 'grandTotal',
              type: 'number',
              admin: {
                readOnly: true,
              },
              hooks: {
                afterRead: [calculateGrandTotalHook],
              },
              virtual: true,
            },
            recalculateButton,
          ],
        },
        {
          label: 'Shipping Info',
          fields: [
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
        },
      ],
    },
  ],
}
