// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { s3Storage } from '@payloadcms/storage-s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Foods } from './collections/Foods'
import { FoodAddOns } from './collections/FoodAddOns'
import { FoodCategories } from './collections/FoodCategories'
import { Carts } from './collections/Carts'
import { FoodAddOnsCategories } from './collections/FoodAddOnsCategories'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Foods, FoodCategories, FoodAddOns, FoodAddOnsCategories, Carts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Vietnamese', code: 'vi' },
    ],
    defaultLocale: 'vi',
    fallback: true,
  },
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        endpoint: process.env.S3_ENDPOINT,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.S3_REGION,
      },
    }),
    nestedDocsPlugin({
      collections: ['food-categories'],
      generateLabel: (_, doc) => doc.name as string,
    }),
    // storage-adapter-placeholder
  ],
})
