import type { Field } from 'payload'

export const recalculateButton: Field = {
  name: 'recalculateButton',
  type: 'ui',
  admin: {
    components: {
      Field: '@/collections/Carts/component/recalculateButton/Field#RecalculateButton',
    },
  },
}
