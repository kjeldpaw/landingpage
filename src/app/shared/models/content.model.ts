import {Link} from "./link.model";

export class Content {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  links: Array<Link>;

  constructor(title: string, subtitle: string, content: string, image: string, links: Array<Link>) {
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.image = image;
    this.links = links;
  }
}
