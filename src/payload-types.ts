/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    foods: Food;
    'food-categories': FoodCategory;
    'food-add-ons': FoodAddOn;
    'food-add-ons-categories': FoodAddOnsCategory;
    carts: Cart;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {
    foods: {
      relatedFoodAddOns: 'food-add-ons';
    };
    'food-categories': {
      relatedFoods: 'foods';
    };
  };
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    foods: FoodsSelect<false> | FoodsSelect<true>;
    'food-categories': FoodCategoriesSelect<false> | FoodCategoriesSelect<true>;
    'food-add-ons': FoodAddOnsSelect<false> | FoodAddOnsSelect<true>;
    'food-add-ons-categories': FoodAddOnsCategoriesSelect<false> | FoodAddOnsCategoriesSelect<true>;
    carts: CartsSelect<false> | CartsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  globalsSelect: {};
  locale: 'en' | 'vi';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "foods".
 */
export interface Food {
  id: string;
  name: string;
  price: number;
  images?: (string | Media)[] | null;
  shortDescription?: string | null;
  nutritionalValue?:
    | {
        label: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  relatedFoodAddOns?: {
    docs?: (string | FoodAddOn)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  category?: (string | null) | FoodCategory;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "food-add-ons".
 */
export interface FoodAddOn {
  id: string;
  name: string;
  price: number;
  category: string | FoodAddOnsCategory;
  food: string | Food;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "food-add-ons-categories".
 */
export interface FoodAddOnsCategory {
  id: string;
  name: string;
  choiceLimit: number;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "food-categories".
 */
export interface FoodCategory {
  id: string;
  name: string;
  relatedFoods?: {
    docs?: (string | Food)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  parent?: (string | null) | FoodCategory;
  breadcrumbs?:
    | {
        doc?: (string | null) | FoodCategory;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "carts".
 */
export interface Cart {
  id: string;
  isLocked?: ('yes' | 'no') | null;
  status?: ('processing' | 'paid' | 'delivered' | 'canceled') | null;
  cartItems?:
    | {
        food: string | Food;
        foodPrice: number;
        addOns?: (string | FoodAddOn)[] | null;
        addOnsPrice: number;
        quantity: number;
        subTotal?: number | null;
        id?: string | null;
      }[]
    | null;
  discount: number;
  grandTotal?: number | null;
  shippingInfo: {
    receiverName: string;
    address: string;
    shippingTime?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'foods';
        value: string | Food;
      } | null)
    | ({
        relationTo: 'food-categories';
        value: string | FoodCategory;
      } | null)
    | ({
        relationTo: 'food-add-ons';
        value: string | FoodAddOn;
      } | null)
    | ({
        relationTo: 'food-add-ons-categories';
        value: string | FoodAddOnsCategory;
      } | null)
    | ({
        relationTo: 'carts';
        value: string | Cart;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "foods_select".
 */
export interface FoodsSelect<T extends boolean = true> {
  name?: T;
  price?: T;
  images?: T;
  shortDescription?: T;
  nutritionalValue?:
    | T
    | {
        label?: T;
        value?: T;
        id?: T;
      };
  relatedFoodAddOns?: T;
  category?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "food-categories_select".
 */
export interface FoodCategoriesSelect<T extends boolean = true> {
  name?: T;
  relatedFoods?: T;
  parent?: T;
  breadcrumbs?:
    | T
    | {
        doc?: T;
        url?: T;
        label?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "food-add-ons_select".
 */
export interface FoodAddOnsSelect<T extends boolean = true> {
  name?: T;
  price?: T;
  category?: T;
  food?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "food-add-ons-categories_select".
 */
export interface FoodAddOnsCategoriesSelect<T extends boolean = true> {
  name?: T;
  choiceLimit?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "carts_select".
 */
export interface CartsSelect<T extends boolean = true> {
  isLocked?: T;
  status?: T;
  cartItems?:
    | T
    | {
        food?: T;
        foodPrice?: T;
        addOns?: T;
        addOnsPrice?: T;
        quantity?: T;
        subTotal?: T;
        id?: T;
      };
  discount?: T;
  grandTotal?: T;
  shippingInfo?:
    | T
    | {
        receiverName?: T;
        address?: T;
        shippingTime?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}