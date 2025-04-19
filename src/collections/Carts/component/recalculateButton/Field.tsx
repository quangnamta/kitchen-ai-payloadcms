'use client'
import { Button, SaveButton, useAllFormFields, useForm } from '@payloadcms/ui'
import type { UIFieldClientComponent } from 'payload'
import { getSiblingData } from 'payload/shared'

export const RecalculateButton: UIFieldClientComponent = () => {
  const { submit } = useForm()
  const [fields, dispatch] = useAllFormFields()
  function handleRecalculate() {
    const data = getSiblingData(fields, 'id')
    for (let i = 0; i < data.cartItems.length; i++) {
      dispatch({ type: 'UPDATE', path: `cartItems.${i}.foodPrice`, value: undefined })
      dispatch({ type: 'UPDATE', path: `cartItems.${i}.addOnsPrice`, value: undefined })
    }
    submit()
  }

  return <Button onClick={handleRecalculate}>Recalculate</Button>
}
