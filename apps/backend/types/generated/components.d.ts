import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedAttributeValue extends Schema.Component {
  collectionName: 'components_shared_attribute_values';
  info: {
    displayName: 'Attribute Value';
  };
  attributes: {
    product_attribute: Attribute.Relation<
      'shared.attribute-value',
      'oneToOne',
      'api::product-attribute.product-attribute'
    >;
    value: Attribute.String & Attribute.Required;
  };
}

export interface SharedInvoiceItem extends Schema.Component {
  collectionName: 'components_shared_invoice_items';
  info: {
    displayName: 'Invoice Item';
    description: '';
  };
  attributes: {
    articleCode: Attribute.String;
    description: Attribute.Text;
    dispatchDate: Attribute.Date;
    quantity: Attribute.Decimal & Attribute.Required;
    unit: Attribute.String;
    weight: Attribute.Decimal & Attribute.Required;
    netPrice: Attribute.Decimal & Attribute.Required;
    total: Attribute.Decimal;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.attribute-value': SharedAttributeValue;
      'shared.invoice-item': SharedInvoiceItem;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
