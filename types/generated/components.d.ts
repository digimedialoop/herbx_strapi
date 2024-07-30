import type { Schema, Attribute } from '@strapi/strapi';

export interface BasicsHeaderImages extends Schema.Component {
  collectionName: 'components_basics_header_images';
  info: {
    displayName: 'headerImages';
    icon: 'chartPie';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'basics.header-images': BasicsHeaderImages;
    }
  }
}
