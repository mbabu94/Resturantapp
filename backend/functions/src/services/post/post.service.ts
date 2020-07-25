import Service from '../service';
import generatePaginatorService from '../generator/paginator.service'

export class Post extends Service {
  static __typename = 'post';
  static paginator = generatePaginatorService(Post);

  static presets = {
    default: {
      id: null,
      name: null,
      created_by: null
    }
  };

  static filterFieldsMap = {
  };

  static isFilterRequired = false;

  static searchableFields = [];

  static sortFields = ["id"];
};