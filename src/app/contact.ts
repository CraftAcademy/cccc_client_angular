import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'contacts'
})


export class Contact extends JsonApiModel {

  @Attribute()
  name: string;

  @Attribute()
  email: string;

  @Attribute()
  company: string;

  @Attribute()
  role: string;

  @Attribute()
  twitter: string;

  @Attribute()
  description: string;

  @Attribute()
  location: string;

  @Attribute()
  image: string;
}
